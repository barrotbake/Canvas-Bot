import React, {useState} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';



const LoginForm = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

  let onSubmit = e => {
    e.preventDefault();
    const authUser = {username, password};
    console.log(authUser);  
     // When post request is sent to the create url, axios will add a new doc to the database.
     
 }

    return (
<div class="h-auto pb-24 bg-right bg-cover"> 
<div class = "flex flex-col items-center justify-center slide-in-bottom mt-20" id="showLogin">
<h1 class="font-bold text-2xl flex items-center"><img src="https://iwebp.de/images/557580ece255489586f259.png" alt="logo" width ="54" height ="54" class ="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"/>Canvas Bot</h1>
  <form class="flex flex-col bg-white border-2 rounded-lg shadow-lg p-12 mt-5">
  <h1 class="mb-5 text-xl font-light text-left sm:text-center">Log in to your account</h1>
  <label class="font-semibold text-xs" htmlFor="username">Username</label>
  <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" name="username" id="username" minLength="4" maxLength="16" required value = {username} onChange={(event) => setUsername(event.target.value)}/>
  <label class="font-semibold text-xs mt-3" htmlFor="password">Password</label>
  <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" name="password" id="password" minLength="8" maxLength="20" required value ={password} onChange={(event) => setPassword(event.target.value)}/>
  <button id="loginButton" class="flex items-center justify-center h-12 px-6 w-64 bg-blue-400 mt-8 rounded-xl font-semibold text-md text-white hover:bg-blue-700 hover:shadow-xl transition duration-700 ease-in-out transform hover:-translate-y-2 hover:scale-105" onClick={onSubmit}>Login</button>
   <div class="flex mt-6 justify-center text-xs">
    Don't have an account?
    <Link to ='/signup' className="text-blue-400 hover:text-blue-600 hover:underline ml-1 loginButton"> Sign Up </Link>
   </div>
  </form>
</div>
</div>
           
)

}

export default LoginForm;
