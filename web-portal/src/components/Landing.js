import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Landing = () => {
  const patterns = {
    flexRow: "container mt-6 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center ",

    subHeading: "my-4 text-4xl md:text-4xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1 max-w-sm ",

    bodyText: "leading-normal text-base md:text-base mb-8 text-grey-700 text-center md:text-left slide-in-bottom-subtitle max-w-sm "
  }
  return (
    <div className='landing'>
      <div className="h-auto pb-24 bg-right bg-cover">
        <div className="container pt-20 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Discord Bot Integrated with Canvas API</h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Our app is a Discord Bot that syncs with Canvas and helps students keep track of ongoing assignments, announcements, exams, and Zoom meetings. </p>

            <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Invite Canvas Bot to your server:</p>

            <div className="flex w-full justify-center md:justify-start sm:pb-0 fade-in h-14 space-x-10">
              <a href="https://discord.com/api/oauth2/authorize?client_id=887960594878193725&permissions=545460846583&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer"> <button className="h-full shadow-md rounded-lg transition duration-200 middle-align ease-in-out transform bg-purple-700 text-white font-bold hover:opacity-60 px-6 hover:shadow-xl pb-0 " alt="add to server button">Add to Discord<AddCircleIcon className="sm:ml-2"/></button></a>

              <a href="https://discord.com/" target="_blank" rel="noopener noreferrer"><button><img src="https://nullify.uno/assets/images/discord-button.png" className="mr-4 shadow-md rounded-lg transition duration-200 ease-in-out transform hover:opacity-60 hover:shadow-xl h-14" width="200" alt="discord button" /></button></a>
            </div>
          </div>

          {/* <!--Right Col--> */}
          <a href="https://github.com/barrotbake/Canvas-Bot" target="_blank" rel="noopener noreferrer" className=" xl:w-3/5 py-6 slide-in-bottom overflow-x-hidden overflow-y-hidden bg-contain">
          <button className="h-full">            
            <img className="bg-contain lg:ml-16 w-11/12 mx-auto lg:mr-0 shadow-xl border-4 rounded-xl border-purple-600 hover:opacity-60 transition duration-300" src="images/project flowchart.png" alt="workflow" />
          </button>         
          </a>

        </div>
      </div>
      {/* announcements section */}
      <div className={patterns.flexRow}>
      <div className="flex flex-col w-full xl:w-2/5 justify-center items-center lg:items-start overflow-y-hidden">
        <h1 className={patterns.subHeading}>Never miss a class announcement again</h1>
        <p className={patterns.bodyText}>Don't want to bounce around emails and web pages to find the latest updates from class? You can now get all recent announcements.</p>
      </div>        
        <img className="w-full xl:w-3/5 border-2 border-purple-600 rounded-lg slide-in-bottom" src="https://media.discordapp.net/attachments/918467513661161472/918468086204604416/Screenshot_2021-12-09_034340.png" alt="announcements demo"/>
        
      </div>

      {/* assignments section */}      
      <div className={patterns.flexRow}>
      <div className="flex flex-col w-full xl:w-2/5 items-center overflow-y-hidden md:hidden">  
        <h1 className={patterns.subHeading}>Find assignments and files easily</h1>
        <p className={patterns.bodyText}>Simplify finding assignments and associated files by using !assignments. You can now get any file uploaded to your class on demand.</p>
      </div>
      <img className="w-full xl:w-3/5 border-2 border-purple-600 rounded-lg slide-in-bottom" src="https://media.discordapp.net/attachments/887972221178503223/918686390865240074/unknown.png" alt="assignments demo"/>
      <div className="hidden md:flex flex-col w-full xl:w-2/5 justify-end lg:items-end overflow-y-hidden">  
        <h1 className={patterns.subHeading}>Find assignments and files easily</h1>
        <p className={patterns.bodyText}>Simplify finding assignments and associated files by using !assignments. You can now get any file uploaded to your class on demand.</p>
      </div>
        
      </div>

        {/* zoom section */}
        <div className={patterns.flexRow}>
        <div className="flex flex-col w-full xl:w-2/5 justify-center items-center lg:items-start overflow-y-hidden">
          <h1 className={patterns.subHeading}>Jump into class from Discord</h1>
          <p className={patterns.bodyText}>Automate the way you get to class. Canvas Bot sends out a reminder and a link to class a couple minutes before class starts.</p>
        </div>
        <img className="w-full xl:w-3/5 border-2 border-purple-600 rounded-lg slide-in-bottom" src="https://media.discordapp.net/attachments/887972221178503223/918689157776281600/unknown.png" alt="zoom demo"/>
      </div>
    </div>
  )
}

export default Landing;