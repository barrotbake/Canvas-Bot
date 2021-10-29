import React from "react";
import { Form } from "../components/form"


export let LoginPage = () => {

    return (
        <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center">
            <div className="form-containter">
                <Form formHeading="Create Account" inputMap={["Email", "Password", "Canvas ID"]}></Form>
            </div>
            {/* <!--Footer--> */}
            <div className="w-full pt-60 pb-6 text-sm text-center md:text-left fade-in text-gray-500">
                &copy; CS 362 Group 8
                Site designed with <a className="text-blue-300 no-underline hover:no-underline" href="https://reactjs.org/">React</a> and <a className="text-blue-300 no-underline hover:no-underline" href="https://www.tailwindtoolbox.com/">Tailwind Toolbox</a>
            </div>
        </div>
    )
}
