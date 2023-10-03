const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Created a database to store student records
const students = [
    {name: "john", classname: 12, rollNo: 1, description: "good in studies and sports", image: "img1", dob: "7-11-2000"}, 
    {name: "marie", classname: 10, rollNo: 2, description: "good in studies and arts", image: "img2", dob: "4-09-1998"},
    {name: "mark", classname: 9, rollNo: 3, description: "good in sports", image: "img3", dob: "10-08-2002"}
];

const admindb = [{name: "admin", email: "admin@gmail.com", mobileNo: 1230212012, password: "123"}];  // The admin database for the login credentials.
//password is stred as plaintaxt but in remote databse, it will be encrypted using bcrypt.js package.
//  POST method for Creating an admin account
app.post('/admin/create', async (req, res) => {
  const { name, email, mobileNo, password } = req.body;

  // Creating an admin object
  const admin = {
    name,
    email,
    mobileNo,
    password,
  };

  // Saving the admin object to the database (here, created just for testing, otherwise chackin from MongoDB Atlas)
  admindb.push(admin);

  // Returning a success response
  res.json({ success: true });
});


//   -------------------------------------------STUDENT API'S--------------------------------------------------

//--------------------POST API REQUEST FOR CREATING STUDENT-------------------------
// Creating a new student in the database
app.post('/students/create', async (req, res) => {
  const { name, classname, rollNo, description, image, dob } = req.body;

  // Validating the student by the roll Number
  try{
    let newstudent = students.findOne(rollno);
  }
  catch(err){
    console.log("Some error occures");
  }
  if(!newstudent){
    const addstudent = {name, classname, rollNo, description, image, dob};
    students.push(addstudent);
    res.json({ success: true });
  }
  else{
    res.status(400).json({message: "Student already present"});
  }
});


//--------------------PUT API REQUEST FOR UPDATING STUDENT-------------------------
// Updating student dataabase.

app.put('/students/:rollNo/update', async (req, res) => {
  const { rollNo } = req.params;
  const { name, classname, description, image, dob } = req.body;

  // Validating the student database
  try{
    let objIndex = students.findIndex((obj => obj.rollno == rollnofound));
    if(!rollnofound){
        res.status(404).json({message: "Roll number not found in database"});
    }
  }
  catch(err){
    res.send(err);
  }

  // Updating the student object in the database  (as the database is manually created in same file so the data)
  students[objIndex].name = name;                   //will have to add for all object element, otherwise in the case
  students[objIndex].classname = classname;         // of MongoDB, defining the schema object would be done.
  students[objIndex].description = description;
  students[objIndex].image = image;
  students[objIndex].dob = dob;

  res.json({ success: true });
});


//--------------------GET API REQUEST FOR ALL STUDENTS-------------------------

// Getting all student records.
app.get('/students/all', async (req, res) => {
  try{
    const sendstudentdata = students.find();
  }
  catch(err){
    res.send(err);
  }
  res.json({sendstudentdatastudents});  //all the students object will be printed.
});


//--------------------GET API REQUEST FOR SINGLE STUDENT-------------------------

// Getting single student record by roll no
app.get('/students/:rollNo/get', async (req, res) => {
  const { rollNo } = req.params;

  // Getting the student from the database with the given roll no in the request
  try{
    let objIndex = students.findIndex((obj => obj.rollno == rollnofound));
    if(!rollnofound){
        res.status(404).json({message: "Roll number not found in database"});
    }
  }
  catch(err){    // If the student record is not found, returning an error response
    res.send(err);
  }
  res.json({studentdata});
});


//--------------------DELETE API REQUEST-------------------------

// Deleting student from database
app.delete('/students/:rollNo/delete', async (req, res) => {
  const { rollNo } = req.params;

  // Deleting the student record from the database with the given roll number
  const objWithIdIndex = students.findIndex((obj) => obj.rollno === rollno);
  if(objWithIdIndex > -1) {
    students.splice(objWithIdIndex, 1);
  }
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
