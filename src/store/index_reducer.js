import { combineReducers } from 'redux';
// import login from '../reducers/loginReducer';
import alert from '../reducers/alert.reducer';
import authentication from '../reducers/authentication.reducer';
import login from '../reducers/login.reducer';
import crudAccount from '../reducers/CRUDaccountReducer';
import crudAdvertiser from '../reducers/CRUDAdvertiserReducer';
import crudCompanies from '../reducers/CRUDCompanies'

const appReducers = combineReducers({
    alert,
    authentication,
    login,
    crudAccount,
    crudAdvertiser,
    crudCompanies,
});
export default appReducers;