import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import YearItem from './YearItem'
import AddYear from './Modal/addYear'
import "assets/css/Brand.css"

function Year() {

    const [year,setYear] = useState([])
    useEffect(()=>
    {
        let token = JSON.parse(localStorage.getItem('Atoken'))
        axios
        .get("http://vusalimanoff-001-site1.htempurl.com/api/admin/Years/getall", {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        .then((resp) => setYear(resp.data));
    },[])
    console.log(year);

  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
    return (
        <div className='former'>
                      <div className="add-partial">
            <h1>Year</h1>
            <p onClick={()=>handleOpenAdd()}>Ceate New</p>
          </div>
          <AddYear handleCloseAdd={handleCloseAdd} openAdd={openAdd} handleOpenAdd={handleOpenAdd} setOpenAdd={setOpenAdd} setYear={setYear}/>
    <TableContainer className='mui-table' component={Paper}>
      <Table  sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="center">Year</TableCell>
            <TableCell align="center">Operations</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {year&&year.filter(e=> e.isDeleted !=true).map((e) => (
            <YearItem setYear={setYear} e={e}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Year
