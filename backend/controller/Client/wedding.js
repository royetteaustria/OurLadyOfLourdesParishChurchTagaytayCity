import weddingClient from "../../model/client/wedding.js";
import CalendarForReservation from "../../model/manageReservation/CalendarReservation.js";

const acceptWedidngClient = async(req, res) => {
  try {
    // Get the start date from the request body
    const wedDate = req.body.start;

    // Update the CalendarReservation collection
    const updatedReservationDocument = await CalendarForReservation.findOneAndUpdate(
      { start: wedDate },
      { $set: { description: 'Pending' } },
      { new: true, runValidators: true }
    );

    if (!updatedReservationDocument) {
      return res.status(404).json({ message: 'Reservation document not found' });
    }

    // Update the CalendarBaptismal collection
    const updatedBaptismalDocument = await CalendarBaptismal.findOneAndUpdate(
      { start: wedDate },
      { $set: { description: 'Not available', slot: 0 } },
      { new: true, runValidators: true }
    );

    if (!updatedBaptismalDocument) {
      return res.status(404).json({ message: 'Baptismal document not found' });
    }

    // Create the wedding client
    const wedding_client = await weddingClient.create(req.body);

    res.json({ message: "Successfully accepted", wedding_client, updatedReservationDocument, updatedBaptismalDocument });
  } catch (err) {
    res.status(404).json({ message: "Failed to accept", error: err.message });
  }
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
  weddingClient
    .findOneAndUpdate(
      { _id: id },
      {
        groom_Cannonical_Interview: req.body.groom_Cannonical_Interview,
        groomalreadyBaptist: req.body.groomalreadyBaptist,
        groomalreadyKumpil: req.body.groomalreadyKumpil,
        Bride_Cannonical_Interview: req.body.Bride_Cannonical_Interview,
        weddingStatus: req.body.weddingStatus,
        bridealreadyBaptist: req.body.bridealreadyBaptist,
        bridealreadyKumpil: req.body.bridealreadyKumpil,
      }
    )
    .then((client) => {
      console.log(client);
      res.json({
        message: "Succesfully add update",
        client,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Failed to update client",
        error: err.message,
      });
    });
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
