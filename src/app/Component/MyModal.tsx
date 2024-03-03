"use client"
import React, {  useState } from 'react'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
const MyModal = ({ child }: { child: React.ReactNode })=>{
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
       <Button onClick={handleOpen}>Open modal</Button>
     <Modal
        open={open}
        onClose={handleClose}
      >
      <Box className="absolute
  top-1/2
  left-1/2
  -translate-x-1/2
  -translate-y-1/2
  w-auto
  shadow-lg
  " >
     {child}
      </Box>
      
       
      </Modal>
   
    </>
 
  )
}


export default MyModal