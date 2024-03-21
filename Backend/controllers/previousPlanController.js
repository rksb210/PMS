const db = require("../models/index");
const Billing = db.billing;
const Registration = db.registration;

const getPreviousPlan = async (req, res) => {
	// const {id} =req.params
	// console.log("first",id)
	try {
		const data = await Registration.findAll({
			attributes: [
				"registration_id",
				"companyname",
				"companyemailid",
				"phonenumber",
				["createdAt", "registration_createdAt"],

			],
			where: {
				registration_id: req.params.id,
			},

			include: [
				{
					model: Billing,
					attributes: [
						"plan",
						"numberofmonths",
						"createdAt",
						"planamount",
						"numberofusers",
					],

					//   raw:true
				},
			],
			raw: true,
		});
		  console.log("dataaaaa:", data);

		// Extracting plan, numberofmonths, createdAt, and expiration date from each data object
		const licenseDetails = data.map((item) => {
			const {
				'Billings.plan': plan,
				'Billings.numberofusers': numberofusers,
				'Billings.createdAt': createdAt,
				'Billings.planamount': planamount,
				'Billings.numberofmonths': numberofmonths,
				companyname,
				companyemailid,
				phonenumber,
				registration_id,
				registration_createdAt,

			} = item;
			console.log("itemkdjfaskdghsiudhsjkd", item);

			if (createdAt === null) {
				const expirationDate = calculateExpirationDate(
				  registration_createdAt,
				  1
				);
				return {
				  plan: plan,
				  planamount: planamount,
				  companyname: companyname,
				  companyemailid: companyemailid,
				  phonenumber: phonenumber,
				  numberofusers: numberofusers,
				  numberofmonths: numberofmonths,
				  registration_id: registration_id,
				  createdAt: formatDate(registration_createdAt),
				  expirationDate: formatDate(expirationDate),
				};
			  }
		
			  const expirationDate = calculateExpirationDate(createdAt, numberofmonths);
		
			  return {
				plan: plan,
				planamount: planamount,
				companyname: companyname,
				companyemailid: companyemailid,
				phonenumber: phonenumber,
				numberofusers: numberofusers,
				numberofmonths: numberofmonths,
				registration_id: registration_id,
				createdAt: formatDate(createdAt),
				expirationDate: formatDate(expirationDate),
			  };
			});
		// data.sort((a, b) => new Date(b.expirationDate) - new Date(a.expirationDate));
        // console.log("uuu:",data);

        licenseDetails.sort((a, b) => new Date(b.expirationDate) - new Date(a.expirationDate));


		console.log("liscense details", licenseDetails[0]);
		res.json(licenseDetails);
	} catch (error) {
		res.status(500).json({ message: "Error retrieving license details" });
	}
};

// Function to calculate expiration date
const calculateExpirationDate = (createdAt, numberofmonths) => {
	const d = new Date(createdAt);
	d.setMonth(d.getMonth() + numberofmonths);
	return d;
};

// Function to format date as yyyy/mm/dd
const formatDate = (date) => {
	const d = new Date(date);
	const year = d.getFullYear();
	const month = (d.getMonth() + 1).toString().padStart(2, "0");
	const day = d.getDate().toString().padStart(2, "0");
	return `${day}/${month}/${year}`;
};




module.exports = { getPreviousPlan };
