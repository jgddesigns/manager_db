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
<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 ml-[2%]">
  <div className="w-[40rem] h-[28rem] bg-gray-100 drop-shadow-2xl rounded-xl border-[5px] border-[#70AA9B] text-black overflow-y-auto p-6">
 
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
        <div className="bg-[#70AA9B] w-48 h-24 rounded-br-lg flex items-center pl-4">
            <span className="text-2xl font-bold text-white">Confirm Changes</span>
        </div>
        <FaQuestionCircle className="text-5xl text-[#75a3cc]" />
        </div>

        {/* Confirmation Message and Buttons */}
        <div className="flex flex-col items-center justify-center flex-1 gap-8">
        <span className="font-bold text-center">
            Are you sure you want to save changes to this employee?
        </span>

        <div className="flex gap-8">
            <button
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg h-8 w-16"
            onClick={() => okayHandler()}
            >
            Okay
            </button>
            <button
            className="bg-gray-400 hover:bg-gray-500 text-white rounded-lg h-8 w-24"
            onClick={() => nvmHandler()}
            >
            Nevermind
            </button>
        </div>

        <div className="text-red-400 text-sm text-center">
            {/* Optional: validation message */}
        </div>
        </div>
    </div>
    </div>
  );
}