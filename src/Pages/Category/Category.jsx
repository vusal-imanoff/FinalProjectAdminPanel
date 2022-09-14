import React,{useEffect,useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CategoryItem from './CategoryItem'
import AddCategory from './Modal/addCategory'
import axios from 'axios'
import "assets/css/Brand.css"

function Category() {


    const [category,setCategory] = useState([])
    useEffect(()=>
    {
        let token = JSON.parse(localStorage.getItem('Atoken'))
        axios
        .get("http://vusalimanoff-001-site1.htempurl.com/api/admin/Categories/getall", {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        .then((resp) => setCategory(resp.data));
    },[])
    console.log(category);

  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);



    return (
        <div className='former'>
             <div className="add-partial">
            <h1>Category</h1>
            <p onClick={()=>handleOpenAdd()}>Ceate New</p>
          </div>
          <AddCategory handleCloseAdd={handleCloseAdd} openAdd={openAdd} handleOpenAdd={handleOpenAdd} setOpenAdd={setOpenAdd}/>
    <TableContainer className='mui-table' component={Paper}>
      <Table  sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="center">Brand Name</TableCell>
            <TableCell align="center">Operations</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {category&&category.filter(e=> e.isDeleted!=true).map((e) => (
            <CategoryItem setCategory={setCategory} e={e}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Category