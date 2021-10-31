/*
ADDED: New fetch file for all required fetch endpoints so far. Also took out all the hardcoded things that included tokens and placed them into
their own config file.
*/ 
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const   {updateChannelID} = require('./dbUtil.js');
const  {getRecord} = require('./dbUtil.js');
const  {clearData} = require('./clear.js');


var obj;
var course;
var url;
var course1;
var access_token;



function discussions(guild, channel) {
  
  getDiscussions();
  async function getDiscussions() {
      try {
          updateChannelID(guild, channel);
          await getRecord({
              guild_id: `${guild}`
          }, getFetchData);
          const res1 = await fetch(url + `courses/${course}/discussion_topics?scope=unlocked`, {
              method: "GET",
              headers: {
                  Authorization: `Bearer ${access_token}`,
                  "Content-Type": "application/json",

              },
          });
          const apiData = await res1.json();

          for (discussions of apiData) {
              const string = ["**TOPIC: " + discussions.title + "**", discussions.message + "\n"];
              const res2 = await fetch(
                  `https://discordapp.com/api/channels/${channel}/messages`, {
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

          }
      } catch (err) {
          console.log(err);
      }

      clearData();
  }
  
};

function announcements(guild, channel) {

 

  getAnnouncements();


  async function getAnnouncements() {


      updateChannelID(guild, channel);

      try {

          await getRecord({
              guild_id: `${guild}`
          }, getFetchData);

          const res1 = await fetch(url + `/announcements?context_codes[]=${obj}&latest_only=true`, {
              method: "GET",
              headers: {
                  Authorization: `Bearer ${access_token}`,
                  "Content-Type": "application/json",

              },
          });
          const apiData = await res1.json();
          console.log(apiData);
          for (announcements of apiData) {
              const string = [`\`\`\`${announcements.title}\n`, `${announcements.message}\n\`\`\``];
              const res2 = await fetch(
                  `https://discordapp.com/api/channels/${channel}/messages`, {
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


function assignments(guild, channel) {
  
  getAssignments();


  async function getAssignments() {
      updateChannelID(guild, channel);
      try {

          await getRecord({
              guild_id: `${guild}`
          }, getFetchData);
          const res1 = await fetch(url + `/courses/${course}/assignments?order_by=due_at`, {
              method: "GET",
              headers: {
                  Authorization: `Bearer ${access_token}`,
                  "Content-Type": "application/json",

              },
          });
          const apiData = await res1.json();

          console.log(apiData);
          


          for (assignments of apiData) {
              const string = [`\`\`\`Name:   ${assignments.name}`, `Description:\n ${assignments.description}`, `Due Date:  ${assignments.due_at}\n\`\`\``];
              const res2 = await fetch(
                  `https://discordapp.com/api/channels/${channel}/messages`, {
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
  obj = 'course_' + document._courseid;
  course = document._courseid;
  course1 = "_" + course;
  url = 'https://' + document.prefix + '.instructure.com/api/v1/';
  access_token = document.access_token;
  console.log('obj = ' + obj + '\ncourse = ' + course + '\nurl = ' + url + '\naccess_token = ' + access_token);
}

module.exports = {assignments, discussions, announcements}