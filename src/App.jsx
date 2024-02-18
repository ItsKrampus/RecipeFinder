import SearchBar from './Components/SearchBar';
import Recipe from './Components/Recipe';
import Navbar from './Components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import './App.css';

function App() {
  return (
    <>
    <CssBaseline/>
      <Router>
        <Routes>
          <Route path='/' element={[<Navbar/>, <SearchBar />]} />
          <Route path='/Recipe/:id' element={[<Navbar/>, <Recipe />]} />
        </Routes>
      </Router>
    </>
  );
}

export default App;