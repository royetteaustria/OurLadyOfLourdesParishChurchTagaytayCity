import Event from "../../model/events/Event.js";
import handleError from "../../utils/events/eventErrors.js";

const listOfEvents = async(req ,res) =>{

    const events = await Event.find({});
 
    try{
       res.status(200).json(events)
    }catch(err){
        handleError(err, res)
    }
};

const getEvent = async(req, res)=>{
    const id =   req.params.id
    const event = await Event.findById(id);
 
    try{
       res.status(200).json(event)

      
    }catch(err){
        handleError(err, res)
    }
};

const addEvent = async (req, res) => {
    try {
        const newEvent = await Event.create(req.body);
        res.status(200).json(newEvent);
    } catch (err) {
        handleError(err, res);
    }
};


const EditEvent =  async (req, res) => {
    const id = req.params.id;
    try {
        const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedEvent) {
            return res.status(404).json({ error: "Event not found" });
        }
        res.status(200).json(updatedEvent);
    } catch (err) {
        handleError(err, res);
    }
};

const deleteEvent = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedEvent = await Event.findByIdAndDelete(id);
        if (!deletedEvent) {
            return res.status(404).json({ error: "Event not found" });
        }
        res.status(200).json("Event has been deleted");
    } catch (err) {
        handleError(err, res);
    }
};

export {
    addEvent,
    listOfEvents,
    deleteEvent,
    EditEvent,
    getEvent
}