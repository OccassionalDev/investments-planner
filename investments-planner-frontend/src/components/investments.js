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
            user_id: userData.id,
            investment_name: nameField.value,
            investment_industry: industryField.value,
            investment_type: typeField.value,
            investment_shares: sharesField.value
        }

        return this.adapter.postRequest(`/users/${userData}/investments`, investmentInformation)
    }

    // Edit Investments

    // Remove Investments
}