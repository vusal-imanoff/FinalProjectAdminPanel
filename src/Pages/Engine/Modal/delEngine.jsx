import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BasicModal({e,handleClose,open,setColor,setOpen}) {

    const handleDelete = (x)=>
    {

      let token = JSON.parse(localStorage.getItem("Atoken"));
      axios.delete(`http://vusalimanoff-001-site1.htempurl.com/api/admin/Colors/${e.id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        }
      }).then(resp=> 
        {
          if (resp.status===204)
          {
            axios
            .get("http://vusalimanoff-001-site1.htempurl.com/api/admin/Colors/getall", {
              headers: {
                Authorization: "Bearer " + token,
              },
            })
            .then((resp) => setColor(resp.data))
            .then(()=> setOpen(false))
          }
        }
      )


    }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Are you sure to permanently delete {e.name} brand?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            
            <div className="function">
                <p onClick={()=>handleClose()} className='back'>Go back</p>
                <p onClick={()=> handleDelete(e.id)} className='del'>Delete</p>
            </div>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal