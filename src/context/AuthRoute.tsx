import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


export const AuthRoute = (props: { children: any; }) => {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        const AuthCheck = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false);
            } else {
                navigate('/login');
            }
        });

        return () => AuthCheck();
    }, [auth]);

    if (loading) return <p>loading...</p>;
    return <>{ children }</>
}