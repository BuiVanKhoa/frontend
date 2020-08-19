import React from 'react';
import Sidebar from '../../../Sidebar';
import Content from './HomepageContent';
// import AccountTab from '../../AccountPage/AccountManagerContent';
import CampaignTab from '../../CampaignListPage/CampaignListContent';
import LineItemTab from '../../LineItemListPage/LineItemListContent'
import '../../../../styles/HomepageBody.css'
import {BrowserRouter as  Router, Route} from 'react-router-dom';
import Header from '../../../Header';
import FormCreactAccount from '../../../form/CreateAccount';
import AdvertiserTab from '../../AccountPage/Advertiser';
import CompaniesTab from '../../AccountPage/Companies';
import DACAccountTab from '../../AccountPage/AccountManagerContent';

export default () => {

    const routes=[
        {
            path: "/dashboard",
            exact: true,
            main:() => <Content></Content>
        },
        {
            path: "/dac/account",
            main:() => <DACAccountTab></DACAccountTab>
        },
        {
            path: "/advertiser/account",
            main:() => <AdvertiserTab></AdvertiserTab>
        },
        {
            path: "/companies/account",
            main:() => <CompaniesTab></CompaniesTab>
        },
        {
            path: "/campaign",
            main:() => <CampaignTab></CampaignTab>
        },{
            path: "/line_item",
            main:() => <LineItemTab></LineItemTab>
        }
    ]
    return(
        <>
        <Router>
        
        <Header></Header>
        <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-10"style={{paddingLeft:"0px"}}>
                    <div className="ads">
                    </div>
                    <div>
                        {routes.map((route,index)=>(
                            <Route 
                            key={index}
                            path={route.path}
                            component={route.main}
                            />
                        ))}
                        <Route path= "/new_account" exact component= {FormCreactAccount}/>
                    </div>
                    </div>
                </div>
                {/* <Route path= "/new_account" exact component= {FormCreactAccount}/> */}
            </div>
            
        </Router>
        
        </>
    )
}