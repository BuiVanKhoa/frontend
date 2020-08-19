import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import '../styles/HomepageSidebar.css';
import {connect} from 'react-redux';
import {userActions} from '../actions/user.action';


class sidebar extends React.Component {
  constructor(props){
    super(props);
    this.setState={}
  }

  handleClickLogout = e =>{
  this.props.logout();
  }
  render() { 
    return ( 
      <>
      <div className="sidebar1">
        <div >
          <li data-toggle="collapse" data-target="#logout" className="collapsed active avatar_logo_li">
            <div className="logo">
              <img src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/s960x960/51484196_945936938937491_5185190600575549440_o.jpg?_nc_cat=102&_nc_sid=7aed08
            &_nc_ohc=yjbY0vYg-swAX-pgowZ&_nc_ht=scontent.fdad1-1.fna&_nc_tp=7&oh=1e228de3e2f975c49c8ecccf1b40c2c4&oe=5F3D5AB5" className="img-responsive center-block avatar" alt="Logo" />
            </div>
          </li>
          <div className="sub-menu collapse" id="logout">
            <div className="active avatar_logo_li">
              <Link className="signout_link" to="/login" onClick = {this.handleClickLogout}>Sign out</Link>
            </div>
          </div>
        </div>

        <br/>
        
        <div className="left-navigation">
          <ul className="nav flex-column list">

          <hr></hr>
          
          <li className="nav-item">
              <NavLink to ="/dashboard">Dashboard</NavLink>
          </li>
            <hr></hr>

            <li data-toggle="collapse" data-target="#account" className="nav-item" >
             Account
            </li>
            <ul className="sub-menu collapse" id="account">
              <li>
                <NavLink to="/dac/account" className="nav-link">DAC</NavLink>
              </li>
              <li><NavLink to='/advertiser/account' className="nav-link">Advertiser</NavLink></li>
              <li><NavLink to='/companies/account' className="nav-link">Companies</NavLink></li>
            </ul>
            <hr></hr>
            <li className="nav-item">
            <NavLink to="/campaign" className="nav-link">Campaign</NavLink>
            </li>
            <hr></hr>

            <li className="nav-item">
            <NavLink to="/line_item" className="nav-link">Line Item</NavLink>
            </li>
            <hr></hr>
          </ul>

        </div>

      </div>
      
      </>
     );
  }
}
 const mapStateToProps = () =>{

 }
 const mapDispatchToProps =(dispatch) =>{
   return {
     logout: () => dispatch(userActions.logout())
   }
 }
export default connect(mapStateToProps, mapDispatchToProps)(sidebar);