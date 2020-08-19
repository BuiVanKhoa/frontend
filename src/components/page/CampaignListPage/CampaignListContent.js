import React from 'react';
import DatePicker from 'react-datepicker';
import '../../../styles/CampaignListContent.css';
import '../../../../node_modules/react-datepicker/dist/react-datepicker.css';
import Table from '../../Table';
import data from "../../../db.json";

class campaignListContent extends React.Component {
    state = {
        startDate: new Date(),
        endDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    handleEndChange = edate => {
        this.setState({
            endDate: edate
        });
    }
    render() {

        const cp = data.capampaignTable
        return (
            <>
                <div className="campaign_h row">
                    <div className="col-md-2">
                        <div className="pl-3 form-group select_group">
                            <label htmlFor="selStatus">Status</label>
                            <select className="form-control slb_status" id="selStatus">
                                <option value="1">Under publication</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label className="date_label">Start date: </label>
                        <br></br>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            className="date"
                        />
                    </div>
                    <div className="col-md-3">
                        <label className="date_label">End date: </label>
                        <br></br>
                        <DatePicker
                            selected={this.state.endDate}
                            onChange={this.handleEndChange}
                            className="date"
                        />
                    </div>
                    <div className="col-md-4 pr-3">
                        <div className="form-group select_group row">
                            <div className="col-md-8">
                                <select className="form-control slb_search ">
                                    <option>Free search</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <button className="btn_search">Search</button>
                            </div>
                            <div className="col-md-12">
                                <input className="search_box" type="textbox"></input>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-9"></div>
                    <div className="col-md-2">
                        <label>2 in near or 1-2 review</label>
                    </div>
                    <div className="col-md-1">

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

                <div className="campaign_b">
                <table className="table table-borderless">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Campaign name</th>
                        <th scope="col"><i className="fa fa-exclamation-circle fa-2x" aria-hidden="true" /></th>
                        <th scope="col">Overall budget</th>
                        <th scope="col">Curently used amount</th>
                        <th scope="col">Curently usage rate</th>
                        <th scope="col">start date</th>
                        <th scope="col"> End date</th>
                        <th></th>
                    </tr>
                </thead>
                    <Table col="8" dt = {cp}></Table>

                    </table>
                </div>

            </>
        )
    }

}
export default campaignListContent;
