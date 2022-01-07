import './App.css';
import {
  BrowserRouter,
  Routes,
  Route

} from 'react-router-dom'

import Login from './views/login';
import Profile from './views/profile';
import Translate from './views/translate';

function App() {
  
/*  console.log(
    process.env.REACT_APP_API_KEY
  )
  */
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
