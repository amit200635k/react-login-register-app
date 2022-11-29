import React,{useState} from 'react';
import logo from '../logo.svg';
import './Loginform.css';
import { Link,useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal)
export default function Loginform() {
    //const [sesstate, setSesstate] = useState('');
    // setSesstate({
    //     username: '',
    //     password: '',
    //     redirect: false,
    //     errorMsg: ''
    // });

    const [uname, setUsername] = useState(''); 
    const [upassword, setPassword] = useState('');
    const [message, setMessage] = useState("");
    const handleUsername = (e) => {
        setUsername(e.target.value);
        //setSubmitted(false);
      }; 
      // Handling the password change
      const handlePassword = (e) => {
        setPassword(e.target.value);
        //setSubmitted(false);
      };
      const navigate = useNavigate();
    const handleFormSubmit=async (e)=>{
        e.preventDefault();
        try {
            if (uname !== '' || upassword !== '') {
            
                let jsonData = {
                    uname: uname,
                    upassword: upassword,
                }
                console.log(JSON.stringify(jsonData))
                //let  proxyUrl = 'https://cors-anywhere.herokuapp.com/';
                let res = await fetch("http://localhost:81/RESTful-API-PHP-MySQL/login.php", {
                    method: "POST",
                    mode: 'cors',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(jsonData),
                });
                let resJson = await res.json();
                console.log(resJson);
                if (res.status === 200 ) {
                    //setFName("");
                    //setEmail("");
                    //setPassword("");
                    setMessage("User created successfully");
                    sessionStorage.setItem("user", resJson.username);
                    sessionStorage.setItem("allData", JSON.stringify(resJson));
                    //localStorage.setItem("user", resJson.username);
                    //setSesstate({redirect: true});
                    //setSesstate({errorMsg: 'Successfully Logged In'});
                    navigate('/dashboard',{ state: resJson});
                } else {
                    setMessage("Some error occured");
                }
            // setError(true);
            }
            else {
                setMessage("Input Missing !!");
                //setSubmitted(true);
            // setError(false);
            MySwal.fire({
                toast: true,
                title: '<h2>Oops...</h2>',
                icon: 'error',
                 html:'Input Missing !!',
                showCloseButton: true,
                //showCancelButton: true,
                //focusConfirm: false,
               // confirmButtonText:    '<i class="fa fa-thumbs-up"></i> Great!',
               // confirmButtonAriaLabel: 'Thumbs up, great!',
                //cancelButtonText:    '<i class="fa fa-thumbs-down"></i>',
                //cancelButtonAriaLabel: 'Thumbs down',
                //text: 'Something went wrong!',
                //footer: '<a href="">Why do I have this issue?</a>'
              })
            }
        } catch (err) {
          console.log(err);
          setMessage(err.message);
          MySwal.fire({
            toast: true,
            title: '<h2>Oops...</h2>',
            icon: 'error',
             html:err.message,
            showCloseButton: true,
            //showCancelButton: true,
            //focusConfirm: false,
            //confirmButtonText:    '<i class="fa fa-thumbs-up"></i> Great!',
            //confirmButtonAriaLabel: 'Thumbs up, great!',
            //cancelButtonText:    '<i class="fa fa-thumbs-down"></i>',
            //cancelButtonAriaLabel: 'Thumbs down',
            //text: 'Something went wrong!',
            //footer: '<a href="">Why do I have this issue?</a>'
          })
        }


        //let isLoggedIn = localStorage.getItem('status');
      //  if ( sesstate.redirect) {            return <Link to="/dashboard"/>    }
    
      console.log(message);
}

    return (        
        <div>
            <Header/>
             <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="login-wrap p-2 p-md-2">
                            <div className="icon d-flex align-items-center justify-content-center">
                            <img src={logo} className="App-logo" alt="logo" />
                            </div>
                            <h3 className="text-center mb-4">Have an account?</h3>
                            <form onSubmit={handleFormSubmit} className="login-form">
                            <div className="message">{message ? <p>{message}</p> : null}</div> 
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control rounded-left" placeholder="Username" onChange={handleUsername} value={uname} required />
                                </div>
                                <div className="form-group mb-3 d-flex">
                                    <input type="password" className="form-control rounded-left" placeholder="Password" onChange={handlePassword} value={upassword} required />
                                </div>
                                <div className="form-group mb-3 d-md-flex">
                                    <div className="form-check w-50">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" defaultChecked />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Remember Me
                                        </label>
                                    </div>
                                    
                                        <div className="w-50 text-end">
                                            <a href="/">Forgot Password</a>
                                        </div>
                                </div>
                                <div className="form-group text-center mb-3">
                                    <button type="submit" className="btn btn-primary rounded submit p-2 px-3">Login</button>
                                </div>
                                <div className='text-center'>
                                    Don't Have account, <Link to='/Regform' className="btn btn-link">Create a new one</Link> ! 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
