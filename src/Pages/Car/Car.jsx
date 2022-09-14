import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "assets/css/Brand.css"
import CarItem from './CarItem';
import AddCar from './Modal/addCar';


function Car() {
    
    const [cars,setCars] = useState([])
    useEffect(()=>
    {
        let token = JSON.parse(localStorage.getItem('Atoken'))
        axios
        .get("http://vusalimanoff-001-site1.htempurl.com/api/admin/cars/getall", {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        .then((resp) => setCars(resp.data));
    },[])


  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

    return (
        <div className='former'>
                               <div className='former'>
          <div className="add-partial">
            <h1>Cars</h1>
            <p onClick={()=>handleOpenAdd()}>Ceate New</p>
          </div>
          <AddCar handleCloseAdd={handleCloseAdd} openAdd={openAdd} handleOpenAdd={handleOpenAdd} setOpenAdd={setOpenAdd}/>
    <TableContainer className='mui-table' component={Paper}>
      <Table  sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="center">Car Name</TableCell>
            <TableCell align="center">Operations</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {cars&&cars.map((e) => (
            <CarItem setCars={setCars} e={e}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </div>
    )
}

export default Car
