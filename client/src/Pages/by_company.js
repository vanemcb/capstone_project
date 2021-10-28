import React, { Fragment } from "react";
import Navigation from "../Components/navigation";
import FooterBar from "../Components/footer";
import ListCompanies from "../Components/ListCompanies";



const ByCompany = () => {

    return (
        <div style={{ height: '100vh', position: 'relative' }}>
            <Fragment>
                <Navigation />
                <div class="row">
                    <div className="container">
                        <ListCompanies />

                    </div>
                </div>
            </Fragment> 
            <FooterBar style={{ height: '100vh', position: 'relative' }} />
        </div>
    );
};

export default ByCompany;