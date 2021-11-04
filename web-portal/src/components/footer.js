import React from 'react';
//import {Link} from "react-router-dom";

const Footer = () => {
    return (
<footer class="px-32 divide-y divide-indigo-300 fade-in text-indigo-300">
	<div class="container flex flex-col justify-between px-6 py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div class="flex justify-center lg:justify-start lg:w-1/3">
			
				<div class="flex items-center justify-center h-12 lg:justify-start">
        <img src="https://iwebp.de/images/557580ece255489586f259.png" width ="40" height ="40" class ="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" alt="logo"/>
        <span class="self-center text-2xl text-indigo-300 font-semibold">Canvas Bot</span>
				</div>
				
			
		</div>
		<div class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div class="space-y-3">
				<h3 class="tracking-wide uppercase dark:text-coolGray-50">Product</h3>
				<ul class="space-y-1">
					<li>
						<a href="#">Features</a>
					</li>
					<li>
						<a href="#">Integrations</a>
					</li>
					<li>
						<a href="#">Pricing</a>
					</li>
					<li>
						<a href="#">FAQ</a>
					</li>
				</ul>
			</div>
			<div class="space-y-3">
				<h3 class="tracking-wide uppercase dark:text-coolGray-50">Company</h3>
				<ul class="space-y-1">
					<li>
						<a href="#">Privacy</a>
					</li>
					<li>
						<a href="#">Terms of Service</a>
					</li>
				</ul>
			</div>
			<div class="space-y-3">
				<h3 class="uppercase dark:text-coolGray-50">Developers</h3>
				<ul class="space-y-1">
					<li>
						<a href="#">Public API</a>
					</li>
					<li>
						<a href="#">Documentation</a>
					</li>
					<li>
						<a href="#">Guides</a>
					</li>
				</ul>
			</div>
			<div class="pt-5 space-y-3">				
				<div class="flex justify-start space-x-3">
        <a href="https://github.com/barrotbake/Canvas-Bot"> 
        <img src="https://img.icons8.com/nolan/64/github.png" width="40" height="40" class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" alt="github footer"/>
        </a>
        <a href="https://discord.com/">
        <img src="https://img.icons8.com/nolan/64/discord-logo.png" width="40" height="40" class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" alt="discord footer"/>  
        </a>
					
				</div>
			</div>
		</div>
	</div>
	<div class="py-6 text-sm items-center justify-center text-center">© CS 362 Group 8
  <p class="py-2">Front end designed with: </p>
  <img class="mx-auto inline " width="100" height="100"src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" alt="react logo"/>
  <img class="mx-auto inline" width="100" height="100"src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg" alt="tailwind logo"/>
  </div>
  
  
</footer>
    )
}

export default Footer
