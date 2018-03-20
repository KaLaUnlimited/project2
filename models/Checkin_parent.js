module.exports = function(sequelize, DataTypes) {
    var Checkin_parent = sequelize.define("Checkin_parent", {
      par_govt_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: { 
          min: 100000000,
          max: 999999999
        }
      },
      par_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      checkin_status:{
        type:DataTypes.String,
        defaultValue:"Not United", 
        allowNull: false
      },

      time_stamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW  
      }
    });
    Checkin_parent.associate = function(models) {
      // Associating Checkin_parent with Students
      // When an Author is deleted, also delete any associated Posts
      Checkin_parent.hasMany(models.Students, {
        foreignKey: "par1_gvt_id"
      });
    };
  
    return Checkin_parent;
  };