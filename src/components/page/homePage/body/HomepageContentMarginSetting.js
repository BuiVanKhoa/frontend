import React from 'react';
import '../../../../styles/HomepageContentMarginSetting.css';

export default (aaa) => {
    return(
      <>
      <div className="ms_space">
        <div className="marginsetting_title pl-5 pt-3">
        <h4>Margin Setting</h4>
        </div>
        <table className="table table-hover ">
        <thead>
          <tr>
            <th className="thead"scope="col"></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="marginsetting_body">
          <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
          <th scope="row"></th>
            <td>DAC fees</td>
            <td>Agency fees</td>
            <td>data fees</td>
            <td>media cost</td>
            <td></td>
          </tr>
          <tr>
            <td>Google PC</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
              <td className="register_row"><button className="btn_register">Register</button></td>
          </tr>
        </tbody>
      </table>
      </div>
      
      </>
    )
}