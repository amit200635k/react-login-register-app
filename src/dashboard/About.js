import React,{useState} from 'react'
import {ErrorBoundary } from 'react-error-boundary'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'
import ChildComponent from './ChildComponent'
const About1 =()=>{
    const [error, setError] = useState({ message: "I'm an error message" });
    const crash = () => {
        setError(null);
      };
return <div className='container'>
            
<button onClick={crash}>Hi! I'm a button that crashes</button>
<p style={{ color: "red" }}>{error.message}</p>
</div>
}

export default function About() {
    //const [error, setError] = useState({ message: "I'm an error message" });
 
    
    const ErrorFallback=({error, resetErrorBoundary}) => {
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
      }
    return (
         <>
            <DashHeader/>
            <p className='text-center'>About1 component with exception handling with error boundary and FallbackComponent</p>
            <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}> 
            
            <About1/>
             </ErrorBoundary>
             <br/>
             <ChildComponent name="Child Component"  />
             <DashFooter/>
             </>
    )
}
