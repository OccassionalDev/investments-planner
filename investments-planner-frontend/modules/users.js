import Adapter from "./adapter";

class Users {
    // Form Values
    static nameSignUpField = document.getElementById("signup_name")
    static emailSignUpField = document.getElementById("signup_email")
    static passwordSignUpField = document.getElementById("signup_password")
    static passwordConfirmSignUpField = document.getElementById("signup_password_confirm")

    static emailLoginField = document.getElementById("login_email")
    static passwordLoginField = document.getElementById("login_password")


    // Form Creation
    static signUpForm() {
        return `
        <div id="signup-header">
            <h1>Sign Up</h1>
            <h2>Fill out the following to create a new account:</h2>
        </div>

        <div id="signup-form>
            <form action="POST">
                <label for="name">Name</label>
                <input type="text" name="name" id="signup_name" required>

                <label for="email">Email</label>
                <input type="email" name="email" id="signup_email" required>

                <label for="password">Password</label>
                <input type="password" name="password" id="signup_password" required>

                <label for="password_confirmation">Confirm Password</label>
                <input type="password" name="password_confirmation" id="signup_password_confirm" required>

                <input type="submit" value="Sign Up">
            </form>
        </div>
        `
    }

    static loginForm() {
        return `
        <div id="login-header>
            <h1>Log In</h1>
        </div>

        <div id="login-form">
            <form action="POST">
                <label for="email">Email</label>
                <input type="email" name="email" id="login_email" required>

                <label for="password">Password</label>
                <input type="password" name="password" id="login_password" required>

                <input type="submit" value="Log In">
            </form>
        </div>
        `
    }

    // Requests
    static signUserUp = (e) => {
        e.preventDefault()

        const userBody = {
            user: {
                name: nameSignUpField.value,
                email: emailSignUpField.value,
                password: passwordSignUpField.value,
                password_confirmation: passwordConfirmSignUpField.value
            }
        }

        Adapter.postRequest("/users", userBody)
    };

}

export default Users;