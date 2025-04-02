import React from "react";

function MovieCard({
  movieObj,
  poster_Path,
  name,
  addToWatchList,
  removeFromWatchList,
  watchList,
}) {

  function doesContain(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].Title == movieObj.Title) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[70vh] w-[260px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 cursor-pointer relative"
      style={{ backgroundImage: `url(${poster_Path})` }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => removeFromWatchList(movieObj)}
          className=" flex justify-center items-center absolute right-px m-4 h-8 w-8 rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => addToWatchList(movieObj)}
          className=" flex justify-center items-center absolute right-px m-4 h-8 w-8 rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="text-white rounded-xl text-xl w-full text-center absolute bottom-0 pb-5 bg-gray-900/60 ">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
