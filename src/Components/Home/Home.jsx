import React from 'react'
import './Home.css'
import video from '../../Assets/video.mp4';
import { FaLocationDot } from "react-icons/fa6";
import { HiFilter } from "react-icons/hi";
import { CiInstagram } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { TbBrandTripadvisor } from "react-icons/tb";
import { BsListTask } from "react-icons/bs";
import { TbAppsFilled } from "react-icons/tb";


const Home = () =>{

    return (
        <section className='home'>
            <div className="overlay"></div>
       <video src={video} muted autoPlay loop type="video/mp4"> </video>
       
       <div className="homeContent container">
       <div className="textDiv">
        <span className="smallText">
            Our Packages
        </span>
<h1 className="homeTitle">Search your holiday</h1>

       </div>
      <div className="cardDiv grid">
      <div className="destinationInput">
       <label htmlFor="city">Search your destination: </label>
       <div className="input flex">
        <input type="text" placeholder='Enter name here...'/>
        <FaLocationDot className="icon"/>

       </div>
        </div>

         <div className="dateInput">
       <label htmlFor="city">Select you date </label>
       <div className="input flex">
        <input type="date"/>

       </div>
        </div>


         <div className="priceInput">
       <div className="label_total flex">
        <label htmlFor="city">Max price: </label>
       <h3 className="total">$5000</h3>
              </div>
              <div className="input flex">
                <input type="range" max="5000" min="1000"/>
                </div>
        
        
        
        </div>
<div className="searchOptions flex">
<HiFilter className="icon"/>
<span> MORE FILTERS</span>
</div>
        </div>

<div className="homeFooterIcons flex">
    <div className="rightIcons"> </div>
    <FiFacebook className="icon"/>
    <CiInstagram className="icon"/>
    <TbBrandTripadvisor className="icon" />
    <div className="leftIcons"> 
<TbAppsFilled />
        <BsListTask />

    </div>


</div>

        </div>
        </section>
        
    )
}
export default Home