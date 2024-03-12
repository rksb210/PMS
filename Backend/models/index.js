const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("pms", "node", "Rajkishore@210", {
  host: "localhost",
  dialect: "mysql",
  logging:false
});

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


db.sequelize.sync();

module.exports = db;
