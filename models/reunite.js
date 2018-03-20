module.exports = function(sequelize, DataTypes) {
    var Release_stud = sequelize.define("Release_stud", {
      student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: { 
          min: 100000000,
          max: 999999999
        }
      },
      par_govt_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { 
          min: 100000000,
          max: 999999999
        }
      },
      time_stamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW  
      }
    });
  
    return Release_stud;
  };