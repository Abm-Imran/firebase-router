import React from 'react';
import useFirebase from '../../custom hooks/useFirebase';


const Login = () => {

    const {user,handleSignInWithGoogle} = useFirebase();
    return (
        <div className='login-container'>
            <h2>Login Using Google</h2>
            <h3>Welcome Mr/Mrs- {user?.displayName && user.displayName}</h3>
            <button onClick={handleSignInWithGoogle}>Google SignIn</button>
            <br />
            <br />
            <form action="">
    
                <input type="email" name="" id="" placeholder='your email'/>
                <br />
                <input type="password" name="" id="" placeholder='your password' />
                <br />
                <input type="submit" value="LogIn" />

            </form>
        </div>
    );
};

export default Login;