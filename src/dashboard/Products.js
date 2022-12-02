import React,{useEffect,useState,useRef} from 'react'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'
//import ExceptionPage from './ExceptionPage'
//import {ErrorBoundary } from 'react-error-boundary'
//import ChildComponent from './ChildComponent'
export default function Products() {
    const [getData, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [postsToShow, setPostsToShow] = useState([])
    const postsPerPage = 12
    const ref = useRef(postsPerPage)
    let arrayForHoldingPosts = []

    const loopWithSlice = (start, end) => {
        const slicedPosts = getData.slice(start, end)
        arrayForHoldingPosts = arrayForHoldingPosts.concat(slicedPosts)
        setPostsToShow(arrayForHoldingPosts)
      }

    const Posts = ({ postsToRender }) => {
        return (
            <div className='row'>
              {postsToRender.map((post, index) => (
                <div className='col-md-3' key={index}><h6>{post.API}</h6></div>  
                // <li key={index}>
                //   <strong>{post.id}</strong>
                //   &nbsp;{post.title}
                // </li>
              ))}
            </div>
          );
        };
    
    const handleShowMorePosts = () => {
        setLoading(true);
        loopWithSlice(0, ref.current + postsPerPage)
        ref.current += postsPerPage
        setLoading(false);
        return (
            // <div>
              <Posts postsToRender={postsToShow} />
             // <button onClick={handleShowMorePosts}>Load more</button>
           // </div>
          )
    }
      



    useEffect(()=>{
        setLoading(true);
        async function fetchData() {
            await fetch("https://api.publicapis.org/entries")
            .then((response) => response.json())
            .then((data) => {
               setData(data.entries);
               const slicedPosts = data.entries.slice(0, 12)
               let arrayForHoldingPosts = []
                arrayForHoldingPosts = arrayForHoldingPosts.concat(slicedPosts)
                setPostsToShow(arrayForHoldingPosts)
                setLoading(false);
            },[]);
          }
          fetchData();
          
         //document.title=`Product Page with API ${getData.length}`; 
         
    }, [])
    
    /*const ErrorFallback=({error, resetErrorBoundary}) => {
        return (
          <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
          </div>
        )
      }
      const myErrorHandler = (error, info) => {
        console.log(error+"-"+info);
        // Do something with the error
        // E.g. log to an error logging client here
      }*/
    return (
        <div>
            <DashHeader/>
            <div className='container-fluid min50vh'>
            <div className='row'>
            <h3>Products</h3>
            {/* <ChildComponent name="Amit" data={getData}/>
                <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}> 
                    // fallback={<div>Oh no</div>}  
                    <ExceptionPage/>
                </ErrorBoundary> */}
                <br/>
                <br/>

            {loading ? ( <div className="loader-container">
                    <div className="spinner"></div>
                </div> ) : (
                     <div className='col-12'>
                        <div className='container'>
                            <div className='row'>
                            {/* {
                                getData && getData.length>0 && getData.map((item,index)=>{
                                    return index <=2 && <div className='col-md-3' key={index}><h6>{item.API}</h6></div>       ;
                                })
                            } */}
                            <Posts postsToRender={postsToShow} />
                            <button onClick={handleShowMorePosts}>Load more</button>
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
