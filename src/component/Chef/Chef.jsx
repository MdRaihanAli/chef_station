import React, { useEffect, useState } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowAltCircleRight, FaHandPointRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Chef() {
    const [sefData, setSefData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setSefData(data))
        console.log(sefData);
    }, [])
    return (
        <Row >
            <h4 className='my-lg-5 mt-3 fw-bold text-center'>Our Staf</h4>
            {
                sefData.map(data => <Col key={data.id} md="6" lg="4">
                    <Card className='my-3'>
                        <img className='card-title' style={{ maxHeight: "300px" }} src={data.image} alt="" />
                        <Card.Img width='50px' variant="top" />
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>

                            <ListGroup className="list-group-flush">
                                <ListGroup.Item> <span className='text-bold'>experience : {data.experiance} years</span></ListGroup.Item>
                                <ListGroup.Item>
                                    <p>
                                        <span className=''>recipes number : {data.recipes.length}</span>
                                        <span className='ms-5'> Like:  <FaHandPointRight className='text-danger' /> {data.like}</span>
                                    </p>
                                </ListGroup.Item>
                                <ListGroup.Item></ListGroup.Item>
                            </ListGroup>
                            <Link to={`/recipies/${data.id}`}><Button variant="primary">View Recipes <FaArrowAltCircleRight /> </Button></Link>
                        </Card.Body>
                    </Card>

                </Col>)
            }
        </Row>
    )
}

export default Chef