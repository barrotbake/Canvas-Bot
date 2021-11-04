const loginButton = document.getElementById('loginButton')
const signupButton = document.getElementById('signupButton')
const loginNav = document.querySelector(".loginNav")
const signupNav = document.querySelector(".signupNav")
const logoutNav = document.querySelector(".logoutNav")
const inputUsername = document.getElementById('username')
const inputPassword = document.getElementById('password')
const mobileButton = document.getElementById('mobileButton')
const mobileMenu = document.querySelector(".mobileMenu")

function authenticateUser (username, password) {
    if (username === 'testuser123' && password === 'password') {
      return {
        username: 'testuser123',
        email: 'tester123@gmail.com',
        password: 'password'
      }
    }
  
  }

if (loginButton != null){
loginButton.addEventListener('click', (e)=> {
    
    let testUser = authenticateUser((inputUsername.value),inputPassword.value);

    if (testUser!=null)
    {
        //e.preventDefault()
        alert(`Login successful \n\nWelcome ${testUser.username}`)
        localStorage.setItem('profile', JSON.stringify(testUser))
        localStorage.setItem('loggedin', 'true')
        window.location.href="/"
    }
    else
    {
        e.preventDefault()
        alert('Login failed. \n\nUsername or password not recognized in the system')
    }
})
}

if(localStorage.getItem('loggedin') === 'true')
{
    loginNav.classList.toggle("hidden")
    signupNav.classList.toggle("hidden")
    logoutNav.classList.remove("hidden")
}

logoutNav.addEventListener('click', (e)=> {
    localStorage.clear()
    alert('Logged out successfully')
    location.href="/"
})


mobileButton.addEventListener('click', (e)=> {
  mobileMenu.classList.toggle("fade")
})
