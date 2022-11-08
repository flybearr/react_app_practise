import {useState} from 'react';
import axios from 'axios';
import {LOGIN_API} from '../config'
function Login() {
  const [formData,setFormData] = useState({
    account:'',
    password:'',
  });
  
  const handler = e=>{
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    setFormData({...formData,[id]:val})
  }
  const mySubmit = async (e)=>{
    e.preventDefault();
   const {response} = await  axios.post('http://192.168.35.150:3001/login-api',formData)
   console.log(response);
   if(response.success){
    localStorage.setItem('auth', JSON.stringify(response.auth) );
    alert('登入成功');

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