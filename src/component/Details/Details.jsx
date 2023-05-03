import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Details() {
    const [clicke, setClicke] = useState(false)
    const singleData = useLoaderData()
    const { name, image, experiance, like, rating, ingredients, recipes, details, id } = singleData

    const tostHandeler=()=>{
        setClicke(true)
        toast("Added to your favorite list")
    }
    return (
        <Row className=''>
            <Col md="8">
                <Card>

                    <img style={{ height: '80vh' }} src={image} alt="" />
                    <Card.Body>
                        <ListGroup.Item>
                            <h6>ingredients</h6>
                            {
                                ingredients.map((x, index) => <div key={index}>{index} . {x}</div>)
                            }
                        </ListGroup.Item>

                    </Card.Body>


                </Card>
            </Col>
            <Col md="4">
                <Card>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                        <ListGroup variant="flush">

                            <ListGroup.Item>
                                <Rating className='text-warning' placeholderRating={3.5}
                                    emptySymbol={<FaStar></FaStar>}
                                    placeholderSymbol={<FaStar />}
                                    fullSymbol={<FaStar></FaStar>}></Rating>
                                <button onClick={tostHandeler} disabled={clicke} className='btn btn-warning ms-5'>Add to Favorite</button>
                                <ToastContainer />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h6>recipes</h6>
                                {
                                    recipes.map((x, i) => <div key={i}> <FaArrowRight /> {x}</div>)
                                }
                                <hr />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h6>details</h6>
                                {
                                    recipes
                                }
                                <hr />
                            </ListGroup.Item>
                        </ListGroup>

                    </Card.Body>
                </Card>
            </Col>
        </Row>

    )
}

export default Details