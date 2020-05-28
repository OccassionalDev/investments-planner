class Users {
    constructor() {
        this.adapter = new Adapter()
        this.currentUser = {}
    }

    // Set Current User
    setCurrentUser(data) {
        console.log(data)
    }

    // Forms 
    signUpForm() {
        return `
        <div id="signup-header">
            <h1>Sign Up</h1>
            <h2>Fill out the following to create a new account:</h2>
        </div>

        <div id="signup-form">
            <form action="POST">
                <label for="name">Name</label></br>
                <input type="text" name="name" id="signup_name" required></br>

                <label for="email">Email</label></br>
                <input type="email" name="email" id="signup_email" required></br>

                <label for="password">Password</label></br>
                <input type="password" name="password" id="signup_password" required></br>

                <label for="password_confirmation">Confirm Password</label></br>
                <input type="password" name="password_confirmation" id="signup_password_confirm" required></br>
            </form>
            <button id="signup_btn">Sign Up</button>

            <p>Already have an account?</p></br>
            <button id="login-btn">Log In</button>
        </div>
        `
    }

    loginForm() {
        return `
        <div id="login-header">
            <h1>Log In</h1>
        </div>

        <div id="login-form">
            <form action="POST">
                <label for="email">Email</label></br>
                <input type="email" name="email" id="login_email" required></br>

                <label for="password">Password</label></br>
                <input type="password" name="password" id="login_password" required></br>

                <input type="submit" value="Log In" id="login_btn"></br>
            </form>

            <p>Not an existing user?</p></br>
            <button id="signup-btn">Sign Up!</button>
        </div>
        `
    }

    // Requests

    signUpRequest() {
        const nameSignUpField = document.getElementById("signup_name")
        const emailSignUpField = document.getElementById("signup_email")
        const passwordSignUpField = document.getElementById("signup_password")
        const passwordConfirmSignUpField = document.getElementById("signup_password_confirm")

        const userData = {
            user: {
                name: nameSignUpField.value,
                email: emailSignUpField.value,
                password: passwordSignUpField.value,
                password_confirmation: passwordConfirmSignUpField.value
            }
        }

        this.adapter.postRequest("/users", userData)
            .then(console.log("Creating new user..."))
            .then(res => setCurrentUser(res))
    }
}