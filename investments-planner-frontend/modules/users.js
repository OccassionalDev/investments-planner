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

    }

    // Requests
}

export default Users;