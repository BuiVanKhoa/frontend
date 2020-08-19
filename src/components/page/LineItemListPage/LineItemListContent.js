import React from 'react';
import '../../../styles/LineItemListContent.css';
import Table from '../../Table';
import data from '../../../db.json';

export default () => {

    const lineItemData= data.lineItemTable
    return (
        <>
            <div className="line_item_h row">
                <div className="col-md-2">
                    <div className="pl-3 form-group select_group">
                        <label htmlFor="slbApplicability">Applicability</label>
                        <select className="form-control slb_status" id="slbApplicability">
                            <option value="1">Applying</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group select_group">
                        <label htmlFor="selStatus">Status</label>
                        <select className="form-control slb_status" id="selStatus">
                            <option value="1" disabled>No refinement</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="form-group select_group">
                        <select className="form-control slb_search">
                            <option>Free search</option>
                        </select>
                        <input className="search_box" type="textbox"></input>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="select_group">
                        <button className="btn_search">Search</button>
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


            <div className="line_item_b">
            <table className="table table-borderless">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Untreated</th>
                                <th scope="col">ID</th>
                                <th scope="col">Campaign name/Line item name</th>
                                <th scope="col"><i className="fa fa-exclamation-circle fa-2x" aria-hidden="true" /></th>
                                <th scope="col">Overall budget</th>
                                <th scope="col">START DATE</th>
                                <th scope="col"> End date</th>
                                <th scope="col">Registered date</th>
                                <th scope="col">Applicability</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Table col="9" dt={lineItemData}></Table>
                        </tbody>
                    </table>
            </div>
        </>
    )
}