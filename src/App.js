import {useEffect} from 'react';
import './App.css';
import Nav from './components/NavBar/Nav'
import {Routes,Route,useLocation} from 'react-router-dom'
import Model from 'Pages/Model/Model'
import Login from './Pages/Login'
import ProtectedRoutes from './Routes/ProtectedRoutes'
import {useDispatch} from 'react-redux'
import {setLog} from './redux/loginSlice'
import Color from 'Pages/Color/Color'
import Category from 'Pages/Category/Category'
import Engine from 'Pages/Engine/Engine'
import Transmission from 'Pages/Transmission/Trans'
import Fuel from 'Pages/Fuel/Fuel'
import Brand from 'Pages/Brand/Brand';
import Year from 'Pages/Year/Year';
import Company from 'Pages/Company/Company';
import Blog from 'Pages/Blog/Blog';
import Slider from 'Pages/Slider/Slider';
import Order from 'Pages/Order/Order';
import User from 'Pages/User/User';
import Car from 'Pages/Car/Car';

function App() {

  const dispatch = useDispatch()

  useEffect(()=>
  {

    if (JSON.parse(localStorage.getItem("route")) === null)
    {
      localStorage.setItem("route",JSON.stringify(false))
      dispatch(setLog(JSON.parse(localStorage.getItem("route"))))
    }
    else
    {
      dispatch(setLog(JSON.parse(localStorage.getItem("route"))))
    }

  },[])

  let loc = useLocation();

  return (
    <div className="App">

      {loc.pathname !== "/"?<Nav/>:null} 

        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route element={<ProtectedRoutes/>}>
          <Route path='/home' element={<Brand/>}/>
          <Route path='/model' element={<Model/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/color' element={<Color/>}/>
          <Route path='/engine' element={<Engine/>}/>
          <Route path='/transmission' element={<Transmission/>}/>
          <Route path='/fuel' element={<Fuel/>}/>
          <Route path='/year' element={<Year/>}/>
          <Route path='/company' element={<Company/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/slider' element={<Slider/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/car' element={<Car/>}/>
          </Route>
        </Routes>
    
    </div>
  );
}

export default App;
