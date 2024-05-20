import handleError from "../../utils/events/eventErrors.js";
import CalendarBaptismal from './../../model/BaptismalCalendar/Calendar.js';
import cron from 'node-cron'

cron.schedule('0 0 * * *', async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to 00:00:00

  console.log('Today:', today);

  try {
    const deletedEvents = await CalendarBaptismal.deleteMany({
      end: { $lt: today },
    });
    console.log(`Deleted ${deletedEvents.deletedCount} past events.`);
  } catch (err) {
    console.error('Error deleting past events:', err);
  }
}, {
  scheduled: true,
  timezone: 'Asia/Manila', // Set timezone to Manila
});


const listOfReservation = async(req, res) => {
    const reservation = await CalendarBaptismal.find({});

    try {
        res.status(200).json(reservation)
    } catch (err) {
        handleError(err, res)
    }
}

const getReservation = async(req, res) => {
    const id = req.params.id
    const reservation = await CalendarBaptismal.findById(id);

    try {
        res.status(200).json(reservation)
    } catch (err) {
        handleError(err, res)
    }
}

const addReservation = async(req, res) => {
  const { start, end, description } = req.body;
  try {
    const ExistingReservation = await CalendarBaptismal.findOne({
      start: { $gte: start, $lte: end },
      end: { $gte: start, $lte: end },
    });
    if (ExistingReservation) {
      return res.status(409).json({ error: "A reservation already exists for the specified time period." });
    }
    const newReservation = await CalendarBaptismal.create({ start, end, description });
    res.status(200).json(newReservation);
  } catch (error) {
    handleError(err, res);
  }
    // try {
    //     const newReservation = await CalendarBaptismal.create(req.body);
    //     res.status(200).json(newReservation);
    // } catch(err) {
    //     handleError(err, res)
    // }
}

const EditReservation = async(req, res) => {
    const id = req.params.id;
    try {
        const updateReservation = await CalendarBaptismal.findByIdAndUpdate(id, req.body, {new: true});
        if(!updateReservation) {
            return res.status(404).json({ error: "Reservation not found"})
        } else {
            res.status(200).json(updateReservation);
        }
    } catch (err){
        handleError(err, res)
    }
}

const DeleteReservation = async(req, res) => {
    const id = req.params.id;
    try {
        const Reservationdelete = await CalendarBaptismal.findByIdAndDelete(id);
        if(!Reservationdelete) {
            return res.status(404).json({ error: "Reservation not found"});
        } else {
            res.status(200).json('Successfully delete')
        }
    } catch (err) {
        handleError(err, res)
    }
}

const getAvailableSlots = async (req, res) => {
    try {
      const { selectedDate } = req.body;
      const startOfDay = new Date(selectedDate);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(selectedDate);
      endOfDay.setHours(23, 59, 59, 999);
  
      const availableSlots = await CalendarBaptismal.find({
        start: { $gte: startOfDay, $lte: endOfDay },
        description: 'Available',
      }).select('slot');
  
      res.status(200).json(availableSlots.map((slot) => slot.slot));
    } catch (err) {
      handleError(err, res);
    }
  };

// const singleSubmitForm = async(req, res) => {
//   try {
//     const start = req.params.start;
//   const newStatus = 'Pending';

//   const document = await CalendarBaptismal.findOneAndUpdate(
//     { start },
//     { $set: { start: newStatus } },
//     {
//       new: true,
//       runValidators: true,
//     }
//   );
//   if (!document) {
//     return res.status(404).json({ message: 'Document not found' });
//   }
//   res.json(document);
//   } catch(err) {
//     console.log(err)
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }

const getAvailableDates = async (req, res) => {
    try {
      const availableDates = await CalendarBaptismal.find({ description: "Available" });
      res.status(200).json(availableDates);
    } catch (err) {
      handleError(err, res);
    }
  }
  // Update the updateReservationStatus function in CalendarBaptismal controller
  const updateReservationStatus = async (req, res) => {
    const id = req.params.id;
    const selectedDate = req.body.selectedDate;
  
    try {
      // Find the reservation by ID and update the description field
      const reservation = await CalendarBaptismal.findByIdAndUpdate(
        id,
        { start: selectedDate, description: "Pending" },
        { new: true }
      );
  
      if (reservation) {
        res.status(200).json(reservation);
      } else {
        res.status(404).json({ error: "Reservation not found" });
      }
    } catch (err) {
      handleError(err, res);
    }
  };


export {
    listOfReservation,
    getReservation,
    addReservation,
    EditReservation,
    DeleteReservation,
    getAvailableDates,
    updateReservationStatus,
}