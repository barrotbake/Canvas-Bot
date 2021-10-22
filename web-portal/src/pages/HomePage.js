import React from "react";

export let HomePage = () => {
    return (
      <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Discord Bot Integrated with Canvas API</h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Our app is a Discord Bot that syncs with Canvas and helps students keep track of ongoing assignments, announcements, exams, and Zoom meetings. </p>
  
          <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Invite Canvas Bot to your server:</p>
          <a href="https://discord.com/"/>
          <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
  
            <img src="https://nullify.uno/assets/images/discord-button.png" className="h-12 mr-4 shadow rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"/>
            <img src="https://images.squarespace-cdn.com/content/v1/52290b27e4b0d4e459887aa9/1523645697591-KOD97HRR5QMOQ99BU0SK/join-us-on-discord_1.png?format=750w" className="h-12 ml-4 shadow rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"/>
  
          </div>
  
  
            </div>
  
            {/* <!--Right Col--> */}
            <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
              <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="https://raw.githubusercontent.com/tailwindtoolbox/App-Landing-Page/master/devices.svg"/>
            </div>
  
            {/* <!--Footer--> */}
            <div className="w-full pt-60 pb-6 text-sm text-center md:text-left fade-in text-gray-500">
              &copy; CS 362 Group 8
              
              Site designed with <a className="text-blue-300 no-underline hover:no-underline" href="https://reactjs.org/">React</a> and <a className="text-blue-300 no-underline hover:no-underline" href="https://www.tailwindtoolbox.com/">Tailwind Toolbox</a>
            </div>
      </div>
    )
  }
