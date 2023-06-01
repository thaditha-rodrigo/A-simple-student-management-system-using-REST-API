var express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Starting the server
app.listen(3000, () => {
console.log("Server running on port 3000");
});

let students = [ {
    "id": 1,
    "firstname": "",
    "lastname": "",
    "dateofbirth": "",
    "semester": 1,
    "center": "",
    "cgpa": 3.9,
    "email": ""
},
{
    "id": 2,
    "firstname": "",
    "lastname": "",
    "dateofbirth": "",
    "semester": 1,
    "center": "",
    "cgpa": 3.7,
    "email": ""
},
{
    "id": 3,
    "firstname": "",
    "lastname": "",
    "dateofbirth": "",
    "semester": 1,
    "center": "",
    "cgpa": 3.8,
    "email": ""
}];
let student = {"id":1,"firstname":"","lastname":"","dateofbirth":"","semester":2,"center":"","cgpa":3.5,"email":""};

//View
app.get("/students", (req, res)=> {
res.json(students);
});

//id_view
app.get("/students/id=:id", (req, res)=> {
let sid=parseInt(req.params.id);
let tempStu=students.filter((x) => x.id == sid);
if(tempStu){
res.json(tempStu);
}
else{
res.sendStatus(404);
res.json({message: "Student not found"});
}
});

//firstname_view
app.get("/students/firstname=:firstname", (req, res)=> {
let sfirstname=req.params.firstname;
let tempStu=students.filter((x) => x.firstname == sfirstname.toLowerCase());
if(tempStu){
res.json(tempStu);
}
else{
res.sendStatus(404);
res.json({message: "Student not found"});
}
});

//lastname_view
app.get("/students/lastname=:lastname", (req, res)=> {
let slastname=req.params.lastname;
let tempStu=students.filter((x) => x.lastname == slastname.toLowerCase());
if(tempStu){
res.json(tempStu);
}
else{
res.sendStatus(404);
res.json({message: "Student not found"});
}
});

//dob_view
app.get("/students/dateofbirth=:dateofbirth", (req, res)=> {
let sdateofbirth=req.params.dateofbirth;
let tempStu=students.filter((x) => x.dateofbirth == sdateofbirth);
if(tempStu){
res.json(tempStu);
}
else{
res.sendStatus(404);
res.json({message: "Student not found"});
}
});

//center_view
app.get("/students/center=:center", (req, res)=> {
let scenter=req.params.center;
let tempStu=students.filter((x) => x.center == scenter);
if(tempStu){
res.json(tempStu);
}
else{
res.sendStatus(404);
res.json({message: "Student not found"});
}
});

//semester_view
app.get("/students/semester=:semester", (req, res)=> {
let ssemester=parseInt(req.params.semester);
let tempStu=students.filter((x) => x.semester == ssemester);
if(tempStu){
res.json(tempStu);
}
else{
res.sendStatus(404);
res.json({message: "Student not found"});
}
});

//cgpa_view
app.get("/students/cgpa=:cgpa", (req, res)=> {
let scgpa=parseFloat(req.params.cgpa);
let tempStu=students.filter((x) => x.cgpa == scgpa);
if(tempStu){
res.json(tempStu);
}
else{
res.sendStatus(404);
res.json({message: "Student not found"});
}
});

//email_view
app.get("/students/email=:email", (req, res)=> {
let semail=req.params.email;
let tempStu=students.filter((x) => x.email == semail);
if(tempStu){
res.json(tempStu);
}
else{
res.sendStatus(404);
res.json({message: "Student not found"});
}
});

//Insert
app.post("/student", (req, res)=> {
student = req.body;
students.push(student);
res.send('Student is added to the list');
});

//Update
app.put("/students/:id", (req, res)=> {
let sid=parseInt(req.params.id);
let stu=req.body;
let tempStu=students.filter((x) => x.id === sid)[0];
if(tempStu){
tempStu.id = stu.id;
tempStu.firstname = stu.firstname;
tempStu.lastname = stu.lastname;
tempStu.dateofbirth = stu.dateofbirth;
tempStu.semester = stu.semester;
tempStu.center = stu.center;
tempStu.cgpa = stu.cgpa;
tempStu.email = stu.email;
res.sendStatus(200);
}
else{
res.sendStatus(404);
}
});

//Delete_id
app.delete("/students/id=:id", (req, res) => {
let studentId = parseInt(req.params.id);
let currentStudent = students.filter((x) => x.id == studentId)[0];
if (currentStudent) {
students = students.filter((x) => x.id != studentId);
//res.statusMessage = "Student deleted successfully.";
res.json({message:"Deleted successfully"});
res.sendStatus(200);
} else {
//res.statusMessage = "Student does not exist";
res.json({message:"Student not found"});
res.sendStatus(404);
}
});

//Delete_email
app.delete("/students/email=:email", (req, res) => {
let studentemail = req.params.email;
let currentStudent = students.filter((x) => x.email == studentemail)[0];
if (currentStudent) {
students = students.filter((x) => x.email != studentemail);
//.statusMessage = "Student deleted successfully.";
res.json({message:"Deleted successfully"});
res.sendStatus(200);
} else {
//res.statusMessage = "Student does not exist";
res.json({message: "Student not found"});
res.sendStatus(404);
}
});