import styled from 'styled-components';
import { useState , useEffect} from 'react';
import getReport from '../api/main';
import Content from '../components/content';
import moment from 'moment';
import Header from '../components/header';
import Slider from '../components/slider';
import Nutrition from '../components/nutrition';
import MapContainer from '../components/MapContainer';
import Pdf from '../components/pdf';
import Datepicker from '../components/datepicker/Datepicker';
import config from '../../config';
const {POUCH_MILK_EXPIRY_DAYS_DIFF} = config
const r = [{
    origin: { lat: 27.93415776638459, lng: 76.85305579301976 },
    destination: { lat: 28.99584804395379, lng: 77.00556672616105 },
    color: '#FCC888',
  
  },  {origin: { lat: 28.99584804395379, lng: 77.00556672616105 },
  destination: { lat: 28.447943760858596, lng:77.08380978717815 },
    color: '#CCFCD4',
  }];

export default function Pouches({location}){
    let { search } = location;
    search = new URLSearchParams(search);
    const pack = search.get('package');
    const [startDate, setStartDate] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isA2 , setIsA2] = useState(true);
    const [change , setChange] = useState(0);
    const onChange = (e) => {
        console.log(e.target.value)
        setStartDate(moment(e.target.value).format('YYYY-MM-DD'));
    }
    console.log(startDate);
    
    useEffect(() => {
        async function getData() {
            try {
                setLoading(true);
                const response = await getReport(
                    pack, 
                    moment(startDate).subtract(POUCH_MILK_EXPIRY_DAYS_DIFF, 'days').format('YYYY-MM-DD')
                );
                setData(response.data);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setData(null);
                setLoading(false);
            }
        }
        getData();
    }, [startDate, pack]);
    return(
        <Container>
            <Header data = {data} />
            <Date>
                <p>Enter Expiry date of Milk</p>
                <Datepicker 
                    stateDate={startDate}
                    onChange = {onChange}
                />
            </Date>    
           
               
                      <MapContainer r ={r} />
                 <Slider setChange = {setChange}  change = {change}/>
                 {
                     data && change == 0 &&
                     <Content data = {data} isA2 ={isA2} />
                 }
                 {
                     data && change == 1 &&
                     <Nutrition data = {data}/>
                 }
                 {
                     data && change == 2 &&
                     <Pdf data = {data} />
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
const Date = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;