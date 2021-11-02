import React from "react";
import Navigation from "../Components/navigation";
import Survey from '../Components/survey';
import FooterBar from "../Components/footer";

const AddSalary = () => {
    return (
        <div>
            <div>
                <Navigation />
                <Survey />
            </div>
            <div className='fixed-bottom'>
                <FooterBar />
            </div>
        </div>
    );
};

export default AddSalary;