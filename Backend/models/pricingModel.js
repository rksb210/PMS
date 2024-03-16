

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
      // values:[0,200,400]
    },

    number_of_users: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // values:[5,200,400]
    },
    number_of_projects: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // values:[5,50,200]
    },
    storage: {
      type: DataTypes.STRING,
      allowNull: false,
      // values:[10,100,450]
    },
    no_of_months: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // values:[1,12,24]
    },
    plan: {
      type: DataTypes.STRING,
      allowNull: false,
      // values:['FREE','GOLD','PLATINUM']
    },

  },
  {

    tableName: "pricing",
    timestamps:false
  }
);
return Pricing
}
