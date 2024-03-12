const db = require('../models/index')
const Pricing = db.pricing;

const freeData = async (req, res) => {
  const result = await Pricing.findAll();
  if (result) {
    res.json({ data: result[0], msg: "found" });
  } else {
    res.json({ msg: "not found" });
  }
};

 const goldData = async (req,res)=>{
    const result = await Pricing.findAll();
  if (result) {
    res.json({ data: result[1], msg: "found" });
  } else {
    res.json({ msg: "not found" });
  }

 }

 const platinumData = async (req,res)=>{
    const result = await Pricing.findAll();
  if (result) {
    res.json({ data: result[2], msg: "found" });
  } else {
    res.json({ msg: "not found" });
  }

 }

module.exports = { freeData , goldData , platinumData };
