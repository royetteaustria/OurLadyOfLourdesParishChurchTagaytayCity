import weddingClient from "../../model/client/wedding.js";
import CalendarForReservation from "../../model/manageReservation/CalendarReservation.js";
import CalendarBaptismal from "../../model/BaptismalCalendar/Calendar.js";
import Report from "../../model/report/Report.js";

const acceptWedidngClient = async(req, res) => {
  try {
    // Get the start date from the request body
    const wedDate = req.body.start;

    // Update the CalendarReservation collection
    const updatedReservationDocument = await CalendarForReservation.findOneAndUpdate(
      { start: wedDate },
      { $set: { description: 'Appointed' } },
      { new: true, runValidators: true }
    );

    if (!updatedReservationDocument) {
      return res.status(404).json({ message: 'Reservation document not found' });
    }

    // Update the CalendarBaptismal collection
    // const updatedBaptismalDocument = await CalendarBaptismal.findOneAndUpdate(
    //   { start: wedDate },
    //   { $set: { description: 'Not available', slot: 0 } },
    //   { new: true, runValidators: true }
    // );

    // if (!updatedBaptismalDocument) {
    //   return res.status(404).json({ message: 'Baptismal document not found' });
    // }

    // Create the wedding client
    const wedding_client = await weddingClient.create(req.body);

    res.json({ message: "Successfully accepted", wedding_client, updatedReservationDocument });
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
  try {
    const updatedClient = await weddingClient.findOneAndUpdate(
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

    if (updatedClient.weddingStatus === "Cancel") {
      const wedDate = updatedClient.start;

      // Update the CalendarReservation collection
      const updatedReservationDocument = await CalendarForReservation.findOneAndUpdate(
        { start: wedDate },
        { $set: { description: "Available" } },
        { new: true, runValidators: true }
      );

      // Update the CalendarBaptismal collection
      const updatedBaptismalDocument = await CalendarBaptismal.findOneAndUpdate(
        { start: wedDate },
        { $set: { description: "Available", slot: 5 } },
        { new: true, runValidators: true }
      );

      const groomName = updatedClient.groomName;  // Assuming groomName is part of updatedClient
      const deletedReportDocument = await Report.findOneAndDelete(
        { GroomName: groomName }
      );

      res.json({
        message: "Successfully updated",
        updatedClient,
        updatedReservationDocument,
        updatedBaptismalDocument,
        deletedReportDocument
      });
    } else {
      res.json({ message: "Successfully updated", updatedClient });
    }
  } catch (err) {
    res.status(404).json({ message: "Failed to update client", error: err.message });
  }
};

const getSingleClient = (req, res) => {
  const id = req.params.id;
  weddingClient
    .findById({ _id: id })
    .then((wedding_client) => res.json(wedding_client))
    .catch((err) => res.json(err));
};


export {
  acceptWedidngClient,
  listWeddingClient,
  updateWeddingClient,
  getSingleClient,
  // updatedToAppointment,
};

// const typeOfBaptismal = req.params.baptismalType;
//   try {
//     const rejectInquiry = await baptismalinquiries.findOneAndDelete({
//       _id: req.params.id,
//     });

//     if (!rejectInquiry) {
//       return res.status(404).json({ message: 'Baptismal inquiry not found' });
//     }

//     const weddingDate = await CalendarForReservation.findOne({
//       start: rejectInquiry.start,
//     });

//     if (!weddingDate) {
//       return res.status(404).json({ message: 'Baptismal date not found' });
//     }

//     weddingDate.description = 'Available';
//     await weddingDate.save();

//     const baptismalDate = await CalendarBaptismal.findOne({
//       start: rejectInquiry.start,
//     });
   
    
//     if (!baptismalDate) {
//       return res.status(404).json({ message: 'Baptismal date not found' });
//     }

//     if (typeOfBaptismal === 'Special') {
//       baptismalDate.slot = 5;
//       baptismalDate.description = 'Available';
//     } else {
//       baptismalDate.slot += 1;
//       baptismalDate.description = 'Available';
//     }

//     await baptismalDate.save();

//     res.json({ message: 'Baptismal inquiry rejected successfully' });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }