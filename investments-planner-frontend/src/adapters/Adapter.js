class Adapter {
    constructor() {
        this.baseUrl = "http://localhost:3000"
        this.headerObj = {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }

    postRequest(url, data) {
        return fetch(this.baseUrl, {
            method: "POST",
            headers: this.headerObj,
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
    }
}