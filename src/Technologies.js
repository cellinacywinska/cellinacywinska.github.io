import React from 'react'
import './index.scss';
import './App.css';


export default function Page() {
  return (
    <div style={{width:"100%", height:"100%"}}>
      <div className='intro'>
        <h3 style={{ textAlign: "center" }}>
        <p>Main Language: Java, JavaScript</p>
        <p>Library/Framework: React (and React based libs), React Native, Express</p>
        <p>Misc: Various Popular DBs, AWS services.</p>
        </h3>
      </div>
    </div>
  )
}