import React,{useState,useEffect} from 'react';
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

function BasicModal({handleCloseAdd,openAdd,setCars,handleOpenAdd,setOpenAdd}) {

    const [brandImg,setBrandImg] = useState(null)
    const [getBrands,setGetBrands]=useState([]);
    const [getModels,setGetModels]=useState([]);
    const [getCategorys,setGetCategorys]=useState([]);
    const [getColors,setGetColors]=useState([]);
    const [getFuels,setGetFuels]=useState([]);
    const [getEngines,setGetEngines]=useState([]);
    const [getTransmissions,setGetTransmissions]=useState([]);
    const [getYears,setGetYears]=useState([]);
    const [getCompanys,setGetCompanys]=useState([]);


    const[getIdBrand,setGetIdBrand]=useState("")
    const[getIdModel,setGetIdModel]=useState("")
    const[getIdCategory,setGetIdCategory]=useState("")
    const[getIdColor,setGetIdColor]=useState("")
    const[getIdFuel,setGetIdFuel]=useState("")
    const[getIdEngine,setGetIdEngine]=useState("")
    const[getIdTransmission,setGetIdTransmission]=useState("")
    const[getIdYear,setGetIdYear]=useState("")
    const[getIdCompany,setGetIdCompany]=useState("")
    const[getIsFree,setgetIsFree]=useState(false)

    console.log(getIsFree);
    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("Atoken"));
        axios.get("http://vusalimanoff-001-site1.htempurl.com/api/admin/brands/getall", {
            
            headers: {
                "Authorization": "Bearer " + token,
            },
        })
        .then(data=>setGetBrands(data.data))
    }, [setGetBrands]);

    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("Atoken"));
        axios.get("http://vusalimanoff-001-site1.htempurl.com/api/admin/models/getall", {
            
            headers: {
                "Authorization": "Bearer " + token,
            },
        })
        .then(data=>setGetModels(data.data))
    }, [setGetModels]);

    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("Atoken"));
        axios.get("http://vusalimanoff-001-site1.htempurl.com/api/admin/categories/getall", {
            
            headers: {
                "Authorization": "Bearer " + token,
            },
        })
        .then(data=>setGetCategorys(data.data))
    }, [setGetCategorys]);
    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("Atoken"));
        axios.get("http://vusalimanoff-001-site1.htempurl.com/api/admin/colors/getall", {
            
            headers: {
                "Authorization": "Bearer " + token,
            },
        })
        .then(data=>setGetColors(data.data))
    }, [setGetColors]);
    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("Atoken"));
        axios.get("http://vusalimanoff-001-site1.htempurl.com/api/admin/fuels/getall", {
            
            headers: {
                "Authorization": "Bearer " + token,
            },
        })
        .then(data=>setGetFuels(data.data))
    }, [setGetFuels]);

    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("Atoken"));
        axios.get("http://vusalimanoff-001-site1.htempurl.com/api/admin/engines/getall", {
            
            headers: {
                "Authorization": "Bearer " + token,
            },
        })
        .then(data=>setGetEngines(data.data))
    }, [setGetEngines]);
    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("Atoken"));
        axios.get("http://vusalimanoff-001-site1.htempurl.com/api/admin/transmissions/getall", {
            
            headers: {
                "Authorization": "Bearer " + token,
            },
        })
        .then(data=>setGetTransmissions(data.data))
    }, [setGetTransmissions]);
    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("Atoken"));
        axios.get("http://vusalimanoff-001-site1.htempurl.com/api/admin/years/getall", {
            
            headers: {
                "Authorization": "Bearer " + token,
            },
        })
        .then(data=>setGetYears(data.data))
    }, [setGetYears]);
    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("Atoken"));
        axios.get("http://vusalimanoff-001-site1.htempurl.com/api/admin/companies/getall", {
            
            headers: {
                "Authorization": "Bearer " + token,
            },
        })
        .then(data=>setGetCompanys(data.data))
    }, [setGetCompanys]);
    


    console.log("asdasd",getYears);
  return (
    <div className='vuska'>
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
                plate:"",
                description:"",
                price:"",
                discountPrice:""
,            }}
            onSubmit={(x)=>
            {
                const formdata = new FormData();
                formdata.append("Plate",x.plate)
                formdata.append("Description",x.description)
                formdata.append("Price",x.price)
                formdata.append("DiscountPrice",x.discountPrice)
                formdata.append("File", brandImg?brandImg:brandImg.image)
                formdata.append("BrandId", Number(getIdBrand)==''?Number(getBrands[0].id): Number(getIdBrand))
                formdata.append("IsFree", getIsFree)
                formdata.append("ModelId", Number(getIdModel)==''?Number(getIdModel[0].id): Number(getIdModel))
                formdata.append("CategoryId", Number(getIdCategory)==''?Number(getIdCategory[0].id): Number(getIdCategory))
                formdata.append("FuelId", Number(getIdFuel)==''?Number(getIdFuel[0].id): Number(getIdFuel))
                formdata.append("EngineId", Number(getIdEngine)==''?Number(getIdEngine[0].id): Number(getIdEngine))
                formdata.append("ColorId", Number(getIdColor)==''?Number(getIdColor[0].id): Number(getIdColor))
                formdata.append("CompanyId", Number(getIdCompany)==''?Number(getIdCompany[0].id): Number(getIdCompany))
                formdata.append("TransmissionId", Number(getIdTransmission)==''?Number(getIdTransmission[0].id): Number(getIdTransmission))
                formdata.append("YearId", Number(getIdYear)==''?Number(getIdYear[0].id): Number(getIdYear))

                let token = JSON.parse(localStorage.getItem("Atoken"));
                
                let url = "http://vusalimanoff-001-site1.htempurl.com/api/admin/cars"

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
                              .get("http://vusalimanoff-001-site1.htempurl.com/api/admin/cars/getall", {
                                headers: {
                                  Authorization: "Bearer " + x,
                                },
                              })
                              .then((resp) => setCars(resp.data))
                             setOpenAdd(false)
                        }
                    }
                    )

            }}
            >
                <Form className='edit-form'>
                    <div className='row justify-content-between'>
                    <Field  placeholder="Plate" className='edit-inp col-lg-5' name='plate'/>
                    <Field  placeholder="Description" className='edit-inp col-lg-5' name='description'/>
                    <Field  placeholder="Price" className='edit-inp col-lg-5' name='price'/>
                    <Field  placeholder="Discount Price" className='edit-inp col-lg-5' name='discountPrice'/>
                    </div>
                    <div className='d-flex'>
                    <Field onClick={()=>setgetIsFree(vuska=>!vuska)}  type="checkbox" className=''  name='isfree'/>
                    <label htmlFor="isfree">Isfree</label>
                    </div>
                    
                            <select onChange={e=>setGetIdBrand(e.target.value)} name="Brands" id="">
                            {
                            getBrands&&getBrands.map(e=>{
                              return(  <option value={e.id}>{e.name}</option>)
                            })  
                            }                        
                            </select>
                            <select onChange={e=>setGetIdModel(e.target.value)} className='mt-3' name="Models" id="">
                            {
                            getModels&&getModels.map(e=>{
                              return(  <option value={e.id}>{e.name}</option>)
                            })  
                            }                        
                            </select>

                            <select onChange={e=>setGetIdCategory(e.target.value)} className='mt-3' name="Categories" id="">
                            {
                            getCategorys&&getCategorys.map(e=>{
                              return(  <option value={e.id}>{e.name}</option>)
                            })  
                            }                        
                            </select>
                            <select onChange={e=>setGetIdEngine(e.target.value)} className='mt-3' name="Engines" id="">
                            {
                            getEngines&&getEngines.map(e=>{
                              return(  <option value={e.id}>{e.name}</option>)
                            })  
                            }                        
                            </select>
                            <select onChange={e=>setGetIdFuel(e.target.value)} className='mt-3' name="Fuels" id="">
                            {
                            getFuels&&getFuels.map(e=>{
                              return(  <option value={e.id}>{e.name}</option>)
                            })  
                            }                        
                            </select>
                            <select onChange={e=>setGetIdColor(e.target.value)} className='mt-3' name="Colors" id="">
                            {
                            getColors&&getColors.map(e=>{
                              return(  <option value={e.id}>{e.name}</option>)
                            })  
                            }                        
                            </select>
                            <select onChange={e=>setGetIdTransmission(e.target.value)} className='mt-3' name="Transmissions" id="">
                            {
                            getTransmissions&&getTransmissions.map(e=>{
                              return(  <option value={e.id}>{e.name}</option>)
                            })  
                            }                        
                            </select>
                            <select onChange={e=>setGetIdYear(e.target.value)} className='mt-3' name="Years" id="">
                            {
                            getYears&&getYears.map(e=>{
                              return(  <option value={e.id}>{e.productionYear}</option>)
                            })  
                            }                        
                            </select>
                            <select onChange={e=>setGetIdCompany(e.target.value)} className='mt-3' name="Companies" id="">
                            {
                            getCompanys&&getCompanys.map(e=>{
                              return(  <option value={e.id}>{e.name}</option>)
                            })  
                            }                        
                            </select>
                          
                        
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