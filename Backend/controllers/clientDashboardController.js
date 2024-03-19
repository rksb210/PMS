const getclientdashboard = async (req, res) => {
  try {
    console.log("Dashboard");
    res.status(200).json({ msg: "success" });
  } catch (error) {
    console.log(error);
    res.json({ msg: "Failed" });

  }
};
module.exports = getclientdashboard;
