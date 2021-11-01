import React, { Fragment, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Navigation from "../Components/navigation";
import FooterBar from "../Components/footer";
import BarByCompany from "../Components/BarByCompany"
import DouByCompany from "../Components/DouByCompany"
import SurveyButton from "../Components/survey_button"
import CardCompany from "../Components/CardCompany";
import ToggleCompanies from "../Components/ToggleCompanies"
import CardBenefits from "../Components/CardBenefits";

const Graphics = () => {
    const [dicCompany, setDicCompany] = useState(null)
    const [position, setPosition] = useState("")

    return (
        <div >
            <div style={{ position: 'relative', minHeight: '100vh' }}>
                <Fragment >
                    <Navigation />
                    <Row className="show-grid" style={{ margin: '20px 10px 10px 10px' }}>
                        <Col className="show-grid" xs={2} md={2} style={{ width: 230 }} >
                            <Row className="mx-auto" style={{ margin: '10px 0px 30px 0px' }}>
                                < SurveyButton />
                            </Row >
                            <Row className="mx-auto" >
                                <CardCompany dicCompany={dicCompany} setPosition={setPosition} position={position} />
                            </Row>
                        </Col>
                        <Col className="show-grid" xs={10} md={10}>
                            <Row style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                margin: '10px 0px 30px 0px',
                                alignContent: 'space-between'
                            }}>
                                <ToggleCompanies setDicCompany={setDicCompany} />
                            </Row>
                            {/* graphics container */}
                            <Row style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                margin: '0px 0px 20px 0px',
                                alignContent: 'space-between'
                            }}>
                                <Col className="show-grid" xs={6} md={6}>
                                    <Row style={{ margin: '0px 20px 10px 0px', display: 'flex' }}>
                                        <BarByCompany dicCompany={dicCompany} />
                                    </Row>
                                </Col>
                                <Col className="show-grid" xs={6} md={6}>
                                    <Row style={{ margin: '0px 20px 10px 0px', display: 'flex' }}>
                                        <DouByCompany dicCompany={dicCompany} />
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignContent: 'space-between'
                            }}>
                                <CardBenefits dicCompany={dicCompany} />
                            </Row>
                        </Col>
                    </Row>
                </Fragment>

            </div>
            <div>
                <FooterBar />
            </div>
        </div>
    );
};
export default Graphics;