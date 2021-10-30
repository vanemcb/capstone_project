import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import Navigation from "../Components/navigation";
import FooterBar from "../Components/footer";
import BarByCompany from "../Components/BarByCompany"
import DouByCompany from "../Components/DouByCompany"
import HomeSideBar from "../Components/home_sidebar"
import CardCompany from "../Components/CardCompany"
import ListCompanies from "../Components/ListCompanies";

{/* GRAPHICS */ }
const ByPositionCharts = () => {
    return (
        <div className="position" style={{ position: 'relative', minHeight: '100vh' }}>
            <Fragment>
                <Navigation />
                <Row className="show-grid" style={{ margin: '20px 10px 10px 10px' }}>
                    <Col className="show-grid" xs={2} md={2} style={{ width: 230 }} >
                        <Row className="me-auto" >
                            <HomeSideBar />
                        </Row >
                        <Row >
                            <CardCompany />
                        </Row>
                    </Col>
                    <Col className="show-grid" xs={10} md={10}>
                        <Row style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            margin: '0px 0px 20px 0px',
                            alignContent: 'space-between'
                        }}>
                            <ListCompanies />
                        </Row>
                        <Row style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            margin: '0px 0px 20px 0px',
                            alignContent: 'space-between'
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius sem dictum nulla blandit molestie. Phasellus finibus dui fringilla, aliquet tortor lacinia, blandit purus. Phasellus risus enim, luctus in aliquet ornare, vulputate non purus. Phasellus eu metus et augue porta mollis vel non lectus. Cras sed tellus felis. Nullam in ante non elit ultricies consectetur vel sed magna. Phasellus condimentum facilisis lectus, vel congue est aliquet ut. Donec vitae sapien massa. Nam sem est, mollis id semper ut, aliquam a metus. Aliquam porttitor bibendum arcu, at suscipit magna ultricies eget. Nulla eu purus id eros auctor eleifend id sit amet metus. Nunc molestie viverra nulla eget pretium. Donec quis tellus a eros rutrum gravida. Nunc congue ante ac odio sodales bibendum. Morbi et tellus nibh. Pellentesque quis semper elit, sit amet vestibulum nunc.
                        </Row>
                        <Row style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            margin: '0px 0px 20px 0px',
                            alignContent: 'space-between'
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius sem dictum nulla blandit molestie. Phasellus finibus dui fringilla, aliquet tortor lacinia, blandit purus. Phasellus risus enim, luctus in aliquet ornare, vulputate non purus. Phasellus eu metus et augue porta mollis vel non lectus. Cras sed tellus felis. Nullam in ante non elit ultricies consectetur vel sed magna. Phasellus condimentum facilisis lectus, vel congue est aliquet ut. Donec vitae sapien massa. Nam sem est, mollis id semper ut, aliquam a metus. Aliquam porttitor bibendum arcu, at suscipit magna ultricies eget. Nulla eu purus id eros auctor eleifend id sit amet metus. Nunc molestie viverra nulla eget pretium. Donec quis tellus a eros rutrum gravida. Nunc congue ante ac odio sodales bibendum. Morbi et tellus nibh. Pellentesque quis semper elit, sit amet vestibulum nunc.
                        </Row>

                    </Col>


                </Row>
            </Fragment>



            <FooterBar />

        </div >
    );
};

export default ByPositionCharts;