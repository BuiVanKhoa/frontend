import React from 'react';
import '../../../styles/AccountManagerContent.css';
import Table from '../../Table';
import FormCreateDacAccount from '../../form/CreateAccount';
import { connect } from 'react-redux';
import {accountAction} from '../../../actions/accountAction';

class AccountManager extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  componentDidMount(){
    this.props.fetchListDacAccount();
  }

  render() {
    const listDac= this.props.listDacAccount
    return (
      <>
        <div className="account_space">
          <div className="create_account row">
            <div className="col-md-3">
              <div className="pl-3 form-group select_group">
                <label htmlFor="selStatus">Status</label>
                <select className="form-control slb_status" id="selStatus">
                  <option value="1">Applying</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group select_group">
                <select className="form-control slb_search">
                  <option>Free search</option>
                </select>
                <input className="textbox_" type="textbox"></input>
              </div>
            </div>

            <div className="col-md-5">
              <div className="select_group">
                <button className="btn_search">Search</button>
              </div>
            </div>

            <div className="col-md-12 new_account">
              <button className="btn_new" data-toggle="modal" data-target="#myModal">Creact new account</button>
              <div className="modal" id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    {/* Modal Header */}
                    <div className="modal-header">
                      <h4 className="modal-title">Modal Heading</h4>
                      <button type="button" className="close" data-dismiss="modal">×</button>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body">
                      <FormCreateDacAccount callform="formCreactDac"/>
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer">
                      <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <label className="check">Excludes delivery and dates in the past
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
              </label>
            </div>

            <div className="col-md-6">
              <div className="row">
                <div className="col-md-7">
                  <p>0 star 0-10 items</p>
                </div>
                <div className="col-md-5">
                  <nav className="pagi" aria-label="Page navigation">
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="facebook.com" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item"><a className="page-link" href="facebook.com">1</a></li>
                      <li className="page-item">
                        <a className="page-link" href="facebook.com" aria-label="Next">
                          <span aria-hidden="true">»</span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="list_acc">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Company name</th>
                <th scope="col">account name</th>
                <th scope="col">mail address</th>
                <th scope="col">status</th>
                <th>APPROVALDATE</th>
                <th scope="col"> Num of advertisers</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <Table col="7" dt={listDac} accountType="dac"></Table>
            </tbody>
          </table>
        </div>
      </>
    )
  }

}
const mapStateToProps =(state)=>{
  return {
    listDacAccount: state.crudAccount
  }
}
const mapDispatchToProps =(dispatch)=>{
  return{
    fetchListDacAccount: () =>dispatch(accountAction.fetchListDacAccount())
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (AccountManager);
