

import Index from './pages/Index/Index';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Info from './pages/Info/Info';
import Filter from './pages/Filter/Filter';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Home/>
          }></Route>
          <Route path='/Index' element={<Index/>}></Route>
          <Route path='/Info' element={<Info/>}></Route>
          <Route path='/Filter' element={<Filter/>}></Route>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
