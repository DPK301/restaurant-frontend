import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function Restop({op}) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '0px solid #000',
        boxShadow: 30,
        p: 4,
      };
    console.log(op);
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
        
        <Button  style={{color:'black',opacity:'75%'}} onClick={handleOpen} color='success'  variant="outlined">Operating Hours</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Operating Hours
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <Row>
            <Col>  <ListGroup >
      <ListGroup.Item className='border-0'>Monday</ListGroup.Item>
      <ListGroup.Item className='border-0'>Tuesday</ListGroup.Item>
      <ListGroup.Item className='border-0'>wednesday</ListGroup.Item>
      <ListGroup.Item className='border-0'>Thursday</ListGroup.Item>
      <ListGroup.Item className='border-0'>Friday</ListGroup.Item>
      <ListGroup.Item className='border-0'>Saturday</ListGroup.Item>
      <ListGroup.Item className='border-0 '>Sunday</ListGroup.Item>
    </ListGroup></Col>
            <Col>
            <ListGroup >
      <ListGroup.Item className='border-0'>:{op?.Monday}</ListGroup.Item>
      <ListGroup.Item className='border-0'>:{op?.Tuesday}</ListGroup.Item>
      <ListGroup.Item className='border-0'>:{op?.Wednesday}</ListGroup.Item>
      <ListGroup.Item className='border-0'>:{op?.Thursday}</ListGroup.Item>
      <ListGroup.Item className='border-0'>:{op?.Friday}</ListGroup.Item>
      <ListGroup.Item className='border-0'>:{op?.Saturday}</ListGroup.Item>
      <ListGroup.Item className='border-0'>:{op?.Sunday}</ListGroup.Item>
     
    </ListGroup>
            </Col>
           </Row>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Restop