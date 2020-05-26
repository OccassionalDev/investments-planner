class InvestmentsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/investments';
    }

    getInvestments() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}