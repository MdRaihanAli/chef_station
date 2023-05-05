import React, { useEffect, useState } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowAltCircleRight, FaHandPointRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import "./Chef.css"
import useTitle from '../../hooks/useTitle';

function Chef() {
    const [sefData, setSefData] = useState([])

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-mdraihanali.vercel.app/')
            .then(res => res.json())
            .then(data => setSefData(data))
        console.log(sefData);
    }, [])
    
    return (
        <Row >
            <h4 className='mt-lg-5 mt-3 fw-bold text-center'>Our <span className="text-primary">Staf</span> </h4>
            {
                sefData.map(data => <Col key={data.id} md="6" lg="4">
                    <Card className='my-3 ex-bg border-none'>
                        <LazyLoad height={300} once>

                            <img className='card-title rounded w-100' style={{ maxHeight: "300px" }} src={data.image} alt="" />
                        </LazyLoad>
                        <Card.Body>
                            <Card.Title className='text-primary text-bold'>{data.name}</Card.Title>


                            <ListGroup.Item>
                                <span className='text-bold'>experience : {data.experiance} years</span>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>
                                    <span className=''>recipes number : {data.recipes.length}</span>
                                    <span className='ms-5'> Like:  <FaHandPointRight className='text-danger' /> {data.like}</span>
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item></ListGroup.Item>

                            <Link to={`/recipies/${data.id}`}><Button variant="primary">View Recipes <FaArrowAltCircleRight /> </Button></Link>
                        </Card.Body>
                    </Card>

                </Col>)
            }
        </Row>
    )
}

export default Chef