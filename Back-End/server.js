const express = require("express");
const cors = require("cors");
const DB = require("./database");
const app = express();
//==============================================================================================//

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
//==============================================================================================//

app.get("/", (req, res) => {
  res.json("server is working");
});

//=======================================GET DATA===============================================//
// app.get("/showcase", (req, res) => {
//   DB.getPlaces(result => {
//     console.log("CALL BACK FROM SERVER");
//     res.json(result);
//   });
// });


//===================================GET DATA BY ID==============================================//

// app.get("/place/:ID", (req, res) => {
//   DB.placeById(result => res.json(result), req.params.ID);
// });

//=======================================ADD DATA===============================================//
// app.post("/addPlace", (req, res) => {
//   let inputs=req.body;
//   console.log("BODY:", inputs);
//   DB.addPlace(result => {
//     console.log("CALL BACK FROM SERVER");
//     res.json(result);
//   }, inputs);
// });

// app.post("/addData", (req, res) => {
//   let inputs=req.body;
//   console.log("BODY:", inputs);
//   DB.addForm(result => {
//     console.log("CALL BACK FROM SERVER");
//     res.json(result);
//   }, inputs);
// });


//===================================PORT LISTENING=============================================//
const PORT = 2000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
