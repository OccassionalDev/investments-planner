class Users {
    constructor() {
        this.adapter = new Adapter()
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

                <input type="submit" value="Sign Up" id="signup_btn">
            </form>

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
}