import React, { useState } from 'react'
import axios from 'axios';

const PortalForm = () => {
const [courseID, setCourseID] = useState('');
const [zoomLink, setZoomLink] = useState('');
const [apiToken, setAPIToken] = useState('');

let handleSubmit = (e) => {
  e.preventDefault();
  const newRequest = { courseID, zoomLink, apiToken};
  console.log(newRequest);

  const createNewRequest = {
    courseId: courseID,
    zoomLink: zoomLink,
    canvasApiToken: apiToken,
    username: "localuser123"  ,
  };

  axios
      .post("http://localhost:5000/login/portal", createNewRequest)
      .then((res) => console.log(res.data));

  alert("sent data")
}

    return (
<div className="h-auto pb-24 bg-right bg-cover mt-24">         
    <div className="px-4 py-20 flex flex-col items-center justify-center slide-in-bottom">
          
        <h1 className="font-bold text-2xl flex items-center"><img src="images/discord logo.png" alt="discord logo" width ="54" height ="54" className ="px-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"/>Canvas Bot</h1>
    
        <div className="w-full shadow-lg p-10 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-2 border-gray-200 rounded-lg md:bg-white md:border sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 md:px-6 sm:mt-8 sm:mb-5">
          <h1 className="mb-5 text-xl font-light text-left text-gray-800 sm:text-center">Enter your Canvas information here</h1>
          <form className="flex flex-col pb-1 space-y-2" onSubmit = {handleSubmit}>
            
              <label className="block text-md font-medium text-gray-700" htmlFor="courseID">Course ID</label>
              <input className="portal-input flex items-center h-9 px-4 w-full bg-gray-200 rounded focus:outline-white focus:ring-2" type="text" name="courseID" id="courseID" required value={courseID} onChange={(event) => setCourseID(event.target.value)}/>
            
            
              <label className="block text-md font-medium text-gray-700" htmlFor="zoomLink">Zoom Link</label>
              <input className="portal-input flex items-center h-9 px-4 w-full bg-gray-200 rounded focus:outline-white focus:ring-2" type="text" name="zoomLink" id="zoomLink" required value={zoomLink} onChange={(event) => setZoomLink(event.target.value)}/>
            
            
              <label className="block text-md font-medium text-gray-700" htmlFor="token">Canvas API Token</label>
              <input className="portal-input flex items-center h-9 px-4 w-full bg-gray-200 rounded focus:outline-white focus:ring-2" type="password" name="token" id="token" required value={apiToken} onChange={(event) => setAPIToken(event.target.value)}/>
            
            <div className="flex flex-col items-center justify-center sm:items-center sm:flex-row">
              <button type="submit" className="flex items-center justify-center h-12 px-6 w-64 bg-purple-400 mt-8 rounded-xl font-semibold text-md text-white hover:bg-purple-700 hover:shadow-xl transition duration-700 ease-in-out transform hover:-translate-y-2 hover:scale-105">Submit</button>
            </div>
          </form>
        </div>
       
    </div>
</div>        
    )
}

export default PortalForm
