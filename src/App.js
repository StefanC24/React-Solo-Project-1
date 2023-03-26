import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import MovieList from './components/movies list/MovieList';
import Navbar from './components/navbar/Navbar';
import MostRecent from './components/navbar/navLinks/MostRecent';
import Rating from './components/navbar/navLinks/Rating';
import Home from './components/navbar/navLinks/Home';
import MovieDetails from './components/movie details/MovieDetails'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<MovieList/>} />
          <Route path='movie/:id' element={<MovieDetails/>} />
          <Route path='/' element={<Home />} />
          <Route path='rating' element={<Rating />} />
          <Route path='most-recent' element={<MostRecent />} />
          <Route path='*' element={<Navigate to='/movie' replace/>} />
        </Routes>
    </div>
  );
}

export default App;
