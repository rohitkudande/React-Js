import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default function Service() {

  const [summary,setSummary]= useState(0);
let api=()=>{
        axios.get("https://api.rootnet.in/covid19-in/stats/latest")
        .then(res=>{
            alert("Api called..");
            setSummary(res.data.data.summary);
        }).catch((err)=>{
          console.log(err);
        });
    };

  return (
    <>
    <div className="text-center mt-4">
        <Button variant="success" onClick={api}>
          Load Covid Data
        </Button>
      </div>
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
    </>
  );
}
