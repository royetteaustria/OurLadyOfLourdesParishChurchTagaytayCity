import weddinginquiries from "../../model/Inquiries/weddingInquiries.js";
import nodemailer from 'nodemailer'
import CalendarForReservation from "../../model/manageReservation/CalendarReservation.js";
import CalendarBaptismal from "../../model/BaptismalCalendar/Calendar.js";

const UpdateBaptismal = async(req, res) => {
  try {
    const start = req.params.start;
    const newStatus = 'Available';
    const newSlot = 5;

  const document = await CalendarBaptismal.findOneAndUpdate(
    { start },
    { $set: { description: newStatus, slot: newSlot } },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!document) {
    return res.status(404).json({ message: 'Document not found' });
  }
  res.json(document);
  } catch(err) {
    console.log(err)
    res.status(500).json({ message: 'Internal server error' });
  }
}

const CreateWeddingInquiries = async (req, res) => {
  //For generating an automated email
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODE_MAILER_EMAIL,
      pass: process.env.NODE_MAILER_PASSWORD,
    }
  });

  const clientEmail = req.body.email;
  const brideGmail = req.body.Brideemail;
  const Gname = req.body.groomName;
  const Bname = req.body.brideName;
  const wedDate = req.body.start
  var mailOptions = {
    from: 'lourdeschurchwebsite@gmail.com',
    to: [clientEmail, brideGmail],
    subject: 'Our Lady of lourdes Parish Church Wedding Inquiries',
    html: `<p>Dear Mr. ${Gname}/Ms. ${Bname}</p> <p>This is to confirm that we have received your inquiries. Our Lady of Lourdes Parish Church is reviewing the details, and we will reach out with a response shortly. Thank you for considering.</p> <p>Sincererly,</p> <p>Our lady of Lourdes Parish Church Staffs</p> <p>Note: Please do not reply to this message. Replies to this message are undeliverable.</p>`
  };

  try {
    const existingBaptismal = await CalendarBaptismal.findOne({ start: wedDate });
    if (existingBaptismal) {
      const updatedDocument = await CalendarBaptismal.findOneAndUpdate(
        { start: wedDate },
        { $set: { description: 'Not available', slot: 0 } },
        { new: true, runValidators: true }
      );
  
      if (!updatedDocument) {
        return res.status(404).json({ message: 'Document not found' });
      }
  
      res.json(updatedDocument);
    }
  
    // Lumikha ng bagong inquiry anuman ang sitwasyon
    const newWeddingInquiry = await weddinginquiries.create(req.body);
  
    // Send email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        res.json({ message: info.response, newWeddingInquiry });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}

//Function for rejecting an single inquries
const deleteweddingInquiries = async (req, res) => {
  try {
    const deletedInquiry = await weddinginquiries.findOneAndDelete({ _id: req.params.id });
    if (!deletedInquiry) {
      return res.status(404).json({ message: 'Wedding inquiry not found' });
    }

    // Find the corresponding baptismal event
    const baptismalEvent = await CalendarBaptismal.findOne({ start: deletedInquiry.start });

    // If there is no corresponding baptismal event, return an error
    if (!baptismalEvent) {
      return res.status(404).json({ message: 'Baptismal event not found' });
    }

    // Update the baptismal event to mark it as available with 5 slots
    baptismalEvent.description = 'Available';
    baptismalEvent.slot = 5;
    await baptismalEvent.save();

    // Now, execute the singleSubmitForm functionality
    const start = deletedInquiry.start;
    const newStatus = 'Available';

    const document = await CalendarForReservation.findOneAndUpdate(
      { start },
      { $set: { description: newStatus } },
      { new: true, runValidators: true }
    );

    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }

    res.json({
      message: "Successfully deleted wedding inquiry and updated baptismal slot availability, and submitted form",
      deletedInquiry,
      baptismalEvent,
      document
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}

//Function for getting all the inquires
const listWeddingInquiries = (req, res) => {
    weddinginquiries.find()
    .then((weddingInquiries) => {
        if (weddingInquiries.length === 0) {
            return res.json({ message: "No inquiries found" });
        }
        return res.status(200).json(weddingInquiries);
    })
    .catch((err) => {
        res.status(500).json({ message: "Failed to retrieve records", error: err.message });
    });
}

//Function for getting single information if inquiries
const SingleInfo = (req, res) => {
    const id = req.params.id;
    weddinginquiries.findById({_id:id})
    .then(weddingInquiries => res.json(weddingInquiries))
    .catch(err => res.json(err))
}

const singleSubmitForm = async(req, res) => {
  try {
    const start = req.params.start;
    const newStatus = 'Pending';

  const document = await CalendarForReservation.findOneAndUpdate(
    { start },
    { $set: { description: newStatus } },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!document) {
    return res.status(404).json({ message: 'Document not found' });
  }
  res.json(document);
  } catch(err) {
    console.log(err)
    res.status(500).json({ message: 'Internal server error' });
  }
}

const UpdateWedding = async(req, res) => {
  try {
    const start = req.params.start;
    const newStatus = 'Available';

  const document = await CalendarForReservation.findOneAndUpdate(
    { start },
    { $set: { description: newStatus } },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!document) {
    return res.status(404).json({ message: 'Document not found' });
  }
  res.json(document);
  } catch(err) {
    console.log(err)
    res.status(500).json({ message: 'Internal server error' });
  }
}


export {
    CreateWeddingInquiries,
    deleteweddingInquiries,
    listWeddingInquiries,
    SingleInfo,
    singleSubmitForm,
    UpdateBaptismal,
    UpdateWedding
}