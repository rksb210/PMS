const db = require("../models/index");
const Billing = db.billing;
const Registration = db.registration;

const getClientDetails = async (req, res) => {
    // const {id} =req.params
    // console.log("first",id)
    try {
      const data = await Registration.findAll({
        attributes: ["registration_id","companyname", "companyemailid", "phonenumber"],
        where:{
            registration_id : req.params.id
        },
        
        include: [
          {
            model: Billing,
            attributes: ["plan", "numberofmonths", "createdAt","planamount","numberofusers"],
            
          //   raw:true
          },
        ],
        raw: true,
      });
    //   console.log("dataaaaa:", data);
  
      // Extracting plan, numberofmonths, createdAt, and expiration date from each data object
      const licenseDetails = data.map((item) => {
        const {
          'Billing.plan':plan,
          'Billing.numberofusers':numberofusers,          
          'Billing.createdAt':createdAt,
          'Billing.planamount':planamount,
          'Billing.numberofmonths':numberofmonths,
          companyname,
          companyemailid,
          phonenumber,
        } = item;
        console.log("itemkdjfaskdghsiudhsjkd", item);
        const expirationDate = calculateExpirationDate(createdAt, numberofmonths);
        return {
          plan: plan,
          planamount:planamount,
          companyname: companyname,
          companyemailid: companyemailid,
          phonenumber: phonenumber,
          numberofusers:numberofusers,
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

module.exports = { getClientDetails  };
