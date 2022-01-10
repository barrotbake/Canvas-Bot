import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

export let AboutPage = () => {
    return (
<section>
<div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-24 slide-in-bottom">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>          
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-5xl md:mx-auto text-center">                     
            <span className="relative text-indigo-400">Canvas Bot</span>                   
        </h2>
        <p className=" text-lg font-semibold text-gray-500 text-center pb-6 border-b-2">
          This was an Agile project where the end result is a Discord Bot that utilizes Canvas API to ping Discord users for reminders and has various commands that the user can interact with.
        </p>    
      </div>
      <div className="grid place-items-center mb-4 pb-4">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto text-center">                     
            <span className="relative text-gray-600">How to get started</span>                   
        </h2>
        <p className="text-md font-semibold text-gray-500 text-center pb-6 md:mx-48">You will need a valid <a target="_blank" rel="noopener noreferrer" href ="https://www.instructure.com/canvas" className="text-blue-500 hover:underline">Canvas</a> account that has access to at least one course. You will also need a <a target="_blank" rel="noopener noreferrer" href ="https://community.canvaslms.com/t5/Admin-Guide/How-do-I-manage-API-access-tokens-as-an-admin/ta-p/89" className="text-blue-500 hover:underline">Canvas API Token</a> to grant our bot access to your course data.
        <br></br>From there you can add Canvas Bot to your Discord server and try some of the commands using the button below.
        </p>
        
        <a href="https://discord.com/api/oauth2/authorize?client_id=887960594878193725&permissions=545460846583&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer"> <button className="h-full py-4  shadow-md rounded-lg transition duration-200 middle-align ease-in-out transform bg-purple-700 text-white font-bold hover:opacity-60 px-6 hover:shadow-xl " alt="add to server button">Add to Discord<AddCircleIcon className="sm:ml-2"/></button></a> 
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto text-center">                     
            <span className="relative text-gray-600 border-b-2">Commands</span>                   
        </h2>
      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
          <img height="40" width="40" src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/000000/external-alert-alert-icongeek26-outline-gradient-icongeek26-1.png" alt="command"/>
          </div>
          <h6 className="mb-2 font-semibold leading-5">!join</h6>
          <p className="text-md text-gray-900">
            You will need to use this command if you want to register your class for a specific Discord server. Limited to one bot per class/Discord server.  Use <b>!help</b> for additional info.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
          <img height="40" width="40" src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/000000/external-alert-alert-icongeek26-outline-gradient-icongeek26-1.png" alt="command"/>
          </div>
          <h6 className="mb-2 font-semibold leading-5">!announcements</h6>
          <p className="text-md text-gray-900">
            This will retrieve all currently posted announcements for the selected course. 
            If the bot is online, it will ping any incoming new announcements.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
          <img height="40" width="40" src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/000000/external-alert-alert-icongeek26-outline-gradient-icongeek26-1.png" alt="command"/>
          </div>
          <h6 className="mb-2 font-semibold leading-5">!assignments</h6>
          <p className="text-md text-gray-900">
          This will retrieve any active assignments under the selected course, and if the bot is online it will notify any newly posted assignments.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
          <img height="40" width="40" src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/000000/external-alert-alert-icongeek26-outline-gradient-icongeek26-1.png" alt="command"/>
          </div>
          <h6 className="mb-2 font-semibold leading-5">!studysession</h6>
          <p className="text-md text-gray-900">
          Creates a temporary voice channel in any server that will disappear after a set amount of time or can be manually closed using <b>!endsession</b>
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
          <img height="40" width="40" src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/000000/external-alert-alert-icongeek26-outline-gradient-icongeek26-1.png" alt="command"/>
          </div>
          <h6 className="mb-2 font-semibold leading-5">!files</h6>
          <p className="text-md text-gray-900">
            This command will attempt to retrieve files from the course on Canvas and upload them to the Discord server, provided they are unrestricted and under 8MB (Default limit).
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
          <img height="40" width="40" src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/000000/external-alert-alert-icongeek26-outline-gradient-icongeek26-1.png" alt="command"/>
          </div>
          <h6 className="mb-2 font-semibold leading-5">!zoom</h6>
          <p className="text-md text-gray-900">
            This command will retrieve and display the Zoom link for the current course to all users in the server. This can be configured to ping the Zoom link a set amount of time before class starts.
          </p>
        </div>
      </div>
      <div className="text-xl font-bold my-6 text-center space-y-2">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto text-center border-b-2 pb-1">                     
            <span className="relative text-gray-600">Contributors</span>                   
        </h2>       
        <ul>
            <li className="text-blue-500"><a className="hover:underline" href="https://github.com/ryan-broguiere">@ryan-broguiere</a></li>
            <li className="text-blue-500"><a className="hover:underline" href="https://github.com/barrotbake">@barrotbake</a></li>
            <li className="text-blue-500"><a className="hover:underline" href="https://github.com/AlanBlandon">@AlanBlandon</a></li>
            <li className="text-blue-500"><a className="hover:underline" href="https://github.com/ryanwillyams">@ryanwillyams</a></li>
            <li className="text-blue-500"><a className="hover:underline" href="https://github.com/Gage-Giovanni">@Gage-Giovanni</a></li>
            <li className="text-blue-500"><a className="hover:underline" href="https://github.com/JaraAnd">@sJaraAnd</a></li>
        </ul>
        </div>
    </div>

</section>
    )
}