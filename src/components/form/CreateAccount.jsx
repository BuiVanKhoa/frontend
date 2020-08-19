import React from 'react';
import "../../styles/FormCreactAccount.css";
import {connect} from 'react-redux';
import {accountAction} from '../../actions/accountAction';

class FormCreateAccount extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            email: "",
            name: "",
            status: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({ email: event.target.value })
      }
    handleSubmitNewAccount = e =>{
        e.preventDefault()
        let {email, name, status}= this.state
        if(window.confirm("You want to add a Dac account?")){
            this.props.newAccountAction(email, name, status)
            alert("Done")
        }
        
    }
    handleSubmitNewAdvertiserAccount = e =>{
        e.preventDefault()
        let {email, name, status}= this.state
        if(window.confirm("You want to add a advertiser account?")){
            this.props.newAdvertiserAction(email, name, status)
            alert("Done")
        }
    }

    handleSubmitNewCompanyAccount = e =>{
      e.preventDefault()
      let {email, name, status}= this.state
      if(window.confirm("You want to add a company account?")){
          this.props.newAdvertiserAction( name)
          alert("Done")
      }
  }

    render() { 
        if(this.props.callform ==="formCreactDac"){
            return <>
            <h3>CREATE NEW DAC ACCOUNT</h3>
            <form className="new_acc_form" onSubmit={this.handleSubmitNewAccount}>
        <div>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp" 
          placeholder="Enter email" 
          required
          onChange= {this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" 
          id="name" 
          placeholder="Account name" 
          required
         onChange ={(e) => { this.setState({ name: e.target.value }) }}/>
        </div>
        <div className="form-group select_group">
              <label htmlFor="selStatus">Status</label>
              <select className="form-control slb_status_new_account_form" id="selStatus" onChange = {(event) => { this.setState({ status: event.target.value }) }}>
                <option value="1">Applying</option>
                <option value="2">Active</option>
                <option value="3">3</option>
              </select>
            </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </>
        }else if(this.props.callform ==="formCreateAdvertiser"){
            return <>
            <h3>CREATE NEW ADVERTISER ACCOUNT</h3>
            <form className="new_acc_form" onSubmit={this.handleSubmitNewAdvertiserAccount}>
        <div>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp" 
          placeholder="Enter email" 
          required
          onChange= {this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" 
          id="name" 
          placeholder="Account name" 
          required
         onChange ={(e) => { this.setState({ name: e.target.value }) }}/>
        </div>
        <div className="form-group select_group">
              <label htmlFor="selStatus">Status</label>
              <select className="form-control slb_status_new_account_form" id="selStatus" onChange = {(event) => { this.setState({ status: event.target.value }) }}>
                <option value="1">Applying</option>
                <option value="2">Active</option>
                <option value="3">3</option>
              </select>
            </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </>
        } else if (this.props.callform ==="formCreateCompanies"){
          return <>
            <h3>CREATE NEW COMPANY ACCOUNT</h3>
            <form className="new_acc_form" onSubmit={this.handleSubmitNewCompanyAccount}>
     
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" 
          id="name" 
          placeholder="Account name" 
          required
         onChange ={(e) => { this.setState({ name: e.target.value }) }}/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </>
        }
    }
}
const mapStateToProps = (state) =>{
    return{

    }
}
const mapDispatchTToProps = (dispatch) =>{
    return {
        newAccountAction: (email,name, status) => dispatch(accountAction.newDacAccount(email,name, status)),
        newAdvertiserAction: (email,name,status) => dispatch (accountAction.newAdvertiserAccount(email,name,status)),
        newCompaniesAction : (name) => dispatch (accountAction.newCompaniesAccount(name)),
    }
}



export default connect (mapStateToProps,mapDispatchTToProps)(FormCreateAccount);
