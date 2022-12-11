import React from 'react';
import useFirebase from '../../custom hooks/useFirebase';

const Home = () => {
    const {user } = useFirebase();
    return (
        <div>
            <h2>Current User: {user? user.displayName : 'No signed in User Now'}</h2>
        </div>
    );
};

export default Home;