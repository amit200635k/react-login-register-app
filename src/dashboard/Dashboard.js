import React,{useEffect} from 'react'
import { useNavigate,useLocation} from "react-router-dom";
import DashHeader from './DashHeader';
import DashFooter from './DashFooter';
export default function Dashboard() {
    //const [getData, setData] = useState('');
    //const [sessionData, setSessionData] = useState('');

      const location = useLocation();
      console.log(location.state);
      localStorage.setItem('allData',JSON.stringify(location.state))

    const nav = useNavigate();
    if(localStorage.getItem("user") && localStorage.getItem("user")!=="")
    {
        console.log('Found: '+localStorage.getItem("user"));
       // setSessionData({name:'a', email:'a@a.com',mobile:'45555552225',token:'sfdfs3454sfsfsf'});
       // setData({username: localStorage.getItem("user")});
    }
    else{ 
        //setSesstate({redirect:true});
        console.log('Not Found: '+localStorage.getItem("user"));
        localStorage.removeItem("user");
        //nav("/");
    }
const handleLogout=()=>{
    alert("sfsd");
    localStorage.removeItem("user");     
    nav("/Loginform");
} 
useEffect(() => {if(!localStorage.getItem("user")){        nav("/Loginform")    } else{  } });
    return (
       <div>
            <DashHeader />{/*{props={location.state}}*/} 
            <div className="container"> 
                <h4>Dashboard</h4>
                <p>Congratulations! {/*{getData.username}*/} are logged in..</p>  <button onClick={handleLogout}>Logout</button> 
            </div> 
            <DashFooter/>
        </div>
    )
}

