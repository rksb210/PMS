const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
	"intileo_pms",
	process.env.SQLUSER,
	process.env.SQLPASSWORD,
	{
		host: process.env.SQLHOST,
		dialect: "mysql",
		logging: false,
		port: process.env.SQLPORT,
	},
);

try {
	sequelize.authenticate();
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.registration = require("./registrationModel")(sequelize, DataTypes);
db.pricing = require("./pricingModel")(sequelize, DataTypes);
db.billing = require("./billingModel")(sequelize, DataTypes);
db.superadmin = require("./superAdminRegistrationModel")(sequelize, DataTypes);

db.registration.hasMany(db.billing, { foreignKey: "registration_id" });
db.billing.belongsTo(db.registration, { foreignKey: "registration_id" });

db.sequelize.sync({ force: false });

module.exports = db;
