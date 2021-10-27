import React, { Fragment } from "react";
import Navigation from "../Components/navigation";
import FooterBar from "../Components/footer";
import BarByCompany from "../Components/BarByCompany"
import DouByCompany from "../Components/DouByCompany"



const ByCompanyCharts = () => {

  return (
    <Fragment>
      <Navigation />
      <div class="row">
        <div className="container">
          <BarByCompany />
          <DouByCompany />
        </div>
      </div>
      <FooterBar />
    </Fragment>

  );
};

export default ByCompanyCharts;