const db = require("../models/index");
const Billing = db.billing;
const Registration = db.registration;

const getLicenceDetails = async (req, res) => {
  try {
    const data = await Billing.findAll({
      attributes: ["plan", "numberofmonths", "createdAt"],
      
      include: [
        {
          model: Registration,
          attributes: ["companyname", "companyemailid", "phonenumber"],
        //   raw:true
        },
      ],
      raw: true,
    });
    console.log("dataaaaa:", data);

    // Extracting plan, numberofmonths, createdAt, and expiration date from each data object
    const licenseDetails = data.map((item) => {
      const {
        plan,
        numberofmonths,
        createdAt,
        'Registration.companyname':companyname,
        'Registration.companyemailid':companyemailid,
        'Registration.phonenumber':phonenumber,
      } = item;
      console.log("itemkdjfaskdghsiudhsjkd", item);
      const expirationDate = calculateExpirationDate(createdAt, numberofmonths);
      return {
        plan: plan,
        companyname: companyname,
        companyemailid: companyemailid,
        phonenumber: phonenumber,
        numberofmonths: numberofmonths,
        createdAt: formatDate(createdAt),
        expirationDate: formatDate(expirationDate),
      };
    });
    // console.log("liscense details", licenseDetails);
    res.json({ data:licenseDetails, message: "Success" });
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
  return `${year}/${month}/${day}`;
};

module.exports = { getLicenceDetails };

// const db = require("../models/index");
// const Billing = db.billing;
// const Registration = db.registration;

// const getLicenceDetails = async (req, res) => {
//   const data = await Billing.findAll({
//     attributes: ["plan", "numberofmonths" ,'createdAt'],
//     // include: Registration,
//     include: [
//       {
//         model: Registration,
//         attributes: ['companyname','companyemailid','phonenumber'],
//       },
//     ],
//     raw:true
//   });
//   res.json({ data: data, message: "Success " });
// };

// module.exports = { getLicenceDetails };


/////////////////////////////////////////////////////////////////////////////////////////////////////
// const db = require("../models/index");
// const Billing = db.billing;
// const Registration = db.registration;

// const getLicenceDetails = async (req, res) => {
//   try {
//     const data = await Billing.findAll({
//       attributes: ["plan", "numberofmonths", 'createdAt'],
//       include: [
//         {
//           model: Registration,
//           attributes: ['companyname', 'companyemailid', 'phonenumber'],
//         },
//       ],
//     });

//     // Extracting plan and numberofmonths from each data object
//     const licenseDetails = data.map(item => ({
//       plan: item.plan,
//       numberofmonths: item.numberofmonths,
//       createdAt : item.createdAt
//     }));
//     console.log('rtrtrt:',licenseDetails)

//     res.json({ data: data, message: "Success" });
//   } catch (error) {
//     res.status(500).json({ message: "Error retrieving license details" });
//   }
// };

// module.exports = { getLicenceDetails };

/////////////////////////////////////////////////////////////////////////////////////////

// const db = require("../models/index");
// const Billing = db.billing;
// const Registration = db.registration;

// const getLicenceDetails = async (req, res) => {
//   try {
//     const data = await Billing.findAll({
//       attributes: ["plan", "numberofmonths", 'createdAt'],
//       include: [
//         {
//           model: Registration,
//           attributes: ['companyname', 'companyemailid', 'phonenumber'],
//         },
//       ],
//     });

//     // Extracting plan, numberofmonths, and formatted createdAt from each data object
//     const licenseDetails = data.map(item => ({
//       plan: item.plan,
//       numberofmonths: item.numberofmonths,
//       createdAt: formatDate(item.createdAt),
//     }));
//     console.log('rtrtrt:',licenseDetails)

//     res.json({ data: licenseDetails, message: "Success" });
//   } catch (error) {
//     res.status(500).json({ message: "Error retrieving license details" });
//   }
// };

// // Function to format date as yyyy/mm/dd
// const formatDate = (date) => {
//   const d = new Date(date);
//   const year = d.getFullYear();
//   const month = (d.getMonth() + 1).toString().padStart(2, '0');
//   const day = d.getDate().toString().padStart(2, '0');
//   return `${year}/${month}/${day}`;
// };

// module.exports = { getLicenceDetails };

///////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////


// const db = require("../models/index");
// const Billing = db.billing;
// const Registration = db.registration;

// const getLicenceDetails = async (req, res) => {
//   try {
//     const data = await Billing.findAll({
//       attributes: ["plan", "numberofmonths", "createdAt"],
//       include: [
//         {
//           model: Registration,
//           attributes: ["companyname", "companyemailid", "phonenumber"],
//         },
//       ],
//     });



//     console.log('loif',data)
//     // Extracting plan, numberofmonths, createdAt, and company details from each data object
//     const licenseDetails = data.map((item) => {
//       const {
//         plan,
//         numberofmonths,
//         createdAt,
//         registration: { companyname, companyemailid, phonenumber },
//       } = item.toJSON(); // Convert Sequelize model instance to plain JSON object
//       return {
//         plan,
//         companyname, // Only "companyname" without "Registration" prefix
//         companyemailid,
//         phonenumber,
//         numberofmonths,
//         createdAt: formatDate(createdAt),
//       };
//     });

//     res.json({ data: licenseDetails, message: "Success" });
//   } catch (error) {
//     res.status(500).json({ message: "Error retrieving license details" });
//   }
// };
// module.exports = { getLicenceDetails };
