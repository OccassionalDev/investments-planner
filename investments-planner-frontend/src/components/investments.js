class Investments {
    constructor() {
        this.adapter = new Adapter()
    }

    // Add Investments
    addInvestment(userData) {
        const nameField = document.getElementById("invest_form_name")
        const industryField = document.getElementById("invest_form_industry")
        const typeField = document.getElementById("invest_form_type")
        const sharesField = document.getElementById("invest_form_shares")

        const investmentInformation = {
            name: nameField.value,
            industry: industryField.value,
            invest_type: typeField.value,
            shares: sharesField.value
        }

        return this.adapter.postRequest(`/users/${userData.id}/investments`, investmentInformation)
    }

    // Remove Investments
    removeInvestment(investmentInformation) {
        return this.adapter.deleteRequest(`/investments/${investmentInformation.id}`, investmentInformation)
    }
}