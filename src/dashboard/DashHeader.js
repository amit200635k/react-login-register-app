import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'; //useLocation
import { Link } from 'react-router-dom'

//import Modal from 'react-modal';

export default function DashHeader() {

    //const location = useLocation();
     //console.log(location.state);
     let vieData="";
     const nav = useNavigate();
     if(sessionStorage.length>0){
        if(!sessionStorage.getItem("user"))
        { 
            nav("/Loginform")    
        } else{ 
            vieData = sessionStorage.getItem('allData');
            if(vieData){
                vieData = JSON.parse(vieData); 
            }
            
        } 
          
     }
     else
     {
        nav("/Loginform")
     }
     const handleLogout=()=>{
        alert("sfsd");
        sessionStorage.removeItem("user");     
        nav("/Loginform");
    } 
    useEffect(() => {if(!sessionStorage.getItem("user")){        nav("/Loginform")    } else{  } });  
   /* const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      //Modal.setAppElement('#yourAppElement');
      let subtitle;
      const [modalIsOpen, setIsOpen] = React.useState(false);
    
      function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }
      const handleModalSave=()=>{
        alert("Sfsdf");
      }*/
    
    return (
        <div> 
            <div className="container">
                <header className="p-3 mb-3 border-bottom">
                    <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg bg-lightx d-none">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/Dashboard"><svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap" viewBox="0 0 118 90">
                        <g fill="#61DAFB" >
                            <title>Bootstrap</title>
                            <path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"></path>
                        </g> </svg></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            <Link className="nav-link" to="#">Features</Link>
                            <Link className="nav-link" to="#">Pricing</Link>
                            <Link className="nav-link disabled">Disabled</Link>
                        </div>
                        </div>
                    </div>
                    </nav>
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link to="/Dashboard" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap" viewBox="0 0 118 90">
                        <g fill="#61DAFB" >
                            <title>Bootstrap</title>
                            <path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"></path>
                        </g> 
                        </svg>
                        </Link>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/Overview" className="nav-link px-2 link-dark">Overview</Link></li>
                        <li><Link to="/Inventory" className="nav-link px-2 link-dark">Inventory</Link></li>
                        <li><Link to="/Customers" className="nav-link px-2 link-dark">Customers</Link></li>
                        <li><Link to="/Products" className="nav-link px-2 link-dark">Products</Link></li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
                        </form>

                        <div className="dropdown text-end">
                        <Link className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/> {vieData.username? vieData.username : nav("/Loginform")}
                        </Link>
                        <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                            <li><Link className="dropdown-item" href="/">New project...</Link></li>
                            <li><Link className="dropdown-item" href="/">Settings</Link></li>
                            <li><Link className="dropdown-item" href="/">Profile</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><button className="dropdown-item" onClick={handleLogout}>Sign out</button></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </header>
                {/* <button onClick={openModal}>Open Modal</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles} 
                    ariaHideApp={false} 
                    contentLabel="Example Modal"
                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                    <button onClick={closeModal}>close</button>
                    <div>I am a modal</div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <form >
                                <input id='mdl_name'  onChange={(e)=>e.target.value}/>
                                <input id='mdl_email' value={"aa@gmmm.com"} onChange={(e)=>e.target.value}/>
                                <input id='mdl_phone' value={"1234567890"} onChange={(e)=>e.target.value}/>
                                <button onClick={handleModalSave}>Save</button>
                            </form>
                        </div>

                    </div>
                </Modal> */}
                 
            </div>

        </div>
    )
}
