import './App.css';
import {
  BrowserRouter,
  Routes,
  Route

} from 'react-router-dom'

import Login from './views/Login';
import Profile from './views/Profile';
import Translate from './views/Translate';

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
