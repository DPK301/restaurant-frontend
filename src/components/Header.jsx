import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import "./Header.css"
function Header() {
  return (
    <div>
      <div id="nav">
      <MDBNavbar sticky='top' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            <img
              src=''
              height='30'
              alt=''
              loading='lazy'
            />
            <i style={{cursor:'pointer'}} class="fa-solid fa-bowl-food"></i>
           
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      </div>
       
         
    </div>
  )
}

export default Header