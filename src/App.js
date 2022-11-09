import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Ajax from './pages/ajax';
import Tmp from './pages/tmp';
import Navbar from './component/navbar';
import Login from './pages/login';
import Mycontext from './context/Mycontext'
import List_auth from './pages/list_auth';

function App() {
  
  return (
  
    <BrowserRouter>
      <Mycontext>
    <Navbar />
      <Routes>
        <Route path='/' element={<Ajax />}/>
        <Route path='/list' element={<Ajax />}/>
        <Route path='/list-auth' element={<List_auth />}/>
        <Route path='/tmp/:sid' element={<Tmp />}/>
        <Route path='/tmp' element={<Tmp />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      </Mycontext>
    </BrowserRouter>
   
  );
}

export default App;
