import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import MovieList from './components/MovieList/MovieList';
import Navbar from './components/navbar/Navbar';
import MostRecentList from './components/navLinks/mostRecent/MostRecentList';
import TopRatedList from './components/navLinks/topRated/TopRatedList';
import MovieDetails from './components/MovieDetails/MovieDetails'
import Footer from './components/footer/Footer';

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
