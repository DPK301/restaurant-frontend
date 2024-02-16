import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Restcard from './Restcard';
import Banner from './Banner';


function Allrest() {
  const base_url='http://localhost:3001/restaurants'

  const [AllRestData,setAllRestData]=useState([])
 const fetchData=async()=>{
  const result = await axios.get(base_url)
  console.log(result.data);
  setAllRestData(result.data)
 }
console.log(AllRestData);
 useEffect(()=>{fetchData()},[])

  return (
    <div>
      <Banner/>
      <Row className='mx-auto'>
        {
               AllRestData.map(a=>(
                <Col sm={12} md={6} lg={4} xl={3}><Restcard restaurant={a}/>
                </Col>
               ))
        }
      </Row>
    </div>
  )
}

export default Allrest