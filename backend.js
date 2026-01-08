:const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => {
  res.json({ message: "Docker practice project running!" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

