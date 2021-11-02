import React from "react";

export default function PopoverCompanies({ companies, handleClickButton }) {

    return (
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered" role="document" >
                <div className="modal-content" style={{ width: '685px' }}>
                    <div className="modal-header" >
                        <h5 className="modal-title ml-auto" id="exampleModalLongTitle" >All Companies</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" style={{ width: '700px' }}>
                        {companies && companies.companies_list ?
                            companies.companies_list.map(value => (
                                <button
                                    className="btn btn-secondary mr-3 mt-3"
                                    type="button"
                                    onClick={handleClickButton}
                                    value={value}
                                    key={value}
                                    style={{ width: 150, color: '#424242', background: '#DEE0E6', border: 'white' }}
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