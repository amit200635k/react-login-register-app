import React,{useState} from 'react'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal)

export default function Customers() {
  
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [username,setUsername] = useState("");
    const [city,setCity] = useState("");
    const [ustate,setUstate] = useState("");
    const [zip,setZip] = useState("");
    const [getagree,setAgree] = useState("Not Agree");
    const [validated, setValidated] = useState(false);
    const [message, setMessage] = useState("");
    const [checked, setChecked] = useState(false); 
    const [getformdata,setFormdata]=useState({
        fname:'',
        lname:'',
        email:'',
        mobile:'',username:'',city:'',state:'',zip:'',agree:getagree
    });
    const handleCheckBox=(event)=>{
        setChecked(!checked); 
        if(event.target.checked){
            setAgree("Not Agree");
            //checkFormInput();
            alert(getagree);
        } 
        else{ 
            setAgree("Agree");
        //checkFormInput();
        alert(getagree);
        } 
    }
    

    const checkFormInput=()=>{
        setMessage("");
        setFormdata({
            fname:fname,
            lname:lname,
            email:email,
            mobile:mobile,
            username:username,city:city,state:ustate,zip:zip,agree:getagree
          })
        const areTrue = Object.values(getformdata).every(
            value => value !== ""
          );
          if(areTrue)
          {
            //setValidated(true);
            //handleSubmit(event);
          }
        else{
            setMessage("Input Missing");
            setValidated(true);
            return;
        }
    }
     
   // const handleFname = (e) => {setFname(e.target.value) };
    const handleSubmit = (event) => {
        event.preventDefault();
        checkFormInput();
        setValidated(true);
     // const form = event.currentTarget;
     /* if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }      
      setValidated(true);
      setFormdata({
        fname:fname,
        lname:lname,
        email:email,
        mobile:mobile,
        username:username,city:city,state:ustate,zip:zip,agree:agree
      })*/
      if(getformdata.agree==="Agree"){
        handleFormSubmit();
      }
      else{
        setMessage("Check Agreement Checkbox");
      }
      if(message){
        setFname("");setLname("");setEmail("");setMobile("");setCity("");setUstate("");setUsername("");setZip("");
       


            MySwal.fire({
                toast: false,
                title: '<h2>Oops...</h2>',
                icon: 'info',
                html:message,
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
    }
    const handleFormSubmit=async (event)=>{
        //event.preventDefault();
        try {
            //const data = new FormData(event.target);
            const areTrue = Object.values(getformdata).every(
                value => value !== ""
              );
              console.log(areTrue);
              //console.log(JSON.stringify(formdata));
              if(areTrue && getagree==='Agree')
              {
                setMessage("");
                alert("Data Found");
                  /*  let resonse = await fetch("http://localhost:81/RESTful-API-PHP-MySQL/save.php", {
                                    method: "POST",
                                    mode: 'cors',
                                    headers: {"Content-Type": "application/json"}, 
                                   // headers: new Headers({'Content-Type': 'application/json', 'dataPostedBY':'Amit','Authorization': 'Bearer my-token','My-Custom-Header': 'foobar'}),
                                    body: JSON.stringify(getformdata),
                                });
                    let resJson = await resonse.json();
                    console.log(resJson);
                                // if (res.status === 200 ) {
                                //     //setFName("");
                                //     //setEmail("");
                                //     //setPassword("");
                                //     setMessage("User created successfully");
                                //     //setSesstate({redirect: true});
                                //     //setSesstate({errorMsg: 'Successfully Logged In'});
                                // } else {
                                //     setMessage("Some error occured");
                                // }
                                setMessage(resJson.message +": User created successfully");
                                // setFormdata({
                                //     fname:'',
                                //     lname:'',
                                //     email:'',
                                //     mobile:'',username:'',city:'',state:'',zip:'',agree:getagree
                                // });
                       */        
              }
              else{
                setMessage("Input Missing");
                setValidated(true);
              }
            
            // setError(true);
            
        } catch (err) {
          console.log(err);
          setMessage(err.message);
        }
        // MySwal.fire({
        //     toast: false,
        //     title: '<h2>Oops...</h2>',
        //     icon: 'info',
        //      html:message,
        //     showCloseButton: true,
        //     //showCancelButton: true,
        //     //focusConfirm: false,
        //     //confirmButtonText:    '<i class="fa fa-thumbs-up"></i> Great!',
        //     //confirmButtonAriaLabel: 'Thumbs up, great!',
        //     //cancelButtonText:    '<i class="fa fa-thumbs-down"></i>',
        //     //cancelButtonAriaLabel: 'Thumbs down',
        //     //text: 'Something went wrong!',
        //     //footer: '<a href="">Why do I have this issue?</a>'
        //   })
}




    return (
        <div>
            <DashHeader/>
            <div className='container'>
            Customers
            <br/>
                <Form noValidate validated={validated}  onSubmit={handleSubmit} autoComplete="off">
                    <Row className="mb-3">
                        <Form.Group as={Col} md="3" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            onChange={(event) => {setFname(event.target.value); checkFormInput() }} value={fname} autoComplete="off"
                            
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            onChange={(event)=>{setLname(event.target.value);checkFormInput()}}
                            value={lname} autoComplete="off"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustomEmail">
                        <Form.Label>Email</Form.Label> 
                            <Form.Control
                            type="email"
                            placeholder="Email" 
                            onChange={(event) => {setEmail(event.target.value);checkFormInput()}} value={email} 
                            required autoComplete="off"
                            />
                            <Form.Control.Feedback type="invalid">
                            Please Enter Email.
                            </Form.Control.Feedback> 
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustomMobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Mobile"
                            aria-describedby="inputGroupPrepend"
                            onChange={(event) => {setMobile(event.target.value); checkFormInput()}} value={mobile} 
                            required autoComplete="off"
                            />
                            <Form.Control.Feedback type="invalid">
                            Please Enter Mobile.
                            </Form.Control.Feedback> 
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            required autoComplete="off"
                            onChange={(event) => {setUsername(event.target.value);checkFormInput() }} value={username} 
                            />
                            <Form.Control.Feedback type="invalid">
                            Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom03">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" required onChange={(event) => {setCity(event.target.value);checkFormInput() }} value={city} autoComplete="off" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="State" required onChange={(event) => {setUstate(event.target.value);checkFormInput() }} value={ustate} autoComplete="off" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="text" placeholder="Zip" required onChange={(event) => {setZip(event.target.value) ;checkFormInput()}} value={zip} autoComplete="off" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                        id='formCheck'
                        required
                        type='checkbox' 
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid" 
                        //defaultChecked={false} 
                        checked={checked ? 'checked' : ''}
                        onChange={handleCheckBox} value={getagree} 
                        />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                    </Form>

            </div>
            <DashFooter/>
        </div>
    )
}
