class App {
    constructor() {
        this.users = new Users()
        this.container = document.getElementById("content-container")
        this.navBar = document.getElementById("nav-bar")
        this.errorHandler = new Errors()
        this.investments = new Investments()
        this.diagram
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
                if (this.errorHandler.hasErrors(this.users.currentUser)) {
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
            if (this.errorHandler.hasErrors(this.users.currentUser)) {
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

    // Render Main Page
    renderMainPage() {
        this.renderLoggedInNav()
        this.container.innerHTML = `${this.renderChart()} ${this.renderNewInvestmentForm()} ${this.renderSortByButton()} ${this.renderTable()}`
        this.getUserInvestments()
        this.diagram = new Diagram(this.users.currentUser)

        const sortBtn = document.getElementById("sort-by-shares")
        sortBtn.addEventListener("click", () => {
            this.sortEvent(this.users.currentUser)
        })
        
        const newInvestBtn = document.getElementById("add_investment_btn")
        newInvestBtn.addEventListener("click", () => {
            this.handleNewSubmit()
        })
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

    renderChart() {
        return `
        <div id="chart-section" style="display: block; width: 40%">
            <canvas id="portfolio-chart"></canvas>
        </div>
        `
    }

    renderTable() {
        return `
        <table id="invest_tbl">
            <tr>
                <td>Company</td>
                <td>Industry</td>
                <td>Type</td>
                <td>Shares</td>
                <td></td>
            </tr>
        </table>
        `
    }

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
                <input type="number" name="shares" id="invest_form_shares" min="1">
            </form>

            <button id="add_investment_btn">Add Investment</button>
        </div>
        `
    }

    // Render Sort by 
    renderSortByButton() {
        return `
        <button id="sort-by-shares">Sort</button>
        `
    }

    sortEvent(user) {
        const investments = user.investments

        for (let i = 0; i < (investments.length-1); i++) {
            for (let j = 0; j < (investments.length-1); j++) {
                if (investments[j].shares < investments[j+1].shares) {
                    let temp = investments[j+1]
                    investments[j+1] = investments[j]
                    investments[j] = temp
                }
            }
        }

        console.log(investments)

        const table = document.getElementById("invest_tbl")

        table.innerHTML = this.renderTable()

        investments.forEach(investment => {
            this.addInvestmentRow(investment)
        }) 
    }

    // Handle New Investment Request
    handleNewSubmit() {
        const nameField = document.getElementById("invest_form_name")
        const industryField = document.getElementById("invest_form_industry")
        const typeField = document.getElementById("invest_form_type")
        const sharesField = document.getElementById("invest_form_shares")

        if (nameField.value !== "" && industryField.value !== "" && typeField.value !== "" && sharesField.value !== "") {
            this.investments.addInvestment(this.users.currentUser).then(res => {
                this.addInvestmentRow(res.new_investment)
                this.resetInvestmentForm()
                this.diagram.updateChart(res)
            })
        }
    }

    // Reset Text Boxes On New Investment Form
    resetInvestmentForm() {
        let nameField = document.getElementById("invest_form_name")
        let industryField = document.getElementById("invest_form_industry")
        let typeField = document.getElementById("invest_form_type")
        let sharesField = document.getElementById("invest_form_shares")

        nameField.value = ""
        industryField.value = ""
        typeField.value = ""
        sharesField = ""
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
        newRow.setAttribute("id", `${investment.id}`)

        // Create Columns
        let nameCol = newRow.insertCell(0)
        let industryCol = newRow.insertCell(1)
        let typeCol = newRow.insertCell(2)
        let sharesCol = newRow.insertCell(3)
        let buttonCol = newRow.insertCell(4)

        // Create and append Text
        let nameTxt = document.createTextNode(`${investment.name}`)
        let industryTxt = document.createTextNode(`${investment.industry}`)
        let typeTxt = document.createTextNode(`${investment.invest_type}`)
        let sharesTxt = document.createTextNode(`${investment.shares}`)

        nameCol.appendChild(nameTxt)
        industryCol.appendChild(industryTxt)
        typeCol.appendChild(typeTxt)
        sharesCol.appendChild(sharesTxt)

        // Add delete button and the event with it
        buttonCol.innerHTML = `<button>Delete</button>`
        buttonCol.addEventListener("click", () => {
            this.handleRemove(newRow)
        })
    }

    // Table delete button functions
    getRowIndex(rowId) {
        let index = -1
        let rows = document.getElementById("invest_tbl").rows 

        for (let i = 0; i < rows.length; i++) {
            if (rows[i].id === rowId) {
                index = i;
                break
            }
        }

        return index
    }


    handleRemove(row) {
        const investmentInformation = {
            user_id: this.users.currentUser.id,
            id: parseInt(row.id),
            name: row.cells[0].innerHTML,
            industry: row.cells[1].innerHTML,
            type: row.cells[2].innerHTML,
            shares: parseInt(row.cells[3].innerHTML)
        }

        this.investments.removeInvestment(investmentInformation).then(res => {
            console.log("Investment Removed.")
            this.diagram.updateChart(res)
        })

        this.removeInvestmentRow(row)
    }

    removeInvestmentRow(row) {
        const investmentTbl = document.getElementById("invest_tbl")
        let index = this.getRowIndex(row.id)
        investmentTbl.deleteRow(index)
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