import React, { useContext } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaArrowRight, FaGithub, FaGooglePlusG } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const auth = getAuth();
const Provider = new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider()



function Login() {
    const location = useLocation()
    const navigate = useNavigate()

    const { loginUser } = useContext(AuthContext)
    const from = location.state?.from?.pathname || '/'

    const loginHandel = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(user => {
                console.log(user.user)
                e.target.reset()
                navigate(from,{replace: true})
            })
            .catch(err => console.log(err))

    }

    const googleLoginHandeler = () => {
        signInWithPopup(auth, Provider)
            .then(result => {
                console.log(result.user)
                navigate(from,{replace: true})
            })
            .then(err => {
                console.log(err);
            })
    }

    const githubLoginHandeler = () => {
        signInWithPopup(auth, gitProvider)
            .then(result => {
                console.log(result.user)
                navigate(from,{replace: true})
            })
            .then(err => {
                console.log(err);
            })
    }

    return (
        <div >
            <Card className='mx-auto my-md-5' style={{ maxWidth: '18rem' }}>
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
                    <div className='mt-4'>

                        <Button onClick={googleLoginHandeler} variant="danger" className='w-100 mb-2' type="submit"> <FaGooglePlusG /> Login with Google </Button>
                        <Button onClick={githubLoginHandeler} variant="dark" className='w-100' type="submit"> <FaGithub />  Login with Google </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login