import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Login() {

    const loginHandel=(e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, password);


    }

    return (
        <div >
            <Card className='mx-auto mt-md-5' style={{ maxWidth: '18rem' }}>
                <Card.Body>
                    <h3>please Login Here</h3>
                    <Form onSubmit={loginHandel}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" />
                            <small>I don't have an Account.<Link to='/recipies/rejister'> Rejister?</Link></small>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login