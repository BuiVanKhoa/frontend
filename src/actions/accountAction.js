import { userService } from '../services/user.services';

export const accountAction = {
    newDacAccount,
    fetchListDacAccount,
    removeDacAccount,
    updateDacAccount,
    fetchListAdvertiserAccount,
    newAdvertiserAccount,
    removeAdvertiserAccount,
    updateAdvertiserAccount,
    fetchListCompaniesAccount,
    newCompaniesAccount
}

function newDacAccount(email, name, status) {
    return dispatch => {
        userService.newDacAccount(email, name, status)
            .then(
                dispatch(createDacAccount())
            )
    }

    function createDacAccount() {
        return {
            type: 'CREATE_DAC_ACCOUNT'
        }
    }

}

function fetchListDacAccount() {
    return dispatch => {
        userService.fetchListDacAccount()
            .then(
                listDacAccount => {
                    const listDAcc = listDacAccount.data //lay data tu api
                    console.log("&&&**********")
                    console.log(listDacAccount.data)
                    dispatch(returnListDacAccount(listDAcc))
                }
            )
    }

    function returnListDacAccount(listDAcc) {
        return {
            type: 'SHOW_LIST_DAC_ACCOUNT', //lay type cua action
            data: listDAcc
        }
    }
}

function removeDacAccount(dac) {
    return dispatch => {
        userService.removeDacAccount(dac)
            .then(
                dispatch(callRemoveDacAccountReducer())
            )
    }

    function callRemoveDacAccountReducer() {
        return {
            type: 'REMOVE_A_DAC_ACCOUNT'
        }
    }
}

function updateDacAccount(dac) {
    return dispatch => {
        userService.updateDacAccount(dac)
            .then(
                dispatch(callUpdateDacAccountReducer())
            )
    }

    function callUpdateDacAccountReducer() {
        return {
            type: 'UPDATE_INFO_FOR_A_DAC_ACCOUNT'
        }
    }
}

function fetchListAdvertiserAccount (){
    return dispatch => {
        userService.fetchListAdvertiserAccount()
            .then(
                listAdvertiserAccount => {
                    const listAdvertiserAcc = listAdvertiserAccount.data
                    dispatch(returnListAdventiserAccount(listAdvertiserAcc))
                }
            )
    }
    function returnListAdventiserAccount(listAdventiserAcc){
        return{
            type: 'SHOW_LIST_ADVERTISER_ACCOUNT',
            data: listAdventiserAcc
        }
    }
}

function newAdvertiserAccount(email, name, status) {
    return dispatch => {
        userService.newAdvertiserAccount(email, name, status)
            .then(
                dispatch(createAdvertiserAccount())
            )
    }

    function createAdvertiserAccount() {
        return {
            type: 'CREATE_ADVERTISER_ACCOUNT'
        }
    }

}

function removeAdvertiserAccount(advertiser) {
    return dispatch => {
        userService.removeAdvertiserAccount(advertiser)
            .then(
                dispatch(callRemoveAdvertiserAccountReducer())
            )
    }

    function callRemoveAdvertiserAccountReducer() {
        return {
            type: 'REMOVE_A_ADVERTISER_ACCOUNT'
        }
    }
}

function updateAdvertiserAccount(advertiser) {
    return dispatch => {
        userService.updateAdvertiserAccount(advertiser)
            .then(
                dispatch(callUpdateAdvertiserAccountReducer())
            )
    }

    function callUpdateAdvertiserAccountReducer() {
        return {
            type: 'UPDATE_INFO_FOR_A_ADVERTISER_ACCOUNT'
        }
    }
}

function fetchListCompaniesAccount() {
    return dispatch => {
        userService.fetchListCompaniesAccount()
            .then(
                listCompaniesAccount => {
                    const listCompanies = listCompaniesAccount.data //lay data tu api
                    console.log("&&&**********")
                    console.log(listCompaniesAccount.data)
                    dispatch(returnListCompaniesAccount(listCompanies))
                }
            )
    }

    function returnListCompaniesAccount(listCompanies) {
        return {
            type: 'SHOW_LIST_DAC_ACCOUNT', //lay type cua action
            data: listCompanies
        }
    }
}

function newCompaniesAccount(name) {
    return dispatch => {
        userService.newCompaniesAccount(name)
            .then(
                dispatch(createCompaniesAccount())
            )
    }

    function createCompaniesAccount() {
        return {
            type: 'CREATE_ADVERTISER_ACCOUNT'
        }
    }

}
