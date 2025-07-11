import {React, useState, useEffect} from 'react'
import {FaExclamation} from 'react-icons/fa'


export default function ResetData({setIsReset}) {

    const okayHandler = (e) => {
        document.getElementById('set_clear').click()
        setIsReset(false)
    }
    
    const nvmHandler = (e) => {
        setIsReset(false)
    }
    
  return (
        <div className="fixed inset-0 flex w-full items-center justify-center  z-50 ml-[2%]">
        <div className="bg-gray-100 drop-shadow-2xl rounded-xl border-[5px] border-[#70AA9B] text-black overflow-y-auto p-6 w-[25%] h-[50%]">
            <div className="grid grid-rows-2 grid-cols-1 w-full h-3/4 overflow-x-hidden">
                <div className="grid grid-rows-1 grid-cols-2 w-[70%]">
                    <div className="bg-[#70AA9B] w-48 h-16 rounded-br-lg z-8">
                        <div className="float-left pl-4 pt-4 text-2xl font-bold text-white">Reset Data</div>
                    </div>  
                    <div className="ml-[165%] mt-[10%]">
                        <FaExclamation className="text-5xl text-[#75a3cc]"/>
                    </div>   
                </div>

                <div className="grid grid-rows-3 place-items-center gap-y-8 px-32">
                <div>
                    <span className="font-bold text-center">
                    Proceeding will reset all currently displayed employee data. Continue?
                    </span>
                </div>

                <div className="flex gap-12 mt-12">
                    <button
                    className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg h-8 w-16"
                    onClick={() => okayHandler()}
                    >
                    Okay
                    </button>
                    <button
                    className="bg-gray-400 text-white hover:bg-gray-500 rounded-lg h-8 w-24"
                    onClick={() => nvmHandler()}
                    >
                    Nevermind
                    </button>
                </div>

                <div className="text-red-400">
                    {/* error message here if needed */}
                </div>
                </div>

            </div>
        </div> 
    </div>
  );
}