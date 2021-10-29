import React from 'react';

const Landing = () => {
    return (
  <div class="h-screen pb-14 bg-right bg-cover"> 
    <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* <Form formHeading="Create Account" inputMap={["Username", "Password", "Canvas ID"]}></Form> */}
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Discord Bot Integrated with Canvas API</h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Our app is a Discord Bot that syncs with Canvas and helps students keep track of ongoing assignments, announcements, exams, and Zoom meetings. </p>
  
          <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Invite Canvas Bot to your server:</p>
          
          <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
  
          <img src="https://nullify.uno/assets/images/discord-button.png" className="h-12 mr-4 shadow rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg" alt="discord button"/>
          <img src="https://images.squarespace-cdn.com/content/v1/52290b27e4b0d4e459887aa9/1523645697591-KOD97HRR5QMOQ99BU0SK/join-us-on-discord_1.png?format=750w" className="h-12 ml-4 shadow rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg" alt="discord button"/> 
  
          </div>
  
  
        </div>
  
            {/* <!--Right Col--> */}
            <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
              <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="https://raw.githubusercontent.com/tailwindtoolbox/App-Landing-Page/master/devices.svg" alt="devices"/>
            </div>
              
    </div>
  </div>
    )
}

export default Landing;