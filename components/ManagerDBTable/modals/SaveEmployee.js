import {React, useState, useEffect} from 'react'
import {FaQuestionCircle} from 'react-icons/fa'
import  InsertProcess from '../../../utils/helpers/InsertProcess'
import  InsertDataProcess from '../../../utils/helpers/InsertDataProcess'
import { Circles } from 'react-loader-spinner'
import SelectedEmployee from '../SelectedEmployee'


export default function SaveEmployee({setIsSave}) {

    const okayHandler = (e) => {
        document.getElementById('activate_save').click()
        setIsSave(false)
    }
    
    const nvmHandler = (e) => {
        setIsSave(false)
    }
    
  return (
    <div>
        <div className="flex w-[40rem] h-[28rem] bg-gray-100 drop-shadow-2xl rounded-xl rounded-tl-[4px] border-[5px] border-[#70AA9B] mb-[10%]  text-black overflow-y-auto">
            <div className="grid grid-rows-2 grid-cols-1 h-[100%]">
                <div className="grid grid-rows-1 grid-cols-2">
                    <div className="bg-[#70AA9B] w-48 h-24 rounded-br-lg z-8">
                        <div className="float-left pl-4 pt-4 text-2xl font-bold text-white">Confirm Changes</div>
                    </div>  
                    <div className="ml-[165%] mt-[10%]">
                        <FaQuestionCircle className="text-5xl text-[#75a3cc]"/>
                    </div>   
                </div>
                <div className="grid grid-rows-8 gap-y-8 ml-[50%] w-72 mt-[-15%]">
                    <div>
                        <span className="font-bold">Are you sure you want to save changes to this employee?</span>

                    </div>

                    <div className="grid grid-cols-2  w-[100%] mr-12">
                        <button className="bg-[#c6c6c6] text-white bg-blue-500 hover:bg-blue-600 rounded-lg h-8 w-16" onClick={()=>okayHandler()}>Okay</button>
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