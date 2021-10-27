import React, { useEffect, useState, Fragment } from "react";
import Navigation from "../Components/navigation";
import FooterBar from "../Components/footer";
import ListCompanies from "../Components/ListCompanies";



const ByCompany = () => {

  return (
    <Fragment>
      <Navigation />
      <div class="row">
        <div className="container">
          <ListCompanies />
          
        </div>
      </div>
      <FooterBar />
    </Fragment>

  );
};

export default ByCompany;