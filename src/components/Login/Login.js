import React, {Fragment, useState} from 'react';
import '../../asset/css/test.css';
import {Button, Col, Container, Row} from "react-bootstrap";

import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { textAlign } from '@mui/system';



const Login = () => {
    const [error, setError] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const { loginWithEmail, setIsLoading} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || "/dashboard";
  
    const {
      register,
      handleSubmit,
      reset,
      formState: {errors},
    } = useForm();
  
    const onSubmit = (data) => {
        console.log(data)
      setLoginError(false);
      setError(false);
  
      if (data.email === "" || data.password === "") {
        setError(true);
        return;
      }
      loginWithEmail(data.email, data.password)
      .then((result) => {
        alert("Login Successfull")
        setIsLoading(false);
        history.push(redirect_url);
      })
      .catch((err) => {
        setLoginError(true);
      })
      .finally(setIsLoading(false));
      
  
      reset();
    };
    return (
        <Fragment>
            <Container fluid={true} className="topFixedPage p-5 ">
                <div>
                    <Container className="loginBox ">
                        <Row>

                            
                                <form style={{borderRadius: '1rem', maxWidth: '400px'}} noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}>

                                    <h3 className="logIn">SIGN IN</h3>
                                    <h5 className="loginSubHead">Please enter your login and password!</h5>

                                    <div className="form-group">
                                        <label className="loginText">Email</label>
                                        <input  {...register("email")} type="email" className="form-control" style={{borderRadius:"20px"}} placeholder="Enter email"
                                              />
                                    </div>
<br/>
                                    <div className="form-group">
                                        <label className="loginText">Password</label>
                                        <input {...register("password")} type="password" style={{borderRadius:"20px"}} className="form-control"
                                               placeholder="Enter password" />
                                    </div>

                                    <Button variant="success" type="submit" className='my-3'>Sign in</Button>
                                    {error && (
                <p style={{ color: "red", letterSpacing: "1px",marginTop:"5px" }}>
                  input fields cannot be empty
                </p>
              )}
               {loginError && (
                <p style={{ color: "red", letterSpacing: "1px",marginTop:"3px" }}>
                  Invalid Email or Password
                </p>
              )}
                                   <p style={{ letterSpacing: "1px", margin: "3px 0",marginTop:"5rem ",color:"#fff" ,textAlign:"center"}}>
                Not have an account?
                <Link
                  to="/registration"
                  style={{ color: "lightBlue", textDecoration: "none" }}
                >
                  Register!
                </Link>
              </p>
                                </form>
                           


                        </Row>
                    </Container>
                </div>


            </Container>


        </Fragment>
    )

}
export default Login;
