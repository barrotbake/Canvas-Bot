import React from 'react';
import Button from '@mui/material/Button'

const Landing = () => {
  const patterns = {
    flexRow: "container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-col ",

    subHeading: "my-4 text-4xl md:text-4xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1 max-w-sm ",

    bodyText: "leading-normal text-base md:text-base mb-8 text-grey-700 text-center md:text-left slide-in-bottom-subtitle max-w-sm "
  }
  return (
    <div className='landing'>
      <div class="h-auto pb-24 bg-rightP bg-cover">
        <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Discord Bot Integrated with Canvas API</h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Our app is a Discord Bot that syncs with Canvas and helps students keep track of ongoing assignments, announcements, exams, and Zoom meetings. </p>

            <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Invite Canvas Bot to your server:</p>

            <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
              <a href="https://discord.com/api/oauth2/authorize?client_id=887960594878193725&permissions=545460846583&scope=bot%20applications.commands"> <button className="h-full mr-4 shadow rounded-lg  transition duration-200 middle-align ease-in-out transform bg-purple-800 text-white font-bold hover:-translate-y-1 px-8 hover:shadow-lg " alt="add to server button a">Add to Discord</button></a>

              <img src="https://nullify.uno/assets/images/discord-button.png" className="h-12 mr-4 shadow rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg" alt="discord button" />
            </div>
          </div>

          {/* <!--Right Col--> */}
          <div className="w-full xl:w-3/5 py-6 slide-in-bottom overflow-y-hidden">
            <img className="w-5/6 mx-auto lg:mr-0" src="https://raw.githubusercontent.com/tailwindtoolbox/App-Landing-Page/master/devices.svg" alt="devices" />
          </div>

        </div>
      </div>
      {/* announcements section */}
      <div className={patterns.flexRow}>
        <h1 className={patterns.subHeading}>Never miss a class announcement again</h1>
        <p className={patterns.bodyText}>Don't want to bounce around emails and web pages to find the latest updates from class? You can now get all recent announcements.</p>
      </div>

      {/* assignments section */}
      <div className={patterns.flexRow + "content-end"}>
        <h1 className={patterns.subHeading}>Find assignments and files easily</h1>
        <p className={patterns.bodyText}>Simplify finding assignments and associated files by using !assignments. You can now get any file uploaded to your class on demand.</p>
      </div>

        {/* zoom section */}
        <div className={patterns.flexRow}>
        <h1 className={patterns.subHeading}>Jump into class from Discord</h1>
        <p className={patterns.bodyText}>Automate the way you get to class. Canvas Bot sends out a reminder and a link to class a couple minutes before class starts.</p>
      </div>
    </div>
  )
}

export default Landing;