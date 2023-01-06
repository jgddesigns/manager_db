import {React, useState, useEffect} from 'react'
import {FaExclamation} from 'react-icons/fa'


export default function ClearEmployee({isClear, setIsClear}) {

    const okayHandler = (e) => {
        document.getElementById('activate_clear').click()
        setIsClear(false)
    }
    
    const nvmHandler = (e) => {
        setIsClear(false)
    }
    
  return (
    <div>
        <div className="flex w-[40rem] h-[28rem] bg-gray-100 drop-shadow-2xl rounded-xl rounded-tl-[4px] border-[5px] border-[#70AA9B] mb-[10%]  text-black overflow-y-auto">
            <div className="grid grid-rows-2 grid-cols-1 h-[100%]">
                <div className="grid grid-rows-1 grid-cols-2">
                    <div className="bg-[#70AA9B] w-48 h-16 rounded-br-lg z-8">
                        <div className="float-left pl-4 pt-4 text-2xl font-bold text-white">Empty Data</div>
                    </div>  
                    <div className="ml-[165%] mt-[10%]">
                        <FaExclamation className="text-5xl text-[#75a3cc]"/>
                    </div>   
                </div>
                <div className="grid grid-rows-8 gap-y-8 ml-[45%] w-72 mt-[-20%]">
                    <div>
                        <span className="font-bold">Warning! This will erase the current selected employee from all areas they are present within the database, continue?</span>

                    </div>

                    <div className="grid grid-cols-2  w-[100%]">
                        <button className="bg-[#c6c6c6] text-white bg-red-500 hover:bg-red-600 rounded-lg ml-[16%] h-8 w-16" onClick={()=>okayHandler()}>Okay</button>
                        <button className="bg-[#c6c6c6] text-white bg-gray-400 hover:bg-gray-500 rounded-lg h-8 w-24" onClick={()=>nvmHandler()}>Nevermind</button>
                    </div>

                    <div className="w-[100%] ml-[28%] text-red-400">

                    </div>
                </div>
            </div>
        </div> 
    </div>
  );
}