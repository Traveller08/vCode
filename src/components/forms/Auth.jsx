import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Login from './Login';
import SignUp from './SignUp';


const Auth = () => {

    const [login,setLogin] = useState(false);

    function handleClick(){
        setLogin(false);
    }

    function handleClick2(){
        setLogin(true);
    }

    return (
        <>
        <div style={{textAlignment:"center",margin:"0 5%"}}>
            <Button variant="secondary" onClick={handleClick}>SignUp</Button>
            <Button variant="light" onClick={handleClick2}>Login</Button>
            </div>
            {login === true ? <Login /> : <SignUp />}
            
            </>
      
    );
};

export default Auth;