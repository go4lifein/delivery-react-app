import styled from 'styled-components';
import moment from 'moment';
import { useState } from 'react';
import {FiChevronDown} from 'react-icons/fi';
import Fade from 'react-reveal';
import MapContainer from './maps/MapContainer';

const r1  = { 
    origin: { lat: 27.93415776638459, lng: 76.85305579301976 },
    destination: { lat: 28.99584804395379, lng: 77.00556672616105 },
    color: '#FCC888',
    startIcon: "https://img.icons8.com/pastel-glyph/64/000000/warehouse.png",
    endIcon: "https://img.icons8.com/android/64/000000/factory.png",

}
const r2 = {
    origin: { lat: 28.99584804395379, lng: 77.00556672616105 },
  destination: { lat: 28.447943760858596, lng:77.08380978717815 },
    color: '#CCFCD4',
}
export default function Content({data }){
    const [active , setActive ] = useState(false);
    const [active1, setActive1 ] = useState(false);
    const [active2, setActive2 ] = useState(false);
    const [map1 , setMap1] = useState(false);
    const [map2 ,setMap2] = useState(false);

    const setActives = () =>{ 
        setActive(!active);
        
    }

    console.log(data);
    return(
        <Container> 
        
               <Timeline>
                   <Text>
                    Received at 
                   </Text>
                <Dispatched>
                {moment.utc(data.bmc_receive).format("hh:mm A")}
                </Dispatched>
                <Circle back = "#FCC888" />
                    <Text>
                        Dispatched at
                    </Text>
                <Arrived>
                {moment.utc(data.bmc_dispatch).format("hh:mm A")}
                </Arrived>
                <Line height={active} />
                <Text>
                    Received at 
                   </Text>
                <Dispatched>
                {moment.utc(data.plant_receive).format("hh:mm A")}
                </Dispatched>
                <Circle back = "#CCFCD4" />
                <Text>
                        Dispatched at
                    </Text>
                <Arrived>
                {moment.utc(data.plant_dispatch).format("hh:mm A")}
                </Arrived>
                <Line height = {active1} />
                <Text>
                    Received at 
                   </Text>
                <Dispatched>
                    {moment.utc(data.whs_receive).format("hh:mm A")}
                </Dispatched>
                <Circle back = "#FC9C9C" />
                <Text>
                        Dispatched at
                    </Text>
                <Arrived>
                    {moment.utc(data.whs_dispatch).format("hh:mm A")}
                </Arrived>
               </Timeline>
               <Description>
                   <Card height = {active} area = "#F7DEBE" shadow = "#FCC888">
                       <Head onClick ={() => setActive(!active)}>
                        BMC (Tijara)
                        <Fi orientation = {active} size = {16} onClick ={() => setActives()} />
                       </Head>
                       {
                           active &&
                           <Fade clear>
                                <Des>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                           </Des>
                           </Fade>
                          
                       }

                   </Card>
                   <Subcard height = {map1} area = "#F7DEBE" shadow = "#FCC888">
                       <Head onClick ={() => setMap1(!map1)}>
                            Transport
                        <Fi orientation = {map1} size = {16} onClick ={() => setMap1(!map1)} />
                       </Head>
                       {
                           map1 &&
                          
                                <Des2>
                               <MapContainer r = {r1} />
                           </Des2>
                          
                          
                       }

                   </Subcard>
                   <Card height = {active1} area = "#e6ffea" shadow = "#CCFCD4">
                   <Head onClick ={() => setActive1(!active1)}>
                        Pasteurizing and Packaging (Sonipat)
                        <Fi orientation= {active1} size = {16} onClick ={() => setActive1(!active1)} />
                       </Head>
                       {
                           active1 &&
                           <Fade clear>
                                <Des>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                           </Des>
                           </Fade>
                          
                       }

                   </Card>
                   <Subcard height = {map2} area = "#e6ffea" shadow = "#CCFCD4">
                       <Head onClick ={() => setMap2(!map2)}>
                            Transport
                        <Fi orientation = {map2} size = {16} onClick ={() => setMap2(!map2)} />
                       </Head>
                       {
                           map2 &&
                          
                                <Des2>
                               <MapContainer r = {r2} />

                           </Des2>
                           
                          
                       }

                   </Subcard>
                   <Card height = {active2} area = "#fab9b9" shadow = "#FC9C9C">
                   <Head onClick ={() => setActive2(!active2)}>
                        Warehouse (Gurgaon)
                        <Fi orientation = {active2} size = {16} onClick ={() => setActive2(!active2)} />
                       </Head>
                       {
                           active2 &&
                           <Fade clear>
                                <Des>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                           </Des>
                           </Fade>
                          
                       }

                   </Card>

               </Description>
               
        </Container>
    );
}


const Container = styled.main`
    width:100%; 
    display: flex ; 
    flex-direction : row ;
    justify-content: space-evenly;
    padding-top:5%;
    margin-top:-0.8%;
    background:rgb(245,245,245);
    
    transition:all 0.5s;
    
    @media (max-width:500px){
       margin-top:-2.5%;
    }
`;

const Timeline = styled.div`
    display:flex;
    flex-direction :column ; 
    width : 20% ; 
    align-items: center;
    justify-content:center;
    line-height:1;
   
    
`;

const Description = styled.div`
    display:flex; 
    flex-direction :column; 
    width: 70% ;
    margin-left:-6%;
    justify-content:space-around;

    @media (max-width:500px){
        justify-content:space-evenly;
    }
    

`; 

const Dispatched = styled.h2`
    font-weight: 400; 
    font-size: 12px;
    margin-top:-2%;
    @media (max-width : 500px) {
        font-size: 8px;
    }
`;

const Arrived = styled.h2`
    font-weight: 400; 
    font-size: 12px;
    margin-top:-2%;
    @media (max-width : 500px) {
        font-size: 8px;
    }
`;
const Text = styled.p`
    font-weight:400 ;
    color : gray;
    font-size:10px;
    @media (max-width: 500px) {
        font-size: 6px;
    }
`;

const Circle = styled.div`
    width: 20px ;
    border-radius:50px; 
    height: 20px; 
    background : ${props =>props.back};
   
`;

const Line = styled.div`
    width: 2px ;
    height : ${props =>props.height ? '65vh' : '50vh'};
    background: gainsboro;
    transition:all 0.5s;
    @media (max-width:500px){
        height: ${props => props.height ? '35vh': '30vh'};
    }
`;

const Card = styled.div`
    width:80%;
    height: ${props =>props.height ? '27vh' : '20px'};
    background:${props =>props.area};   
    border-radius:10px;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    display:flex;
    padding:5%;
    transition:all 0.5s;
    box-shadow: 3px 3px 6px ${props =>props.shadow};
    @media (width:768px){
        height:${props =>props.height ? '28vh': '10vh'};
    }
    @media (max-width:500px){
        height: ${props =>props.height ? '27vh' : '6vh'};
    }
    @media (max-width:330px){

    }

`;
const Subcard =styled.div`
    width:80%;
    height: ${props => props.height ? '35vh' : '5vh' };
    background:${props => props.area};
    border-radius:10px;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    display:flex;
    padding:3% 5%;
    transition:all 0.5s;
    box-shadow: 3px 3px 6px ${props =>props.shadow};
    
    @media (max-width:500px)
    {
        height: ${props => props.height ? '20vh' : '4vh'};
    }

`;

const Head = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:100%;
    font-weight:600;
    margin-top:-1%;
    letter-spacing:0.5px;
    cursor:pointer;
    @media (max-width:500px){
        font-size:12px;
    }
    @media (max-width:400px){
        font-size:11px;
    }
    
`;

const Des = styled.p`
    transition:all 0.8s ease-in;
    text-align:justify;
    font-size:14px;
    @media (max-width:800px){
        font-size:10px;
    }
    @media (max-width:500px){
        font-size:9px;
    }
    @media (max-width:400px){
        font-size:8px;
    }
    
`;
const Des2 = styled.div``;
const Fi = styled(FiChevronDown)`
    transform:${props =>props.orientation ? 'rotate(180deg)': ''};
`;
