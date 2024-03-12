import SearchBar from './Components/SearchBar';
import Recipe from './Components/Recipe';
import Navbar from './Components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Favorites from './Components/Favorites';
import './App.css';
import { createContext, useState} from 'react';

export const Context=createContext()

function App() {

  const [favorites,setFavorites]=useState([])

  return (
    <>
    <CssBaseline/>
      <Router>
      <Context.Provider value={[favorites,setFavorites]}>
        <Routes>
          <Route path='/' element={[<Navbar/>, <SearchBar />]} />
          <Route path='/favorites' element={[<Navbar/>, <Favorites />]} />
          <Route path='/Recipe/:id' element={[<Navbar/>, <Recipe />]} />
        </Routes>
        </Context.Provider>
      </Router>
    </>
  );
}

export default App;