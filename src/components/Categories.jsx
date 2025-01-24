import React from 'react'

function Categories() {
  return (
    <div>
      <>  
      <div className="relative flex items-center text-zinc-800 gap-1 w-full py-2">
        <div className="h-[1px] w-full bg-zinc-300 "></div>
        <p className=" absolute left-[50%] translate-x-[-50%] px-2 bg-white"> </p>
      </div>
      <div className="flex justify-between">
      <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-2 text-xl items-center">
            <div className="h-full w-5 rounded bg-red-600"></div>
            <p className="p-2 text-red-600 text-sm">Categories</p>
          </div>
      </div>
      </div>
      
      

      </>
    </div>
  )
}

export default Categories