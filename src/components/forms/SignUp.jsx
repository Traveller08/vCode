import React from 'react';
import { Form, Button } from 'react-bootstrap';

const middleClass={maxWidth:"500px",marginLeft:"30%" ,alignItems:"center"}

const SignUp = () => {
    return (
        <div style={{textAlign : 'left'}}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='mb-4'>Full Name</Form.Label>
                    <Form.Control  type="text" style={middleClass} placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='mb-4'>Email</Form.Label>
                    <Form.Control type="email" style={middleClass} placeholder="" />
                    
                </Form.Group>



                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='mb-4'>Password</Form.Label>
                    <Form.Control type="password" style={middleClass} placeholder="" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label >Address</Form.Label>
                    <Form.Control type="text" style={middleClass} placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label >Codeforces Profile</Form.Label>
                    <Form.Control type="text" style={middleClass} placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label >Codechef Profile</Form.Label>
                    <Form.Control type="text" style={middleClass} placeholder="" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        </div>
    );
};
export default SignUp;