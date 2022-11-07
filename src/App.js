import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Ajax from './pages/ajax';
import Tmp from './pages/tmp';
import Navbar from './component/navbar';

function App() {
  
  return (
  
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Ajax />}/>
        <Route path='/list' element={<Ajax />}/>
        <Route path='/tmp/:sid' element={<Tmp />}/>
        <Route path='/tmp' element={<Tmp />}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
