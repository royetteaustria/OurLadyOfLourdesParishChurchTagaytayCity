import baptismalinquiries from "../../model/Inquiries/baptismalInquiries.js";
import nodemailer from "nodemailer";
import CalendarForReservation from "../../model/manageReservation/CalendarReservation.js";
import CalendarBaptismal from "../../model/BaptismalCalendar/Calendar.js";

const CreateBaptismalInquiries = async (req, res) => {
  // Set up nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODE_MAILER_EMAIL,
      pass: process.env.NODE_MAILER_PASSWORD,
    },
  });

  const {
    email: clientEmail,
    fatherName: Fname,
    motherName: Mname,
    start: bdate,
  } = req.body;
  const specialType = req.body.baptismalType;
  const mailOptions = {
    from: "lourdeschurchwebsite@gmail.com",
    to: clientEmail,
    subject: "Our Lady of Lourdes Parish Church Inquiries",
    html: `<p>Dear Mr. ${Fname}/Mrs.${Mname}</p> <p>This is to confirm that we have received your inquiries. Our Lady of Lourdes Parish Church is reviewing the details, and we will reach out with a response shortly. Thank you for considering.</p> <p>Sincerely,</p> <p>Our lady of Lourdes Parish Church Staff</p> <p>Note: Please do not reply to this message. Replies to this message are undeliverable.</p>`,
  };

  try {
    // Check and update CalendarForReservation
    const existingWedding = await CalendarForReservation.findOne({ start: bdate });
    if (existingWedding) {
      await CalendarForReservation.findOneAndUpdate(
        { start: bdate },
        { $set: { description: "Not available" } },
        { new: true, runValidators: true }
      );
    }

    // Handle CalendarBaptismal
    const existingBaptismalCalendar = await CalendarBaptismal.findOne({ start: bdate });
    if (existingBaptismalCalendar) {
      if (specialType === "Special") {
        // Check if slot is 4 or lower, if so, don't proceed with reservation
        if (existingBaptismalCalendar.slot <= 4) {
          return res.status(400).json({ message: "Cannot reserve a Special baptismal when slot is 4 or lower." });
        }
        await CalendarBaptismal.findOneAndUpdate(
          { start: bdate },
          { $set: { description: "Pending", slot: 0 } },
          { new: true, runValidators: true }
        );
      } else {
        const updatedBaptismalCalendar = await CalendarBaptismal.findOneAndUpdate(
          { start: bdate },
          { $inc: { slot: -1 } },
          { new: true, runValidators: true }
        );
        // Check if slots have reached 0 and update status to "Pending"
        if (updatedBaptismalCalendar.slot === 0) {
          await CalendarBaptismal.findOneAndUpdate(
            { start: bdate },
            { $set: { description: "Pending" } },
            { new: true, runValidators: true }
          );
        }
      }
    } else {
      // Create new entry in CalendarBaptismal
      const newBaptismalCalendarEntry = new CalendarBaptismal({
        start: bdate,
        end: bdate,
        description: specialType === "Special" ? "Pending" : "Available",
        slot: specialType === "Special" ? 0 : 8,
      });
      await newBaptismalCalendarEntry.save();
    }

    // Create new baptismal inquiry
    const newBaptismalInquiry = await baptismalinquiries.create(req.body);

    // Send confirmation email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        res.json({ message: info.response, newBaptismalInquiry });
      }
    });
  } catch (error) {
    console.error(error);
    // Log the actual error for better debugging
    res.status(500).json({ message: "Internal server error" });
  }
};

const deletebaptismalInquiries = (req, res) => {
  baptismalinquiries
    .findByIdAndDelete(req.params.id)
    .then((baptismal_Inquiries) => {
      if (!baptismal_Inquiries) {
        return res.status(404).json({
          message: "Inquiry not found",
        });
      }
      res.json({
        message: "Successfully delete baptismal inquiry",
        baptismal_Inquiries,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Failed to delete",
        error: err.message,
      });
    });
};

const rejectBaptismalInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const inquiryToReject = await baptismalinquiries.findById(id);

    if (!inquiryToReject) {
      return res.status(404).json({ message: "Inquiry not found" });
    }

    const { start: bdate, baptismalType } = inquiryToReject;

    // Update CalendarForReservation
    const updatedCalendarForReservation = await CalendarForReservation.findOneAndUpdate(
      { start: bdate },
      { $set: { description: "Available" } },
      { new: true, runValidators: true }
    );

    if (!updatedCalendarForReservation) {
      console.log(`CalendarForReservation document not found for date: ${bdate}`);
    } else {
      console.log(`CalendarForReservation updated for date: ${bdate}`);
    }

    // Update CalendarBaptismal
    const existingBaptismalCalendar = await CalendarBaptismal.findOne({ start: bdate });

    if (existingBaptismalCalendar) {
      let updatedBaptismalCalendar;
      if (baptismalType === "Special") {
        updatedBaptismalCalendar = await CalendarBaptismal.findOneAndUpdate(
          { start: bdate },
          { $set: { description: "Available", slot: 5 } },
          { new: true, runValidators: true }
        );
      } else {
        updatedBaptismalCalendar = await CalendarBaptismal.findOneAndUpdate(
          { start: bdate },
          { $inc: { slot: 1 }, $set: { description: "Available" } },
          { new: true, runValidators: true }
        );

        if (updatedBaptismalCalendar && updatedBaptismalCalendar.slot !== 5) {
          const updatedReservation = await CalendarForReservation.findOneAndUpdate(
            { start: bdate },
            { $set: { description: "Not available" } },
            { new: true, runValidators: true }
          );

          if (!updatedReservation) {
            console.log(`Failed to update CalendarForReservation to Not available for date: ${bdate}`);
          } else {
            console.log(`CalendarForReservation updated to Not available for date: ${bdate}`);
          }
        }
      }

      if (!updatedBaptismalCalendar) {
        console.log(`CalendarBaptismal document not found for date: ${bdate}`);
      } else {
        console.log(`CalendarBaptismal updated for date: ${bdate}`);
      }
    } else {
      console.log(`CalendarBaptismal document not found for date: ${bdate}`);
    }

    // Delete the baptismal inquiry regardless of calendar updates
    const deletedInquiry = await baptismalinquiries.findByIdAndDelete(id);

    if (!deletedInquiry) {
      return res.status(404).json({ message: "Inquiry not found" });
    }

    res.json({
      message: "Baptismal inquiry rejected successfully",
      deletedInquiry,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


const listbaptismalInquiries = (req, res) => {
  baptismalinquiries
    .find()
    .then((baptismal_Inquiries) => {
      if (baptismalinquiries.length === 0) {
        return res.json({ message: "No Inquiries" });
      }
      return res.status(200).json(baptismal_Inquiries);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Failed to retrieve records", error: err.message });
    });
};

const getSingleInquire = (req, res) => {
  const id = req.params.id;
  baptismalinquiries
    .findById({ _id: id })
    .then((baptismal_Inquiries) => res.json(baptismal_Inquiries))
    .catch((err) => res.json(err));
};

export {
  CreateBaptismalInquiries,
  deletebaptismalInquiries,
  listbaptismalInquiries,
  getSingleInquire,
  rejectBaptismalInquiry,
};
