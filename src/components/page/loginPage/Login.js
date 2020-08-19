import React from 'react';
import { connect } from 'react-redux';
import '../../../styles/Login.css';
// import {Redirect} from 'react-router-dom';
import { userActions } from '../../../actions/user.action';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: "",
      isLoading: false,
    }
  }


  handleError = (errorMsg) =>{
    this.setState({error: errorMsg})
  }
  handleSubmit = event => {
    event.preventDefault()
    let {username, password} = this.state;
    let reUsername= new RegExp("^[a-zA-Z][a-zA-Z0-9]{1,255}");
    let rePassword= new RegExp("^[a-zA-Z][a-zA-Z0-9]{4,255}");
    
    if(username === "" || password=== ""){
      this.handleError("let type username and password")
    } else if(!reUsername.test(username)){
      this.handleError("username is incorrect")
    } else if(!rePassword.test(password)) {
      this.handleError("password is incorrect")
    }else{
      this.setState({isLoading: true})
      this.props.loginAction(username,password);
    }
    
  }

  
  render() {
    const  {error, isLoading} = this.state;
    const {isLoginSuccess} = this.props;
    return (
      <>
        <div className="login_space">
          <div className="login_page">
            <div className="form">
              <div className="ad_logo">
                <h2 className="font-italic">Ad setting</h2>
              </div>
              <form className="login_form" onSubmit={this.handleSubmit}>
                <div>
                  <label htmlFor="username">User name:</label>
                  <input type="text"
                    name="username"
                    placeholder="Username"
                    required
                    onChange={(event) => { this.setState({ username: event.target.value }) }} />
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input type="password" name="password" placeholder="password" required onChange={(event) => { this.setState({ password: event.target.value }) }} />
                </div>

                <div className="message">  

                <p className="text-center text-danger">{error}</p>
                { isLoginSuccess && this.LoginSuccess()}
                </div>
                  <button type="submit" disabled={isLoading}>
                  {isLoading && 
                                    <div className="spinner-border spinner-border-sm mr-2" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                }
                    login</button>
              </form>
            </div>
          </div>
        </div>

      </>);
  }

  LoginSuccess(){
    localStorage.setItem('login','success') 
  }
}

const mapStateToProps = (state) => {

  return{
      isLoginPending: state.login.isLoginPending,
      isLoginSuccess: state.login.isLoginSuccess,
      loginError: state.login.loginError,
  }

};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (username, password) => dispatch(userActions.login(username,password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);