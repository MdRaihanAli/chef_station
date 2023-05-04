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

    const tostHandeler = () => {
        setClicke(true)
        toast("Added to your favorite list")
    }
    return (
        <Row className='my-4'>
            <Col md="6">
                <Card>

                    <img style={{ height: '80vh' }} src={image} alt="" />
                    <Card.Body>
                        <ListGroup.Item>
                            <h6>details</h6>
                            {
                                details
                            }
                            <hr />
                        </ListGroup.Item>

                    </Card.Body>


                </Card>
            </Col>
            <Col md="6">
                <Card>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
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
                                <h5 className='text-primary'>recipes</h5>
                                <Row>
                                    {
                                        recipes.map((x, i) => <Col className='g-3 ' md='12'>
                                            <Card className='p-3' key={i}>
                                                <div ><h6 ><FaArrowRight /> {x}</h6>
                                                    {ingredients.map((x, i) => <div key={i}>{x}</div>)}
                                                </div>
                                            </Card>
                                        </Col>
                                        )
                                    }
                                </Row>
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