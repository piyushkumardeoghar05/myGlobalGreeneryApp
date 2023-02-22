const contactUsModel = require("../Models/contactUsModel");
exports.postContactUs = async (req, res, next) => {
  try{

    const { name, email, message } = req.body;
    let con = await contactUsModel.create({ name, email, message })
    return res.json({
      successMessage:"form succesfully submitted",
      formDetails:con
    })
  } catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};
