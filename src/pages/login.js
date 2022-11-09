import {useContext, useState} from 'react';
import axios from 'axios';
import {LOGIN_API} from '../config'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/Authcontext';

function Login() {
const navigate = useNavigate();
const {setMyAuth} = useContext(AuthContext);
  const [formData,setFormData] = useState({
    account:'',
    password:'',
  });
  
  const handler = e=>{
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    setFormData({...formData,[id]:val})
  };
  
  const mySubmit = async (e)=>{
    e.preventDefault();
   const {data} = await  axios.post(LOGIN_API,formData)
   console.log(data);
   if(data.success){
    localStorage.setItem('auth', JSON.stringify(data.auth) );
    alert('登入成功');
    setMyAuth({...data.auth,authorised:true});
    navigate('/');

  } else {
    localStorage.removeItem('auth'); // 移除
    alert('登入失敗');
  }
  }

    return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-4">
                    <form onSubmit={mySubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">account</label>
                    <input type="text" className="form-control" id="account" onChange={handler} value={formData.account}/>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"  onChange={handler} value={formData.password}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>  
        </div>
    </div>
    </>
  );
}
export default Login;