const pickUpService = require("../services/pickUpService");

exports.createPickUpRequest = async (req, res) => {
  try {
    const newPickUpRequest = await pickUpService.createPickUpRequest(req.body);
    res.status(201).json(newPickUpRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getPickUpRequests = async (req, res) => {
  try {
    const pickUpRequests = await pickUpService.getPickUpRequests(
      req.params.userId
    );
    res.json(pickUpRequests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
