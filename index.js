import express, { json } from 'express';
import fetch from 'node-fetch';
import http from 'http';
import { stringify } from 'querystring';
const { Headers } = fetch;

var app = express();
const PORT = 8080;


const url = "https://csufullerton.instructure.com/api/v1/";



app.use(express.json());

var obj =  `course_3206736`;
var data = '2021-08-19';






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



app.listen(PORT);