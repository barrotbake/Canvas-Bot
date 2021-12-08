const express = require("express");

const loginRoutes = express.Router();

const dbo = require("../db/connect");

const ObjectId = require("mongodb").ObjectId;


// This section will help you create a new doc.
loginRoutes.route("/login/sign-up").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };
  db_connect.collection("user_info").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

loginRoutes.route("/login/portal").post(function (req, response) {
  let db_connect = dbo.getDb();
  const updateDoc = {
    $set: {
      courseId: req.body.courseId,
      zoomLink: req.body.zoomLink,
      canvasApiToken: req.body.canvasApiToken,
    },
  };

  

  db_connect.collection("user_info").updateOne({ username: req.body.username }, updateDoc, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

loginRoutes.route("/login/authenticate").post(async function (req,response) {
  
  let db_connect = dbo.getDb();
  //db name and collection replace here
  let myobj = {
    username: req.body.username,
    password: req.body.password,
  };
  
  let userAuth = await db_connect.collection("user_info").findOne( {username: myobj.username})
  try {
  if (!userAuth) {
    console.log("Username or password do not match any credentials in the system.")     
    return false;
  }
  else {
    if (myobj.password !== userAuth.password) {
      console.log("Incorrect password!")
      console.log(myobj.password)
      console.log(userAuth)           
      return false;
    } else {
      console.log(`Log in Success! Welcome ${userAuth.username}`)            
      return true;
    }
  }
  
}
catch (e)
{
  console.log(e)
}

  // since this method returns the matched document, not a cursor, print it directl
});


module.exports = loginRoutes;