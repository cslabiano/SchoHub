const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // so frontend (port 3000) can access backend (port 3001)

const app = express();

//const uri = 'mongodb+srv://moniqjosifinalvarez:Malablurr09$@mon.sjzeotk.mongodb.net/jpads_db?retryWrites=true&w=majority';
const uri = 'mongodb+srv://moniqjosifinalvarez:Malablurr09$@mon.sjzeotk.mongodb.net/SchoHub_db?retryWrites=true&w=majority';

//connect to mongodb 
mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

  const PORT = 3001; // Use any available port
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

// controllers 
const usersController = require('./controllers/users-controller');
const resourcesController = require('./controllers/resources-controller');
const requestsController = require('./controllers/requests-controller');
const residentUploadsController = require('./controllers/residentUploads-controller');
const { updateMany } = require("./models/resources");

app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', usersController);
app.use('/api/resources', resourcesController);
app.use('/api/requests', requestsController);
app.use('/api/residentUploads', residentUploadsController);
app.use("/files", express.static("files"));


//--for the resources part--
app.use("/files", express.static("files"));

const resources = mongoose.model("resources");

const multer = require('multer')

//store files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/files")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

//put file details to the database
app.post('/upload-files', upload.single("file"),async(req,res) => {
  const course = req.body.course;
  const title = req.body.title;
  const link = req.file.filename;
  const type = req.body.type;

  try {
    await resources.create({course:course,file_name:title,link:link,type:type});
  } catch (error) {}
})

app.get('/get-files', async (req, res) => {
  resources.find({}).then((data) => { //find documents from the collection
      res.send( {status: "ok", data: data});
  }).catch((err) => {
      console.log('error: ', err);
  });
});



// == for LOGIN feature ==
app.get('/login/:Email/:Password', async(req, res) => {
  const Email = req.params.Email; // get Email and Password
  const Password = req.params.Password;

  const response = await fetch("http://localhost:3001/api/users"); // obtain user collection from database
  const data = await response.json();

  // search for user in database
  let loginSuccess = false;
  for (let i = 0; i < data.length; i++) {
    if (data[i].email === Email && "yses2005schohub" === Password) { // one password for all users: yses2005schohub
      console.log("Existing user email: ", data[i].email);
      //console.log("Existing user password: ", data[i].password);
      console.log("Existing user id: ", data[i]._id);
      console.log("Existing user class: ", data[i].class);
      console.log("Existing user history: ", data[i].history);
      console.log("email credentials match!");
      loginSuccess = data[i]; // return user if user exists in database
      break;
    }
  }
  res.send(loginSuccess); // return result to Login.js  
});


// == for User Request Form =======
app.get('/record-request/:userID/:Lastname/:Firstname/:RequestFilename/:Purpose', async(req, res) => {
  const Lastname = req.params.Lastname; // get file request information
  const Firstname = req.params.Firstname;
  const RequestFilename = req.params.RequestFilename;
  const Purpose = req.params.Purpose;
  const UserID = req.params.userID;

  // split filename
  // format: <Subject>_<SubjectCode>_<Module#/Exam#>_<TypeOfMaterial>
  const filenameSections = RequestFilename.split("_"); // use underscore as a delimiter
  const courseCode = filenameSections[0] + " " + filenameSections[1];
  const fileDescription = filenameSections[2] + "_" + filenameSections[3];

  // construct date
  var today = new Date();
  var dd = today.getDate(); // date of the month
  var mm = today.getMonth() + 1; // month (+1 since months are zero-based)
  var yyyy = today.getFullYear(); // year

  if (dd < 10) { dd = '0' + dd } // add leading zeroes
  if (mm < 10) { mm = '0' + mm } 

  const currentDate = mm + '/' + dd + '/' + yyyy;

  // create a new document in requests collection
  const response = await fetch("http://localhost:3001/api/requests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fname: Firstname,
      lname: Lastname,
      userID: UserID,
      date: currentDate,
      course: courseCode,
      file: fileDescription,
      purpose: Purpose,
    }),
  });

  const result = await response.json();
  console.log("Created new request: ", result);

  if (result){
    res.send(result);
  }
});

// == for User Add File =======
app.get('/record-user-add-file/:Firstname/:Lastname/:Subject/:Filename/:Description', async(req, res) => {
  const Firstname = req.params.Firstname; // get file request information
  const Lastname = req.params.Lastname;
  const Subject = req.params.Subject;
  const Filename = req.params.Filename;
  const Description = req.params.Description;

  const updatedFileName = 'newFileName';
  setFileName(updatedFileName); // prompts error: FUNCTION UNDEFINED
  
  // might also promt error as the format is not the same with residentUploads model
  // create a new document in requests collection
  const response = await fetch("http://localhost:3001/api/residentUploads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fname: Firstname,
      lname: Lastname,
      subject: Subject,
      filename: Filename,
      filedescription: Description,
    }),
  });

  const result = await response.json();
  console.log("Created new request: ", result);

  if (result){
    res.send(result);
  }
}); 


// == for RESOLVED/REJECTED User File Requests =====
app.get('/manage-requests/:userID/:courseCode/:filename/:status', async(req, res) => {
  const UserID = req.params.userID;
  const CourseCode = req.params.courseCode;
  const Filename = req.params.filename;
  const Status = req.params.status; // Resolved/Rejected

  // get user history array
  const response0 = await fetch(`http://localhost:3001/api/users/${UserID}`);
  const user = await response0.json();
  const History = user.history;

  const notif = { // create an object with the notification format
    course: CourseCode,
    file: Filename,
    status: Status,
  }

  History.push(notif); // add the resolved/rejected request to the user's history
  console.log(History);

  // update user data (history array)
  const response1 = await fetch(`http://localhost:3001/api/users/${UserID}`, {
      method: 'PUT',
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({ // update new data (History) and retain non-updated data
        name: user.name,
        email: user.email,
        class: user.class,
        batch: user.orgBatch,
        department: user.department,
        bio: user.bio,
        history: History
      }),
    })
  const result = await response1.json();

  res.send(result);
});

// == for DELETING NOTIF IN USER HISTORY ======
app.get('/delete-history/:type/:userID/:index?', async(req, res) => {
  const UserID = req.params.userID;
  const Index = req.params.index;
  const Type = req.params.type;

  // get user history array
  const response0 = await fetch(`http://localhost:3001/api/users/${UserID}`);
  const user = await response0.json();
  const History = user.history;

  if (Type === "single"){
    History.splice(Index, 1); // remove 1 array element only with given index
  } else if (Type === "clear"){
    History.splice(0, History.length); // remove all element starting from index 0
  }

  console.log(History);

  // update user data (history array)
  const response1 = await fetch(`http://localhost:3001/api/users/${UserID}`, {
      method: 'PUT',
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({ // update new data (History) and retain non-updated data
        name: user.name,
        email: user.email,
        class: user.class,
        batch: user.orgBatch,
        department: user.department,
        bio: user.bio,
        history: History
      }),
    })
  const result = await response1.json();

  res.send(result);
});