module.exports = function(sequelize, DataTypes) {
    var Students = sequelize.define("Students", {
      student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: { 
          min: 100000000,
          max: 999999999
        }
      },
      student_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      student_photo: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      grade_level: {
        type: DataTypes.STRING,
        allowNull: false
      },
      par1_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      par1_addr: {
        type: DataTypes.STRING,
        allowNull: false
      },
      par1_csz: {
        type: DataTypes.STRING,
        allowNull: false
      },
      par1_gvt_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { 
          min: 100000000,
          max: 999999999
        }
      },
      par2_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      par2_addr: {
        type: DataTypes.STRING,
        allowNull: false
      },
      par2_csz: {
        type: DataTypes.STRING,
        allowNull: false
      },
      par2_gvt_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { 
          min: 100000000,
          max: 999999999
        }
      },
      reunify_pnt: {
        type: DataTypes.STRING,
        allowNull: false
      },
      student_status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      time_stamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW  
      },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE 
       

    });

    Students.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Students.belongsTo(models.Parents, {
          foreignKey:"par1_gvt_id",
           allowNull: false
          
        });
      };
  
    return Students;
  };