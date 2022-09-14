import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Formik,Form,Field} from 'formik'
import axios from 'axios'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BasicModal({e,handleCloseEdit,openEdit,setOpenEdit}) {

    const [brandImg,setBrandImg] = useState(null)

    const handleEdit=()=>
    {

    }
  return (
    <div>
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Formik
            enableReinitialize={true}
            initialValues={{
                name:e.name
            }}
            onSubmit={(x)=>
            {
                const formdata = new FormData();
                formdata.append("Id",e.id)
                formdata.append("Name",x.name)
                formdata.append("File", brandImg?brandImg:brandImg.image)

                let token = JSON.parse(localStorage.getItem("Atoken"));
                let url = `http://vusalimanoff-001-site1.htempurl.com/api/admin/Categories/${e.id}`
                fetch(url, {
                    method: 'PUT',
                    headers: {
                        "Authorization": "Bearer " + token,
                    },
                    body: formdata,
                })
                    .then(resp => {
                        console.log(resp.body)
                        if (resp.status === 204) {
                            handleCloseEdit()
                        }
                    }
                    )
            }}
            >
                <Form className='edit-form'>
                    <Field className='edit-inp' name='name'/>
                    {brandImg===null?<div className="edit-img">
                        <img src={`http://vusalimanoff-001-site1.htempurl.com/brands/${e.image}`} alt=""/>
                    </div>:<div>{brandImg.name}</div>}
                    <input className='edit-inp' type="file" accept="image/jpeg" onChange={(e) => setBrandImg(e.target.files[0])}/>

            <div className="function">
                <p onClick={()=>handleCloseEdit()} className='back'>Go back</p>
                <input type='submit' onClick={()=> handleEdit()} className='edit'/>
            </div>
                </Form>
            </Formik>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal