import React, { useContext, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { updateProfile } from 'firebase/auth'
import LeftHero from '../Hero/LeftHero'
import useTitle from '../../hooks/useTitle'

function Rejister() {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('')

    const rejisterHandel = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        setError('')
        if (password.length < 6 || '') {
            setError('please input minimam than six charecter')
        }

        createUser(email, password)
            .then(user => {
                console.log(user.user);
                updateUserData(user.user, name, photo)
                e.target.reset()
            })
            .catch(err => {
                console.log(err);
            })
    }

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
    }
    useTitle('Rejister')
    return (
        <div >
            <Row className=''>
                <Col md="6" className='my-4 my-md-0'>
                    <Card className='mx-auto my-md-5' style={{ maxWidth: '18rem' }}>
                        <Card.Body>
                            <h3>Please <span className="text-primary">Rejister</span> Here</h3>
                            <Form onSubmit={rejisterHandel}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" required name='name' placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Photo Url</Form.Label>
                                    <Form.Control type="text" name='photo' placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" required name='email' placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" required name='password' placeholder="Password" />
                                    {
                                        error && <small className='text-danger'>{error}</small>
                                    }
                                    <small>I have an Account.<Link to='/recipies/login'> Login?</Link></small>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='d-none  d-md-block' md="6">
                    <LeftHero></LeftHero>
                </Col>
            </Row>
        </div>
    )
}

export default Rejister