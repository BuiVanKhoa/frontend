import axios from 'axios';
export const userService = {
    callLoginApi,
    checkLogin,
    newDacAccount,
    fetchListDacAccount,
    removeDacAccount,
    updateDacAccount,
    fetchListAdvertiserAccount,
    newAdvertiserAccount,
    removeAdvertiserAccount,
    updateAdvertiserAccount,
    updateAdvertiserAccount,
    fetchListCompaniesAccount,
    newCompaniesAccount
}
const API_URL = "http://localhost:8080"
    // const API_URL = "https://java-final-project-backend.herokuapp.com/"

function callLoginApi(username, password) {
    return axios({
        method: "POST",
        url: API_URL + "/login",
        data: {
            userName: username,
            passWord: password
        }
    }).then(

        response => {
            const token_ = response.data
            localStorage.setItem("token", token_);
            console.log(token_);
            let msg = "Login successfully";
            return [response.status, msg];
        }
    ).catch(
        error => {
            let status = error.response.status;
            let msg = "";
            if (status === 401) {
                msg = "password wrong"
            } else if (status === 400) {
                msg = "username is incorrect or exist"
            } else {
                msg = "ERROR!!!!!!"
            }
            return [status, msg];
        }
    )
}

function checkLogin() {
    let getToken = localStorage.getItem("token");
    if (getToken != null) {
        return true
    } else {
        return false
    }
}

function newDacAccount(email, name, status) {
    return axios({
        method: "POST",
        url: API_URL + "/dac/create",
        headers: {
            "Authorization": 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json',
        },
        data: {
            email: email,
            userName: name,
            status: status
        }
    })
}

function fetchListDacAccount() {
    return axios({
        method: "GET",
        url: API_URL + "/dac/show",
        headers: {
            "Authorization": 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json',
        }
    })
}

function removeDacAccount(dac) {
    return axios({
        method: "DELETE",
        url: API_URL + "/dac/delete",
        headers: {
            "Authorization": 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json',
        },
        data: dac
    })
}

function updateDacAccount(dac) {
    return axios({
        method: "PUT",
        url: API_URL + "/dac/update",
        headers: {
            "Authorization": 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json',
        },
        data: dac
    })
}

function fetchListAdvertiserAccount() {
    return axios({
        method: "GET",
        url: API_URL + "/advertiser/show",
        headers: {
            "Authorization": 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json',
        }
    })
}

function newAdvertiserAccount(email, name, status) {
    return axios({
        method: "POST",
        url: API_URL + "/advertiser/create",
        headers: {
            "Authorization": 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json',
        },
        data: {
            email: email,
            userName: name,
            status: status
        }
    })
}

function removeAdvertiserAccount(advertiser) {
    return axios({
        method: "DELETE",
        url: API_URL + "/advertiser/delete",
        headers: {
            "Authorization": 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json',
        },
        data: advertiser
    })
}

function updateAdvertiserAccount(adveritser) {
    return axios({
        method: "PUT",
        url: API_URL + "/advertiser/update",
        headers: {
            "Authorization": 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json',
        },
        data: {id: adveritser.id, status: adveritser.status, userName: adveritser.name, email: adveritser.email}
    })
}

function fetchListCompaniesAccount() {
    return axios({
        method: "GET",
        url: API_URL + "/company/show",
        headers: {
            "Authorization": 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json',
        }
    })
}

function newCompaniesAccount(name) {
    return axios({
        method: "POST",
        url: API_URL + "/company/create",
        headers: {
            "Authorization": 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json',
        },
        data: {
            
            name: name,
            
        }
    })
}


