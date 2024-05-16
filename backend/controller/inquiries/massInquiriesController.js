import massInquire from "../../model/Inquiries/mass.js";
import nodemailer from 'nodemailer'

const CreateMassInquiries = (req, res) => {
  //for sending automated email
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODE_MAILER_EMAIL,
      pass: process.env.NODE_MAILER_PASSWORD,
    }
  });
  
  const clientEmail = req.body.email;

  var mailOptions = {
    from: 'lourdeschurchwebsite@gmail.com',
    to: clientEmail,
    subject: 'Our Lady of lourdes Parish Church Inquiries',
    html: '<h1>Mass Inquiries</h1><p>This is to confirm that we have received your inquiries. Our Lady of Lourdes Parish Church is reviewing the details, and we will reach out with a response shortly. Thank you for considering.</p>'
  };
  
    //process of creating inquiries
    massInquire.create(req.body)
    .then((mass_Inquiries) => {
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.json({
        message:"Succesfully Inquire",
        mass_Inquiries,
      })
    })
    .catch((err) => {
        res.status(404).json({
          message: "Failed to Inquire",
          error: err.message,
        });
      });
}

//function for rejecting inquiries
const deletemassInquiries = (req, res) => {
    massInquire.findOneAndDelete({ _id: req.params.id }) // Provide the query object
      .then((mass_Inquiries) => {
        if (!mass_Inquiries) {
          return res.status(404).json({
            message: "Inquiry not found",
          });
        }
  
        res.json({
          message: "Successfully delete wedding inquiries",
          mass_Inquiries,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Failed to delete",
          error: err.message,
        });
      });
  };
  
//function for getting all inquiries
const listmassInquiries = (req, res) => {
    massInquire.find()
    .then((mass_Inquiries) => {
        if (massInquire.length === 0) {
            return res.json({ message: "No records found" });
        }
        return res.status(200).json(mass_Inquiries);
    })
    .catch((err) => {
        res.status(500).json({ message: "Failed to retrieve records", error: err.message });
    });
}

//function for get a single inquiries
const getSingleInquire = (req, res) => {
    const id = req.params.id;
    massInquire.findById({_id:id})
    .then(mass_Inquiries => res.json(mass_Inquiries))
    .catch(err => res.json(err))
}

export {
    CreateMassInquiries,
    deletemassInquiries,
    listmassInquiries,
    getSingleInquire
}