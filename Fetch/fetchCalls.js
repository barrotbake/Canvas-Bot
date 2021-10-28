/*
ADDED: New fetch file for all required fetch endpoints so far. Also took out all the hardcoded things that included tokens and placed them into
their own config file.
*/ 
import fetch from 'node-fetch';
import { createRequire } from "module";
import { getRecord, updateChannelID } from './dbUtil.js';
import { clearData } from './clear.js';
const require = createRequire(import.meta.url);
const config = require("../Canvas Bot/Source/Data/config.json")


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
          await getRecord({ guild_id : `${guildid}`}, getFetchData);
          const res1 = await fetch(url + `courses/${course}/discussion_topics?scope=unlocked`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${access_token}`,
              "Content-Type": "application/json",
            },
          });
          const apiData = await res1.json();
          //console.log(apiData);
          for(discussions of apiData){
          const string = ["**TOPIC: "+discussions.title +"**", discussions.message + "\n"];
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
      
          const apiResponse = await res2.json();
         // console.log(apiResponse);
          }
        } catch (err) {
          console.log(err);
        }
        clearData();
      }
      };

      export function announcements(guild,channel)  {
        guildid = guild; 
        channelid = channel;
       
        announcementsFunc();

        
         async function announcementsFunc(){
          
          
          updateChannelID(guildid,channelid);
          
        try {
          
          await getRecord({ guild_id : `${guildid}`}, getFetchData);
        
          const res1 = await fetch(url + `/announcements?context_codes[]=${obj}&latest_only=true`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${access_token}` ,
              "Content-Type": "application/json",
            },
          });
          const apiData = await res1.json();
          console.log(apiData);
          for( announcements of apiData){
          const string = [`\`\`\`${announcements.title}\n`, `${announcements.message}\n\`\`\``];
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
            
          const apiResponse = await res2.json();
          console.log(apiResponse);
          }
          
        } catch (err) {
          console.log(err);
        }
        clearData();
      }

      
      
    }
   
     
      export  function assignments(guild, channel) {
        guildid = guild;
        channelid = channel;
        assignmentsFunc();
        
        
         async function assignmentsFunc(){
          updateChannelID(guildid,channelid);
        try {
          console.log(guildid +"guild2")
          await getRecord({guild_id : `${guildid}`}, getFetchData);
          const res1 = await fetch(url + `/courses/${course}/assignments?order_by=due_at`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${access_token}`,
              "Content-Type": "application/json",
            },
          });
          const apiData = await res1.json();
          
          console.log(apiData);
          var size = apiData.length-1;
          
          
          for( assignments of apiData){
          const string = [`\`\`\`Name:   ${assignments.name}`, `Description:\n ${assignments.description}`,`Due Date:  ${assignments.due_at}\n\`\`\``];         
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
          
      
          const apiResponse = await res2.json();
          console.log(apiResponse);
          }
        } catch (err) {
          console.log(err);
        }
       
        clearData();
      }
      }


       function getFetchData(document) {
         obj =  'course_' + document._courseid;
         course = document._courseid;
         course1 = "_" + course;
         url = 'https://' + document.prefix + '.instructure.com/api/v1/';
         access_token = document.access_token;
         console.log('obj = ' + obj + '\ncourse = ' + course + '\nurl = ' + url + '\naccess_token = ' + access_token);
      }
      
      
      
      