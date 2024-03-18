const db = require("../models/index");
const Billing = db.billing;

const checkSubscription = async (req, res, next) => {
  try {
    const userId = req.params.id;
    // console.log("userid:", userId);

    const subscription = await Billing.findOne({
      where:{registration_id: userId},
      
      raw: true,
    });

    // console.log("ssss:", subscription);

    const today = new Date();
    // console.log("today:", today);

    const createdAt = subscription.createdAt;
    const numberofmonths = subscription.numberofmonths;

    // console.log("ff", createdAt, numberofmonths);

    const calculateExpirationDate = (createdAt, numberofmonths) => {
      const d = new Date(createdAt);
      d.setMonth(d.getMonth() + numberofmonths);
      return d;
    };
    const expirationDate = calculateExpirationDate(createdAt, numberofmonths);

    // console.log("eeee:",expirationDate)

    console.log("expirationdate:", expirationDate);

    if (expirationDate < today) {
      // console.log("hello");
      return res.status(400).json({ msg: "Subscription plan does not exist" });
    }
    // console.log("huyuyuyuy");
    next();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = checkSubscription;
