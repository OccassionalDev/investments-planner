class ApiAdapter {
    static homeUrl = 'http://localhost:3000/home';
    static standardUrl = 'http://localhost:3000';

    static headerConfig = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    };

    static post(url, formData) {
        return fetch(this.standardUrl + url, {
            method: "POST",
            headers: this.headerConfig,
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
    };
}

export default ApiAdapter;