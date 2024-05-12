import baptismalinquiries from "../../model/Inquiries/baptismalInquiries.js";
import nodemailer from 'nodemailer'


const CreateBaptismalInquiries = (req, res) => {
    //for sending automated email
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODE_MAILER_EMAIL,
      pass: process.env.NODE_MAILER_PASSWORD
    }
  });
  
  const clientEmail = req.body.email;
  const Fname = req.body.fatherName;
  const Mname = req.body.motherName;

  var mailOptions = {
    from: 'lourdeschurchwebsite@gmail.com',
    to: clientEmail,
    subject: 'Our Lady of lourdes Parish Church Inquiries',
    html: `<p>Dear Mr. ${Fname}/Mrs.${Mname}</p>
    <p>This is to confirm that we have received your inquiries. Our Lady of Lourdes Parish Church is reviewing the details, and we will reach out with a response shortly. Thank you for considering.</p>
    <p>Sincererly,</p>
    <p>Our lady of Lourdes Parish Church Staffs</p>
    <p>Note: Please do not reply to this message. Replies to this message are undeliverable.</p>`
  };
    baptismalinquiries.create(req.body)
    .then((baptismal_Inquiries) => {
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
        res.json({
            message:"Succesfully Inquire",
            baptismal_Inquiries,
        });
    })
    .catch((err) => {
        res.status(404).json({
          message: "Failed to Inquire",
          error: err.message,
        });
      });
}

const deletebaptismalInquiries = (req, res) => {
  
    baptismalinquiries.findByIdAndDelete(req.params.id)
    .then((baptismal_Inquiries) => {
        if (!baptismal_Inquiries) {
          return res.status(404).json({
              message: "Inquiry not found",
          });
        }
        res.json({
          message: "Successfully delete baptismal inquiry",
          baptismal_Inquiries
        });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Failed to delete",
        error: err.message,
      });
    });
};


const listbaptismalInquiries = (req, res) => {
    baptismalinquiries.find()
    .then((baptismal_Inquiries) => {
        if (baptismalinquiries.length === 0) {
            return res.json({ message: "No Inquiries" });
        }
        return res.status(200).json(baptismal_Inquiries);
    })
    .catch((err) => {
        res.status(500).json({ message: "Failed to retrieve records", error: err.message });
    });
}

const getSingleInquire = (req, res) => {
    const id = req.params.id;
    baptismalinquiries.findById({_id:id})
    .then(baptismal_Inquiries => res.json(baptismal_Inquiries))
    .catch(err => res.json(err))
}

export {
    CreateBaptismalInquiries,
    deletebaptismalInquiries,
    listbaptismalInquiries,
    getSingleInquire
}