class App {
    constructor() {
        this.users = new Users()
        this.contaienr = document.getElementById("content-container")
    }

    renderSignUp() {
        this.contaienr.innerHTML = this.users.signUpForm()
    }

    
}