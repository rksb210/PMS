

module.exports = (sequelize,DataTypes) => {
const Pricing = sequelize.define(
  "Pricing",
  {
    pricing_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true,
        // values:[0,1,2]
      },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    number_of_users: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    number_of_projects: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    storage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    no_of_months: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    plan: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {

    tableName: "pricing",
    timestamps:false
  }
);
return Pricing
}
