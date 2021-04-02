import './App.css';
import React, {useState} from 'react';
import MyNavbar from './Components/Navbar/Nav'
import TrailerCard from './Components/TrailerCard/TrailerCard'
import MovieList from './Components/MovieList/MovieList'
import Add from './Components/Add/Add';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



function App() {
let moviesData = [
  {
  id:1,
  title: "Titanic",
  description:
      "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
  posterUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
  type: "Romance",
  rate: 4,
  trailer: <iframe width="560" height="315" src="https://www.youtube.com/embed/kVrqfYjkTdQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  },
  {
  id:2,
  title: "The Notebook",
  description:
      "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
  posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_UX182_CR0,0,182,268_AL_.jpg",
  type: "Romance",
  rate: 3,
  trailer:<iframe width="560" height="315" src="https://www.youtube.com/embed/yDJIcYE32NU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ,
 },
  {
    id:3,
  title: "Avengers: Endgame",
  description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
  posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  type: "Sci-Fi",
  rate: 5,
  trailer: <iframe width="560" height="315" src="https://www.youtube.com/embed/TcMBFSGVi1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  },
  {
    id:4,
  title: "Harry Potter",
  description:
      "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
  posterUrl:
      "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg",
  type: "Sci-Fi",
  rate: 5,
  trailer: <iframe width="560" height="315" src="https://www.youtube.com/embed/VyHV0BRtdxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  },
  {
    id:5,
  title: "The Conjuring",
  description:
      "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
  posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  type: "Horror",
  rate: 2,
  trailer: <iframe width="560" height="315" src="https://www.youtube.com/embed/k10ETZ41q5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  },
  {
    id:6,
  title: "The Exorsist",
  description:
      "When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.",
  posterUrl:
      "https://m.media-amazon.com/images/M/MV5BYjhmMGMxZDYtMTkyNy00YWVmLTgyYmUtYTU3ZjcwNTBjN2I1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  type: "Horror",
  rate: 4,
  trailer: <iframe width="560" height="315" src="https://www.youtube.com/embed/YDGw1MTEe9k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  },
  {
    id:7,
  title: "Identity Thief",
  description:
      "Mild mannered businessman Sandy Patterson travels from Denver to Florida to confront the deceptively harmless looking woman who has been living it up after stealing Sandy's identity.",
  posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY3NzM5MTk2Nl5BMl5BanBnXkFtZTcwMDQ4MjQ3OA@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  type: "Comedy",
  rate: 1,
  trailer: <iframe width="560" height="315" src="https://www.youtube.com/embed/uO12W35DpsQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  },
  {
    id:8,
  title: "We're The Millers",
  description:
      "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
  posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMjA5Njc0NDUxNV5BMl5BanBnXkFtZTcwMjYzNzU1OQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  type: "Comedy",
  rate: 2,
  trailer: <iframe width="560" height="315" src="https://www.youtube.com/embed/0Vsy5KzsieQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  },
  {
    id:9,
  title: "The Fast And The Furious",
  description:
      "Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy.",
  posterUrl:
      "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
  type: "Action",
  rate: 4,
  trailer: <iframe width="560" height="315" src="https://www.youtube.com/embed/2TAOizOnNPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  },
  {
      id:10,
      title: "John Wick",
      description:
          "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
      posterUrl:
          "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
      type: "Action",
      rate: 2,
      trailer: <iframe width="560" height="315" src="https://www.youtube.com/embed/2AUmvWm5ZDQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      },
  {
      id:11,
  title: "The Wolf Of Wall Street",
  description:
      "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
  posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
  type: "Drama",
  rate: 5,
  trailer: <iframe width="560" height="315" src="https://www.youtube.com/embed/iszwuX1AK6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  },
  
  {
    id:12,
  title: "Gone Girl",
  description:
      "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
  posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
  type: "Drama",
  rate: 2,
  trailer: <iframe width="560" height="315" src="https://www.youtube.com/embed/2-_-1nJf8Vg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  },
  {
    id:13,
  title: "Big Hero 6",
  description:
      "A special bond develops between plus-sized inflatable robot Baymax and prodigy Hiro Hamada, who together team up with a group of friends to form a band of high-tech heroes.",
  posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_UY268_CR3,0,182,268_AL_.jpg",
  type: "Cartoon",
  rate: 5,
  trailer: <iframe width="560" height="315" src="https://www.youtube.com/embed/z3biFxZIJOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  },
  {
    id:14,
  title: "Despicable Me",
  description:
      "When a criminal mastermind uses a trio of orphan girls as pawns for a grand scheme, he finds their love is profoundly changing him for the better.",
  posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  type: "Cartoon",
  rate: 4,
  trailer: <iframe width="560" height="315" src="https://www.youtube.com/embed/zzCZ1W_CUoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  },
  ];
const [movies, setMovies]= useState (moviesData)
const getNewMovie = (newMovie) => { setMovies([...movies, newMovie]) }

const [rateSearch, setRateSearch ] = useState (0);
const getRateSearch = (inputRate) => {setRateSearch(inputRate) }

const [titleSearch, setTitleSearch]= useState ("")
const getTitleSearch = (inputtitle)=> {setTitleSearch (inputtitle)}

  return (
    <div className="whole">
    <BrowserRouter>
    <MyNavbar getRateSearch={getRateSearch} getTitleSearch={getTitleSearch} />
    
     
    <Switch>
    <Route exact ={true} path="/">  
    <h1 style={{textAlign: 'center', color: 'blue'}} > Welcome to the Movie App </h1>
    </Route>
    <Route exact={true}  path="/movies"> 
    <div className="addMovieButton"> <Add getNewMovie={getNewMovie} /> </div> 
    <MovieList myMovies={movies} rateSearch={rateSearch} titleSearch={titleSearch}   /> 
    </Route>
    <Route path="/trailer/:id">  
    <TrailerCard movie={movies}/>
    </Route>

    </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App;













