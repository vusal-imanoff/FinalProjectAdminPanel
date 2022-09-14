import React,{useEffect,useState} from 'react'
import 'assets/css/Slider.css'
import ModalView from 'components/Modal/Modal';
import axios from 'axios'
import Remove from 'components/Sliders/modals/Remove'
import {useDispatch} from 'react-redux'
import {setText,setId} from 'redux/textSlice'
import Edit from 'components/Modal/Edit';

function Slider() {

    
  const [slid, setSlid] = useState([]);
  const [show, setShow] = useState(false)
  const [remshow, setRemShow] = useState(false)
  const [editshow, setEditShow] = useState(false)
  const dispatch = useDispatch()

  const handleRemove = (e)=>
  {
    dispatch(setText(e)) 
    setRemShow(true)

  }


  useEffect(() => {
    let x = JSON.parse(localStorage.getItem("Atoken"));
    axios
      .get("http://ejtacmalik-001-site1.btempurl.com/api/admin/Sliders/getall", {
        headers: {
          Authorization: "Bearer " + x,
        },
      })
      .then((resp) => setSlid(resp.data));
  }, []);
  


    return (
        <div className='slider'>
            <div className="add-slid">
            <p></p>
            <p className='new-p' onClick={()=> setShow(true)}  data-toggle="modal" data-target="#exampleModal">Create Slider</p>
            </div>
        <ModalView show={show} setShow={setShow} setSlid={setSlid}/>
            <div className="slider-list">
                <div className="slid-head">
                <p>id</p>
                </div>
                {
                    slid&&slid.map(e=>
                        {
                            return(
                               <div className="slid-one">
                                <p>{e.id}</p>
                                <p>{e.mainTitle}</p>
                                <div className="func-btn">
                                <p className='slid-edit' onClick={()=>
                                {
                                  setEditShow(true)
                                  dispatch(setId(e.id))
                                }}>edit</p>
                                <p onClick={()=>handleRemove(e)} className='slid-del'>delete</p>
                                <Remove remshow={remshow} setRemShow={setRemShow} setSlid={setSlid}/>
                                <Edit editshow={editshow} setEditShow={setEditShow}  setSlid={setSlid}/>
                                </div>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Slider
