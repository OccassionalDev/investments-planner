class App {
    constructor() {
        this.users = new Users()
        this.container = document.getElementById("content-container")
        this.navBar = document.getElementById("nav-bar")
        this.errorHandler = new Errors()
        this.investments = new Investments()
        // this.chart = new Diagram()
    }

    // Render Forms
    renderLogin() {
        this.container.innerHTML = this.users.loginForm()
        const signUpLink = document.getElementById("signup-btn")
        const loginBtn = document.getElementById("login_btn")

        signUpLink.addEventListener("click", () => {
            return this.renderSignUp()
        })

        loginBtn.addEventListener("click", () => {
            this.users.loginRequest().then(() =>{
                if (this.hasErrors(this.users.currentUser)) {
                    this.renderLogin()
                    this.errorHandler.loginError()
                    this.users.resetCurrentUser()
                }

                else {
                    this.renderMainPage()
                }
            })
        })
    } 

    renderSignUp() {
        this.container.innerHTML = this.users.signUpForm()
        const loginLink = document.getElementById("login-btn")
        const signUpBtn = document.getElementById("signup_btn")

        loginLink.addEventListener("click", () => {
            return this.renderLogin()
        })

        signUpBtn.addEventListener("click", () => {
            this.users.signUpRequest().then(() => {
            if (this.hasErrors(this.users.currentUser)) {
                this.renderSignUp()
                this.errorHandler.signUpError(this.users.currentUser)
                this.users.resetCurrentUser()
            }

            else {
                this.renderMainPage()
            }
        })
        })
    }

    hasErrors(user) {
        if (user.hasOwnProperty("error")) {
            return true
        }

        else {
            return false
        }
    }

    // Render Main Page
    renderMainPage() {
        this.renderLoggedInNav()
        this.container.innerHTML = `${this.renderNewInvestmentForm()} ${this.renderTable()}`
        this.getUserInvestments()
    }

    renderLoggedInNav() {
        const navBar = document.getElementById("nav-bar")
        navBar.innerHTML = `
        <h1>Investments Planner</h1>

        <p>Hello, ${this.users.currentUser.name}</p>
        <button id="logout_btn">Logout</button>
        `

        const logoutBtn = document.getElementById("logout_btn")
        logoutBtn.addEventListener("click", () => {
            this.logout()
        })
    }

    // renderChart() {

    // }

    renderTable() {
        return `
        <table id="invest_tbl">
            <tr>
                <td>Company</td>
                <td>Industry</td>
                <td>Type</td>
                <td>Shares</td>
            </tr>
        </table>
        `
    }

    // renderNewInvestment() {

    // }

    renderNewInvestmentForm() {
        return `
        <div id="invest-form-container">
            <form id="new-invest-form">
                <label for="name">Comapny:</label>
                <input type="text" name="name" id="invest_form_name">

                <label for="industry">Industry:</label>
                <input type="text" name="industry" id="invest_form_industry">

                <label for="invest_type">Type:</label>
                <input type="text" name="invest_type" id="invest_form_type">

                <label for="shares">Shares:</label>
                <input type="text" name="shares" id="invest_form_shares">
            </form>

            <button id="add_investment_btn">Add Investment</button>
        </div>
        `
    }

    // Get Investments
    getUserInvestments() {
        this.users.currentUser.investments.forEach(investment => {
            this.addInvestmentRow(investment)
        })
    }

    // Add Table Row
    addInvestmentRow(investment) {
        const investmentTbl = document.getElementById("invest_tbl")

        // Insert a new row
        let newRow = investmentTbl.insertRow(investmentTbl.rows.length)

        // Create Columns
        let nameCol = newRow.insertCell(0)
        let industryCol = newRow.insertCell(1)
        let typeCol = newRow.insertCell(2)
        let sharesCol = newRow.insertCell(3)

        // Create and append Text
        let nameTxt = document.createTextNode(`${investment.name}`)
        let industryTxt = document.createTextNode(`${investment.industry}`)
        let typeTxt = document.createTextNode(`${investment.invest_type}`)
        let sharesTxt = document.createTextNode(`${investment.shares}`)

        nameCol.appendChild(nameTxt)
        industryCol.appendChild(industryTxt)
        typeCol.appendChild(typeTxt)
        sharesCol.appendChild(sharesTxt)
    }

    // Logout
    resetNavBar() {
        const navBar = document.getElementById("nav-bar")
        navBar.innerHTML = `
        <h1>Investments Planner</h1>
        `
    }

    logout() {
        this.users.resetCurrentUser()
        this.resetNavBar()
        this.renderLogin()
    }
}