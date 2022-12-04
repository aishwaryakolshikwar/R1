import { BrowserRouter as Router,Routes,Route, Link, } from 'react-router-dom';

import { HomePage,CounterButtonPage, PeopleListPage ,NotFound,h } from './pages';
import './App.css';
import React from 'react';




function App() {
 
  return (
    <div className="App">
      <Router>
      <Link to="/counter"> Go to Counter Page</Link>
        <Link  to="/people-list"> Go to PeopleList Page</Link>
        
        <Routes>
      <Route Path="/" element={<HomePage />} />
       <Route Path='/counter:name' element={<CounterButtonPage />}/>
       <Route Path='/people-list' element={<PeopleListPage />}/>
       <Route Path='/h' element={<h />}/>
       <Route element={<NotFound/>}/>
      </Routes>
        
      </Router>
    
    </div>
  );
}

export default App;
