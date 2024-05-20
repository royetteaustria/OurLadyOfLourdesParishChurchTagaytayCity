import weddinginquiries from "../../model/Inquiries/weddingInquiries.js";
import nodemailer from 'nodemailer'
import CalendarForReservation from "../../model/manageReservation/CalendarReservation.js";
import CalendarBaptismal from "../../model/BaptismalCalendar/Calendar.js";

const CreateWeddingInquiries = async (req, res) => {
  //For generating an automated email
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODE_MAILER_EMAIL,
      pass: process.env.NODE_MAILER_PASSWORD,
    }
  });
  function formatDateTime(date) {
    if (typeof date === 'string') {
      date = new Date(date);
    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];

    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    const hours = date.getHours() % 12 || 12; // Get 12-hour format
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const amPm = date.getHours() >= 12 ? 'PM' : 'AM';

    return `${month} ${day} ${year} ${hours}:${minutes} ${amPm}`;
  }

  const clientEmail = req.body.email;
  const brideGmail = req.body.Brideemail;
  const Gname = req.body.groomName;
  const Bname = req.body.brideName;
  const wedDate = req.body.start
  
  var mailOptions = {
    from: 'lourdeschurchwebsite@gmail.com',
    to: [clientEmail, brideGmail],
    subject: 'Our Lady of lourdes Parish Church Wedding Inquiries',
    html: `<p>Dear Mr. ${Gname}/Ms. ${Bname}</p>
    <p>This is to confirm that we have received your inquiries and your choosen date of wedding is ${formatDateTime(wedDate)}. Our Lady of Lourdes Parish Church is reviewing the details, and we will reach out with a response shortly. Thank you for considering.</p>
    <p>Sincererly,</p>
    <p>Our lady of Lourdes Parish Church Staffs</p>
    <p>Note: Please do not reply to this message. Replies to this message are undeliverable.</p>`
  };
  //Function for creating an inquiries
  const BaptismalDate = CalendarBaptismal.find({start: start})
  const WeddingDate = CalendarForReservation.find({start: start})

  if(BaptismalDate === WeddingDate) {
    try {
      const start = req.params.start;
      const newStatus = 'Not available';
      const newSlot = 0;
  
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
  weddinginquiries.create(req.body)
    .then((weddingInquiries) => {
      //generating an email
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.json({
            message: info.response,
        })
        }
      });
      res.json({
        message: "Successfully Inquired",
        weddingInquiries,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Failed to Inquire",
        error: err.message,
      });
    });
}
//Function for rejecting an single inquries
const deleteweddingInquiries = (req, res) => {
    weddinginquiries.findOneAndDelete({ _id: req.params.id})
    .then((weddingInquiries) => {
        res.json({
            message: "Successfully delete wedding inquiries",
            weddingInquiries
        })
    })
    .catch((err) => {
        res.status(404).json({
          message: "failed to delete",
          error: err.message,
        });
      });
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

const BlockDate = async(req, res) => {
  try {
    const start = req.params.start;
    const newStatus = 'Not available';
    const newSlot = 0;

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

export {
    CreateWeddingInquiries,
    deleteweddingInquiries,
    listWeddingInquiries,
    SingleInfo,
    singleSubmitForm,
    BlockDate 
}