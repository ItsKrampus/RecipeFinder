import SearchBar from './Components/SearchBar';
import Recipe from './Components/Recipe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SearchBar />} />
          <Route path='/Recipe/:id' element={<Recipe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;