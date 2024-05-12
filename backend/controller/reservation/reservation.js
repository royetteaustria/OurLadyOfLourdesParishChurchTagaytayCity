import Reservation from "../../model/manageReservation/ManageReservation.js";

const CreateReservation = async (req, res) => {
    try {
        const { date, time } = req.body;

        // Ensure 'time' is an array
        if (!Array.isArray(time)) {
            return res.status(400).json({
                message: 'Invalid time format. Time should be an array of strings.',
            });
        }

        const reservation = await Reservation.create({
            // Convert the date string to a Date object
            date: new Date(date),
            time,
        });

        res.json({
            message: 'Successfully created!',
            reservation,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Failed to create reservation',
            error: err.message,
        });
    }
}


const deleteReservation = (req, res) => {
    Reservation.findOneAndDelete(req.params.id, req.body)
    .then((reservation) => {
        res.json({
            message: "Successfully delete Reservation",
            reservation
        })
    })
    .catch((err) => {
        res.status(404).json({
          message: "failed to delete",
          error: err.message,
        });
      });
}

const listReservation = (req, res) => {
    Reservation.find()
    .then((reservation) => {
        if (reservation.length === 0) {
            return res.json({ message: "No Reservation found" });
        }
        return res.status(200).json(reservation);
    })
    .catch((err) => {
        res.status(500).json({ message: "Failed to retrieve Reservation", error: err.message });
    });
}


const updateReservation = (req, res) => {
    const id = req.params.id;
    Reservation.findOneAndUpdate({_id: id}, {date: req.body.date, time: req.body.time})
    .then((reservation) => {
        console.log({ reservation })
        return res.json({
            message: "Successfully update",
            Reservation,
        })
    })
    .catch((err) => {
        res.status(404).json({
            message: "Cant be update",
            error: err.message,
        })
    })
}

const SingleDate = (req, res) => {
    const id = req.params.id;
    Reservation.findById({_id:id})
    .then(reservation => res.json(reservation))
    .catch(err => res.json(err))
}

export {
    CreateReservation,
    updateReservation,
    deleteReservation,
    listReservation,
    SingleDate
}