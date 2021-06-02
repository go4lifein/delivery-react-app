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
import config from '../config'
const {POUCH_MILK_EXPIRY_DAYS_DIFF} = config

export default function Tracemilk({ location, ...props }) {
  const [startDate, setStartDate] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

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
        const response = await getReport(
          pack, 
          moment(startDate).subtract(POUCH_MILK_EXPIRY_DAYS_DIFF, 'days').format('YYYY-MM-DD')
        );
        setData(response.data);
        setLoading(false);
        setError(null)
      } catch (err) {
        console.log(err);
        if(err?.response?.status === 404) {
          setError(`No report found for expiry date ${moment(startDate).format('DD MMM YYYY')}`)
        } else {
          setError(err.response ? err.response.data : err.message)
        }
        setData(null);
        setLoading(false);
      }
    }
    getData();
  }, [startDate, pack]);

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
                        <Main data={data} load={load} setLoad={setLoad} bmcLocation={'Rohtak'} />
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

// BMC - Rohtak - For new variants
// For all - Pasteurized at Sonipat