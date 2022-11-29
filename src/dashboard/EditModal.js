import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';

export default function EditModal(props) {
    const [show, setShow] = useState(props.show);    
    // if(props.show==='show'){
    //     setShow(true);
    // }
      const handleClose=()=>{setShow(false)}
     // const handleShow=()=>{setShow(true)};

    return (
        <div>
            <Modal show={show==="show"?true:false} onHide={handleClose} backdrop="static" keyboard={false}>
                            <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!
                               
                            </Modal.Body>
                            <Modal.Footer>
                            <button variant="secondary" className='btn btn-info' onClick={handleClose}>Close</button>
                            <button variant="primary" className='btn btn-primary' onClick={handleClose}>Save Changes</button>
                            </Modal.Footer>
                        </Modal> 
        </div>
    )
}
