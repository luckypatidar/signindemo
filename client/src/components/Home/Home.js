import React, { useState, useEffect } from 'react'
import { Button, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import * as actionType from '../../constants/actionTypes';
import decode from 'jwt-decode';

export default function Home() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));


    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        // setUser(JSON.parse(localStorage.getItem('profile')));
    }, []);


    const logout = () => {
        history.push('/');
        dispatch({ type: actionType.LOGOUT });
        window.location.reload();
        setUser(null);
    };
    return (
        <div>
            {user?.result ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '10rem' }}>
                    <Typography>
                        Hello you are logged In!
                    </Typography>
                    <Button variant="contained" color="secondary" onClick={() => logout()}>
                        Logout
                    </Button>
                </div>
            )
                : null
            }
        </div>
    )
}
