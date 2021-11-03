import React from 'react';
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
<div class="w-full container mx-auto p-6">
		
    <div class="w-full flex items-center justify-between">
      <Link to = '/' className = "flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
         <img src="https://iwebp.de/images/557580ece255489586f259.png" width ="54" height ="54" class ="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" alt="logo"/>Canvas Bot
      </Link>
      
      <div class="flex space-x-3">
        <Link to ='/login' className ="loginNav text-indigo-400 text-xl transform duration-500 hover:scale-110 hover:shadow-xl px-2 py-1 border-2 border-gray-300 rounded-full shadow-lg bg-white">          
        <img src="images/Log In.PNG" height = "80" width = "80" class = "rounded" alt="login button"/>		        
        </Link>

        <Link to ='/signup' className ="signupNav text-indigo-400 text-xl transform duration-500 hover:scale-110 hover:shadow-xl px-2 py-1 border-2 border-gray-300 rounded-full shadow-lg bg-white">          
        <img src="images/Sign Up.PNG" height = "80" width = "80" class = "rounded" alt="signup button"/>		        
        </Link>        
        
        <Link to ='/portal' className ="text-indigo-400 text-xl transform duration-500 hover:scale-110 hover:shadow-xl px-2 py-1 border-2 border-gray-300 rounded-full shadow-lg bg-white">        
        <img src="images/Portal.PNG" height = "80" width = "80" class = "rounded" alt="portal button"/>		        
        </Link>

        <Link to ='/' className ="logoutNav hidden text-red-400 text-xl transform duration-500 hover:scale-110 hover:shadow-xl px-2 py-1 border-2 border-indigo-300 rounded-full shadow-lg bg-white">          
        <img src="images/Log Out.PNG" height = "80" width = "80" class = "rounded" alt="logout button"/>		        
        </Link> 
      </div>
      
    </div>
  
  </div>)

}

export default Navbar;