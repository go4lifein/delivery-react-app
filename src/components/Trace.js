import React from 'react';
import '../trace/ghee.scss';
import logo from "../trace/fonts/g4l.svg";
import mask12 from '../trace/fonts/Mask(12).png';
import mask11 from "../trace/fonts/Mask(11).png";
import mask10 from '../trace/fonts/Mask(10).png';
import mask9 from '../trace/fonts/Mask(9).png';
import mask8 from '../trace/fonts/Mask(8).png';

export default function Trace(){
    return(
        <div className = "container">
            <div className = "header">
        <img src = {logo} alt = "logo" className = "logo" />
            <h1>Bilona Ghee</h1>
            </div>
            <div className = "content">

            </div>
            <div className = "graphics">
               <div className = "section1" style = {{display : 'flex',flexDirection:'row'}}>
                <img src = {mask12} alt = "mask12" style = {{width: 140 ,height: 180}} />
                <h2 style ={{fontWeight : 400 ,fontSize : 12 , width : '35%', paddingTop : '12%'}}>We work with farmers in <b>Bikaner</b> and procure  milk for ghee.</h2>
               </div>
               <div className = "section2" style = {{display : 'flex',flexDirection:'row' }}>
                <img src = {mask11} alt = "mask11" style = {{width: 140 ,height: 110}} />
                <h2 style ={{fontWeight : 400 ,fontSize : 12 , width : '35%', paddingTop : '6%'}}><b>Curd</b> is made out of this pure desi cow milk.</h2>
               </div>
               <div className = "section3" style = {{display : 'flex',flexDirection:'row' }}>
                <img src = {mask10} alt = "mask10" style = {{width: 140 ,height: 110}} />
                <h2 style ={{fontWeight : 400 ,fontSize : 12 , width : '35%', paddingTop : '6%' ,paddingLeft : '2%'}}><b>Butter</b> is made out of it on <b>बिलौना</b> by hand churning,
preserving nutrients.</h2>
               </div>
               <div className = "section4" style = {{display : 'flex',flexDirection:'row' }}>
                <img src = {mask9} alt = "mask9" style = {{width: 100 ,height: 140}} />
                <h2 style ={{fontWeight : 400 ,fontSize : 12 , width : '32%', paddingTop : '6%'}}>Butter is <b>slow heated</b> into ghee. Using the traditional method. Which also is the best one for quality.</h2>
               </div>
               <div className = "section5" style = {{display : 'flex',flexDirection:'row'}}>
                <img src = {mask8} alt = "mask8" style = {{width: 100 ,height: 140}} />
                <h2 style ={{fontWeight : 400 ,fontSize : 12 , width : '52%', paddingTop : '6%' , paddingRight : '2%'}}>It is strained and packed for you.</h2>
               </div>
            </div>
        </div>
    );
}