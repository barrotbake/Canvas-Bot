import React, { useState } from 'react'
import {Link, useHistory} from "react-router-dom";
import axios from 'axios';


const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();


    let handleSubmit = (e) => {
      e.preventDefault();
      const newUser = { email, username, password};
      console.log(newUser);

      const createNewUser = {
        email: email,
        username: username,
        password: password
      };

      axios
      .post("http://localhost:5000/login/sign-up", createNewUser)
      .then((res) => console.log(res.data));

      alert("created new user");      
      history.push("/");
    }

    return (
<div className="h-auto pb-24 bg-right bg-cover mt-32">        
<div className = "flex flex-col items-center justify-center slide-in-bottom" id ="showSignup">
<h1 className="font-bold text-2xl flex items-center"><img src="images/discord logo.png" alt="discord logo" width ="54" height ="54" className ="px-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"/>Canvas Bot</h1>
  <form className="flex flex-col bg-white border-2 rounded-lg shadow-lg p-12 mt-5" onSubmit={handleSubmit}>
    <h1 className="mb-5 text-xl font-light text-left sm:text-center">Create an account</h1>
    <label className="font-semibold text-xs" htmlFor="createEmail">Email Address</label>
    <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="email" name="email" id="createEmail" required pattern=".*.com" value ={email} onChange={(event) => setEmail(event.target.value)}/>
    <label className="font-semibold text-xs pt-2" htmlFor="createUser">Username</label>
    <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" name="username" id="createUser" minLength="4" maxLength="16" required value ={username} onChange={(event) => setUsername(event.target.value)}/>
    <label className="font-semibold text-xs mt-3" htmlFor="createPass">Password</label>
    <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" name="password" id="createPass" minLength="8" maxLength="20" required value ={password} onChange={(event) => setPassword(event.target.value)}/>
    <button type="submit" className="flex items-center justify-center h-12 px-6 w-64 bg-blue-400 mt-8 rounded-xl font-semibold text-md text-white hover:bg-blue-700 hover:shadow-xl transition duration-700 ease-in-out transform hover:-translate-y-2 hover:scale-105">Create Account</button>
    <div className="flex mt-6 justify-center text-xs">
      Already have an account?
      <Link to ='/login' className="text-blue-400 hover:text-blue-600 hover:underline ml-1 loginButton"> Log in </Link>
    </div>
  </form>
</div>
</div>
)
}

export default SignupForm

