import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
function Restcard({restaurant}) {
    console.log(restaurant);
  return (
    <div>
      
        <Link to={`view/${restaurant.id}`} style={{textDecoration:'none',color:'black'}}>
        <MDBCard style={{height:'500px'}} className='m-3 shadow'>
      <MDBCardImage style={{height:'300px'}} src={restaurant.photograph} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle><b>{restaurant.name}</b></MDBCardTitle>
        <hr />
        <MDBCardText>
            {restaurant.cuisine_type}<br/>
         {restaurant.address}
        </MDBCardText>
        
      </MDBCardBody>
    </MDBCard>
        </Link>
    </div>
  )
}

export default Restcard