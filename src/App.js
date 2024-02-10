import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Addpost from './components/Addpost';
import Viewpost from './components/Viewpost';

function App() {
  return (
    <div>
      
        <BrowserRouter>
        
            <Routes>

                <Route path='/' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/addpost' element={<Addpost/>} />
                <Route path='/viewpost' element={<Viewpost/>} />

            </Routes>

        </BrowserRouter>

    </div>
  );
}

export default App;
