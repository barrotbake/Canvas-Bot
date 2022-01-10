import React from 'react';
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
<header className="mb-4 p-1 border-gray-300 border-b border-opacity-80 bg-white fixed top-0 w-full z-10">
	<div className="container flex justify-between h-16 mx-auto">
      <Link to = '/' className = "flex items-center text-purple-600 no-underline hover:no-underline leading-tight font-bold text-xl lg:text-3xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
         <img src="https://iwebp.de/images/557580ece255489586f259.png" width ="54" height ="54" className="mr-1" alt="logo"/>Canvas Bot
      </Link>
		
		<nav className="items-center space-x-3 flex-shrink-0 hidden md:flex">
        <Link to ='/login' className ="loginNav text-indigo-400 text-xl transform duration-500 hover:scale-110 hover:shadow-xl px-2 py-1 border-2 border-gray-300 rounded-full shadow-lg bg-white">          
        <img src="images/Log In.PNG" height = "80" width = "80" className = "rounded-lg" alt="login button"/>		        
        </Link>
        <Link to ='/signup' className ="signupNav text-indigo-400 text-xl transform duration-500 hover:scale-110 hover:shadow-xl px-2 py-1 border-2 border-gray-300 rounded-full shadow-lg bg-white">          
        <img src="images/Sign Up.PNG" height = "80" width = "80" className = "rounded-lg" alt="signup button"/>		        
        </Link>
        <Link to ='/portal' className ="text-indigo-400 text-xl transform duration-500 hover:scale-110 hover:shadow-xl px-2 py-1 border-2 border-gray-300 rounded-full shadow-lg bg-white">        
        <img src="images/Portal.PNG" height = "80" width = "80" className = "rounded-lg" alt="portal button"/>		        
        </Link>
        <Link to ='/about' className ="text-indigo-400 text-xl transform duration-500 hover:scale-110 hover:shadow-xl px-2 py-2 border-2 border-gray-300 rounded-full shadow-lg bg-white">        
        <img src="images/About.png" height = "75" width = "75" className = "rounded-lg" alt="about button"/>		        
        </Link>
        <Link to ='/' className ="logoutNav hidden text-red-400 text-xl transform duration-500 hover:scale-110 hover:shadow-xl px-2 py-1 border-2 border-indigo-300 rounded-full shadow-lg bg-white">          
        <img src="images/Log Out.PNG" height = "80" width = "80" className = "rounded-lg" alt="logout button"/>		        
        </Link>    
		</nav>
		<div className = "md:hidden">
      <button id="mobileButton" className="md:hidden flex ml-2">
        <img src="https://img.icons8.com/nolan/64/menu.png" alt="mobile button"/>
      </button>

      <div className ="mobileMenu absolute right-1 md:hidden items-center mt-1 w-24 sm:w-22 shadow-xl">
        <Link to ='/login' className="block px-2 py-2 text-center bg-white text-indigo-400 border border-indigo-200 hover:bg-blue-400 hover:text-white rounded-md"><img className="float-left inline-block w-6" src="https://img.icons8.com/nolan/64/login-rounded-right.png" alt="mobile login"/> Login</Link>
        <Link to ='/signup' className="block px-2 py-2 text-center bg-white text-indigo-400 border border-indigo-200 hover:bg-blue-400 hover:text-white rounded-md"><img className="float-left inline-block w-6" src="https://img.icons8.com/nolan/64/create-new.png" alt="mobile signup"/> Signup </Link>
        <Link to ='/portal' className="block px-2 py-2 text-center bg-white text-indigo-400 border border-indigo-200 hover:bg-blue-400 hover:text-white rounded-md"><img className="float-left inline-block w-6" src="https://img.icons8.com/nolan/64/user-credentials.png" alt="mobile portal"/> Portal</Link>
        <Link to ='/about' className="block px-2 py-2 text-center bg-white text-indigo-400 border border-indigo-200 hover:bg-blue-400 hover:text-white rounded-md"><img className="float-left inline-block w-6" src="https://img.icons8.com/nolan/64/info.png" alt="mobile portal"/> About</Link>
        <Link to ='/' className="logoutNav hidden px-2 py-2 text-center bg-white text-indigo-400 border border-indigo-200 hover:bg-blue-400 hover:text-white rounded-md"><img className="float-left inline-block w-6" src="https://img.icons8.com/nolan/64/shutdown.png" alt="mobile logout"/> Log Out</Link>
      </div>
    </div>
	</div>
</header>)
}

export default Navbar;