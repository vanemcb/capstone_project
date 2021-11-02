import React from "react";

export default function CardCompany({ dicCompany, setPosition, position } ) {
 
  const handleClickRadio = (e) => {
    setPosition(e.target.value);
  };

  return (
    <div className="card" style={{ width: 288}}>
      <div className="card-body">
        <h5 className="card-title text-center">{dicCompany !== null && dicCompany.company_name ? dicCompany.company_name : "Select company"}</h5>
              <h6 className="card-subtitle mb-2 text-muted text-center">{position ? position : "Filter by Position"}</h6>
        <div className="card-text">
          {dicCompany !== null ?
            dicCompany.positions_list.map(value => (
              <div className="form-check" key={value}>
                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value={value} onChange={handleClickRadio} />
                <label className="form-check-label" >
                {value}
              </label>
            </div>
            )) : "No Position Available"}
        </div>
      </div>
    </div>
  );
}