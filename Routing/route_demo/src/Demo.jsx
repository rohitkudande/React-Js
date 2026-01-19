
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
export default function Demo(){

    const [rdpass,setData]=useState([]);
    let api=()=>{
        axios.get("http://localhost:8080/pdetails")
        .then(res=>{
            setData(res.data);

        }).catch((err)=>{
          console.log(err);
        });
    };


useEffect(() => {
    api();
  }, []); 

    return(
        <>
        <h1>RD Passbook Details</h1>
         <table className="table table-bordered table-striped text-center">
  <thead className="table-dark">
    <tr>
      <th>Sr.No</th>
      <th>ACNo</th>
      <th>Name</th>
      <th>RD Amount</th>
      <th>RD Date</th>
    </tr>
  </thead>

  <tbody>
  {rdpass.map((item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.acno}</td>
      <td>{item.name}</td>
      <td>{item.rdamt}</td>
      <td>{item.rddate}</td>
    </tr>
  ))}
</tbody>

</table>
        </>
    )
}