class UsersAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/users"
        this.headerObj = {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }

    signUpRequest(userData) {
        return fetch(this.baseUrl, {
            method: "POST",
            headers: this.headerObj,
            body: JSON.stringify(userData)
        })
            .then(res => {
                res.json()
                console.log("Post request sent.")
                console.log("Creating new account...")
            })
    }
}