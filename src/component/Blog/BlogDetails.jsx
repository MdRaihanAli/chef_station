import React, { useEffect, useRef, useState } from 'react'
import { Card } from 'react-bootstrap';
import Pdf from "react-to-pdf";
const ref = React.createRef();


function BlogDetails() {
    const ref = useRef()
    return (
        <div>
            <div className='text-center my-4'>

                <Pdf targetRef={ref} filename="code-pase.pdf">
                    {({ toPdf }) => <button className='btn btn-warning' onClick={toPdf}>Generate Pdf</button>}
                </Pdf>


            </div>
            <div ref={ref} className="row g-4 mb-4 pdf">
                <div className="col-md-6 sss">
                    <Card>
                        <Card.Body>
                            <Card.Header>Differences between uncontrolled and controlled components</Card.Header>

                            <Card.Text>
                                Uncontrolled React components operate independently and do not require external control to function, whereas Controlled React components require external control to function properly. Controlled components are more precise, less flexible, and typically more expensive than uncontrolled components..
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card>
                        <Card.Body>
                            <Card.Header>How to validate React props using PropTypes?</Card.Header>

                            <Card.Text>
                                To validate React props using PropTypes, you can import the PropTypes library and define the expected props for your component by adding a propTypes property to the component class.
                                In this example, we define a MyComponent class and add a propTypes property to it. The propTypes object specifies that myProp is expected to be a string and is required.

                                If a prop is passed that doesn't match the specified type or is missing a required prop, a warning will be logged in the console. This helps catch potential errors and maintain component stability.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card>
                        <Card.Body>
                            <Card.Header>difference between nodejs and express js</Card.Header>

                            <Card.Text>
                                Node.js is a runtime environment for executing JavaScript code on the server-side, while Express.js is a web application framework built on top of Node.js that provides additional functionality for building web applications, such as routing, middleware, and templating. Node.js provides the basic functionality for server-side development, while Express.js provides a more streamlined approach for building web applications with Node.js.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card>
                        <Card.Body>
                            <Card.Header>What is a custom hook, and why will you create a custom hook?</Card.Header>

                            <Card.Text>
                                A custom hook is a JavaScript function that uses built-in React hooks to provide additional functionality that can be reused throughout a React application. Custom hooks allow developers to encapsulate complex logic and stateful behavior into a single function that can be used across multiple components.

                                A custom hook can be created to perform any logic or behavior that is common to multiple components. For example, a custom hook could be used to handle form validation, manage authentication, or fetch data from an AP.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails