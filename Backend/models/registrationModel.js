// const sequelize = require("./index");
// const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define(
    "Registration",
    {
      // Model attributes are defined here
      registration_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true,
      },

      companyname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isLowercase: true,
          len:[3,10]
        },
      },
      companyemailid: {
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
      phonenumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
        },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      label: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "registration",
      //   timestamps: false,
    }
  );
  return Registration;
};
