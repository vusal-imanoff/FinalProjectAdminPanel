import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EngineItem from './EngineItem'
import AddEngine from './Modal/addEngine'
import "assets/css/Brand.css"

function Engine() {

    const [engine,setEngine] = useState([])
    useEffect(()=>
    {
        let token = JSON.parse(localStorage.getItem('Atoken'))
        axios
        .get("http://vusalimanoff-001-site1.htempurl.com/api/admin/Engines/getall", {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        .then((resp) => setEngine(resp.data));
    },[])


  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  console.log(engine);
    return (
        <div className='former'>
                      <div className="add-partial">
            <h1>Engine</h1>
            <p onClick={()=>handleOpenAdd()}>Ceate New</p>
          </div>
          <AddEngine handleCloseAdd={handleCloseAdd} openAdd={openAdd} handleOpenAdd={handleOpenAdd} setOpenAdd={setOpenAdd} setEngine={setEngine}/>
    <TableContainer className='mui-table' component={Paper}>
      <Table  sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="center">Engine</TableCell>
            <TableCell align="center">Operations</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {engine&&engine.filter(e=> e.isDeleted !=true).map((e) => (
            <EngineItem setEngine={setEngine} e={e}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Engine
