import React from 'react';
import '../../../../styles/HomepageContentCreativeList.css'

export default () => {
    return (
        <>
            <div className="creative_list">
                <div data-toggle="collapse" data-target="#creative_list" className="crList pl-5 pt-2">
                    <h4>Creative List</h4>
                </div>
                <ul className="collapse" id="creative_list">
                    <div className="crlist_btn_space">
                            <button>Creative full-scale display</button>
                            <button className="ml-4">LP batch check</button>
                        </div>
                        <hr></hr>
                    <div className="info_details">
                        <div className="creative_info row">
                            <div className="col-md-8">
                                <div className="row">
                                <div className="col-md-4">
                                <h5 className="creative_id">ID: <span>123</span></h5>
                                <p>Delivery periode</p>
                                <p>Landing URL</p>
                                <p>Landing URL domain</p>
                                </div>
                                <div className="col-md-8">
                                <br></br>
                                <br></br>
                                <p>Size: <span>1280x720</span></p>
                                <br></br>
                                <input className="landingURL_domain"type="text"></input>
                                </div>
                                <div className="col-md-4">
                                <p>Applicability</p>
                                </div>
                                <div className="col-md-8">
                                <label className="switch">
                                    <input type="checkbox" defaultChecked />
                                    <span className="slider round" />
                                </label>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src='https://xn--80aaeboqojdllb3bo7l.xn--p1ai/wp-content/uploads/2015/05/default-placeholder1-200x200.png' alt="abc"></img>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="info_details">
                        <div className="creative_info row">
                            <div className="col-md-8">
                                <div className="row">
                                <div className="col-md-4">
                                <h5 className="creative_id">ID: <span>123</span></h5>
                                <p>Delivery periode</p>
                                <p>Landing URL</p>
                                <p>Landing URL domain</p>
                                </div>
                                <div className="col-md-8">
                                <br></br>
                                <br></br>
                                <p>Size: <span>1280x720</span></p>
                                <br></br>
                                <input className="landingURL_domain"type="text"></input>
                                </div>
                                <div className="col-md-4">
                                <p>Applicability</p>
                                </div>
                                <div className="col-md-8">
                                <label className="switch">
                                    <input type="checkbox" defaultChecked />
                                    <span className="slider round" />
                                </label>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src='https://xn--80aaeboqojdllb3bo7l.xn--p1ai/wp-content/uploads/2015/05/default-placeholder1-200x200.png' alt="abc"></img>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="info_details">
                        <div className="creative_info row">
                            <div className="col-md-8">
                                <div className="row">
                                <div className="col-md-4">
                                <h5 className="creative_id">ID: <span>123</span></h5>
                                <p>Delivery periode</p>
                                <p>Landing URL</p>
                                <p>Landing URL domain</p>
                                </div>
                                <div className="col-md-8">
                                <br></br>
                                <br></br>
                                <p>Size: <span>1280x720</span></p>
                                <br></br>
                                <input className="landingURL_domain"type="text"></input>
                                </div>
                                <div className="col-md-4">
                                <p>Applicability</p>
                                </div>
                                <div className="col-md-8">
                                <label className="switch">
                                    <input type="checkbox" defaultChecked />
                                    <span className="slider round" />
                                </label>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src='https://xn--80aaeboqojdllb3bo7l.xn--p1ai/wp-content/uploads/2015/05/default-placeholder1-200x200.png' alt="abc"></img>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                </ul>
                
            </div>
        </>
    )
}