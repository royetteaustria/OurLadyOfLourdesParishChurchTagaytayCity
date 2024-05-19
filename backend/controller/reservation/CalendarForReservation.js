import CalendarForReservation from "../../model/manageReservation/CalendarReservation.js";
import handleError from "../../utils/events/eventErrors.js";
import cron from 'node-cron'

cron.schedule('0 0 * * *', async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to 00:00:00

  console.log('Today:', today);

  try {
    const deletedEvents = await CalendarForReservation.deleteMany({
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
    const reservation = await CalendarForReservation.find({});

    try {
        res.status(200).json(reservation)
    } catch (err) {
        handleError(err, res)
    }
}

const getReservation = async(req, res) => {
    const id = req.params.id
    const reservation = await CalendarForReservation.findById(id);

    try {
        res.status(200).json(reservation)
    } catch (err) {
        handleError(err, res)
    }
}

const addReservation = async(req, res) => {
    try {
        const newReservation = await CalendarForReservation.create(req.body);
        res.status(200).json(newReservation);
    } catch(err) {
        handleError(err, res)
    }
}

const EditReservation = async(req, res) => {
    const id = req.params.id;
    try {
        const updateReservation = await CalendarForReservation.findByIdAndUpdate(id, req.body, {new: true});
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
        const Reservationdelete = await CalendarForReservation.findByIdAndDelete(id);
        if(!Reservationdelete) {
            return res.status(404).json({ error: "Reservation not found"});
        } else {
            res.status(200).json('Successfully delete')
        }
    } catch (err) {
        handleError(err, res)
    }
}

const getAvailableDates = async (req, res) => {
    try {
      const availableDates = await CalendarForReservation.find({ description: "Available" });
      res.status(200).json(availableDates);
    } catch (err) {
      handleError(err, res);
    }
  }
  
export {
    listOfReservation,
    getReservation,
    addReservation,
    EditReservation,
    DeleteReservation,
    getAvailableDates,
    
}