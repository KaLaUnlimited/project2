var db = require("./models");//.Students;
var checkInstudentName="Prescott Irwin";
// update(checkInstudentName);
// allStudents();
// uncheckedStatus();
//medicalStatus();

db.Checkin_parent.findAll({
  include: [db.Students]
}).then(function(dbCheckin_parent) {
 console.log(dbCheckin_parent);
  // res.json(dbAuthor);
});


function medicalStatus(){
    db.Students.findAll({
        where:{
        student_status:"Medical"
        }
      }).then(function(studentDbResults) {
            for(var i=0;i<studentDbResults.length;i++){
                console.log(studentDbResults[i].student_name +" Student ID: " +studentDbResults[i].student_id+ "\n" );   
            }
     
      });
}
function uncheckedStatus(){
   
    
      db.Students.findAll({
        where:{
        student_status:"Unchecked"
        }
      }).then(function(studentDbResults) {
            for(var i=0;i<studentDbResults.length;i++){
                console.log(studentDbResults[i].student_name +" Student ID: " +studentDbResults[i].student_id+ "\n" );   
            }
     
      });
    }
    
    function update (name){
      db.Students.update({
        student_status: "Checked",
      }, {
          //student name dynamic variable goes here
        where: {
          student_name:name
        }
      }).then(function(studentDbResults){
          console.log(name+ " has been checked in");
      });
}
function allStudents(){
db.Students.findAll({
    // where: {
    // grade_level:'10'
//}
    // include: [db.student_id]
  }).then(function(studentDbResults) {
    console.log(studentDbResults );
  });

  db.Students.findAll({
    where:{
    student_status:"Checked"
    }
  }).then(function(studentDbResults) {
        for(var i=0;i<studentDbResults.length;i++){
            console.log(studentDbResults[i].student_name +" Student ID: " +studentDbResults[i].student_id+ "\n" );   
        }
 
  });
}

function update (name){
  db.Students.update({
    student_status: "checked",
  }, {
      //student name dynamic variable goes here
    where: {
      student_name:name
    }
  }).then(function(studentDbResults){
      console.log(name+ " has been checked in");
  });
}


