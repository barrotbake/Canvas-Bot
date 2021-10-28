import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";


const Navbar = () => {
    return (
<div class="w-full container mx-auto p-6">
		
    <div class="w-full flex items-center justify-between">
      <a class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  href="index.html"> 
         <img src="https://iwebp.de/images/557580ece255489586f259.png" width ="54" height ="54" class ="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" alt="logo"/>Canvas Bot
      </a>
      
      <div class="flex space-x-3">
                  
        <a class ="loginNav text-indigo-400 text-xl transform duration-500 hover:scale-110 hover:shadow-xl px-2 py-1 border-2 border-gray-300 rounded-full shadow-lg bg-white" href="login.html#showLogin"><img src="images/Log In.PNG" height = "80" width = "80" class = "rounded" alt="login button"/>					
        </a>
        
        <a class ="signupNav text-indigo-400 text-xl transform duration-500 hover:scale-110 hover:shadow-xl px-2 py-1 border-2 border-gray-300 rounded-full shadow-lg bg-white" href="login.html#showSignup"><img src="images/Sign Up.PNG" height = "80" width = "80" class = "rounded" alt="signup button"/>					
        </a>
        
        <a class ="text-indigo-400 text-xl transform duration-500 hover:scale-110 hover:shadow-xl px-2 py-1 border-2 border-gray-300 rounded-full shadow-lg bg-white" href="portal.html"><img src="images/Portal.PNG" height = "80" width = "80" class = "rounded" alt="portal button"/>					
        </a> 
      </div>
      
    </div>
  
  </div>)

}

export default Navbar;