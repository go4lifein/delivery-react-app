import styled from 'styled-components';
import { useState } from "react";


export default function Slider({setChange , change}){
    const [isActive ,setActive ] = useState(true);
    return(
        <Container>
                <Option active = {change == 0} onClick  = {() =>setChange(0)}>
                    Journey
                </Option>

                <Option onClick = {() =>setChange(1)} active = {change == 1}>
                     Facts
                </Option>
                <Option active = { change == 2 } onClick = {() => setChange(2)}>
                    Test Report
                </Option>
        </Container>
    );
}


const Container = styled.main`
   width:100%;
   margin-top: 32%;
   display:flex;
   justify-content:flex-start;
   text-align:left;
   padding-left:10%;
   @media (max-height:850px){
       padding-top:13%;
   }
   @media (height:1024px){
       padding-top:18%;
   }
  
    @media (max-width:800px)
    {
        margin-top:30%;
        padding-top:15% !important;
    }
    @media (max-width:500px)
    {
        margin-top:55%;
    }
    @media (max-width:400px)
    {
        
        margin-top:60% !important;
    }
    

`;
const Option = styled.p`
    border-bottom:${props =>props.active ? '2px solid': '0px solid'};
    border-bottom-color:darkgrey;
    margin-left:4%;
    cursor:pointer;
    @media (max-width:500px){
        font-size:14px;
        margin-left:6%;
    }

`;