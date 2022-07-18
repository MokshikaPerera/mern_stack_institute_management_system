const router = require("express").Router();

const exam_schedule = require("../models/exam_schedule");

//CREATE SCHEDULE
router.post("/", async(req, res) => {
    const newSched = new exam_schedule(req.body);
    try {
        const savedSched = await newSched.save();
        res.status(200).json(savedSched);
    } catch (err) {
        res.status(500).json(err);
    }
});

// //UPDATE SCHEDULE
// router.put("/:id", async(req, res) => {
//     try {
//         const sched = await exam_schedule.findByIdAndUpdate(req.params.id);
//         if (sched.username === req.body.username) {
//             try {
//                 const updatedSched = await exam_schedule.findByIdAndUpdate(
//                     req.params.id, {
//                         $set: req.body,
//                     }, { new: true }
//                 );
//                 res.status(200).json(updatedSched);
//             } catch (err) {
//                 res.status(500).json(err);
//             }
//         } else {
//             res.status(401).json("You can update only your schedule!");
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// //DELETE SCHEDULE
// router.delete("/:id", async(req, res) => {
//     try {
//         const sched = await exam_schedule.findById(req.params.id);
//         if (sched.username === req.body.username) {
//             try {
//                 await sched.delete();
//                 res.status(200).json("Schedule has been deleted...");
//             } catch (err) {
//                 res.status(500).json(err);
//             }
//         } else {
//             res.status(401).json("You can delete only your schedule!");
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

//GET SCHEDULE
router.get("/:id", async(req, res) => {
    try {
        const sched = await exam_schedule.findById(req.params.id);
        res.status(200).json(sched);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL
router.get("/", async(req, res) => {
    try {
        const schedules = await exam_schedule.find();
        res.status(200).json(schedules);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;