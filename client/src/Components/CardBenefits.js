import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const CardBenefits = ({ dicCompany }) => {

  return (
    <div className="card">
      <h5 className="card-title text-center">REPORTED NON-SALARY BENEFITS:</h5>
      <div className="card-body row">
        {dicCompany ? dicCompany.benefits.map(value => (
          <p className="col-md-auto" key={value}> - {value}</p>
          )): "No data"}
      </div>
    </div>
  )
}

export default CardBenefits;
