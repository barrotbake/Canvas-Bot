/*
ADDED: New fetch file for all required fetch endpoints so far. Also took out all the hardcoded things that included tokens and placed them into
their own config file.
*/ 
import fetch from 'node-fetch';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const config = require("../Config.json")


var obj =  `course_3206736`;
var course = `3323790`;
var course1  = `3206736`;
var date = '2021-08-19';

const url = "https://csufullerton.instructure.com/api/v1/";


export  function discussions() {
  return async function(){
        try {
          const res1 = await fetch(url + `courses/${course}/discussion_topics`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${config.Canvas}`,
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
                "Authorization": `Bot ${config.TOKEN}`, 
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                
                content: string.join('\n').replace(/(<([^>]+)>)/gi, "")
              }),
            }
          );
      
          const data2 = await res2.json();
          console.log(data2);
        } catch (err) {
          console.log(err);
        }
      }
      };

      export  function announcements() {
        return async function(){
        try {
          const res1 = await fetch(url + `/announcements?context_codes[]=${obj}&start_date=${date}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${config.Canvas}` ,
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
                "Authorization": `Bot ${config.TOKEN}`, 
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                
                content: string.join('\n').replace(/(<([^>]+)>)/gi, "")
              }),
            }
          );
            
          const data2 = await res2.json();
          console.log(data2);
          
        } catch (err) {
          console.log(err);
        }
      }
      };
   
     
      export  function assignments() {
        return async function(){
        try {
          const res1 = await fetch(url + `/courses/${course1}/assignments`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${config.Canvas}`,
              "Content-Type": "application/json",
            },
          });
          const data1 = await res1.json();
          console.log(data1);
          var size = data1.length-1;
          const string = [`**Name:**   ${data1[size].name}`, `**Description: **${data1[size].description}`,`**Due Date:**  ${data1[size].due_at}`];
          const res2 = await fetch(
            "https://discordapp.com/api/channels/890800027985903686/messages",
            {
              method: "POST",
              headers: {
                "Authorization": `Bot ${config.TOKEN}`, 
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                
                content: string.join('\n').replace(/(<([^>]+)>)/gi, "")
              }),
            }
          );
      
          const data2 = await res2.json();
          console.log(data2);
        } catch (err) {
          console.log(err);
        }
      }
      };

      
