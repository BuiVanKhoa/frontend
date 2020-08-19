import React from 'react';
import Header from '../../../Header';
// import {Route, Switch, Redirect} from 'react-router-dom';
// import {userService} from '../../../../services/user.services';
// import Login from '../../loginPage/Login';
// import Sidebar from '../../../Sidebar';
// import Content from './HomepageContent';
// import AccountTab from '../../AccountPage/AccountManagerContent';
// import CampaignTab from '../../CampaignListPage/CampaignListContent';
// import LineItemTab from '../../LineItemListPage/LineItemListContent';
import Body from './HomepageBody';
import '../../../../styles/HomepageBody.css'

export default () =>{
    // const check = userService.checkLogin()
    return (
        <>
{/*         
        {!check && <>
        <Route path="/login" exact component={Login}></Route>
        
        <Redirect to="/login" />
        </>}
        {check && <> */}
            <Header></Header>

            {/* <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-10 "style={{paddingLeft:"0px"}}>
                    <div className="ads">
                    </div>
                    <div>
                        <Switch>
                            <Route path="/dashboard" render={() =>(<Content></Content>)}/>
                            <Route exact path="/dac/account" render={() =>(<AccountTab></AccountTab>)} />
                            <Route exact path="/advertiser/account" render={()=>(<AccountTab></AccountTab>)}/>
                            <Route path="/campaign" render= {() =>(<CampaignTab/>)}/>
                            <Route path="/line_item" render={()=>(<LineItemTab></LineItemTab>)}/>
                            <Route path="/login" exact component={Login}></Route>
                            <Redirect to="/dashboard" />
                        </Switch>
                    </div>
                    </div>
                </div>
            </div> */}
        
            <Body></Body>
        
        {/* </>} */}
        </>
    )
}