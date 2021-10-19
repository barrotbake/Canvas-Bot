/*
ADDED: New fetch file for all required fetch endpoints so far. Also took out all the hardcoded things that included tokens and placed them into
their own config file.
*/ 
import fetch from 'node-fetch';
import { createRequire } from "module";
import { getRecord, updateChannelID } from './dbUtil.js';
const require = createRequire(import.meta.url);
const config = require("../Config.json")


var obj;
var course;
var url;
var course1;
var access_token;
var guildid;
var channelid;


export  function discussions(guild,channel) {
  guildid = guild; 
  channelid = channel;
  discussionsFunc();
   async function discussionsFunc(){
        try {
          updateChannelID(guildid,channelid);
          await getRecord({ _courseid : '3664620'}, getFetchData);
          const res1 = await fetch(url + `courses/${course}/discussion_topics`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${access_token}`,
              "Content-Type": "application/json",
            },
          });
          const data1 = await res1.json();
          console.log(data1);
          const string = [data1[0].title, data1[0].message];
          const res2 = await fetch(
            `https://discordapp.com/api/channels/${channelid}/messages`,
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

      export function announcements(guild,channel)  {
        guildid = guild; 
        channelid = channel;
        announcementsFunc();

        
         async function announcementsFunc(){
          console.log("I am here")
          
          updateChannelID(guildid,channelid);
          
        try {
          
          await getRecord({ _courseid : '3664620'}, getFetchData);
        
          const res1 = await fetch(url + `/announcements?context_codes[]=${obj}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${access_token}` ,
              "Content-Type": "application/json",
            },
          });
          const data1 = await res1.json();
          console.log(data1);
          const string = [data1[0].title, data1[0].message];
          const res2 = await fetch(
            `https://discordapp.com/api/channels/${channelid}/messages`,
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
      
    }
   
     
      export  function assignments(guild, channel) {
        guildid = guild;
        channelid = channel;
        assignmentsFunc();
        
        
         async function assignmentsFunc(){
          updateChannelID(guildid,channelid);
        try {
          await getRecord({_courseid : '3664620'}, getFetchData);
          const res1 = await fetch(url + `/courses/${course1}/assignments`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${access_token}`,
              "Content-Type": "application/json",
            },
          });
          const data1 = await res1.json();
          console.log(data1);
          var size = data1.length-1;
          const string = [`**Name:**   ${data1[size].name}`, `**Description: **${data1[size].description}`,`**Due Date:**  ${data1[size].due_at}`];
          const res2 = await fetch(
            `https://discordapp.com/api/channels/${channelid}/messages`,
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

      await getRecord({ _courseid : '3664620'}, getFetchData);

      function getFetchData(document) {
        obj =  'course_' + document._courseid;
        course = document._courseid;
        course1 = "_" + course;
        url = 'https://' + document.prefix_field + '.instructure.com/api/v1/';
        access_token = document.access_token;
      }
      
      console.log('obj = ' + obj + '\ncourse = ' + course + '\nurl = ' + url + '\naccess_token = ' + access_token);

      