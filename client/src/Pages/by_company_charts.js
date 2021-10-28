import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import Navigation from "../Components/navigation";
import FooterBar from "../Components/footer";
import BarByCompany from "../Components/BarByCompany"
import DouByCompany from "../Components/DouByCompany"
import HomeSideBar from "../Components/home_sidebar"
import CardCompany from "../Components/CardCompany";

const ByCompanyCharts = () => {
  return (
    <Fragment>
      <Navigation />
      <Row className="show-grid" style={{ margin: '20px 10px 10px 10px' }}>
        <Col className="show-grid" xs={2} md={2} style={{ width: 230 }} >
          <Row className="mx-auto">
            <HomeSideBar />
          </Row >
          <Row >
            <CardCompany />
          </Row>
        </Col>
        <Col className="show-grid" xs={5} md={5}>
          <Row style={{ margin: '0px 20px 10px 0px', display: 'flex' }}>
            <BarByCompany />
          </Row>
        </Col>
        <Col className="show-grid" xs={5} md={5}>
          <Row style={{ margin: '0px 20px 10px 0px', display: 'flex'}}>
            <DouByCompany />
          </Row>
        </Col>
      </Row>
      <FooterBar sticky="bottom" />
    </Fragment>
  );
};
export default ByCompanyCharts;