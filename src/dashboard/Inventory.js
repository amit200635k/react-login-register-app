import React,{useState} from 'react'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal)
const students = [  
    {  
      'id': 1,   
      'name': 'Jack',   
      'email': 'jack@gmail.com'  
    },  
    {  
      'id': 2,   
      'name': 'Mary',   
      'email': 'mary@gmail.com'
    },  
    {  
      'id': 3,   
      'name': 'John',   
      'email': 'john@gmail.com'  
    },  
];
export default function Inventory() {
    const [show, setShow] = useState(false);    
      const handleClose=()=>{setInvName(''); setInvEmail(''); setShow(false)}
      const handleShow=()=>{setShow(true)}
      const [student, setStudent] = useState(students);
        
    var i=student.length ;
 const modalSaveData=()=>{
    //student.push({ id: i, name: invName, email: invEmail })
    i++;
    setStudent([...student,{ id: i, name: invName, email: invEmail }]);
   
    MySwal.fire({
        toast: true,
        title: '<h2>Oops...</h2>',
        icon: 'info',
         html:
        'You can use <b>bold text</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
        'and other HTML tags',
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
 const [invName, setInvName] = useState("");
 const [invEmail,setInvEmail] = useState("")
 MySwal.mixin({
    toast: false,
    title: '<h2>Oops...</h2>',
    icon: 'info',
     html:
    'You can use <b>bold text</b>, ' +
    '<a href="//sweetalert2.github.io">links</a> ' +
    'and other HTML tags',
    showCloseButton: true,
    //showCancelButton: true,
    //focusConfirm: false,
    //confirmButtonText:    '<i class="fa fa-thumbs-up"></i> Great!',
    //confirmButtonAriaLabel: 'Thumbs up, great!',
    //cancelButtonText:    '<i class="fa fa-thumbs-down"></i>',
    //cancelButtonAriaLabel: 'Thumbs down',
    //text: 'Something went wrong!',
    //footer: '<a href="">Why do I have this issue?</a>'
  }).bindClickHandler('data-swal-toast-template')




    return (
        <div>
            <DashHeader/>
            <div className='container'>
            <button className='btn btn-primary pull-right' variant="primary" onClick={handleShow}>Add +</button>
             <div className='row'>
                <div className='col-md-12'>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table table-bordered" >  
                       <thead>
                        <tr>  
                            <th>ID</th>  
                            <th>Name</th>  
                            <th>Email</th>  
                        </tr> 
                        </thead> 
                    <tbody>
                        {student.map((student, index) => (  
                        <tr key={index} data-index={index}>  
                            <td>{student.id}</td>  
                            <td>{student.name}</td>  
                            <td>{student.email}</td>  
                        </tr>  
                        ))}  
                </tbody>
                    </table>
                </div>
             </div>
            </div>
            <button data-swal-toast-template="#my-template">Trigger toast</button>
                        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                            <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!
                                <form  > 
                                    <label className="form-label">Name: </label>   
                                    <input type="text" className='form-control' value={invName} onChange={(e) => {setInvName(e.target.value)}} required />  
                                    <label className="form-label">Email:</label>  
                                    <input type="text" className='form-control' value={invEmail} onChange={(e)=>{setInvEmail(e.target.value)}} required />  
                                    <input type="button" className='btn btn-success' value="Submit" onClick={modalSaveData} />  
                                </form>
                            </Modal.Body>
                            <Modal.Footer>
                            <button variant="secondary" className='btn btn-info' onClick={handleClose}>Close</button>
                            <button variant="primary" className='btn btn-primary' onClick={handleClose}>Save Changes</button>
                            </Modal.Footer>
                        </Modal>
            <DashFooter/>
        </div>
    )
}
