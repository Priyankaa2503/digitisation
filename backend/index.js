const express = require("express");
const mongoose = require("mongoose");
const companyRoute = require("./routes/company.js");
const logsRoute = require("./routes/logs.js");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/company", companyRoute);
app.use("/logs", logsRoute);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) =>
    console.error(`Error connecting to MongoDB: ${error.message}`)
  );
