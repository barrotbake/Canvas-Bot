import React from 'react';
import axios from 'axios';

export let Form = (props) => {
    let onSubmit = e => {
       e.preventDefault();
     
        // When post request is sent to the create url, axios will add a new doc to the database.
        const newperson = {
            email: "alanallsta@gmail.com",
            password:"Alan",
            canvasId: "7394573897"
        };
     
        axios
          .post("http://localhost:5000/login/add", newperson)
          .then((res) => console.log(res.data));
    }

    let renderInputs = () => {
        return props.inputMap.map((inputName, index) => 
            <div>
                 <label className="font-semibold text-xs" for={inputName} key={index}>{inputName}</label>
                 <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="email" name="email" id={inputName} key={index}/>
            </div>

        )
    }

    return (
        <div className="signupContainer flex flex-col items-center justify-center slide-in-bottom mt-20" id="showSignup">
            <h1 className="font-bold text-2xl flex items-center">
                <img src="https://iwebp.de/images/557580ece255489586f259.png" width="54" height="54" className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"/>
            Canvas Bot</h1>
            <form className="flex flex-col bg-white border-2 rounded-lg shadow-lg p-12 mt-5" action="" method="GET">
                <h1 className="mb-5 text-xl font-light text-left sm:text-center">{props.formHeading}</h1>
                {renderInputs()}
                <button type="submit" className="flex items-center justify-center h-12 px-6 w-64 bg-blue-400 mt-8 rounded-xl font-semibold text-md text-white hover:bg-blue-700 hover:shadow-xl transition duration-700 ease-in-out transform hover:-translate-y-2 hover:scale-105" onClick={onSubmit}>Create Account</button>
                <div className="flex mt-6 justify-center text-xs">
                    Already have an account?
                    <a className="text-blue-400 hover:text-blue-600 hover:underline ml-1 loginButton" href="#">Log in</a>
                </div>
            </form>
        </div>
        )
  }
