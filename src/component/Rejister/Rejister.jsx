import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Rejister() {

    const rejisterHandel=(e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        console.log(name, password, email, photo);


    }
    return (
        <div >
            <Card className='mx-auto mt-md-5' style={{ maxWidth: '18rem' }}>
                <Card.Body>
                    <h3>please Rejister Here</h3>
                    <Form onSubmit={rejisterHandel}>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Photo Url</Form.Label>
                            <Form.Control type="text" name='photo' placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" />
                            <small>I have an Account.<Link to='/recipies/login'> Login?</Link></small>
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

export default Rejister