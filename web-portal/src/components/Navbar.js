import React from 'react';
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
<div class="w-full container mx-auto p-6 divide-black divide-y-0">
		
    <div class="w-full flex items-center justify-between">
      <Link to = '/' className = "flex items-center text-indigo-400 no-underline hover:no-underline font-semibold text-2xl lg:text-4xl">
         <img src="https://iwebp.de/images/557580ece255489586f259.png" width ="54" height ="54" class ="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" alt="logo"/>Canvas Bot
      </Link>
      
      <nav class="hidden md:flex space-x-3">
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
      </nav>

      <div className = "md:hidden">
      <button id="mobileButton" class="md:hidden flex ml-2">
        <img src="https://img.icons8.com/nolan/50/drag-list-down.png" alt="mobile button"/>
      </button>

      <div className ="mobileMenu absolute md:hidden items-center mt-1 w-20 shadow-xl">
        <Link to ='/login' className="block px-2 py-2 text-left bg-white text-indigo-400 border border-indigo-200 hover:bg-blue-400 hover:text-white rounded-md">Login</Link>
        <Link to ='/signup' className="block px-2 py-2 text-left bg-white text-indigo-400 border border-indigo-200 hover:bg-blue-400 hover:text-white rounded-md">Signup</Link>
        <Link to ='/portal' className="block px-2 py-2 text-left bg-white text-indigo-400 border border-indigo-200 hover:bg-blue-400 hover:text-white rounded-md">Portal</Link>
        <Link to ='/' className="logoutNav hidden px-2 py-2 text-left bg-white text-red-400 border border-indigo-200 hover:bg-blue-400 hover:text-white rounded-md">Log Out</Link>
      </div>
      </div>
    </div>
  
  </div>)

}

export default Navbar;