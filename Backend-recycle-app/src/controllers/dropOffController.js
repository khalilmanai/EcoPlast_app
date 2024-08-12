const dropOffService = require("../services/dropOffService");

exports.createDropOff = async (req, res) => {
  try {
    const newDropOff = await dropOffService.createDropOff(req.body);
    res.status(201).json(newDropOff);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getDropOffs = async (req, res) => {
  try {
    const dropOffs = await dropOffService.getDropOffs(req.params.userId);
    res.json(dropOffs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
