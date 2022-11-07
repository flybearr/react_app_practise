import {useState,useEffect} from 'react';
import { Link,useLocation } from 'react-router-dom';
import axios from 'axios';
import {ab_list,sinder_host}  from '../config/index.js'
import List from '../component/list';
import Pagination from "../component/pagination";

function Ajax() {
  const [data,setData] = useState({
    "totalRows": 0,
    "totalPages": 0,
    "perPage": 0,
    "page": 1,
    rows: []
  });

  const location  =useLocation();
  const usp = new URLSearchParams(location.search)

  async function getData (){
    const r = await axios.get(`${ab_list}?${usp.toString()} `);
    const response = r.data
    setData(response);
  }

  useEffect(()=>{
    getData();
  },[location])

  return (
    
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Pagination page={data.page} totalPage={data.totalPages}/>
        </div>
      </div>
      <List rows={data.rows}/>
    </div>
  );
}

export default Ajax;
