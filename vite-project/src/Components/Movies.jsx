import React from "react";
import MovieCard from "./MovieCard";
import { useState,useEffect } from "react";
import axios from 'axios'
import Pagination from "./Pagination";
const Movies = ({watchlist,setWatchList}) => {

    const[movies, setMovies]=useState([])
    const[pageNo, setPageNo]=useState(1)
  


    function handlePrev(){
        if(pageNo===1){
            setPageNo(1)
        }
        else{
            setPageNo(pageNo-1)
        }
    }

    function handleNext(){
        setPageNo(pageNo+1)
        }

    useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?s=action&apikey=edfc5e6&page=${pageNo}`).then(function(res){
           console.log(res.data.Search)
           setMovies(res.data.Search)
        })
        .catch((err)=>{
            console.log('error')
        })

        let moviesfromStorage= localStorage.getItem('moviesApp')
        if(!moviesfromStorage){
          return 
        }
        setWatchList(JSON.parse(moviesfromStorage))
    }, [pageNo])


    function addToWatchList(movieObj){
      let newWatchList=[...watchlist,movieObj]
      localStorage.setItem('moviesApp',JSON.stringify(newWatchList))
      setWatchList(newWatchList)
      console.log(newWatchList)
    }

    function removeFromWatchList(movieObj){
      let filteredWatchList=watchlist.filter((movie)=>{
        return movie.Title!==movieObj.Title
      })

      localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList)); 
      setWatchList(filteredWatchList);
      console.log(filteredWatchList);
    }



  return (
    <div className="p-2">
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>

      <div className='flex flex-wrap justify-around gap-8'>
        {movies.map((movieObj,index)=>{
            return <MovieCard movieObj={movieObj} poster_Path={movieObj.Poster} name={movieObj.Title} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList} watchList={watchlist}  />
        })}

      </div>

      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>

    </div>
  );
};

export default Movies;
