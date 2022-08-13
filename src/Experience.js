import React from 'react'
import './index.scss';
import './App.css';
import image from './mlh-logo.png';


export default () => {
    return (
    <div style={{width:"100%", height:"100%", top:"35%", transform:"translate(0,-20%)",
    position: "absolute"}}>
         <div style={{textAlign:"center"}}>
             <h3>
            Open Source track intern in the G-Research DevOps team.<br></br>
            Working on a Github Runners Open Source Project.<br></br>
            Utilizing Github Actions, Pulumi, AWS, and GCP. 
         
            </h3>
         </div>
         <a href="https://fellowship.mlh.io/" target="blank">
         <img src={image} className="mlh-logo" alt="mlh" />
         </a>
         <h4>June - September 2022</h4>
    </div>
    )
}