
import './App.css';
import Header from './Header';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './home';
import ContextState from './context/contextstate';
import DiseaseSelection from './recommendation/DiseaseSelection'
import Upchar from './recommendation/recommendation';


function App() {
  return (

    <ContextState>
    <BrowserRouter>

    <div className="App">

      
      <Header/>

      <Routes>

          <Route path='/' element={<Home/>}></Route>
          <Route path='/Dselect' element={<DiseaseSelection/>}></Route>
          <Route path='/upchar' element={<Upchar/>}></Route>



      </Routes>


      
      
    </div>

    </BrowserRouter>    
    </ContextState>
  );
}

export default App;
