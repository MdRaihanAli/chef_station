import React, { useContext } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
const Provider = new GoogleAuthProvider()


function Login() {

    const { loginUser } = useContext(AuthContext)
    console.log(name);

    const loginHandel = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(user => console.log(user.user))
            .catch(err => console.log(err))

    }

    const googleLoginHandeler=()=>{
        signInWithPopup(auth, Provider)
        .then(result=>{
            console.log(result.user)
        })
        .then(err=>{
            console.log(err);
        })
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
                    <div>
                    <FaArrowRight />
                        <Button onClick={googleLoginHandeler} variant="primary" type="submit"> Login with Google </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login