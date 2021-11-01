import React from "react";

export default function PopoverCompanies({ companies, handleClickButton }) {

  return (
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">All companies</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">            
            {companies && companies.companies_list ?
              companies.companies_list.map(value => (
                <button
                  className="btn btn-secondary mr-2 mt-2"
                  type="button"
                  onClick={handleClickButton}
                  value={value}
                  key={value}
                  style={{ width: 150 }}
                >
                  {value}
                </button>
              )) : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}