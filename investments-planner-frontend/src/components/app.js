class App {
    constructor() {
        this.users = new Users()
        this.container = document.getElementById("content-container")
        this.navBar = document.getElementById("nav-bar")
    }

    // Render Forms
    renderLogin() {
        this.container.innerHTML = this.users.loginForm()
        const signUpLink = document.getElementById("signup-btn")

        signUpLink.addEventListener("click", () => {
            return this.renderSignUp()
        })
    } 

    renderSignUp() {
        this.container.innerHTML = this.users.signUpForm()
        const loginLink = document.getElementById("login-btn")
        const signUpBtn = document.getElementById("signup_btn")

        loginLink.addEventListener("click", () => {
            return this.renderLogin()
        })

        signUpBtn.addEventListener("click", () => {
            return this.users.signUpRequest()
        })
    }

    // Render Main Page
    renderMainPage() {

    }

    // Logout
    logout() {
        this.users.logout()
        this.renderLogin()
    }


}