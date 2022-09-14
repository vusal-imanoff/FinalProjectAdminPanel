import React, { useState } from "react";
import "assets/css/Login.css";
import { Formik, Form, Field } from "formik";
import loginVal from 'validation/loginValidation'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'
import {setLog} from '../redux/loginSlice'

function Login() {
  const [type, setType] = useState("password");
  const [eye, setEye] = useState("bi-eye-slash-fill");
  const [logerrusr,setLogerrUsr] = useState("")
  const [logerrpsw,setLogerrPsw] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleIcon = () => {
    if (type === "password") {
      setType("text");
      setEye("bi-eye-fill");
    } else {
      setType("password");
      setEye("bi-eye-slash-fill");
    }
  };


  
  return (
    <div className="login">
      <div className="logged">
        <div className="ent-img">
          <img
            src="https://grandcarrentalv1.b-cdn.net/wp-content/themes/grandcarrental/images/logo@2x_white.png"
            alt=""
          />
        </div>
        <Formik
        validationSchema={loginVal}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(e)=>
          {
            axios.post("http://vusalimanoff-001-site1.htempurl.com/api/admin/Accounts/login",e)
            .then(resp=>
              {
                if(resp.status===200)
                {
                  localStorage.setItem("Atoken",JSON.stringify(resp.data))
                  localStorage.setItem("route",JSON.stringify(true))
                    dispatch(setLog(JSON.parse(localStorage.getItem("route"))))
                    navigate("/home")   
                               
                }
              })
            
          }}
        >
          {({ errors, touched }) => (
            <Form className="form-log">
              <div className="form-div">
                <label className="log-usr" htmlFor="log-usr">
                  E-mail
                </label>
                <Field
                  name="email"
                  id="log-usr"
                  className={`form-input ${logerrusr}`}
                  placeholder="Enter your e-mail"
                />
                {errors.email&&touched.email?setLogerrUsr("err-log"):setLogerrUsr("")}
              </div>
              <div className="form-div  psw-log">
                <label className="log-usr" htmlFor="log-psw">
                  Password
                </label>
                <Field
                  name="password"
                  type={type}
                  id="log-psw"
                  className={`form-input ${logerrpsw}`}
                  placeholder="Enter your password"
                />
                {errors.password&&touched.password?setLogerrPsw("err-log"):setLogerrPsw("")}
                <i onClick={handleIcon} className={`bi bi-eys ${eye}`}></i>
              </div>
              <input className="form-sub" type="submit" value="LOGIN" />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;