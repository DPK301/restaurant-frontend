import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Avatar from '@mui/material/Avatar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating from '@mui/material/Rating';


function Restreview({review}) {
    console.log(review);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
       Review
      </Button>

      <Offcanvas  show={show} onHide={handleClose} >
        <Offcanvas.Header >
          <Offcanvas.Title>Review :</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
           { review?.map(a=>(
            <div className='m-1 card border-0 shadow p-3'>
                <Row >
                    <Col className='col-2'><Avatar style={{width:'50px'}}>{a.name}</Avatar></Col>
                    <Col className='col-10'><p style={{textAlign:'justify'}}>{a.comments}</p>
                    <Rating name="half-rating" defaultValue={a.rating} precision={0.5} />
                                               <p>{a.date}</p> </Col>
                </Row>
            </div>

           ))}
          </div>
         
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Restreview