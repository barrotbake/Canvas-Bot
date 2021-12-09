/*
This file will get the announcement message off of our 362 Class and package.json will show the dependencies. 
You will need to use your own access token in the "authorization" property
UPDATE V2: Added function that updates on an interval of 1 minute. Once we have a DB up we can get custom user course ID.
UPDATE V3: Can now communicate with the discord server itself and pull information from the canvas as well
UPDATE V4: Cleaned up index.js for only thing that may be necessary. Added a fetch folder.
UPDATE V5: Added a bunch of things unhardcoded and we are connected to the db and can pull from it and send based on information on the DB
UPDATE V6: Fixed all the require/importing issues that wouldn't allow for functions ot be called. Removed the initialization of variables in the functions
so there isn't information sent to the wrong servers.
*/

//setInterval(intervalFunc2,60000);


//function intervalFunc2() {
const { request } = require('express');
const express = require('express');
const { assignments , announcements , discussions, files} = require ("./Fetch/fetchCalls.js");
var router = express.Router()
var app = express();
app.use(express.json());
var PORT = process.env.PORT || 8080;
app.listen(PORT);



        

app.all('/assignments',(request) => { assignments(request.body.guild, request.body.channel);});
app.all('/discussions',(request) => { discussions(request.body.guild, request.body.channel);});
app.all('/announcements',(request) => { announcements(request.body.guild,request.body.channel);});
app.all('/files',(request) => { files(request.body.guild, request.body.channel)});







