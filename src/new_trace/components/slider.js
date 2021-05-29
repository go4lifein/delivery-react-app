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
                    Nutritional Facts
                </Option>
        </Container>
    );
}


const Container = styled.main`
   width:100%;
   margin-top:27%;
   display:flex;
   justify-content:flex-start;
   text-align:left;
   padding-left:10%;
    @media (max-width:800px)
    {
        margin-top:30%;
    }
    @media (max-width:500px)
    {
        margin-top:55%;
    }
    @media (max-width:400px)
    {
        margin-top:60%;
    }
    

`;
const Option = styled.p`
    border-bottom:${props =>props.active ? '4px solid': '0px solid'};
    border-bottom-color:#1C2C54;
    margin-left:2%;
    cursor:pointer;
    @media (max-width:500px){
        font-size:10px;
    }

`;