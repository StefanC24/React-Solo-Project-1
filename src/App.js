import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import MovieList from './components/movies list/MovieList';
import Navbar from './components/navbar/Navbar';
import MostRecentList from './components/navbar/navLinks/mostRecent/MostRecentList';
import TopRatedList from './components/navbar/navLinks/topRated/TopRatedList';
import Home from './components/navbar/navLinks/Home';
import MovieDetails from './components/movie details/MovieDetails'
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<MovieList/>} />
          <Route path='movie/:id' element={<MovieDetails/>} />
          {/* TODO: this import here is not needed */}
          <Route path='/' element={<Home />} />
          <Route path='top-rated-movies' element={<TopRatedList />} />
          <Route path='most-recent' element={<MostRecentList />} />
          <Route path='*' element={<Navigate to='/movie' replace/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
