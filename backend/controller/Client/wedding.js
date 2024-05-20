import weddingClient from "../../model/client/wedding.js";
import CalendarForReservation from "../../model/manageReservation/CalendarReservation.js";

const acceptWedidngClient = (req, res) => {
  weddingClient
    .create(req.body)
    .then((wedding_client) => {
      res.json({
        message: "Succesfully Accept",
        wedding_client,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Failed to Accept",
        error: err.message,
      });
    });
};

const listWeddingClient = (req, res) => {
  weddingClient
    .find()
    .then((wedding_client) => {
      if (wedding_client.length === 0) {
        return res.json({ message: "No Inquiries" });
      }
      return res.status(200).json(wedding_client);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Failed to retrieve records", error: err.message });
    });
};

const updateWeddingClient = async (req, res) => {
  const id = req.params.id;
  const wedDate = req.params.start;

  try {
    const existingDate = await CalendarForReservation.findOne({ start: wedDate });

    if (existingDate) {
      let description = 'Available';
      if (req.body.weddingStatus === 'Cancel') {
        description = 'Available';
      } else {
        description = existingDate.description;
      }

      const updatedDocument = await CalendarForReservation.findOneAndUpdate(
        { start: wedDate },
        { $set: { description } },
        { new: true, runValidators: true }
      );

      if (!updatedDocument) {
        return res.status(404).json({ message: 'Document not found' });
      }
    }

    const client = await weddingClient.findOneAndUpdate(
      { _id: id },
      {
        groom_Cannonical_Interview: req.body.groom_Cannonical_Interview,
        groomalreadyBaptist: req.body.groomalreadyBaptist,
        groomalreadyKumpil: req.body.groomalreadyKumpil,
        Bride_Cannonical_Interview: req.body.Bride_Cannonical_Interview,
        weddingStatus: req.body.weddingStatus,
        bridealreadyBaptist: req.body.bridealreadyBaptist,
        bridealreadyKumpil: req.body.bridealreadyKumpil,
      },
      { new: true }
    );

    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    res.json({ message: 'Successfully updated client', client });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update client', error: error.message });
  }
};

const getSingleClient = (req, res) => {
  const id = req.params.id;
  weddingClient
    .findById({ _id: id })
    .then((wedding_client) => res.json(wedding_client))
    .catch((err) => res.json(err));
};

// const updatedToAppointment = async (req, res) => {
//   try {
//     const start = req.params.start;
//     const newStatus = "Appointed";

//     const document = await CalendarForReservation.findOneAndUpdate(
//       { start },
//       { $set: { description: newStatus } },
//       {
//         new: true,
//         runValidators: true,
//       }
//     );
//     if (!document) {
//       return res.status(404).json({ message: "Document not found" });
//     }
//     res.json(document);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

export {
  acceptWedidngClient,
  listWeddingClient,
  updateWeddingClient,
  getSingleClient,
  // updatedToAppointment,
};
