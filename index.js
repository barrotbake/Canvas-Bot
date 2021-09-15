/*
This file will get the announcement message off of our 362 Class and package.json will show the dependencies. 
You will need to use your own access token in the "authorization" property
UPDATE V2: Added function that updates on an interval of 1 minute. Once we have a DB up we can get custom user course ID.
*/
import express, { json } from 'express';
import fetch from 'node-fetch';
import http from 'http';
import { stringify } from 'querystring';
const { Headers } = fetch;

var app = express();
const PORT = 8080;


const url = "https://csufullerton.instructure.com/api/v1/";



app.use(express.json());

var obj =  `course_3323790`;
var course = `3323790`;
var data = '2021-08-19';

setInterval(intervalFunc2,60000);

function intervalFunc() {
     
   // setInterval(intervalFunc,60000);
fetch(url + `/announcements?context_codes[]=${obj}&start_date=${data}` , {
    method: "GET",
    headers : {
        'Authorization' : 'Bearer <Your access token>',
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

function intervalFunc2() {
     
  
fetch(url + `courses/${course}/discussion_topics` , {
    method: "GET",
    headers : {
        'Authorization' : 'Bearer 349~drgXiiTApxvuCRfcrcHEAsmDXl4eC0ImwGHUvAJEdQtIdcj9tJvWqcFK1joWK1Yz',
        'Content-Type' : 'application/json'
    }
    
})
.then(res => res.json())
.then(data => { 
       
    console.log(data[0].id);
    console.log(data[0].title);
    console.log(data[0].message);
}
 ) 
.catch(err => console.log(err))
}


app.listen(PORT);