const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const StudentAuthRoute = require("./routes/StudentAuth");
const studentRoute = require("./routes/students");
const OnlineFeesRoute = require("./routes/OnlineFeeses");
const PhysicalFeesRoute = require("./routes/PhysicalFeeses");
const NotificationRoute = require("./routes/Notifications");
const StaffAuth=require('./routes/StaffAuth');
const staff=require('./routes/staff');
const cors =require("cors");
const multer = require("multer");
const path = require("path");

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))

 dotenv.config();
 app.use(cors());
 app.use(express.json());

 app.use("/profilepic", express.static(path.join(__dirname, "/profilepic")));

 mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "profilepic");
    },
    filename: (req, file, cb) => {
      cb(null,req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });

 app.use("/api/StudentAuth", StudentAuthRoute);
 app.use("/api/students", studentRoute);
 app.use("/api/OnlineFeeses", OnlineFeesRoute);
 app.use("/api/PhysicalFeeses", PhysicalFeesRoute);
 app.use("/api/Notifications", NotificationRoute);
 app.use("/api/StaffAuth",StaffAuth);
 app.use("/api/staff",staff);

app.listen("5000", () => {
  console.log("Backend is running.");
});

