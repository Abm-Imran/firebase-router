import { getAuth } from 'firebase/auth';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../custom hooks/useFirebase';
import app from '../../firebase.init';


const auth = getAuth(app);

const ProtectedRoute = ({ children }) => {
    const { user } = useFirebase();
    const location = useLocation();
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace ></Navigate>
    }

    return children;
};

export default ProtectedRoute;