import React from 'react';
import { connect } from 'react-redux';
import { accountAction } from '../actions/accountAction';

class table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            email: "",
            name: "",
            status: ""
        }
    }


    componentDidMount(){
        console.log(this.props)
    }

    handleDeleteDacAccount(dacAccount) {
        if (window.confirm("Are you sure ? You want to delete this dac account?")) {
            this.props.removeADacAccount(dacAccount)
        }
    }
    handleUpdateDacAccountInfo = e =>{
        e.preventDefault();
        var dacChangedInfo=this.state
        if(window.confirm("You want to change this infomation for dac account?")){
            this.props.updateInfoForADacAccount(dacChangedInfo)
        }
    }
    selectedValue(selected_status){
        if(selected_status==="1"){
            return <option></option>
        }else if(selected_status==="2"){
            return <p>Active</p>
        }else if(selected_status==="3"){
            return <p>3</p>
        }
    }
    dacUpdateFormSelectedValueShow(selected_status){
        if(selected_status==="1"){
            return <>
            <option selected value="1">Applying</option>
            <option value="2">Active</option>
            <option value="3">3</option>
            </>
        }else if(selected_status==="2"){
            return <>
            <option value="1">Applying</option>
            <option selected value="2">Active</option>
            <option value="3">3</option>
            </>
        }else if(selected_status==="3"){
            return <>
            <option value="1">Applying</option>
            <option value="2">Active</option>
            <option selected value="3">3</option>
            </>
        }
    }
    dacAccountTable(accData) {
        var data = accData.map((n, index) => {
            return <>
                <tr key={index}>
                    <th scope="row">{n.id}</th>
                    <td>{"companyName"}</td>
                    <td>{n.userName}</td>
                    <td>{n.email}</td>
                    <td>{this.selectedValue(n.status)}</td>
                    <td>{n.lastModifiedDate}</td>
                    <td>{n.advertiserList}</td>
                    <td>
                        <button className="btn_edit" data-toggle="modal" data-target="#editModal">Edit <i className="fa fa-pencil" aria-hidden="true"></i></button>
                        <div className="modal" id="editModal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    {/* Modal Header */}
                                    <div className="modal-header">
                                        <h4 className="modal-title">DAC Setting</h4>
                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                    </div>
                                    {/* Modal body */}
                                    <div className="modal-body">
                                        <form className="new_acc_form" onSubmit={this.handleUpdateDacAccountInfo}>
                                            <div>
                                                <label htmlFor="editInputEmail1">Email address</label>
                                                <input type="email" className="form-control"
                                                    id="editInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    value={this.state.email}
                                                    required
                                                    onChange={(e) => { this.setState({ email: e.target.value }) }}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="editname">Name</label>
                                                <input type="text" className="form-control"
                                                    id="editname"
                                                    value={n.userName}
                                                    required
                                                    onChange={(e) => { this.setState({ name: e.target.value }) }} />
                                            </div>
                                            <div className="form-group select_group">
                                                <label htmlFor="selStatus">Status</label>
                                                <select className="form-control slb_status_new_account_form" id="selStatus" onChange={(event) => { this.setState({ status: event.target.value }) }}>
                                                    {this.dacUpdateFormSelectedValueShow(n.status)}
                                                </select>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Update</button>
                                        </form>
                                    </div>
                                    {/* Modal footer */}
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn_delete " onClick={() => this.handleDeleteDacAccount(n)}>Delete <i className="fa fa-times" aria-hidden="true"></i></button>
                    </td>
                </tr>
            </>
        })
        return data;

    }

    handleDeleteAdvertiserAccount(advertiserAccount) {
        if (window.confirm("Are you sure ? You want to delete this advertiser account?")) {
            this.props.removeAAdvertiserAccount(advertiserAccount)
        }
    }

    advertiserUpdateFormSelectedValueShow(selected_status){
        if(selected_status==="1"){
            return <>
            <option selected value="1">Applying</option>
            <option value="2">Active</option>
            <option value="3">3</option>
            </>
        }else if(selected_status==="2"){
            return <>
            <option value="1">Applying</option>
            <option selected value="2">Active</option>
            <option value="3">3</option>
            </>
        }else if(selected_status==="3"){
            return <>
            <option value="1">Applying</option>
            <option value="2">Active</option>
            <option selected value="3">3</option>
            </>
        }
    }

    handleUpdateAdvertiserAccountInfo = e =>{
        e.preventDefault();
        var advertiserChangedInfo=this.state
        if(window.confirm("You want to change this infomation for advertiser account?")){
            this.props.updateInfoForAAdvertiserAccount(advertiserChangedInfo)
        }
    }

    advertiserTable(accData) {
        var data = accData.map((n, index) => {
            console.log(n);
            return <>
                <tr key={index}>
                    <th scope="row">{n.id}</th>
                    <td>{"companyName"}</td>
                    <td>{n.userName}</td>
                    <td>{n.email}</td>
                    <td>{this.selectedValue(n.status)}</td>
                    <td>{n.lastModifiedDate}</td>
                    <td>{n.advertiserList}</td>
                    <td>
                        <button className="btn_edit" data-toggle="modal" data-target="#editModal" onClick={() => this.setState({id: n.id, email: n.email, name: n.userName, status: n.status})}>Edit <i className="fa fa-pencil" aria-hidden="true"></i></button>
                        <div className="modal" id="editModal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    {/* Modal Header */}
                                    <div className="modal-header">
                                        <h4 className="modal-title">Advertiser Setting</h4>
                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                    </div>
                                    {/* Modal body */}
                                    <div className="modal-body">
                                        <form className="new_acc_form" onSubmit={this.handleUpdateAdvertiserAccountInfo}>
                                            <div>
                                                <label htmlFor="editInputEmail1">Email address</label>
                                                <input type="email" className="form-control"
                                                    id="editInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    value={this.state.email}
                                                    required
                                                    onChange={(e) => { this.setState({ email: e.target.value }) }}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="editname">Name</label>
                                                <input type="text" className="form-control"
                                                    id="editname"
                                                    value={this.state.name}
                                                    required
                                                    onChange={(e) => { this.setState({ name: e.target.value }) }} />
                                            </div>
                                            <div className="form-group select_group">
                                                <label htmlFor="selStatus">Status</label>
                                                <select  className="form-control slb_status_new_account_form" id="selStatus" onChange={(event) => { this.setState({ status: event.target.value }) }}>
                                                    {this.advertiserUpdateFormSelectedValueShow(n.status)}
                                                </select>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Update</button>
                                        </form>
                                    </div>
                                    {/* Modal footer */}
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn_delete " onClick={() => this.handleDeleteAdvertiserAccount(n)}>Delete <i className="fa fa-times" aria-hidden="true"></i></button>
                    </td>
                </tr>
            </>
        })
        return data;

    }

    companiesAccountTable(accData) {
        var data = accData.map((n, index) => {
            return <>
                <tr key={index}>
                    <th scope="row">{n.id}</th>
                    <td>{"companyName"}</td>
                    <td>{n.userName}</td>
                    <td>{n.email}</td>
                    <td>{this.selectedValue(n.status)}</td>
                    <td>{n.lastModifiedDate}</td>
                    <td>{n.advertiserList}</td>
                    <td>
                        <button className="btn_edit" data-toggle="modal" data-target="#editModal">Edit <i className="fa fa-pencil" aria-hidden="true"></i></button>
                        <div className="modal" id="editModal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    {/* Modal Header */}
                                    <div className="modal-header">
                                        <h4 className="modal-title">Companies Setting</h4>
                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                    </div>
                                    {/* Modal body */}
                                    <div className="modal-body">
                                        <form className="new_acc_form" onSubmit={this.handleUpdateDacAccountInfo}>
                                            <div>
                                                <label htmlFor="editInputEmail1">Email address</label>
                                                <input type="email" className="form-control"
                                                    id="editInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    value={this.state.email}
                                                    required
                                                    onChange={(e) => { this.setState({ email: e.target.value }) }}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="editname">Name</label>
                                                <input type="text" className="form-control"
                                                    id="editname"
                                                    value={n.userName}
                                                    required
                                                    onChange={(e) => { this.setState({ name: e.target.value }) }} />
                                            </div>
                                            <div className="form-group select_group">
                                                <label htmlFor="selStatus">Status</label>
                                                <select className="form-control slb_status_new_account_form" id="selStatus" onChange={(event) => { this.setState({ status: event.target.value }) }}>
                                                    {this.dacUpdateFormSelectedValueShow(n.status)}
                                                </select>
                                            </div>
                                            <button type="submit" className="btn btn-primary" >Update</button>
                                        </form>
                                    </div>
                                    {/* Modal footer */}
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn_delete " onClick={() => this.handleDeleteDacAccount(n)}>Delete <i className="fa fa-times" aria-hidden="true"></i></button>
                    </td>
                </tr>
            </>
        })
        return data;

    }

    
    campaigTable(campaignData) {
        var data = campaignData.map((n, index) => {
            return <>
                <tbody key={index}>
                    <tr >
                        <th>{n.campaignName}</th>
                    </tr>
                    <tr>

                        <td>
                            <div>
                                <p>{n.lineItemId}</p>
                                <p>{n.lineItemName}</p>
                            </div>
                        </td>
                        <td>
                            <div className="round1">
                                <input type="checkbox" id={n.lineItemId} />
                                <label htmlFor={n.lineItemId} />
                            </div>
                        </td>
                        <td>{n.overallBudget}</td>
                        <td>{n.curentlyUsedAAmount}</td>
                        <td>{n.curentlyUsageRate}</td>
                        <td>{n.startDate}</td>
                        <td>{n.endDate}</td>
                        <td><i className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                    </tr>

                </tbody>

            </>
        }
        )

        return data;
    }

    lineItemTable(lineItemData) {
        var data = lineItemData.map((n, index) => {
            return <>
                <tr key={index}>
                    <td>
                        <div className="round1">
                            <input type="checkbox" id={n.untreated} />
                            <label htmlFor={n.untreated} />
                        </div>
                    </td>
                    <td>{n.lineItemId}</td>
                    <td>
                        <p>{n.campaignName}</p>
                        <p>{n.LineItemName}</p>
                    </td>
                    <td>
                        <div className="round1">
                            <input type="checkbox" id={n.id} />
                            <label htmlFor={n.id} />
                        </div>
                    </td>
                    <td>{n.overallBudget}</td>
                    <td>{n.startDate}</td>
                    <td>{n.endDate}</td>
                    <td>{n.registeredDate}</td>
                    <td><i className="fa fa-external-link" aria-hidden="true"></i></td>
                </tr>
            </>
        })
        return data
    }

    render() {

        var dta = this.props.col
        if (dta === "7") {
            if(this.props.accountType==="dac"){
                return this.dacAccountTable(this.props.dt)
            }else if(this.props.accountType ==="advertiser"){
                console.log(this.props)
                // this.setState({ email: this.props.dt });
                return this.advertiserTable(this.props.dt)
            }else if (this.props.accountType === "companies"){
                return this.companiesAccountTable(this.props.dt)
            }
        } else if (dta === "8") {
            return this.campaigTable(this.props.dt)
        } else if (dta === "9") {
            return this.lineItemTable(this.props.dt)
        }
        console.log(this.props.col)

    }
}
const mapStateToProps = () => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeADacAccount: (dac) => dispatch(accountAction.removeDacAccount(dac)),
        updateInfoForADacAccount: (dac) => dispatch(accountAction.updateDacAccount(dac)),
        removeAAdvertiserAccount : (advertiser) => dispatch (accountAction.removeAdvertiserAccount(advertiser)),
        updateInfoForAAdvertiserAccount : (advertiser) => dispatch (accountAction.updateAdvertiserAccount(advertiser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(table);