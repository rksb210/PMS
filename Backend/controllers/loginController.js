const db = require("../models/index");
const Registration = db.registration;

const logindata = async (req, res) => {
	// console.log("reqqqq:", req.body);
	const { companyemailid, password } = req.body;
	const login = await Registration.findAll(
		{
			where: {
				companyemailid: companyemailid,
				password: password,
			},
		},
		{ raw: true },
	); /////////////to remove extra information

	console.log("logggginnn:", login);
	console.log("logggginLen:", login[0].registration_id);

	if (login.length === 1) {
		res.status(200).json({ message: "Success", status: true, data: login[0] });
	} else {
		res.json({
			message: "Invalid Login Credentials",
			status: false,
		});
	}
	// } else {
	//   res.status(200).json({ message: "Database Error", status: false });
	// }

	// if (login) {
	//   res.status(200).json({ message: "Success", status: true, data: login });
	// } else {
	//   res.status(200).json({ message: "Invalid Email/Password", status: false });
	// }
};

module.exports = { logindata };
