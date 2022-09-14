import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserItem from './UserItem'
import AddUser from './Modal/addUser'
import "assets/css/Brand.css"

function User() {


    const [users,setUsers] = useState([])
    useEffect(()=>
    {
        let token = JSON.parse(localStorage.getItem('Atoken'))
        axios
        .get("http://vusalimanoff-001-site1.htempurl.com/api/admin/Users/getalluser", {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        .then((resp) => setUsers(resp.data));
    },[])


  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);


    return (
        <div className='former'>
                      <div className="add-partial">
            <h1>Users</h1>
            <p onClick={()=>handleOpenAdd()}>Ceate New</p>
          </div>
          <AddUser handleCloseAdd={handleCloseAdd} openAdd={openAdd} handleOpenAdd={handleOpenAdd} setOpenAdd={setOpenAdd} setUsers={setUsers}/>
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
          {users&&users.map((e) => (
            <UserItem setUsers={setUsers} e={e}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default User
