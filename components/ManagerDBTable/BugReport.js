import {useState} from 'react'
import {FaBug} from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import { ThreeDots} from 'react-loader-spinner'
import 'react-toastify/dist/ReactToastify.css'

export default function BugReport ({user, setIsBugReport}) {
    const styling = {
        submit_default: "bg-gray-500 rounded-lg float-right mr-[15%] mt-4 py-1 px-2 text-white font-bold disabled",
        submit_ready: "bg-blue-800 rounded-lg float-right mr-[15%] mt-4 py-1 px-2 text-white font-bold cursor-pointer" , 
    }

    const [ReportText, setReportText] = useState('')
    const [LoadingGraphic, setLoadingGraphic] = useState(false)
    const [Priority, setPriority] = useState('Low')
    const [SubmitStyling, setSubmitStyling] = useState(styling.submit_default)
    const [IsText, setIsText] = useState(false)






    const handleReport = () => {
        const data = {
            emp_num: user.userid,
            application: "Manager DB",
            page: "ManagerDB",
            priority: Priority,
            task_description: ReportText,
        }
        setLoadingGraphic(true)
        fetch("/ManagerDB/api/tasks/", {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            
            res.json().then((data) => {
                console.log(JSON.stringify(data))
                setIsBugReport(false)  
                setLoadingGraphic(false) 
            });
        })
    }

    const textHandler = (val) => {
        if(val.length>0){
            setIsText(true)
            setSubmitStyling(styling.submit_ready)
        }else{
            setIsText(false)
            setSubmitStyling(styling.submit_default)
        }
            setReportText(val)
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
                            <textarea className="w-[85%] h-48 border-2 rounded border-gray-500 resize-none p-2" placeholder="Please describe the problem..." onChange={(e)=>textHandler(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="grid grid-rows-2 gap-2 w-72 ml-[15%] mt-[30%]">
                            <div className="font-bold">
                                Priority:
                            </div>
                            <div className="mt-[5%]" onChange={(e) => setPriority(e.target.value)}>
                                <input type="radio" id="high" name="priority" value="High" className="mt-2"/>
                                <label for="high" className="ml-2">High</label>
                                <input type="radio" id="medium" name="priority" value="Medium" className="ml-2 mt-2"/>
                                <label for="medium" className="ml-2">Medium</label>
                                <input type="radio" id="low" name="priority" value="Low" className="ml-2 mt-2" defaultChecked/>
                                <label for="low" className="ml-2" >Low</label>
                            </div>
                    </div>
                    <div className="mt-[15%]">
                        <button className={SubmitStyling} onClick={() => handleReport()} disabled={!IsText?"true":""}>Submit</button>
                        {LoadingGraphic ?
                            <div className="ml-[70%] mt-12 py-1 px-2">
                                <ThreeDots
                                    height = "40"
                                    width = "40"
                                    radius = "6"
                                    color = '#70AA9B'
                                    ariaLabel = 'three-dots-loading'     
                                    wrapperStyle
                                    wrapperClass
                                /> 
                            </div>
                        :null}
                    </div>
                    <div className="float-right text-center mt-[5%] mb-[2%]">
                            <span onClick={()=>setIsBugReport(false)} className="cursor-pointer underline">Cancel</span>
                    </div>
                </div>
            </div> 
        </div>
    )
}



