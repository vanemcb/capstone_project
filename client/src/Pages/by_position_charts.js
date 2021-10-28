import React, { Fragment } from "react";
import Navigation from "../Components/navigation";
import FooterBar from "../Components/footer";

const ByPositionCharts = () => {

    return (
        <div style={{ height: '100vh' }}>
            <Fragment>
                <Navigation />
                <div class="row">
                    <div className="container">

                    </div>
                </div>
                <FooterBar className='sticky-bottom' />
            </Fragment>
        </div >
    );
};

export default ByPositionCharts;