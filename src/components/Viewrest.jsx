import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Restop from './Restop';
import Restreview from './Restreview';

function Viewrest() {
  // const paraid = useParams();
  // console.log(paraid.id);
  const [restDetails,setRestDetails]= useState([]);

  const {id} = useParams();
  console.log(id);
  const base_url='http://localhost:3001/restaurants'

  const fetch=async()=>{
    const result = await axios.get(`${base_url}/${id}`)
 console.log(result.data);
    setRestDetails(result.data) }


console.log(restDetails);


  useEffect(()=>{fetch()},[]);

  return (
    <div>
      <Row className='mx-auto'>
        <Col className='col-5'><img style={{height:'500px',width:'100%', margin:'10px'}} src={restDetails.photograph} alt="" /></Col>
        <Col className='p-5'>
        <div style={{textAlign:'start'}}>
          <h1><b>{restDetails.name}</b></h1>
          <hr />
          <h3>{restDetails.address}</h3>
          <h5>Cuisine type : {restDetails.cuisine_type}</h5>
          <h5>Neighborhood : {restDetails.neighborhood}</h5>
          </div>
          <div className='mt-3 mb-3'>
            <Restop op={restDetails.operating_hours} />
          </div>
          <div>
            <Restreview review={restDetails.reviews}/>
          </div>

          </Col>
      </Row>
    </div>
  )
}

export default Viewrest