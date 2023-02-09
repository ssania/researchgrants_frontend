import React from 'react'
import "./All.css";
import Header from "./Header";
import Footer from './Footer';
export default function Userpage() {
  return (
    <>
    <Header/>
    <div id="home">  
    <div className='bd'><marquee className="stext" behavior="scroll"  direction="left">NEW GRANTS UPDATES!!&emsp;&emsp; NEW GRANTS UPDATES!!&emsp;&emsp;   NEW GRANTS UPDATES!! &emsp;&emsp; NEW GRANTS UPDATES!!</marquee></div> 
    <div className="background-image" ></div>
    {/* <br></br>  */}
    <Footer/>
    </div>
    </>
  );
}

