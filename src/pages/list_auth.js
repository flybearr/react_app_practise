import {useState,useEffect,useContext} from 'react';
import { Link,useLocation } from 'react-router-dom';
import axios from 'axios';
import {ab_list,sinder_host,ab_list_auth}  from '../config/index.js'
import List from '../component/list';
import Pagination from "../component/pagination";
import AuthContext from '../context/Authcontext';

function List_auth() {
  const [data,setData] = useState({
    "totalRows": 0,
    "totalPages": 0,
    "perPage": 0,
    "page": 1,
    rows: []
  });

  const location  =useLocation();
  const {myAuth} = useContext(AuthContext);
  const usp = new URLSearchParams(location.search)

  async function getData (){
    if(!myAuth.authorised){
      return{
        "totalRows": 0,
    "totalPages": 0,
    "perPage": 0,
    "page": 1,
    rows: []
      }
    }
    
    
    const r = await axios.get(ab_list_auth + `?` + usp.toString(),{
      headers:{
        Authorization: 'Bearer ' + myAuth.token
      }
    });
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

export default List_auth;
