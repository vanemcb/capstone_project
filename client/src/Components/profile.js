import React, { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Image, Row, Col } from 'react-bootstrap'

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div style={{ maxHeight: "40px", maxWidth: "180px" }}>
                <Fragment>
                    <Row >
                        <p style={{ fontSize: '18px', fontStyle: 'italic', justifyContent: 'center', fontWeight: 'bold', margin: "0", maxHeight: "25px" }}>{user.name}</p>
                        <p style={{ fontSize: '12px', fontStyle: 'italic', justifyContent: 'center', margin: "0", maxHeight: "15px" }}>{user.email}</p>
                    </Row>
                </Fragment>
            </div>
        )
    )
}

export default Profile;