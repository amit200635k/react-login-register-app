import React,{useRef,useState} from 'react'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'
import {  Chart as ChartJS, CategoryScale,PointElement, LinearScale,LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar,Line,getDatasetAtEvent,    getElementAtEvent,    getElementsAtEvent } from 'react-chartjs-2';
import Modal from 'react-bootstrap/Modal';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,PointElement,LineElement,
    Title, 
    Tooltip,
    Legend
  );

//import ScriptTag from 'react-script-tag';
export default function Overview(props) {

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [1,2,3,4,5,6,7],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: [7,6,5,9,9,-1,0],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
      const optionsT = {
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked',
          },
        },
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      };
      const optionsLine = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
      const labelsLine = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

      const dataLine = {
        labelsLine,
        datasets: [
          {
            fill: true,
            label: 'Dataset 2',
            data: [1,2,3,4,5,6,7],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };


      const chartRef = useRef(null);

     /* const options1 = {
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked',
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      };
      
      const labelsNew = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      const dataNew = {
        labelsNew,
        datasets: [
          {
            label: 'Dataset 1',
            data: [1,2,3,4,5,6,7],
            backgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Dataset 2',
            data: [7,6,5,4,3,2,1],
            backgroundColor: 'rgb(75, 192, 192)',
          },
          {
            label: 'Dataset 3',
            data: [7,6,5,4,3,2,1],
            backgroundColor: 'rgb(53, 162, 235)',
          },
        ],
      };*/
      const [show, setShow] = useState(false);    
      const handleClose=()=>{setShow(false)}
      const handleShow=()=>{setShow(true)}
      return (
        <div>
            <DashHeader/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                    <Bar options={options} data={data} ref={chartRef} onClick={(event) => {
     console.log(getDatasetAtEvent(chartRef.current, event));
     console.log(getElementAtEvent(chartRef.current, event));
     console.log(getElementsAtEvent(chartRef.current, event));
  }} /> 
                    <Bar options={optionsT} data={data} />  
                    <Line options={optionsLine} data={dataLine} />                 
                    </div>
                    <div className='col-md-6'>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        </div>

                        <button className='btn btn-primary' variant="primary" onClick={handleShow}>Launch demo modal</button>
                        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                            <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!
                              <table className='table table-sm'>
                              <tbody>
                                {labels.map(name => (  
                                <tr key={name}>
                                  <td>
                                  {name}
                                  </td>
                                  </tr>
                              ))}
                              </tbody>
                              </table>
                            </Modal.Body>
                            <Modal.Footer>
                            <button variant="secondary" className='btn btn-info' onClick={handleClose}>Close</button>
                            <button variant="primary" className='btn btn-primary' onClick={handleClose}>Save Changes</button>
                            </Modal.Footer>
                        </Modal> 
                    </div>
                </div>
                
            </div>
            <DashFooter/>
        </div>
    )
}
