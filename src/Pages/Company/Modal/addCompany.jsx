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

function BasicModal({handleCloseAdd,openAdd,setCompany,handleOpenAdd,setOpenAdd}) {

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
                name:"",
                description:"",
                address:"",
                time:"",
                phone:""
            }}
            onSubmit={(x)=>
            {
                const formdata = new FormData();
                formdata.append("Name",x.name)
                formdata.append("Description",x.description)
                formdata.append("File", brandImg?brandImg:brandImg.image)
                formdata.append("Address",x.address)
                formdata.append("PhoneNumber",x.phone)
                formdata.append("WorkTime",x.time)

                let token = JSON.parse(localStorage.getItem("Atoken"));
                
                let url = "http://vusalimanoff-001-site1.htempurl.com/api/admin/Companies"

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
                              .get("http://vusalimanoff-001-site1.htempurl.com/api/admin/Companies/getall", {
                                headers: {
                                  Authorization: "Bearer " + x,
                                },
                              })
                              .then((resp) => setCompany(resp.data))
                             setOpenAdd(false)
                        }
                    }
                    )

            }}
            >
                <Form className='edit-form'>
                    <Field className='edit-inp' name='name' placeholder='name'/>
                    <Field className='edit-inp' name='description' placeholder='description'/>
                    <input placeholder='brand name' className='edit-inp' type="file" accept="image/jpeg" onChange={(e) => setBrandImg(e.target.files[0])}/>

                    <Field className='edit-inp' name='address' placeholder='address'/>
                    <Field className='edit-inp' name='time' placeholder='work time'/>
                    <Field className='edit-inp' name='phone' placeholder='phone'/>
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