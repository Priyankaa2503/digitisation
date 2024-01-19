const router = require("express").Router();
const Company = require("../models/company.js");

router.get("/:id", async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    res.json(company);
  } catch (error) {
    res.status(500).json({ error: "Failed to get company details" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const companyId = req.params.id;
    const updatedCompany = await Company.findByIdAndUpdate(
      companyId,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedCompany);
  } catch (error) {
    res.status(500).json({ error: "Failed to update company details" });
  }
});

module.exports = router;
