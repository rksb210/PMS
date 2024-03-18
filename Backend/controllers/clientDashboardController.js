const getclientdashboard = async (req, res) => {
  try {
    console.log("Dashboard");
    res.status(200).json({ msg: "Raju bada hai natkhat" });
  } catch (error) {
    console.log(error);
    res.json({ msg: "kuch toh gabad hai daya" });

  }
};
module.exports = getclientdashboard;
