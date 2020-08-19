import React from 'react';
import '../../../../styles/HomepageContent.css';
import CampaignName from './HomepageContentCampaignName';
import MarginSetting from './HomepageContentMarginSetting';
import CreativeList from './HomepageContentCreativeList';
export default () => {
    return (
        <>
            <div className="content_space">
                <div className="adSpace">
                </div>
                <div className="cpname">
                <CampaignName></CampaignName>
                </div>
                
                <MarginSetting></MarginSetting>
                <CreativeList></CreativeList>
            </div>


        </>
    )
}