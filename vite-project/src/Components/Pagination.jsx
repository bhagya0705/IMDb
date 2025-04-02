import React from 'react'

function Pagination({pageNo,handleNext, handlePrev}) {
  return (
    <div className="bg-gray-900/60 m-8 p-2 flex justify-center text-white text-center hover:cursor-pointer">
        <div className='px-8' onClick={handlePrev}><i class="fa-solid fa-arrow-left"></i></div>
        <div>{pageNo}</div>
        <div className='px-8' onClick={handleNext}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination