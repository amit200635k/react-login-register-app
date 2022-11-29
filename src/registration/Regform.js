
import './Regform.css';

import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header';
import Footer from '../Footer';

export default function Regform() {
  
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [submitted, setSubmitted] = useState(false);
  //const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
// Handling the name change
const handleFName = (e) => {
    setFName(e.target.value);
    //setSubmitted(false);
  };
  const handleLName = (e) => {
    setLName(e.target.value);
    //setSubmitted(false);
  };
// Handling the email change
const handleEmail = (e) => {
    setEmail(e.target.value);
    //setSubmitted(false);
  };
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    //setSubmitted(false);
  };
// Handling the form submission
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (fname !== '' || email !== '' || password !== '') {
        
            let jsonData = {
                name: fname,
            email: email,
            password: lname,
            }
            console.log(JSON.stringify(jsonData))
            //let  proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            let res = await fetch("http://localhost:81/RESTful-API-PHP-MySQL/", {
                method: "POST",
                mode: 'cors',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(jsonData),
            });
            let resJson = await res.json();
            console.log(resJson);
            if (res.status === 200 ) {
                setFName("");
                setEmail("");
                setPassword("");
                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
            }
        // setError(true);
        }
        else {
            setMessage("Input Missing !!");
            //setSubmitted(true);
        // setError(false);
        }
    } catch (err) {
      console.log(err);
      setMessage(err.message);
    }
  };


/*
// Showing success message
const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {fname} successfully registered!!</h1>
      </div>
    );
  };
// Showing error message if error is true
const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
*/



    return (
        <div className="App">
          <Header/>
            <div className="wrapper">
              <div className="form-left">
                  <h2 className="text-uppercase">information</h2>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Diam volutpat commodo.
                  </p>
                  <p className="text">
                      <span>Sub Head:</span>
                      Vitae auctor eu augudsf ut. Malesuada nunc vel risus commodo viverra. Praesent elementum facilisis leo vel.
                  </p>
                  <div className="form-field">
                      <Link to='/Loginform' className="account" >Have an Account?</Link>
                  </div>
              </div>
              <form className="form-right" onSubmit={handleSubmit}>
                  <h2 className="text-uppercase">Registration form</h2>
                  <div className="message">{message ? <p>{message}</p> : null}</div> 
                  <div className="row">
                      <div className="col-sm-6 mb-3">
                          <label>First Name</label>
                          <input type="text" name="first_name" id="first_name" className="input-field" onChange={handleFName} value={fname} required/>
                      </div>
                      <div className="col-sm-6 mb-3">
                          <label>Last Name</label>
                          <input type="text" name="last_name" id="last_name" className="input-field" onChange={handleLName} value={lname} required/>
                      </div>
                  </div>
                  <div className="mb-3">
                      <label>Your Email</label>
                      <input type="email" className="input-field" name="email"  onChange={handleEmail} value={email} required />
                  </div>
                  <div className="row">
                      <div className="col-sm-6 mb-3">
                          <label>Password</label>
                          <input type="password" name="pwd" id="pwd" className="input-field" required onChange={handlePassword} value={password} />
                      </div>
                      <div className="col-sm-6 mb-3">
                          <label>Current Password</label>
                          <input type="password" name="cpwd" id="cpwd" className="input-field" required onChange={handlePassword} value={password} />
                      </div>
                  </div>
                  <div className="mb-3">
                      <label className="option">I agree to the <a href="/" data-bs-toggle="modal" data-bs-target="#exampleModal" >Terms and Conditions</a>
                          <input type="checkbox" defaultChecked value="checked"/>
                          <span className="checkmark"></span>
                      </label>
                  </div>
                  <div className="form-field">
                      <input type="submit" value="Register" className="register" name="register"  /> 
                      { //onClick={handleSubmit} 
                      }
                  </div>
              </form>
          </div>
          <Footer/>
    </div>
    )
}
