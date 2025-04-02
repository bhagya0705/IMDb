import React from 'react'
import { useState } from 'react'

const WatchList = ({watchList,setWatchList}) => {

    const[search, setSearch]=useState('')

    function handleSearch(e){
        setSearch(e.target.value)
    }

    let sortIncreasing=()=>{
        let sortedIncreasing= watchList.sort((movieA,movieB)=>{
            return parseInt(movieA.Year) - parseInt(movieB.Year);
        })

        setWatchList([...sortedIncreasing])
    }

    let sortDecreasing=()=>{
        let sortedDecreasing= watchList.sort((movieA,movieB)=>{
            return parseInt(movieB.Year) - parseInt(movieA.Year);
        })

        setWatchList([...sortedDecreasing])
    }

    function removeFromWatchList(movieObj){
        let filteredWatchList=watchList.filter((movie)=>{
          return movie.Title!==movieObj.Title
        })
  
        localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList)); 
        setWatchList(filteredWatchList);
        console.log(filteredWatchList);
      }

  return (
    <>

    <div className='flex justify-center m-4 gap-4'>
        <div className='h-[3rem] w-[9rem] flex justify-center items-center bg-blue-400 rounded-xl text-white font-bold '>Action</div>
        <div className='h-[3rem] w-[9rem] flex justify-center items-center bg-blue-400 rounded-xl text-white font-bold '>Action</div>
    </div>
    <div className="flex justify-center my-4">
        <input type="text" onChange={handleSearch} value={search} placeholder="Search Movies" className=' h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none'></input>
    </div>

    <div className='border border-gray-200 m-8'>
        <table className='w-full text-gray-500'>
        <thead className='border border-gray-300'>
            <tr>
                <th>Name</th>
                <th>Rating</th>
                <th className='flex justify-center items-center gap-4'>
                    <i onClick={sortDecreasing} class="fa-solid fa-arrow-up"></i>
                    <div>Year</div>
                    <i onClick={sortIncreasing} class="fa-solid fa-arrow-down"></i>
                </th>
                <th>Genre</th>
            </tr>
        </thead>

        <tbody>

            {watchList.filter((movieObj)=>{
                return movieObj.Title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((movieObj)=>{
                return <tr className='border-b-2 '>
                <td className='flex items-center px-2 py-4'>
                    <img  className='h-[6rem] w-[8rem]' src={`${movieObj.Poster}`}></img>
                    <div className='mx-20'>{movieObj.Title}</div>
                </td>

                <td>8.5</td>
                <td>{movieObj.Year}</td>
                <td>Action</td>
                <td><button className='text-red-800' onClick={()=>removeFromWatchList(movieObj)}>Delete</button></td>
            </tr>
            })}

         </tbody>
        
        </table>
    </div>
    </>
  )
}

export default WatchList