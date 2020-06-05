class Errors {
    signUpError(userData) {
        const errorList = document.getElementById("error-list")

        userData.error.forEach(e => {
            let node = document.createElement("LI")
            let errorTxt = document.createTextNode(e)
            node.appendChild(errorTxt)

            errorList.appendChild(node)
        })
    }

    loginError() {
        const errorHeader = document.getElementById("error-header")
        errorHeader.innerHTML = "Invalid Email or Password" 
    }

    
    hasErrors(user) {
        if (user.hasOwnProperty("error")) {
            return true
        }

        else {
            return false
        }
    }
}