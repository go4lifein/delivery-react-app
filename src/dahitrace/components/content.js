import styled from 'styled-components';
import moment from 'moment';
import { useState } from 'react';
import {FiChevronDown} from 'react-icons/fi';
import Fade from 'react-reveal';
import MapContainers from './MapContainer2';

const r1  = {
    origin: { lat: 28.99584804395379, lng: 77.00556672616105 },
     destination: { lat: 28.447943760858596, lng:77.08380978717815 },
    color: '#CCFCD4',
};
export default function Content({data }){
    const [active , setActive ] = useState(false);
    const [active1, setActive1 ] = useState(false);
    const [active2, setActive2 ] = useState(false);
    const [active4 , setActive4 ] = useState(false);
    const [active5, setActive5 ] = useState(false);
    const [active6, setActive6 ] = useState(false);

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
                    Procress started at
                </Text>
                <Arrived>
                    {moment.utc(data.plant_receive).add(4 ,"hours").format("hh:mm A")}
                </Arrived>
               <Subline height = {active4}/>
               <Text>Process Finished at</Text>
               <Arrived>
                   {moment.utc(data.plant_receive).add(5, "hours").format("hh:mm A")}
               </Arrived>
               <Circle back = "#CCFCD4" />
                    <Text>
                        Packaging started at
                    </Text>
                    <Arrived>
                        {moment.utc(data.plant_receive).add(330 ,"minutes").format("hh:mm A")}
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
                   <Card height = {active1} area = "#e6ffea" shadow = "#CCFCD4">
                   <Head onClick ={() => setActive1(!active1)}>
                        Pasteurizing and Packaging (Sonipat)
                        <Fi orientation= {active1} size = {16} onClick ={() => setActive1(!active1)} />
                       </Head>
                       {
                           active1 &&
                           <Fade clear>
                                <Des>
                             Lorem ipsum dolor sit amet, consectetur    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                           </Des>
                           </Fade>
                          
                       }

                   </Card>
                    <Subcard height = {active4} area = "#e6ffea" shadow ="#CCFCD4">
                        <Head onClick = {() => setActive4(!active4)}>
                            Dahi Fermentation
                            <Fi orientation = {active4} size = {16} onClick ={() =>setActive4(!active4)} />
                        </Head>
                        {
                            active4 &&
                            <Fade clear>
                                <Des>
                                Lorem ipsum dolor sit amet, consectetur    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </Des>
                            </Fade>
                        }
                    </Subcard>
                    <Subcard height = {active5} area = "#e6ffea" shadow ="#CCFCD4">
                        <Head onClick = {() => setActive5(!active5)}>
                            Dahi Packaging
                            <Fi orientation = {active5} size = {16} onClick ={() =>setActive5(!active5)} />
                        </Head>
                        {
                            active5 &&
                            <Fade clear>
                                <Des>
                                Lorem ipsum dolor sit amet, consectetur    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </Des>
                            </Fade>
                        }
                    </Subcard>
                   {/* <Card height = {active6} area = "#e6ffea" shadow = "#CCFCD5">
                        <Head onClick= {() => setActive6(!active6)}>
                            Transport
                            
                        <Fi orientation = {active6} size = {16} onClick ={() =>setActive6(!active6)} />
                        </Head>
                        
                        {
                            active6 &&
                            <Fade clear>
                                <MapContainers r = {r1}/>
                            </Fade>
                        }

                    </Card>
                    */}

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
    height : ${props =>props.height ? '45vh' : '35vh'};
    background: gainsboro;
    transition:all 0.5s;
    @media (max-width:500px){
        height: ${props => props.height ? '35vh': '20vh'};
    }
`;

const Subline = styled.div`
    width:2px;
    height: ${props =>props.height? '20vh' : '10vh'};
    background:gainsboro;
    transition:all 0.5s;

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
    height: ${props => props.height ? '18vh' : '5vh' };
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
    @media (max-width:1100px){
        font-size:11px;
    }
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
const Fi = styled(FiChevronDown)`
    transform:${props =>props.orientation ? 'rotate(180deg)': ''};
`;
