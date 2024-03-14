

module.exports = (sequelize,DataTypes) => {
    const Billing = sequelize.define(
      "Billing",
      {
        billing_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,
          },
          plan: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    
        planamount: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        numberofusers: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        numberofmonths: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },    
      },
      {
    
        tableName: "billing",
        // timestamps:false
      }
    );
    return Billing
    }
    