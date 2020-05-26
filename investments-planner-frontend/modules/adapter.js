class Adapter {
    static baseUrl = "http://localhost:3000"
    
    static headerObj = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }

    static postRequest(url, body) {
        return fetch(this.baseUrl + url, {
            method: "POST",
            headers: this.headerObj,
            body: JSON.stringify(body)
        })
        .then(res => {
            res.json()
            console.log("Post request sent.")
        })
    }
}