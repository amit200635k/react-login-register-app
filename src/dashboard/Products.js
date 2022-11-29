import React,{useEffect,useState} from 'react'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'

export default function Products() {
    const [getData, setData] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        async function fetchData() {
            await fetch("https://api.publicapis.org/entries")
            .then((response) => response.json())
            .then((data) => {
               setData(data.entries);
               setLoading(false);
            },[]);
          }
          fetchData();


      
    }, [])
    


    return (
        <div>
            <DashHeader/>
            <div className='container-fluid min50vh'>
            <div className='row'>
            <h3>Products</h3>
            {loading ? ( <div className="loader-container">
                    <div className="spinner"></div>
                </div> ) : (
                     <div className='col-12'>
                        <div className='container'>
                            <div className='row'>
                            {
                                getData && getData.length>0 && getData.map((item,index)=>{
                                    return <div className='col-md-3' key={index}><h6>{item.API}</h6></div>       ;
                                })
                            }
                            </div>
                        </div> 
                    </div> 
                )
                }
                </div> 
            </div>
            <DashFooter/>
        </div>
    )
}
