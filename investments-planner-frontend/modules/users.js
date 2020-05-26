class Users {
    // Form Creation
    static signUpForm() {
        return `
        <div id="signup-form>
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

    static loginForm() {
        return `
        <div id="login-form">
            <form action="POST">
                <label for="email">Email</label>
                <input type="email" name="email" required>

                <label for="password">Password</label>
                <input type="password" name="password" required>

                <input type="submit" value="Log In">
            </form>
        </div>
        `
    }

    // Requests
}

export default Users;