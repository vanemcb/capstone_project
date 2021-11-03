import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Image, Button } from 'react-bootstrap';
import account from './images/account.png'

const LogoutButton = () => {
    const { logout, isAuthenticated, user } = useAuth0();
    return (
        isAuthenticated && (
            <Button onClick={() => logout()} className='btn hover-shadow' style={{
                background: '#81A9BD',
                border: 'none',
                fontSize: '18px',
                color: 'black',
                width: '130px'
            }}>
                <Image src={user.picture}
                    className='rounded-circle'
                    height='30'
                    style={{
                        margin: '0px 10px 0px 0px'
                    }}
                />
                Log Out
            </Button>
        )
    )
}

export default LogoutButton;