/*
This file will get the announcement message off of our 362 Class and package.json will show the dependencies. 
You will need to use your own access token in the "authorization" property
UPDATE V2: Added function that updates on an interval of 1 minute. Once we have a DB up we can get custom user course ID.
UPDATE V3: Can now communicate with the discord server itself and pull information from the canvas as well
*/
import express, { json, response } from 'express';
import fetch from 'node-fetch';
var app = express();
import  http from 'http';
import { stringify } from 'querystring';
const { Headers } = fetch;

const PORT = 8080;


const url = "https://csufullerton.instructure.com/api/v1/";

const user = {content: 'hello world'}



app.use(express.json());

var obj =  `course_3323790`;
var course = `3323790`;
var data = '2021-08-19';

//setInterval(intervalFunc2,60000);


function intervalFunc() {
     
   // setInterval(intervalFunc,60000);
fetch(url + `/announcements?context_codes[]=${obj}&start_date=${data}` , {
    method: "GET",
    headers : {
        'Authorization' : 'Bearer <Auth Token>',
        'Content-Type' : 'application/json'
    }
    
})
.then(res => res.json())
.then(data => { 
       
        console.log(data[0].message);
}
 ) 
.catch(err => console.log(err))
}

//function intervalFunc2() {
     
app.all('/whatever', async(response) =>{
    (async function main() {
        try {
          const res1 = await fetch(url + `courses/${course}/discussion_topics`, {
            method: "GET",
            headers: {
              Authorization: "Bearer <Auth Token>",
              "Content-Type": "application/json",
            },
          });
          const data1 = await res1.json();
          console.log(data1);
          const string = [data1[0].title, data1[0].message];
          const res2 = await fetch(
            "https://discordapp.com/api/channels/890800027985903686/messages",
            {
              method: "POST",
              headers: {
                "Authorization": "Bot <Auth Token>", 
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                
                content: string.join('\n').replace('<p>', '').replace('</p>','')
              }),
            }
          );
      
          const data2 = await res2.json();
          console.log(data2);
        } catch (err) {
          console.log(err);
        }
      })();

});




app.listen(PORT);