/*
This file will get the announcement message off of our 362 Class and package.json will show the dependencies. 
You will need to use your own access token in the "authorization" property
UPDATE V2: Added function that updates on an interval of 1 minute. Once we have a DB up we can get custom user course ID.
UPDATE V3: Can now communicate with the discord server itself and pull information from the canvas as well
UPDATE V4: Cleaned up index.js for only thing that may be necessary. Added a fetch folder.
UPDATE V5: Added a bunch of things unhardcoded and we are connected to the db and can pull from it and send based on information on the DB
*/
import express, { json, query, request, response } from 'express';
import { assignments , announcements , discussions} from "./Fetch/fetchCalls.js";
var app = express();
app.use(express.json());
const PORT = 8080;
app.listen(PORT);

var guild;
var channel;

//setInterval(intervalFunc2,60000);


//function intervalFunc2() {
     
 app.all('/assignments',req => assignments(guild = req.body.guild,channel =req.body.channel));
app.all('/discussions',req => discussions(guild = req.body.guild,channel =req.body.channel));
app.all('/announcements', req => announcements(guild = req.body.guild,channel =req.body.channel));





