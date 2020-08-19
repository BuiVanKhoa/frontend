import React from 'react';
import './App.css';
import Homepage from './components/page/homePage/body/HomepageBody';
import { Route, Redirect} from 'react-router-dom';
import {Router} from 'react-router-dom';
import Login from './components/page/loginPage/Login';
import {history} from './helps/history';

function App() {

    return ( 
    
    <div className = "App" >
        <Router history={history}> 
        {!localStorage.getItem("token") && <>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/" exact component={Homepage} />
        <Redirect to="/login" />
        </>}
        {localStorage.getItem("token") && <>
            <Route path="/" exact component={Homepage} />
            <Route path="/login" exact component={Login}></Route>
            <Redirect to="/" />
        </>}
        </Router>
        
        </div>
    );
}

export default App;
