import {FaBug} from 'react-icons/fa'


export default function BugReport ({setIsBugReport}) {


const handleReport = () => {

    alert("test handle")

}


return (

    <div>
        <div className="flex w-[28rem] h-[35rem] bg-gray-100 drop-shadow-2xl rounded-xl border-4 border-[#70AA9B] text-black">
            <div className="grid grid-rows-4 grid-cols-1 w-full h-full">
                <div className="grid grid-rows-1 grid-cols-2">
                    <div className="bg-[#70AA9B] w-48 h-16 rounded-br-lg">
                        <div className="float-left pl-4 pt-4 text-2xl font-bold text-white">Bug Report</div>
                    </div>  
                    <div className="ml-[65%] mt-[10%]"><FaBug className="text-3xl text-[#75a3cc]"/>
                    </div>   
                </div>
                <div className="grid grid-rows-4">    
                    <div className="float-left ml-[15%] font-bold">
                        <div>Issue:</div>
                    </div>
                    <div className="float-left ml-[13%]">
                        <textarea className="w-[85%] h-48 border-2 rounded border-gray-500 resize-none p-2" placeholder="Please describe the problem..."></textarea>
                    </div>
                </div>
                <div className="mt-[20%]">
                  <button className="bg-blue-800 rounded-lg float-right mr-[15%] mt-4 py-1 px-2 text-white font-bold cursor-pointer" onClick={() => handleReport()}>Submit</button>
                </div>
                <div className="float-right text-center mt-[20%]">
                        <span onClick={()=>setIsBugReport(false)} className="cursor-pointer underline">Cancel</span>
                </div>
            </div>
        </div>
    </div>

)
}



