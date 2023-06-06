const checkAuthentication = require("../helpers/authentication.helper");
const midjourneySharkCamp = require("../midjourney/midjourneySharkCamp");

const midjourneyControllers = {};

midjourneyControllers.generateImage = async (req, res, next) => {
  try {
    const password = req.headers.tempopassword;
    const { prompt } = req.body;

    checkAuthentication(password);

    const uri = await midjourneySharkCamp(prompt);

    if (uri) {
      res.status(200).json({
        message: "Webhook received successfully",
        uri: uri,
      });
    } else {
      res.status(500).json({ message: "Internal Server Error", uri: "" });
    }
  } catch (error) {
    console.log("ERROR", error);
  }
};

module.exports = midjourneyControllers;
