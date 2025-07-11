import {React} from 'react'
import {FaExclamation} from 'react-icons/fa'


export default function ClearChanges({setIsChange}) {

    const okayHandler = (e) => {
        document.getElementById('activate_change').click()
        setIsChange(false)
    }
    
    const nvmHandler = (e) => {
        setIsChange(false)
    }
    
    return (
        <div className="fixed inset-0 flex w-full items-center justify-center  z-50 ml-[2%]">
            <div className="bg-gray-100 drop-shadow-2xl rounded-xl border-[5px] border-[#70AA9B] text-black overflow-y-auto overflow-x-hidden p-6 w-[25%] h-[50%]">
                <div className="grid grid-rows-2 grid-cols-1 h-3/4">
                    <div className="grid grid-rows-1 grid-cols-2 w-[70%]">
                        <div className="bg-[#70AA9B] w-48 h-16 rounded-br-lg z-8">
                            <div className="float-left pl-4 pt-4 text-2xl font-bold text-white">Clear Changes</div>
                        </div>  
                        <div className="ml-[165%] mt-[10%]">
                            <FaExclamation className="text-5xl text-[#75a3cc]"/>
                        </div>   
                    </div>
                    <div className="grid grid-rows-3 place-items-center gap-y-8 px-32">
                        <div>
                            <span className="font-bold">Proceeding will clear any recent changes. Continue?</span>
                        </div>

                        <div className="grid grid-cols-2  w-[100%]">
                            <button className="bg-[#c6c6c6] text-white bg-blue-500 hover:bg-blue-600 rounded-lg ml-[16%] h-8 w-16" onClick={()=>okayHandler()}>Okay</button>
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