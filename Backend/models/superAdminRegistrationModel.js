// const sequelize = require("./index");
// const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const SuperAdminRegistration = sequelize.define(
      "SuperAdminRegistration",
      {
        // Model attributes are defined here
        superadmin_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true, 
          autoIncrement: true,
        },
  
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            // isLowercase: true,
            len:[3,30]
          },
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        tableName: "super_admin_registration",
        //   timestamps: false,
      }
    );
    return SuperAdminRegistration;
  };
  