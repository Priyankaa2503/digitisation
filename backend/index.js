const express = require("express");
const mongoose = require("mongoose");
const companyRoute = require("./routes/company.js");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

// app.use("/auth", authRoute);
app.use("/company", companyRoute);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) =>
    console.error(`Error connecting to MongoDB: ${error.message}`)
  );
