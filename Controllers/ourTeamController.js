const ourTeamModel = require("../Models/ourTeamModel");
exports.getOurTeam = async (req, res, next) => {
  try {
    const teamMembers = await ourTeamModel.find();
    return res.json({
      successMessage: "Data fetched successfully",
      teamMembers: teamMembers,
    });
  } catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};

exports.postOurTeam = async (req, res, next) => {
  try {
    const teamMember = await ourTeamModel.create(req.body);
    return res.json({
      successMessage: "Team Member added succesfully",
      "team Member": teamMember,
    });
  } catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};
