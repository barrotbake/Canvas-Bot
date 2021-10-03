const loginContainer = document.querySelector(".loginContainer")
const signupContainer = document.querySelector(".signupContainer")
const loginButton = document.querySelector(".loginButton")
const signupButton = document.querySelector(".signupButton")
const loginNav = document.querySelector(".loginNav")
const signupNav = document.querySelector(".signupNav")

loginButton.addEventListener('click', (e) => {
    signupContainer.classList.add("hidden")
    loginContainer.classList.remove("hidden")

})


signupButton.addEventListener('click', (e) => {
    loginContainer.classList.add("hidden")
    signupContainer.classList.remove("hidden")

})

signupNav.addEventListener('click', (e) => {
   // e.preventDefault()
    loginContainer.classList.add("hidden")
    signupContainer.classList.remove("hidden")
   
})

loginNav.addEventListener('click' , (e) => {
    //e.preventDefault()
    signupContainer.classList.add("hidden")
    loginContainer.classList.remove("hidden")
})
