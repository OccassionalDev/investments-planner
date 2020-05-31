class App {
    constructor() {
        this.users = new Users()
        this.container = document.getElementById("content-container")
        this.navBar = document.getElementById("nav-bar")
        this.errorHandler = new Errors()
    }

    // Render Forms
    renderLogin() {
        this.container.innerHTML = this.users.loginForm()
        const signUpLink = document.getElementById("signup-btn")
        const loginBtn = document.getElementById("login_btn")

        signUpLink.addEventListener("click", () => {
            return this.renderSignUp()
        })

        loginBtn.addEventListener("click", () => {
            this.users.loginRequest().then(() =>{
                if (this.hasErrors(this.users.currentUser)) {
                    this.renderLogin()
                    this.errorHandler.loginError()
                    this.users.resetCurrentUser()
                }
            })
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
            this.users.signUpRequest().then(() => {
            if (this.hasErrors(this.users.currentUser)) {
                this.renderSignUp()
                this.errorHandler.signUpError(this.users.currentUser)
                this.users.resetCurrentUser()
            }
        })
        })
    }

    hasErrors(user) {
        if (user.hasOwnProperty("error")) {
            return true
        }

        else {
            return false
        }
    }

    // Render Main Page
    // renderMainPage() {
        
    // }

    // renderLoggedInNav() {

    // }

    // renderChart() {

    // }

    // renderTable() {

    // }

    // renderNewInvestment() {

    // }

    // Logout
    logout() {
        this.users.logout()
        this.renderLogin()
    }


}