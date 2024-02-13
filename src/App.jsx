import SearchBar from './Components/SearchBar'
import {  Route, Router, Switch } from 'react-router-dom'
import './App.css'
import Recipe from './Components/Recipe'


function App() {


  return (
    <>

    <Router>
      <Switch>
      <Route path='/' exact Component={SearchBar}/>
      <Route path='/Recipe' Component={Recipe} />
      </Switch>
    </Router>
    </>
  )
}

export default App
