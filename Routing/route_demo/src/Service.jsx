import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default function Service() {

  const [summary, setSummary] = useState({});
const [regional, setRegional] = useState([]);

let api=()=>{
        axios.get("https://api.rootnet.in/covid19-in/stats/latest")
        .then(res=>{
            setSummary(res.data.data.summary);
            setRegional(res.data.data.regional);

        }).catch((err)=>{
          console.log(err);
        });l
    };



useEffect(() => {
    api();
  }, []); 


  return (
    <>
    <div className="container mt-5">
      <div className="row">

        {/* Card 1 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{summary.total}</h5>
              <p className="card-text">
                Total Cases
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{summary.confirmedCasesIndian}</h5>
              <p className="card-text">
                Confirmed Cases In India
              </p>
              <button className="btn btn-success">Explore</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{summary.confirmedCasesForeign}</h5>
              <p className="card-text">
                Confirmed Cases In Foreign.
              </p>
              <button className="btn btn-warning">Details</button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{summary.deaths}</h5>
              <p className="card-text">
                Number of Deaths
              </p>
              <button className="btn btn-danger">View</button>
            </div>
          </div>
        </div>

      </div>
    </div>
    <table className="table table-bordered table-striped text-center">
  <thead className="table-dark">
    <tr>
      <th>Sr.No</th>
      <th>State / UT</th>
      <th>Indian Cases</th>
      <th>Foreign Cases</th>
      <th>Discharged</th>
      <th>Deaths</th>
      <th>Total Confirmed</th>
    </tr>
  </thead>

  <tbody>
  {regional.map((item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.loc}</td>
      <td>{item.confirmedCasesIndian}</td>
      <td>{item.confirmedCasesForeign}</td>
      <td>{item.discharged}</td>
      <td>{item.deaths}</td>
      <td>{item.totalConfirmed}</td>
    </tr>
  ))}
</tbody>

</table>

    </>
  );
}
