import React,{useState} from 'react'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Remove from './Modal/delBlog'
import Edit from './Modal/editBlog'

function BrandItem({setBlogs,e}) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
    return (
        <>
             <TableRow
              key={e.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {e.id}
              </TableCell>
              <TableCell align="center">{e.name}</TableCell>
              <TableCell className='right' align="right">
                  <div  className='btn-div'>
                   <p onClick={()=>handleOpenEdit()} className='btn-edit'>Edit</p>
                  <p onClick={()=>handleOpen()} className='btn-del'>Delete</p>
                  <Remove setBlogs={setBlogs} e={e} handleClose={handleClose} setOpen={setOpen} open={open}/>
                  <Edit setBlogs={setBlogs} e={e} handleCloseEdit={handleCloseEdit} setOpenEdit={setOpenEdit} openEdit={openEdit}/>
                  </div>
                </TableCell>
            </TableRow>
        </>
    )
}

export default BrandItem
