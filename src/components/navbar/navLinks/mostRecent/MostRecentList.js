import { useState, useEffect } from "react";
import axios from "axios";
import MostRecentCard from "./MostRecentCard";

function MostRecentList(){

    const [mostRecentFilm, setMostRecentFilm] = useState();    

    // Great setup to order the most recent films
    const fetchMostRecent = () => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=dc0fb7b28045cd04916b73e857aec4f9')
            .then(response => {
                const sortedResults = response.data.results.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
                const slicedResults = sortedResults.slice(-10);
                setMostRecentFilm(slicedResults.reverse());
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchMostRecent()
    });

    return(
        <div className="movies-container">
            <h1 className="header">Most recent films</h1>
            <div className="cards-container">
               {mostRecentFilm?.map(item => <MostRecentCard {...item} />)}
            </div>
        </div>
    )

}
export default MostRecentList