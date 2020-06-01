class Adapter {
    constructor() {
        this.baseUrl = "http://localhost:3000"
        this.headerObj = {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }

    postRequest(url, data) {
        return fetch(this.baseUrl + url, {
            method: "POST",
            headers: this.headerObj,
            body: JSON.stringify(data)
        })
            .then(res => res.json())
    }

    deleteRequest(url, data) {
        return fetch(this.baseUrl + url, {
            method: "DELETE",
            headers: this.headerObj,
            body: JSON.stringify(data)
        })
            .then(res => res.json())
    }
}