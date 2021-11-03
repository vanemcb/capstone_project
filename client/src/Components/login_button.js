import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Image, Button } from 'react-bootstrap';
import account from './images/account.png'

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
        <Button onClick={() => loginWithRedirect()} className='btn hover-shadow' style={{
                            background: '#81A9BD',
                            border: 'none',
                            fontSize: '18px',
                            color: 'black',
                            width: '130px'
                        }}>
                            <Image src={account}
                                className='rounded-circle'
                                height='30'
                                style={{
                                    margin: '0px 10px 0px 0px'
                                }}
                            />
                            Log In
                    </Button>
        )
    )
}

export default LoginButton;