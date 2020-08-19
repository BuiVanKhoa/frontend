import React from 'react';
import '../../../../styles/HomepageContentCampaignName.css';
export default () => {
    return(
        <>
        <div className="campaign_name">
            <div className="campaign_name_title pl-5 pb-3">
            <h4>Campaign name</h4>
            </div>
            <div className="row campaigninfo pl-5">
                <div className="col-md-4" >
                    <p className="campaign_name_Id">ID:<span> 123</span></p>
                    <p className="unit_price">unit price: <span>1</span>$</p>
                    <p className="purchar_unit">Purchar unit: <span>CPM</span></p>
                    <p className="budget">Budget: <span>100</span>$</p>
                </div>
                <div className="col-md-4 register_date">
                    <p className="register_day">Registered Date: <span>2020/07/01 08:00:01</span></p>
                    <p>Post period: <span>2020/07/10 ~ 2020/07/11</span></p>
                    <p>Advertiser: <span>DHBK</span></p>
                </div>
                <div className="col-md-4 status">
                    <button className="status_btn">PC</button>
                    <label className="status_lable pl-2">status</label>
                </div>
            </div>
        </div>
        </>
    )
}