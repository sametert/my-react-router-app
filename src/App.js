import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Users from './Routes/Users';
import Features from './Routes/Features';
import ShowUsersPage from './Layouts/ShowUsersPage';
import HomePage from './Layouts/HomePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

            <Route path='/' element={<HomePage />}>
                <Route index element={<Home />}></Route>
                <Route path='features' element={<Features/>}></Route>
            </Route>

            <Route path='show' element={<ShowUsersPage/>}> 
              <Route index element={<Users/>}></Route>
            </Route>

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
