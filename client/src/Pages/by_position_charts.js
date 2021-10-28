import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import Navigation from "../Components/navigation";
import FooterBar from "../Components/footer";
import BarByCompany from "../Components/BarByCompany"
import DouByCompany from "../Components/DouByCompany"
import HomeSideBar from "../Components/home_sidebar"
import CardCompany from "../Components/CardCompany"
import ListCompanies from "../Components/ListCompanies";

const ByPositionCharts = () => {
    return (
        <Fragment>
            <Navigation />
            <Row className="show-grid" style={{ margin: '20px 10px 10px 10px' }}>
                <Col className="show-grid" xs={2} md={2} style={{ width: 230 }} >
                    <Row className="me-auto" >
                        <HomeSideBar />
                    </Row >
                    <Row className="me-auto" style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        margin: '20px 0px 20px 0px',
                        alignContent: 'space-between'
                    }}>
                        Morbi quis elit et eros interdum aliquet in ut nisl. Integer massa lorem, sagittis a quam et, vestibulum dignissim libero. Donec eu metus vel justo ornare lobortis. Ut eget sapien quis arcu aliquam dictum. Fusce et odio hendrerit, interdum turpis condimentum, sollicitudin purus. In ac lacus ultrices, varius velit eget, lobortis nisi. Vestibulum efficitur nisi non velit finibus, eu dignissim sapien ullamcorper. Praesent quis tristique risus, eleifend congue lorem. Fusce quis gravida lorem. Nulla quis sodales dui. Nunc sed pharetra elit, in elementum neque. Proin porttitor aliquam mollis. Etiam et fringilla dolor, a porttitor metus. Duis vestibulum, dui eget egestas commodo, nunc magna suscipit mi, ut ullamcorper enim lectus at leo.
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
                        alignContent: 'space-between'
                    }}>
                        <Col xs={6} md={6} style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            margin: '00px 00px 20px 00px',
                            alignContent: 'space-between'
                        }} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius sem dictum nulla blandit molestie. Phasellus finibus dui fringilla, aliquet tortor lacinia, blandit purus. Phasellus risus enim, luctus in aliquet ornare, vulputate non purus. Phasellus eu metus et augue porta mollis vel non lectus. Cras sed tellus felis. Nullam in ante non elit ultricies consectetur vel sed magna. Phasellus condimentum facilisis lectus, vel congue est aliquet ut. Donec vitae sapien massa. Nam sem est, mollis id semper ut, aliquam a metus. Aliquam porttitor bibendum arcu, at suscipit magna ultricies eget. Nulla eu purus id eros auctor eleifend id sit amet metus. Nunc molestie viverra nulla eget pretium. Donec quis tellus a eros rutrum gravida. Nunc congue ante ac odio sodales bibendum. Morbi et tellus nibh. Pellentesque quis semper elit, sit amet vestibulum nunc.
                        </Col>
                        <Col xs={6} md={6} style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            margin: '00px 00px 20px 00px',
                            alignContent: 'space-between'
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius sem dictum nulla blandit molestie. Phasellus finibus dui fringilla, aliquet tortor lacinia, blandit purus. Phasellus risus enim, luctus in aliquet ornare, vulputate non purus. Phasellus eu metus et augue porta mollis vel non lectus. Cras sed tellus felis. Nullam in ante non elit ultricies consectetur vel sed magna. Phasellus condimentum facilisis lectus, vel congue est aliquet ut. Donec vitae sapien massa. Nam sem est, mollis id semper ut, aliquam a metus. Aliquam porttitor bibendum arcu, at suscipit magna ultricies eget. Nulla eu purus id eros auctor eleifend id sit amet metus. Nunc molestie viverra nulla eget pretium. Donec quis tellus a eros rutrum gravida. Nunc congue ante ac odio sodales bibendum. Morbi et tellus nibh. Pellentesque quis semper elit, sit amet vestibulum nunc.
                        </Col>
                    </Row>
                </Col>


            </Row>
            <FooterBar sticky="bottom" />
        </Fragment>
    );
};

export default ByPositionCharts;