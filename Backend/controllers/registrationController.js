const db = require("../models/index");
const { get } = require("../routes/registration");
const Registration = db.registration;

const addClient = async (req, res) => {
  console.log("req.body:", req.body);
  const { companyemailid } = req.body;
  const check_email = await Registration.findAll({
    where: {
      companyemailid: companyemailid,
    },
  });
  console.log("check:", check_email.length);
  if (check_email.length >= 1) {
    res.json({ msg: "Email Id already exist", status: true, data: [] });
  } else {
    const registration = await Registration.create(req.body);
    res
      .status(200)
      .json({
        msg: "Registration Successfull",
        data: registration,
        status: false,
      });
  }
};

// const registration = await Registration.create(req.body)
// res.status(200).json({msg:'Registration Successfull',data:registration})
// }

const getClientDetails = async (req, res) => {
  const getData = await Registration.findAll({});
  console.log("getData:", getData);
  res.json({ message: "Success", status: true, data: getData });
};

const deleteClientDetails = async (req, res) => {
  const id = req.params.id;
  const deleteData = await Registration.destroy({
    where: {
      registration_id: id,
    },
  });
  res.json({ message: "Success", status: true, data: deleteData });
};

const editClientDetails = async (req, res) => {
  const id = req.params.id;
  console.log("req.body",req.body)
  console.log("first,",id)
  const editData = await Registration.update(req.body, {
    where: {
      registration_id: id,
    },
  });
  console.log("editData:",editData)
  res.json({ message: "Edit Data Successfully", status: true, data: editData });
};

module.exports = {
  addClient,
  getClientDetails,
  deleteClientDetails,
  editClientDetails,
};
