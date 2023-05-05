import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

function Details() {
    const [disabledButtonIndex, setDisabledButtonIndex] = useState(null);


    function handleDisable(index) {
        setDisabledButtonIndex(index);
        toast("Added to your favorite list")
    }



    const singleData = useLoaderData()
    const { name, image, experiance, like, rating, ingredients, recipes, details, id } = singleData

    useTitle('Details')
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
                        <p className='text-muted'>{experiance} years experiance</p>
                        <ListGroup variant="flush">

                            <ListGroup.Item>

                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5 className='text-primary'>recipes</h5>
                                <Row>
                                    {
                                        recipes.map((x, i) => <Col className='g-3 ' md='12'>
                                            <Card className='p-3' key={i}>
                                                <div >
                                                    <div className='d-flex justify-content-between mb-3'>
                                                        <div>
                                                            <h6 className='mb-0'><FaArrowRight /> {x}</h6>
                                                            <Rating className='text-warning' placeholderRating={rating}
                                                                emptySymbol={<FaStar></FaStar>}
                                                                placeholderSymbol={<FaStar />}
                                                                fullSymbol={<FaStar></FaStar>}></Rating>
                                                            <ToastContainer />

                                                        </div>
                                                        <div>
                                                        
                                                            <button onClick={() => handleDisable(i)}
                                                                disabled={disabledButtonIndex == i} className='btn btn-warning'>Add to Favorite</button>
                                                        </div>
                                                    </div>

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



/////





// import React, { useState } from 'react';

// function App() {
//   const [disabledButtonIndex, setDisabledButtonIndex] = useState(null);

//   function handleClick(index) {
//     // some action to be taken when button is clicked
//   }

//   function handleDisable(index) {
//     setDisabledButtonIndex(index);
//   }

//   const items = ['Item 1', 'Item 2', 'Item 3'];

//   return (
//     <div>
//       {items.map((item, index) => (
//         <div key={index}>
//           <span>{item}</span>
//           <button
//             onClick={() => handleClick(index)}
//             disabled={disabledButtonIndex === index}
//           >
//             Click me
//           </button>
//           <button onClick={() => handleDisable(index)}>Disable me</button>
//         </div>
//       ))}
//     </div>
//   );
// }
