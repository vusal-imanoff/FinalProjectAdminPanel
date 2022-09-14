import React, { useState } from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import Vuska from "img/Vuska.jpeg"

function Nav() {


    return (
        <>
            <div className={`navs`}>
                <div className='profil'><div className='profil-img'><img className='img img-fluid' src={Vuska} alt="" /></div> <div className='profil-name'><h1>Vusal Imanov</h1> <p>admin</p></div></div>
                <Link to='/home' className='sidel'><span></span>Brand</Link>
                <Link to='/model' className='sidel'><span></span>Model</Link>
                <Link to='/category' className='sidel'><span></span>Category</Link>
                <Link to='/color' className='sidel'><span></span>Color</Link>
                <Link to='/engine' className='sidel'><span></span>Engine</Link>
                <Link to='/transmission' className='sidel'><span></span>Transmission</Link>
                <Link to='/fuel' className='sidel'><span></span>Fuel</Link>
                <Link to='/year' className='sidel'><span></span>Year</Link>
                <Link to='/car' className='sidel'><span></span>Car</Link>
                <Link to='/company' className='sidel'><span></span>Company</Link>
                <Link to='/blog' className='sidel'><span></span>Blog</Link>
                <Link to='/slider' className='sidel'><span></span>Slider</Link>
                <Link to='/order' className='sidel'><span></span>Order</Link>
                <Link to='/user' className='sidel'><span></span>User</Link>


            </div>

        </>
    )
}

export default Nav
