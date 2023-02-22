const testimonialsModel = require("../Models/testimonialsModel");
exports.getTestimonials = async (req, res, next) => {
  try {
    const testimonials = await testimonialsModel.find();
    return res.json({
      successMessage: "Data fetched successfully",
      testimonials: testimonials,
    });
  } catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};

exports.postTestimonials = async (req, res, next) => {
  try {
    const testimonial = await testimonialsModel.create(req.body);
    return res.json({
      successMessage: "Testimonal created successfully",
      testimonial: testimonial,
    });
  } catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};
