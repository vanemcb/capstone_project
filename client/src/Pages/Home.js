import React, { useEffect, useState, Fragment } from "react";
import Navigation from "../Components/navigation";
import FooterBar from "../Components/footer";
import ListLevels from "../Components/ListLevels";

const Home = () => { 

  return (
    <Fragment>
      <Navigation />
      <div class="row">
        <div className="container">
          <ListLevels />
        </div>
      </div>
      <FooterBar />
    </Fragment>
  );
};

export default Home;