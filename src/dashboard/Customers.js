import React,{useState,useEffect} from 'react' 
//useRef
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './Dashboard.css'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
//import DataTable from 'react-data-table-component';
import CustomDataTable from './CustomDataTable';
//import { json } from 'react-router-dom';
const MySwal = withReactContent(Swal)

export default function Customers() {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [username, setUsername] = useState("");
    const [city, setCity] = useState("");
    const [ustate, setUstate] = useState("");
    const [zip, setZip] = useState("");
    //const [getagree,setAgree] = useState("Not Agree");
    //const [validated, setValidated] = useState(false);
    // const [message, setMessage] = useState("");
    //const [checked, setChecked] = useState(false); 
    //const [getformdata,setFormdata]=useState({fname:'',lname:'',email:'',mobile:'',username:'',city:'',state:'',zip:'',agree:getagree});
    const [valid, setValid] = useState({});
    let resJson="";
    let allData='';
    const [getdata, setData] = useState([])
    const [getform, setForm] = useState({})
    const [geterrors, setErrors] = useState({})
    const setField = (field, value) => {
        setForm({
            ...getform,
            [field]: value
        }) // Check and see if errors exist, and remove them from the error object:
        if (!!geterrors[field]) setErrors({
            ...geterrors,
            [field]: null
        })
    }
    const setValidInvalid = (field, value) => {
        setValid({
            ...valid,
            [field]: value
        })
    }

    const handleCheckBox = () => {}

    //const checkFormInput = () => { }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const areTrue = Object.values(getform).every(
            value => value !== ""
        );
        if (areTrue) {
            //setValidated(true);
            //alert(JSON.stringify(getform)+"ok")
            //handleSaveApi();
            let resData =await fetch("http://localhost:81/RESTful-API-PHP-MySQL/save.php", {
                method: "POST",
                //mode: 'no-cors',
                headers: {
                    "Content-Type": "application/json",
                    'Athorization': 'Bearer 12234556566',
                    "Authtoken":"Bearer 12234556566"
                },
                body: JSON.stringify(getform),
            });
            //let resJson = resData.json();
            const resJson1 = await resData.text();
            resJson = resJson1 === "" ? {} : JSON.parse(resJson1);
    
            //console.log(resJson);
            resJson = JSON.parse(resJson);
            if(resJson.status){
               // resJson =  resJson.json();
               // alert(JSON.stringify(resJson));
                MySwal.fire({
                    toast: true,
                    title: '<h2>' + resJson.status + '</h2>',
                    icon: resJson.icon,
                    html: resJson.message,
                    showCloseButton: true
                })
                if(resJson.status==='Success'){
                    setFname("");setLname("");setEmail("");setMobile("");setCity("");setUstate("");setUsername("");setZip("");
                    setData(JSON.parse(resJson.alldata));
                }
                //console.log(JSON.parse(resJson.alldata));
            }
            else{
                alert(JSON.stringify(resJson))
            }


            //handleSubmit(event);
        } else {
            //setValidated(true);
            alert("Missing")
            return;
        }
    }
   /* const handleSaveApi =async (event) => {
        event.preventDefault();
        let resData =await fetch("http://localhost:81/RESTful-API-PHP-MySQL/save.php", {
            method: "POST",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                'Athorization': 'Bearer 12234556566',
                "Authtoken":"Bearer 12234556566"
            },
            body: JSON.stringify(getform),
        });
        let resJson = resData.json();
        //const resJson1 = await response.text();
       // const resJson = resJson1 === "" ? {} : JSON.parse(resJson1);

        console.log(resJson);
        if(resJson.status){
           // resJson =  resJson.json();
            alert(JSON.stringify(resJson))
            MySwal.fire({
                toast: true,
                title: '<h2>' + resJson.status + '</h2>',
                icon: resJson.icon,
                html: resJson.message,
                showCloseButton: true
            })
            if(resJson.status==='Success'){
                //setFname("");setLname("");setEmail("");setMobile("");setCity("");setUstate("");setUsername("");setZip("");
    
            }
            console.log(resJson.alldata);
        }
        else{
            alert(JSON.stringify(resJson))
        }
        
    }*/
    const blurrHandle = (event) => {
        if (event.target.value !== '') {
            //setValid('valid');
            if (event.target.name === 'email' && !isValidEmail(event.target.value)) {
                setValidInvalid(event.target.name, 'invalid')
            } else {
                setValidInvalid(event.target.name, 'valid')
            }


        } else {
            //setValid("invalid");
            setValidInvalid(event.target.name, 'invalid')
        }

    }
    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }
    
      useEffect(() => {
        //pullDataOnLoad();
         if(getdata.length ===0){
            fetch("http://localhost:81/RESTful-API-PHP-MySQL/pulldata.php")
            .then((response) => response.json())
            .then((data) => {
              //console.log(data)
              // eslint-disable-next-line react-hooks/exhaustive-deps
              resJson = JSON.parse(data);
              // eslint-disable-next-line react-hooks/exhaustive-deps
              allData = resJson.alldata;
              allData = JSON.parse(allData);
              setData(allData);
            },[]);
         }
         else{
            
         }
        
          
         
    });
    /*const editRow =(e)=>{ 
        const dataId = e.target.attributes.getNamedItem("data-id").value;
        alert("edit row: "+ dataId );  
        swetAlert(dataId,"edit");
        }
    const deleteRow =(e)=>{ 
        const dataId = e.target.attributes.getNamedItem("data-id").value;
        alert("edit row: "+ dataId ); 
        swetAlert(dataId,"delete");
     }
     const swetAlert = (dataId,acTion)=>{
        return  MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

            fetch("http://localhost:81/RESTful-API-PHP-MySQL/edit_del.php", {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "Authtoken":"Bearer 12234556566"
                },
                body: JSON.stringify({'action':acTion,'dataId':dataId}),
            })
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
              data = JSON.parse(data);
              const resJsonA = JSON.parse(data.alldata);
              console.log(resJsonA);
              setData(resJsonA);
            },[]);
                
        }
      })
     }
     const columns = [
        {
            name: 'Sr.NO',
            selector: 'id',
            sortable: true,
          },
          {
          name: 'Name',
          selector: 'fname',
          sortable: true,
        },
        {
          name: 'Email',
          selector: 'email',
          sortable: true,
        },
        {
          name: 'City',
          selector: 'city',
          sortable: true,
        },
        {
            name: 'Edit',
             
          },
      ];*/

    return (
        <div>
            <DashHeader/>
            <div className='container'>
            Customers
            <br/>
         <Form onSubmit={handleSubmit}  autoComplete="off">
                    <Row className="mb-3">
                        <Form.Group as={Col} md="3" controlId="validationCustom01" >
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            name='fname'
                            onChange={(event) => {setField('fname',event.target.value) ;setFname(event.target.value);}} value={fname} autoComplete="off"
                            onBlur={blurrHandle}
                            className={valid.fname}
                        />
                        <Form.Control.Feedback type="invalid">Please Enter First name.</Form.Control.Feedback> 
                        <Form.Control.Feedback type="valid">ok.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text" name='lname'
                            placeholder="Last name"
                            onChange={(event)=>{setField('lname',event.target.value) ;setLname(event.target.value);}}
                            value={lname} autoComplete="off" onBlur={blurrHandle} className={valid.lname}
                        />
                         
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustomEmail">
                        <Form.Label>Email</Form.Label> 
                            <Form.Control
                            type="email" name='email'
                            placeholder="Email" 
                            onChange={(event) => {setField('email',event.target.value) ;setEmail(event.target.value);}} value={email} 
                            required autoComplete="off" onBlur={blurrHandle} className={valid.email}
                            />
                             
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustomMobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Mobile" name='mobile'
                            aria-describedby="inputGroupPrepend"
                            onChange={(event) => {setField('mobile',event.target.value) ;setMobile(event.target.value); }} value={mobile} 
                            required autoComplete="off" onBlur={blurrHandle} className={valid.mobile}
                            />
                            
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                            type="text"
                            placeholder="Username" name='username'
                            aria-describedby="inputGroupPrepend"
                            required autoComplete="off"
                            onChange={(event) => {setField('username',event.target.value) ;setUsername(event.target.value); }} value={username}  onBlur={blurrHandle} className={valid.username}
                            />
                            
                        </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom03">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" required onChange={(event) => {setField('city',event.target.value) ;setCity(event.target.value); }} value={city} autoComplete="off" onBlur={blurrHandle} className={valid.city} name='city'/>
                         
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>State</Form.Label>
                        <Form.Select aria-label="Default select example" required onChange={(event) => {setField('ustate',event.target.value) ;setUstate(event.target.value); }} value={ustate} onBlur={blurrHandle} className={valid.ustate} name='ustate'>
                            <option value=''>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        {/* <Form.Control type="text" placeholder="State" required onChange={(event) => {setField('ustate',event.target.value) ;setUstate(event.target.value); }} value={ustate} autoComplete="off" /> */}
                         
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="text" placeholder="Zip" required onChange={(event) => {setField('zip',event.target.value) ;setZip(event.target.value) ;}} value={zip} autoComplete="off" onBlur={blurrHandle} className={valid.zip} name='zip'/>
                         
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
                        //checked={checked ? 'checked' : ''}
                        onChange={(event) => {setField('agree',event.target.checked);handleCheckBox()} }
                        //value={getagree} 
                        />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                    </Form>

               
                    <div className='viewdta'>
                        <h4>View Data:</h4>
                        <div className="table-responsive">
                        {/* <table className="table table-striped d-none">
                            <thead>
                                <tr>
                                <th>Sr.NO</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                             {
                                getdata.map((item, i) =>{
                                return <tr key={i}>
                                 <td>{item.id}</td>
                                <td>{item.fname}{item.lname}</td>
                                <td>{item.email}</td>
                                <td>{item.city}</td>
                                <td> <span onClick={editRow} className='btn btn-sm btn-info' data-id={item.id} data-action='edit'>Edit</span> <span onClick={deleteRow} className='btn btn-sm btn-info' data-id={item.id} data-action='delete'>X</span></td></tr>
                                 })
                            }   
                            </tbody>
                        </table> */}
                        <br/>
                        {/* <DataTable
                                title="Employees"
                                columns={columns}
                                data={getdata}
                                pagination
                                highlightOnHover
                            /> */}
                            <br/>
                            <CustomDataTable clsName='table table-striped table-sm' data={getdata} editmode="on" />
                        </div>
                    </div> 
            </div>
            <DashFooter/>
        </div>
    )
}