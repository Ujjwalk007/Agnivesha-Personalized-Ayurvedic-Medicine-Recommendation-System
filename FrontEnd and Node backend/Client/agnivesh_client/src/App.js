
import './App.css';
import Header from './Header';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './home';


function App() {
  return (

    <BrowserRouter>

    <div className="App">

      
      <Header/>

      <Routes>

          <Route path='/' element={<Home/>}></Route>



      </Routes>


      
      
    </div>

    </BrowserRouter>    
  );
}

export default App;
