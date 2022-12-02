import React,{useState} from 'react'
//import {ErrorBoundary,useErrorHandler } from 'react-error-boundary'
//import DashHeader from './DashHeader'
//import DashFooter from './DashFooter'
export default function ExceptionPage() {
    const [error, setError] = useState({ message: "I'm an error message" });
 
    const crash = () => {
      setError(null);
    };

    return (
        // <ErrorBoundary fallback={<div>{error} Oh no</div>}>
            <div>
                <button onClick={crash}>Hi! I'm a button that crashes</button>
                <p style={{ color: "red" }}>{error.message}</p>
             </div>
        // </ErrorBoundary>
    )
}
