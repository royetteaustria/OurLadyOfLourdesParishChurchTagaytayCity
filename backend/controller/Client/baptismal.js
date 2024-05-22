import Binyag from "../../model/client/Baptismal.js";
import nodemailer from "nodemailer";
import CalendarBaptismal from "../../model/BaptismalCalendar/Calendar.js";
import CalendarForReservation from "../../model/manageReservation/CalendarReservation.js";

const createBaptismalClient = async (req, res) => {
    try {
      const bdate = req.body.start;
      const TimeSlots = await CalendarBaptismal.findOne({ start: bdate });
  
      let updatedDescription;
  
      if (TimeSlots && TimeSlots.slot === 0) {
        updatedDescription = await CalendarBaptismal.findOneAndUpdate(
          { start: bdate },
          { $set: { description: "Appointed" } },
          { new: true, runValidators: true }
        );
      } else {
        updatedDescription = await CalendarBaptismal.findOneAndUpdate(
          { start: bdate },
          { $set: { description: "Available" } },
          { new: true, runValidators: true }
        );
      }
  
      if (!updatedDescription) {
        return res.status(404).json({ message: 'Reservation document not found' });
      }
  
      const baptismalClient = await Binyag.create(req.body);
      res.json({ message: 'Successfully accepted', baptismalClient });
    } catch (error) {
      res.status(500).json({ message: "Failed to accept", error: error.message });
    }
  };
  

const listbaptismalClient = (req, res) => {
  Binyag.find()
    .then((baptismal_Client) => {
      if (baptismal_Client.length === 0) {
        return res.json({ message: "No Inquiries" });
      }
      return res.status(200).json(baptismal_Client);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Failed to retrieve records", error: err.message });
    });
};

const updatebaptismalClient = async (req, res) => {
    const id = req.params.id;
    try {
      const updatedClient = await Binyag.findOneAndUpdate(
        { _id: id },
        { status: req.body.status, seminar: req.body.seminar },
        { new: true }
      );
  
      if (updatedClient.status === 'Cancel') {
        const baptistDate = updatedClient.start;
        const baptistExist = await CalendarBaptismal.findOne({ start: baptistDate });
        const wedExist = await CalendarForReservation.findOne({ start: baptistDate });
  
        if (wedExist && baptistExist.slot === 0) {
          await CalendarForReservation.findOneAndUpdate(
            { start: baptistDate },
            { $set: { description: "Available" } },
            { new: true, runValidators: true }
          );
        }
  
        if (baptistExist) {
          const newSlot = updatedClient.type === 'Ordinary' ? baptistExist.slot + 1 : baptistExist.slot + 5;
          await CalendarBaptismal.findOneAndUpdate(
            { start: baptistDate },
            { $set: { description: "Available", slot: newSlot } },
            { new: true, runValidators: true }
          );
        }
      }
  
      res.status(200).json(updatedClient);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
};

const getSingleClient = (req, res) => {
  const id = req.params.id;
  Binyag.findById({ _id: id })
    .then((baptismal_Client) => res.json(baptismal_Client))
    .catch((err) => res.json(err));
};

export {
  createBaptismalClient,
  listbaptismalClient,
  updatebaptismalClient,
  getSingleClient,
};
