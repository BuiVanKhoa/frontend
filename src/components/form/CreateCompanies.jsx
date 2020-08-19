import React from 'react';
import "../../styles/FormCreactAccount.css";
import {connect} from 'react-redux';
import {accountAction} from '../../actions/accountAction';

class FormCreateAccount extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            name: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({ name: event.target.value })
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
            return <>
            <h3>CREATE NEW DAC ACCOUNT</h3>
            <form className="new_acc_form" onSubmit={this.handleSubmitNewAccount}>
        
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
const mapStateToProps = (state) =>{
    return{

    }
}
const mapDispatchTToProps = (dispatch) =>{
    return {
        newCompaniesAction : (name) => dispatch (accountAction.newCompaniesAccount(name)),
    }
}

export default connect (mapStateToProps,mapDispatchTToProps)(FormCreateAccount);
