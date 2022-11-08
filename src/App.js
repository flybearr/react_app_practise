import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Ajax from './pages/ajax';
import Tmp from './pages/tmp';
import Navbar from './component/navbar';
import Login from './pages/login';
import {ThemeContextProvider} from './context/context';

function App() {
  
  return (
  
    <BrowserRouter>
      <ThemeContextProvider>
    <Navbar />
      <Routes>
        <Route path='/' element={<Ajax />}/>
        <Route path='/list' element={<Ajax />}/>
        <Route path='/tmp/:sid' element={<Tmp />}/>
        <Route path='/tmp' element={<Tmp />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
   
  );
}

export default App;
