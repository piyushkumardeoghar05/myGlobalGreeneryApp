const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const BASE_URL = process.env.BASE_URL;
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
require('dotenv').config();
app.use(express.json());
app.use(express.static('public/build'));
const contactUsRouter = require("./Routes/contactUsRouter");
const topThreeCardsRouter = require("./Routes/topThreeCardsRouter");
const ourTeamRouter = require("./Routes/ourTeamRouter");
const userRouter = require("./Routes/userRouter");
const galleryRouter = require("./Routes/galleryRouter");
const testimonialsRouter = require("./Routes/testimonialsRouter");
const uri = process.env.URI;
// console.log(uri);
const port = process.env.PORT || 5000;
mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

app.use("/contactUs", contactUsRouter);
app.use("/topThreeCards", topThreeCardsRouter);
app.use("/ourTeam", ourTeamRouter);
app.use("/testimonials", testimonialsRouter);
app.use("/user", userRouter);
app.use("/gallery", galleryRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
