import styled from 'styled-components';
import moment from 'moment';
import { useState } from 'react';
import {FiChevronDown} from 'react-icons/fi';
import Fade from 'react-reveal';
import MapContainer from './maps/MapContainer';
import bmc from '../assets/bmc.png';
import plant from '../assets/plant.png';
import warehouse from '../assets/warehouse.png';

const r1  = { 
    origin: { lat:28.91536608519116, lng:76.63487196009729 },
    destination: { lat: 28.99584804395379, lng: 77.00556672616105 },
    color: '#000',
    startIcon:bmc,
    endIcon: plant,

}
const r2 = {
    origin: { lat: 28.99584804395379, lng: 77.00556672616105 },
  destination: { lat: 28.447943760858596, lng:77.08380978717815 },
    color: '#000',
    startIcon:plant,
    endIcon:warehouse,
}
export default function Content({data }){
    const [active , setActive ] = useState(false);
    const [active1, setActive1 ] = useState(false);
    const [active2, setActive2 ] = useState(false);
    const [active4 , setActive4 ] = useState(false);
    const [active5 ,setActive5] = useState(false);
    const location  = "BMC (Rohtak)";

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
                        {location}
                        <Fi orientation = {active} size = {16} onClick ={() => setActives()} />
                       </Head>
                       {
                           active &&
                           <Fade clear>
                                <Des>
                                Milk is collected from our farmer network in {location}. Testing of FAT, SNF & CLR is done at the time of collection itself. The milk is then chilled in a Bulk Milk Chiller (BMC) at 4°C and sent to the plant. Utmost care is taken to ensure proper hygiene while collecting the milk from farmers and then transferring it from BMC to a tanker.
                           </Des>
                           </Fade>
                          
                       }

                   </Card>
                   <Subcard height = {active} area = "#F7DEBE" shadow = "#FCC888">
                       <Head onClick ={() => setActive(!active)}>
                            Transportation from : BMC(Tijara) to Plant(Sonipat)
                        <Fi orientation = {active} size = {16} onClick ={() => setActive(!active)} />
                       </Head>
                       {
                           active &&
                          
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
                            The raw milk arrives at the packaging plant in insulated road tankers. The milk is kept well chilled, free from air and treated as gently as possible. Here , the milk is pasteurized at 85℃ and tested for quality on 35 parameters. Milk is then kept in chillers for incubation process.
                            </Des>
                           </Fade>
                          
                       }

                   </Card>
                   <Subcard2 height = {active4} area = "#e6ffea" shadow ="#CCFCD4">
                        <Head onClick = {() => setActive4(!active4)}>
                            Incubation
                            <Fi orientation = {active4} size = {16} onClick ={() =>setActive4(!active4)} />
                        </Head>
                        {
                            active4 &&
                            <Fade clear>
                                <Des>
                                After pasteurisation, culture is inoculated in the milk. It is then incubated at 37℃ for 10-12 hours and then stored at 5℃. Once done, pure unadulterated curd is ready. It is then churned to make butter milk and then packed in pouches carrying QR codes which have the data of the entire supply chain and lab test report.
                                </Des>
                            </Fade>
                        }
                    </Subcard2>
                  
                   <Subcard height = {active1} area = "#e6ffea" shadow = "#CCFCD4">
                       <Head onClick ={() => setActive1(!active1)}>
                            Transportation from : Plant(Sonipat) to Warehouse(Gurgaon)
                        <Fi orientation = {active1} size = {16} onClick ={() => setActive1(!active1)} />
                       </Head>
                       {
                           active1 &&
                          
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
                                Once the milk is packed, it is transported to dispatch hubs in refrigerated vehicles at 4℃. From here the milk gets dispatched to your home or the nearest retail store.
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
const Subline = styled.div`
    width:2px;
    height: ${props =>props.height? '35vh' : '25vh'};
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
        height:${props =>props.height ? '20vh': '10vh'};
    }
    @media (max-width:500px){
        height: ${props =>props.height ? '22vh' : '6vh'};
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
        height: ${props => props.height ? '24vh' : '8vh'};
    }

`;
const Subcard2 =styled.div`
    width:80%;
    height: ${props => props.height ? '20vh' : '6vh' };
    background:${props => props.area};
    border-radius:10px;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    display:flex;
    padding:3% 5%;
    transition:all 0.5s;
    box-shadow: 3px 3px 6px ${props =>props.shadow};
    @media (max-width:800px){
        height: ${props => props.height ? '18vh' : '5vh'};
    }
    @media (max-width:500px)
    {
        height: ${props => props.height ? '18vh' : '4vh'};
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
