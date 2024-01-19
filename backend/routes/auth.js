const router = require("express").Router();
const Company = require("../models/company.js");
const cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const emailExists = await Company.findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(400).json({ error: "Email already exists" });
  }
  const nameExists = await Company.findOne({ name: req.body.name });
  if (nameExists) {
    return res.status(400).json({ error: "Name already exists" });
  }
  const newCompany = new Company({
    name: req.body.name,
    email: req.body.email,
    password: cryptojs.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
    address: {
      street: req.body.address.street,
      city: req.body.address.city,
      state: req.body.address.state,
      country: req.body.address.country,
      postalCode: req.body.address.postalCode,
    },
    owner: {
      name: req.body.owner.name,
      contact: req.body.owner.contact,
      email: req.body.owner.email,
    },
  });
  try {
    const savedCompany = await newCompany.save();
    res.status(200).json(savedCompany);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  const company = await Company.findOne({ email: req.body.email });
  if (!company) {
    return res.status(400).json({ error: "Email not found" });
  }
  const decryptedPassword = cryptojs.AES.decrypt(
    company.password,
    process.env.SECRET_KEY
  ).toString(cryptojs.enc.Utf8);
  if (decryptedPassword !== req.body.password) {
    return res.status(400).json({ error: "Invalid password" });
  }
  const token = jwt.sign({ _id: company._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).json({ token });
});

module.exports = router;
