import React , {useState , useEffect} from "react";
import "./trace.scss";
import Header from "./Header.js";
import Main from "./Main.js";
import Journey from "./Journey.js";
import Facts from "./Facts.js";
import GetDate from "./Date.js";
import {getReport} from "../api/misc.js";
import Alert from '@material-ui/lab/Alert';
import Loading from "../components/Loading.js";

export default function Trace({ location }) {
  const [startDate, setStartDate] = useState(new Date());
  const [isA2, setIsA2] = useState(true);
  const [data ,setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [load ,setLoad] = useState(false);

  useEffect(() =>{
    console.log(load);
  },[load])
  useEffect(() => {
    document.title = "Go4Life - Trace Your Milk"
    let {search} = location;
    search = new URLSearchParams(search);
    const reportDate = search.get('report_date');
    if(!reportDate)
    return
    const date = new Date(reportDate);
    
    const type = search.get('milk_type');
    
    
    setStartDate(date);
    setIsA2(type === "a2" ? true : false);
  }, [location]);

  useEffect(() => {
  
    async function getData() {
      try {
        setLoading(true);
        const response = await getReport("a2", startDate);
        setData(response.data);
        setLoading(false);
      }
      catch (err) {
        console.log(err);
        setData(null);
        setLoading(false);
      }
    }
    getData();
  }, [startDate, isA2]);

  console.log(data);

  return (
    <div className="trace" style={{backgroundColor: '#fdfdfd'}}>
      <Header />
      <GetDate startDate = {startDate} setStartDate ={setStartDate} isA2 = {isA2} setIsA2 = {setIsA2}/>
      {loading ? 
        <Loading /> :
        <div>
        {data ? 
          <>
            <Main data= {data} load = {load} setLoad = {setLoad} />
            <Journey data = {data} />
            <Facts data= {data}  />
          </>
          :
          <div className="flex center">
            <Alert severity="error" variant="outlined">
              Sorry, we didn't find any report for that date.
            </Alert>
          </div>
        }
      </div>
    }
      
    </div>
  );
}
