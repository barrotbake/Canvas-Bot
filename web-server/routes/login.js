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
  let myobj = {
    courseId: req.body.courseId,
    zoomLink: req.body.zoomLink,
    canvasApiToken: req.body.canvasApiToken,
  };
  db_connect.collection("user_info").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});


module.exports = loginRoutes;