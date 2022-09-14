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
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BasicModal({handleCloseAdd,openAdd,setCategory,handleOpenAdd,setOpenAdd}) {

    const [brandImg,setBrandImg] = useState(null)

  return (
    <div>
      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Formik
            enableReinitialize={true}
            initialValues={{
                name:""
            }}
            onSubmit={(x)=>
            {
                const formdata = new FormData();
                formdata.append("Name",x.name)
                formdata.append("File", brandImg?brandImg:brandImg.image)

                let token = JSON.parse(localStorage.getItem("Atoken"));
                
                let url = "http://vusalimanoff-001-site1.htempurl.com/api/admin/Categories"

                fetch(url, {
                    method: 'post',
                    headers: {
                        "Authorization": "Bearer " + token,
                    },
                    body: formdata,
                })
                    .then(resp => {
                        if (resp.status === 201) {
                            handleOpenAdd(false);
                            let x = JSON.parse(localStorage.getItem("Atoken"));
                            axios
                              .get("http://vusalimanoff-001-site1.htempurl.com/api/admin/Categories/getall", {
                                headers: {
                                  Authorization: "Bearer " + x,
                                },
                              })
                              .then((resp) => setCategory(resp.data))
                             setOpenAdd(false)
                        }
                    }
                    )

            }}
            >
                <Form className='edit-form'>
                    <Field className='edit-inp' name='name'/>
                    <input placeholder='brand name' className='edit-inp' type="file" accept="image/jpeg" onChange={(e) => setBrandImg(e.target.files[0])}/>

            <div className="function">
                <p onClick={()=>handleCloseAdd()} className='back'>Go back</p>
                <input type='submit' className='edit'/>
            </div>
                </Form>
            </Formik>


        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal