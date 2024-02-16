import React from 'react'

function Banner() {
  return (
    <div>

        <div style={{backgroundImage:'url("https://png.pngtree.com/png-vector/20220528/ourlarge/pngtree-cartoon-mexican-food-doodles-seamless-pattern-kitchen-culture-ethnic-vector-png-image_46674028.jpg")',height:'300px',textAlign:'center',paddingTop:'70px',marginBottom:'30px'}}> 
               
               <h1 style={{fontSize:'100px',color:'white',fontWeight:'300px',fontFamily:'fantasy',margin:"0px"}}>ENERGY.COM</h1>
               <h1 style={{fontSize:'10px',color:'white',fontWeight:'30px',fontFamily:'fantasy',margin:'0px'}}>SAVE</h1>
        </div>
        <div className='text-center'>
            <p style={{opacity:'75%'}} ><i>Food is any substance consumed to provide nutritional support and energy to an organism.</i> </p>
        </div>

    </div>
  )
}

export default Banner