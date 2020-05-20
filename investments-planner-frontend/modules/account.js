import ApiAdapter from '/modules/api-adapter.js';

class Account {

    // Render Sign Up
    static renderSignUpHeader() {
        return `
        <div id="signup-header">
            <h1>Welcome!</h1>
            <h2>Please fill out the information below to sign up!</h2>
        </div>
        `
    }

    static renderSignUpForm() {
        return `
        <div id="signup-form">
            <form action="POST">
                <label for="name">Name</label>
                <input type="text" name="name" required>

                <label for="email">Email</label>
                <input type="email" name="email" required>

                <label for="password">Password</label>
                <input type="password" name="password" required>

                <label for="password_confirmation">Confirm Password</label>
                <input type="password" name="password_confirmation" required>

                <input type="submit" value="Sign Up">
            </form>
        </div>
        `
    }

    // Render Login
}

export default Account;