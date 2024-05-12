import express from 'express'
import {
    addEvent,
    listOfEvents,
    deleteEvent,
    EditEvent,
    getEvent
} from '../../controller/event/events.js'

const router = express.Router()

router.get("/", listOfEvents)
router.get("/:id", getEvent)
router.delete("/delete/:id", deleteEvent)
router.post("/", addEvent)
router.put("/:id", EditEvent)


// const router = express.Router();

// router.get("/", async(req, res)=>{

//     const events = await Event.find({});
 
//     try{
       
//        res.status(200).json(events)

      
//     }catch(err){
//         handleError(err, res)
//     }
// });

// router.get("/:id", async(req, res)=>{
//     const id =   req.params.id
//     const event = await Event.findById(id);
 
//     try{
//        res.status(200).json(event)

      
//     }catch(err){
//         handleError(err, res)
//     }
// });



// router.post("/", async (req, res) => {
//     try {
//         const newEvent = await Event.create(req.body);
//         res.status(200).json(newEvent);
//     } catch (err) {
//         handleError(err, res);
//     }
// });


// router.put("/:id", async (req, res) => {
//     const id = req.params.id;
//     try {
//         const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });
//         if (!updatedEvent) {
//             return res.status(404).json({ error: "Event not found" });
//         }
//         res.status(200).json(updatedEvent);
//     } catch (err) {
//         handleError(err, res);
//     }
// });


// router.delete("/delete/:id", async (req, res) => {
//     const id = req.params.id;
//     try {
//         const deletedEvent = await Event.findByIdAndDelete(id);
//         if (!deletedEvent) {
//             return res.status(404).json({ error: "Event not found" });
//         }
//         res.status(200).json("Event has been deleted");
//     } catch (err) {
//         handleError(err, res);
//     }
// });



export default router