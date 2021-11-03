import React, { useState} from "react";

export default function CardGeneral({ dicFilter, setDicFilter, setFilter}) {

  const filters = { "Gender": "gender", "English Level": "english_level", "Company Location": "company_location", "Education Level": "education_level", "How did you learn coding?": "coding_learn"}

  const handleClickRadio = async (e) => {
    await getDicFilter(e.target.value)
    setFilter(e.target.value)
  };

  const getDicFilter = async (filter) => {
    try {
      const response = await fetch("http://localhost:5000/filter/" + filter);
      const jsonData = await response.json();
      setDicFilter(jsonData)
    } catch (err) {
      console.error(err.message);
    }
  };


  return (
    <div className="card" style={{ width: 288}}>
      <div className="card-body">
        <h5 className="card-title text-center">FILTERS</h5>
        <div className="card-text">
          {Object.keys(filters).map( key => (
              <div className="form-check" key={key}>
              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value={filters[key]} onChange={handleClickRadio} />
                <label className="form-check-label" >
                {key}
              </label>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}