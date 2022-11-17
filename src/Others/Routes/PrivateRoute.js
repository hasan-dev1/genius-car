import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(UserContext);
    const location = useLocation()


    if(loading){
        return <div>Loading...</div>
    }


    if(!user?.uid){
        return <Navigate to={'/login'} state={{ from:location }} replace ></Navigate>
    }else{
        return children
    }
};

export default PrivateRoute;