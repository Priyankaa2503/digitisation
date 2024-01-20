const router = require("express").Router();
const Log = require("../models/logs");

router.get("/", async (req, res) => {
  try {
    const logs = await Log.find();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: "Failed to get logs" });
  }
});

module.exports = router;
