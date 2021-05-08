
import React , {useState , useEffect} from "react";
import "./trace.scss";
import Header from "./header.js";
import Main from "./Main_Batch.js";
import Journey from "./Journey.js";
import Facts from "./Facts.js";
import {getBatchMilkReport} from "../api/misc.js";
import Loading from "../components/Loading.js";
import { Alert } from "@material-ui/lab";

export default function Trace({ location }) {
  const [batch, setBatch] = useState('');
  const [data ,setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    document.title = "Go4Life - Trace Your Milk"
    let {search} = location;
    search = new URLSearchParams(search);
    
    const batch = search.get('batchNo');
    if(!batch) {
      // setError("Please provide batch number");
      return;
    }
    setBatch(batch);
  }, [location]);

  useEffect(() => {
  
    async function getData() {
      try {
        setLoading(true);
        const response = await getBatchMilkReport(batch);
        setData(response.data);
        setLoading(false);
        setError(null)
      }
      catch (err) {
        console.log(err);
        setData(null);
        setError(err.response ? err.response.data : err.message)
        setLoading(false);
      }
    }
    getData();
    
  }, [batch]);

  return (
    <div className="trace">
      <Header />
        <div className="p-10 flex center">
          <input 
            value={batch}
            placeholder="Batch number" 
            onChange={e => setBatch(e.target.value)} 
            style={{padding: 10, maxWidth: 200}} 
          />
        </div>
      {
        error ?
        <div className="p-10">
          <Alert severity="error" >{error}</Alert>
        </div> :
        <>
          {loading ?
            <Loading /> :
            <>
              
              {!data && <p className = "not-found">Record Not Found</p>}
              {data && 
                <>
                  <Main data= {data} />
                  <Journey data = {data} />
                  <Facts data= {data}  />
                </>
              }
            </>
          }
        </>
      }
    </div>
  );
}
