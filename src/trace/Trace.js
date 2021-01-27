import React , {useState , useEffect} from "react";
import "./trace.scss";
import Header from "./header.js";
import {location ,search} from "react-router";
import Main from "./Main.js";
import moment from "moment";
import Journey from "./Journey.js";
import Facts from "./Facts.js";
import GetDate from "./getDate.js";
import {getReport} from "../api/misc.js";
import Loading from "../components/Loading.js";

export default function Trace({ location }) {
  const [startDate, setStartDate] = useState(new Date());
  const [isA2, setIsA2] = useState(true);
  const [data ,setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let {search} = location;
    search = new URLSearchParams(search);
    const date = new Date(search.get('report_date'));
    const type = search.get('milk_type');
    setStartDate(date);
    setIsA2(type === "a2" ? true : false);
  }, [location]);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await getReport(isA2 ? "a2" :"b2" , startDate);
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

  return (
    <div className="trace">
      <Header />
      <GetDate startDate = {startDate} setStartDate ={setStartDate} isA2 = {isA2} setIsA2 = {setIsA2}/>
      {loading && <Loading />}
      {!data && <p>Record Not Found</p>}
      {data &&
        <>
          <Main data= {data}  />
          <Journey data = {data} />
          <Facts data= {data}  />
        </>
      }
    </div>
  );
}
