import styled from 'styled-components';
import { useState , useEffect } from 'react';
import getReport from '../api/main';
import Content from '../components/content';
import Header from '../components/header';
import Slider from '../components/slider';
import Nutrition from '../components/nutrition';
import MapContainer from '../components/MapContainer';

export default function Index({location}){
    const [startDate , setStartDate] = useState(new Date());
    const [isA2 , setIsA2] = useState(true);
    const [data , setData] = useState(null); 
    const [change , setChange] = useState(0);
    
   useEffect(() =>{
        document.title = "Go4Life - Trace Your Milk";
        console.log(location);
        let {search} = location ; 
        search = new URLSearchParams(search);
        const reportDate = search.get('report_date');
        if(!reportDate)
        return 
        const date = new Date(reportDate);
        const type = search.get('milk_type');  
        setStartDate(date);
        setIsA2(type === "a2" ? true : false);

   },[location]);

    useEffect(() =>{
        async function getData(){
            try { 
                console.log()
                const response = await getReport("a2" , startDate) ; 
                setData(response.data);
                console.log(response.data);

            }
            catch(err){
                console.log(err)
            }
        }
        getData();

    },[startDate]);
return(
    <Container>
        <Header  data = {data}/>
        <MapContainer />
        <Slider setChange = {setChange}  change = {change}/>
        {
            data && change == 0 &&
            <Content data = {data} isA2 ={isA2} />
        }
        {
            data && change == 1 &&
            <Nutrition data = {data}/>
        }

    </Container>
);
}

const Container = styled.main`
    display:flex;
    width:100%;
    height:100vh;
    flex-direction:column;
    justify-content:flex-start;
    position:relative;
    align-items:center;
    font-family:'Circular-Std';
    background: rgb(251,251,251);
    overflow-x:hidden;
`;