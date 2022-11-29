import React,{useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
//import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
//import EditModal from './EditModal';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

export default function CustomDataTable(props) {
    //console.log(props);
    const clsName =props.clsName;
    var tbldata = props.data;
    const editmode =props.editmode;
    const [order, setOrder] = useState("asc");
    const [sortField, setSortField] = useState("");
    const [showModal,setShowModal] =useState(false); 
    const handleClose=()=>{setShowModal(false)}
    //const [getdata, setData] = useState([]);
   // let dataString = JSON.stringify(tbldata);
    //dataString = JSON.parse(dataString);
    const [tableData, setTableData] = useState([]);
    const [geRowData, setRowData]=useState("");
    // modal form input cosntants
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    //const [email, setEmail] = useState("");
    //const [mobile, setMobile] = useState("");
    //const [username, setUsername] = useState("");
    const [city, setCity] = useState("");
   // const [ustate, setUstate] = useState("");
    //const [zip, setZip] = useState("");
    const [valid, setValid] = useState({}); 
    //const [getdata, setData] = useState([])
//    const [getform, setForm] = useState({})
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

    const editRow =(e)=>{ 
        const dataId = e.target.attributes.getNamedItem("data-id").value;
        alert("edit row: "+ dataId ); 
         setShowModal(true); 
         let dd0=[]; 
         let dd= e.target.parentElement.parentElement.getInnerHTML();
              dd= dd.split('</td>'); 
              dd.map((item)=>{
                if(item.includes("<td>")){
                    if(!item.includes("edit")){
                    item = item.replace(/<td>/g, "");
                    dd0.push(item);
                    
                    }
                }
                return dd0;
              })
        
        setForm({'action':'edit','dataId':dd0[0],'fname':dd0[1],'lname':dd0[2],'city':dd0[6]});
         
        console.log(getform); 
         setRowData(dd0);

        //swetAlert(dataId,"edit");
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
              //console.log(data)
              data = JSON.parse(data);
              const resJsonA = JSON.parse(data.alldata);
              console.log(resJsonA);
              setTableData(resJsonA);
            },[]);
                
        }
      })
     }

     const TblHeader=(props)=>{
        
        
        const handleSortingChange=(col)=>{
            const sortOrder = (col === sortField )&&(order === "asc") ? "desc" : "asc";
            setSortField(col);
            setOrder(sortOrder);
            handleSorting(col, sortOrder);
        }
        const handleSorting = (sortField, sortOrder) => {
            if (sortField) {
                const sorted = [...tableData].sort((a, b) => {
                 if (a[sortField] === null) return 1;
                 if (b[sortField] === null) return -1;
                 if (a[sortField] === null && b[sortField] === null) return 0;
                 return (
                  a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
                   numeric: true,
                  }) * (sortOrder === "asc" ? 1 : -1)
                 );
                });
                setTableData(sorted);
                //return tableData;
               }
           };
        let tblColumnName = [];
        //const tbldata = JSON.parse(data);
        //console.log(props.coldata);
        if(props.coldata.length >0)
        {
            tblColumnName = Object.keys(props.coldata[0]);
        }

            return (
                            <thead>
                                <tr key="A">
                                 { tblColumnName && 
                                    tblColumnName.map((col,i)=>{
                                        const cl = sortField
                                                            ? sortField === col && order === "asc"
                                                            ? "up"
                                                            : sortField === col && order === "desc"
                                                            ? "down"
                                                            : "default"
                                                            : "";
                                       // if(i <= 6)
                                       // {
                                            //handleSorting={handleSorting} 
                                         return i<=6 ? <th className={cl} key={col} onClick={() => handleSortingChange(col)}>{col.toUpperCase()}</th> :'' 
                                       // }
                                          
                                    })
                                }
                               {editmode==="on" && <th>Edit</th>} 
                                </tr>
                            </thead> 
            )
     }

     useEffect((tbldata) => { 
        if(typeof(tbldata)!== 'undefined'){
            if(tbldata!=='' && tbldata.length>0){
                tbldata = JSON.stringify(tbldata);
                setTableData(JSON.parse(JSON.stringify(tbldata)));
            }
        }        
    },[]);
    let getMdlData1=[];
    if(geRowData && geRowData.length>0){
        getMdlData1 = geRowData; 
    }
  

    const modalSubmit=()=>{
        //setField("userId",getMdlData1[0]);
        //setField("action","edit");
        console.log(getform);
         fetch("http://localhost:81/RESTful-API-PHP-MySQL/edit_del.php", {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "Authtoken":"Bearer 12234556566"
                },
                body: JSON.stringify(getform),
            })
            .then((response) => response.json())
            .then((data) => {
              //console.log(data)
              data = JSON.parse(data);
              if(data.status==="Success"){

                const resJsonA = JSON.parse(data.alldata);
                //console.log(data);
                setTableData(resJsonA);
                MySwal.fire({
                    toast: true,
                    title: '<h2>' + data.status + '</h2>',
                    icon: data.icon,
                    showCloseButton: true
                })
                setFname("");
                setLname("");
                setCity("");
                setTimeout(()=>{
                    
                    setShowModal(false);
                },2500)
                 
              }
              
            },[]);
    }
    return (
        <div>
            
            <table className={clsName}>
                            
                            <TblHeader coldata={props.data}/>
                            <tbody>
                            {
                              (tableData.length > 0 ? tableData : tbldata).map((item, i) =>{
                                return <tr key={i}>
                                 <td>{item.id}</td>
                                <td>{item.fname}{item.lname}</td>
                                <td>{item.email}</td>
                                <td>{item.city}</td>
                                <td>{item.mobile}</td>
                                <td>{item.username}</td>
                                <td>{item.city},{item.state}</td>
                                { editmode==="on" && <td> <span onClick={editRow} className='btn btn-sm btn-info' data-id={item.id} data-action='edit'>Edit</span> <span onClick={deleteRow} className='btn btn-sm btn-info' data-id={item.id} data-action='delete'>X</span></td>
                                }</tr>
                                 })
                            } 
                            </tbody>
                        </table>
                        {showModal && 
                            <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
                            <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!
                                <div >                                
                                <Form.Control
                                        required
                                        type="hidden"
                                        name='userId'
                                        value={getMdlData1[0]}  
                                         
                                    />
                                   <Form.Control type='hidden' name='action' value='edit'/>
                                    <Form.Group as={Row} className="mb-3" controlId="validationCustom01" >
                                    <Form.Label as={Col} md="4">First name</Form.Label>
                                    <Col md="8"> <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                        name='fname'
                                        onChange={(event) => {setField('fname',event.target.value); setFname(event.target.value)}} value={fname?fname:getMdlData1[1]} autoComplete="off"
                                        onBlur={blurrHandle}
                                        className={valid.fname}
                                    />
                                    <Form.Control.Feedback type="invalid">Please Enter First name.</Form.Control.Feedback> 
                                    <Form.Control.Feedback type="valid">ok.</Form.Control.Feedback>
                                    </Col>
                                    </Form.Group>
                                   
                                     <Form.Group as={Row} className="mb-3" controlId="validationCustom01" >
                                     <Form.Label as={Col} md="4">Last name</Form.Label>
                                     <Col md="8"><Form.Control 
                                         required
                                         type="text"
                                         placeholder="Last name"
                                         name='lname'
                                         onChange={(event) => {setField('lname',event.target.value); setLname(event.target.value)}} value={lname?lname:getMdlData1[2]} autoComplete="off"
                                         onBlur={blurrHandle}
                                         className={valid.lname}
                                     />
                                     <Form.Control.Feedback type="invalid">Please Enter First name.</Form.Control.Feedback> 
                                     <Form.Control.Feedback type="valid">ok.</Form.Control.Feedback>
                                     </Col></Form.Group>  
                                     <Form.Group as={Row} className="mb-3"  controlId="validationCustom01" >
                                     <Form.Label as={Col} md="4">CITY</Form.Label>
                                     <Col md="8"><Form.Control 
                                         required
                                         type="text"
                                         placeholder="CITY"
                                         name='city'
                                         onChange={(event) => {setField('city',event.target.value); setCity(event.target.value)}} value={city?city:getMdlData1[1]} autoComplete="off"
                                         onBlur={blurrHandle}
                                         className={valid.city}
                                     />
                                     <Form.Control.Feedback type="invalid">Please Enter First name.</Form.Control.Feedback> 
                                     <Form.Control.Feedback type="valid">ok.</Form.Control.Feedback>
                                     </Col></Form.Group> 
                               <Button type="submit" onClick={modalSubmit}>Submit form</Button>
                               </div>
                            </Modal.Body>
                            <Modal.Footer>
                            <button variant="secondary" className='btn btn-info' onClick={handleClose}>Close</button>
                            <button variant="primary" className='btn btn-primary' onClick={handleClose}>Save Changes</button>
                            </Modal.Footer>
                        </Modal>
                        }
        </div>
    )
}
