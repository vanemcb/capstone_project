import React, { Fragment, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Navigation from "../Components/navigation";
import FooterBar from "../Components/footer";
import SurveyButton from "../Components/survey_button"
import ToggleCompanies from "../Components/ToggleCompanies";
import CardGeneral from "../Components/CardGeneral";
import BarByFilter from "../Components/BarByFilter"


const GeneralInfo = () => {
    // const [dicCompany, setDicCompany] = useState(null)
    // const [company, setCompany] = useState("")
    const [dicFilter, setDicFilter] = useState(null)
    const [filter, setFilter] = useState("")

    return (
        <div>
            <div style={{ position: 'relative', minHeight: '100vh' }}>
                <Fragment>
                    <Navigation />
                    <Row className="show-grid" style={{ margin: '20px 10px 10px 10px' }}>
                        <Col className="show-grid" xs={2} md={2} style={{ width: 230 }} >
                            <Row className="mx-auto" style={{ margin: '10px 0px 30px 0px' }}>
                                <SurveyButton />
                            </Row >
                            <Row className="mx-auto">
                              <CardGeneral dicFilter={dicFilter} setDicFilter={setDicFilter} setFilter={setFilter}/>
                            </Row>
                        </Col>
                        <Col className="show-grid" xs={10} md={10}>
                            <Row style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                margin: '10px 0px 30px 0px',
                                alignContent: 'space-between'
                            }}>
                                {/* <ToggleCompanies setDicCompany={setDicCompany} setCompany={setCompany} /> */}
                            </Row>
                            <Row style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                margin: '0px 0px 20px 0px',
                                alignContent: 'space-between'
                            }}>
                              <BarByFilter dicFilter={dicFilter} filter={filter}/>
                            </Row>
                            {/* <Row style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                margin: '0px 0px 20px 0px',
                                alignContent: 'space-between'
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius sem dictum nulla blandit molestie. Phasellus finibus dui fringilla, aliquet tortor lacinia, blandit purus. Phasellus risus enim, luctus in aliquet ornare, vulputate non purus. Phasellus eu metus et augue porta mollis vel non lectus. Cras sed tellus felis. Nullam in ante non elit ultricies consectetur vel sed magna. Phasellus condimentum facilisis lectus, vel congue est aliquet ut. Donec vitae sapien massa. Nam sem est, mollis id semper ut, aliquam a metus. Aliquam porttitor bibendum arcu, at suscipit magna ultricies eget. Nulla eu purus id eros auctor eleifend id sit amet metus. Nunc molestie viverra nulla eget pretium. Donec quis tellus a eros rutrum gravida. Nunc congue ante ac odio sodales bibendum. Morbi et tellus nibh. Pellentesque quis semper elit, sit amet vestibulum nunc.
                            </Row> */}
                        </Col>
                    </Row>
                </Fragment>
            </div >
            <div className='fixed-bottom'>
                <FooterBar />
            </div>
        </div>
    );
};

export default GeneralInfo;