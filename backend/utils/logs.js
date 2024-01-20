const Log = require("../models/logs");

const recordLog = async (type, company) => {
  const newLog = new Log({
    type,
    company,
  });
  try {
    const savedLog = await newLog.save();
    return savedLog;
  } catch (error) {
    return error;
  }
};

module.exports = recordLog;
