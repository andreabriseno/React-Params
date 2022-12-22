import './App.css';
import Home from './components/Home';

import Word from './components/Word';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path='/:word' element={<Word/>}/>
          <Route path='/:word/:color/:bgCol' element={<Word/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
