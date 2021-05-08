import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from "@material-ui/lab";
import moment from 'moment-timezone';
import Header from "./header.js"
import Main from "./Main.js"
import Journey from "./Journey.js"
import Facts from "./Facts.js"
import { getReport } from "../api/misc"
import Loading from "../components/Loading"
import Datepicker from "./Datepicker.js"
import "./trace.scss"

export default function Tracemilk({ location, ...props }) {
  const [startDate, setStartDate] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  // let { search } = location;
  const {pouch: pack} = useParams();

  const onChange = (e) => {
    console.log(e.target.value)
    setStartDate(moment(e.target.value).format('YYYY-MM-DD'));
  }
  console.log(startDate);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await getReport(pack, moment(startDate).subtract(3, 'days').format('YYYY-MM-DD'));
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err.response ? err.response.data : err.message)
        setData(null);
        setLoading(false);
      }
    }
    getData();
  }, [startDate]);

  return (
    <div className="trace">

      <Header />

      <p className="exp">Enter Expiry Date of Milk</p>
      <Datepicker
        startDate={startDate}
        onChange={onChange}
      />
      {
        error && startDate ?
        <div className="p-10">
          <Alert severity="error" >{error}</Alert>
        </div> :
        <>
        {
          startDate &&
          <div>
            {
              loading ?
                <Loading />
                :
                <div>
                  {
                    data && startDate ?
                      <>
                        <Main data={data} load={load} setLoad={setLoad} />
                        <Journey data={data} />
                        <Facts data={data} />
                      </>
                      :
                      <p className="not-found">
                        Record Not Found
                      </p>
                  }
                </div>
            }
          </div>
        }
        </>
      }
    </div>
  );
}