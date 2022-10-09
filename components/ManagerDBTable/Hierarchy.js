
import {React, useState} from 'react'
import {FaSitemap, FaRegCaretSquareDown} from 'react-icons/fa'
import  HierarchyProcess from '../../utils/helpers/HierarchyProcess'
import { MutatingDots } from 'react-loader-spinner'

export default function Hierarchy({setIsHierarchy, setHierarchyStart,  Employee}) {
    const [ChiefMap, setChiefMap] = useState(false)
    const [PrinMap, setPrinMap] = useState(false)
    const [STEMap, setSTEMap] = useState(false)

    const [ChiefData, setChiefData] = useState([])
    const [STEData, setSTEData] = useState([])

    const [PrevChiefTarget, setPrevChiefTarget] = useState(null)
    const [PrevSTETarget, setPrevSTETarget] = useState(null)
    const [Employees, setEmployees] = useState(Employee)
    const [Loading, setLoading] = useState(false)


    const selectedTextDeputy = {
        textA: "cursor-pointer text-blue-400",
        textB: "font-bold text-red-400 cursor-pointer",
    }

    const [DeputyText, setDeputyText] = useState(selectedTextDeputy.textA)
    
    const selectedTextPrincipal = {
        textA: "ml-2 cursor-pointer text-blue-400",
        textB: "ml-2 font-bold text-yellow-400 cursor-pointer",
    }

    const selectedTextChief = {
        textA: "ml-2 cursor-pointer text-blue-400",
        textB: "ml-2 font-bold text-green-400 cursor-pointer",
    }


    var ste = []
    var chief = []
    var principal = []

    for(let i=0; i < Employees[0].principals.length; i++){
        for(let j=0; j < Employees[0].principals[i].chiefs.length; j++){

                for(let l=0; l < Employees[0].principals[i].chiefs[j].stes[0].ste_name.length; l++){
            
                var ste_data = {
                    name: Employees[0].principals[i].chiefs[j].stes[0].ste_name[l],
                    }
                ste.push(ste_data)
            }

            var chief_data = {
               name: Employees[0].principals[i].chiefs[j].chief_name,
               children : ste,
            }
            chief.push(chief_data)
        }
        var principal_data = {
            name: Employees[0].principals[i].prin_name,
            children: chief,
        }
    
        principal.push(principal_data)
    }

   const togglePrinMap = (e) => {

    setPrinMap(!PrinMap)

    if(ChiefMap){
        setChiefMap(false)
        setSTEMap(false)
    }

    if(e.target.className == selectedTextDeputy.textB){
        setDeputyText(selectedTextDeputy.textA)
    }else{
        setDeputyText(selectedTextDeputy.textB)
    }
   }

   const toggleChiefMap = (data, e) => {

    if(PrevSTETarget){

        PrevSTETarget.target.className = selectedTextChief.textA
    }

    if(PrevChiefTarget != null){
        if(e.target.className == selectedTextPrincipal.textB){
            setChiefMap(false)
            setChiefData(null)
            setPrevChiefTarget(null)
            e.target.className = selectedTextPrincipal.textA
            return
        }else{
            PrevChiefTarget.target.className = selectedTextPrincipal.textA
        setChiefMap(false)
        }
   }

    setChiefMap(true)
    setChiefData(data)

    if(STEMap){
        setSTEMap(false)
    }

    if(e.target.className == selectedTextPrincipal.textB){
        e.target.className = selectedTextPrincipal.textA
    }else{
        e.target.className = selectedTextPrincipal.textB
        
    }

    setPrevChiefTarget(e)
   }

   const toggleSTEMap = (data, e) => {
    if(PrevSTETarget != null){
        if(e.target.className == selectedTextChief.textB){
            setSTEMap(false)
            setSTEData(null)
            setPrevSTETarget(null)
            e.target.className = selectedTextChief.textA
            return false
        }else{
            PrevSTETarget.target.className = selectedTextChief.textA
        setSTEMap(false)
        }
   }

    setSTEMap(true)
    setSTEData(data)

    if(e.target.className == selectedTextChief.textB){
        e.target.className = selectedTextChief.textA
    }else{
        e.target.className = selectedTextChief.textB
    }

    setPrevSTETarget(e)
   }

   const getEmployees = (district)=> {
    setLoading(true)
    fetch("/ManagerDB/api/managers/", {
        method: "GET",
      }).then((res) => {
        res.json().then((data) => {
    
          setEmployees(HierarchyProcess(data, district))
          setPrinMap(false)
          setChiefMap(false)
          setSTEMap(false)
          setDeputyText(selectedTextDeputy.textA)
      }).then(()=>{
        setLoading(false)
      })
    })
   }

   const closeHandler = () => {

    setIsHierarchy(false)
    setHierarchyStart(false)

   }

  return (
    <div>
        <div className="flex w-[40rem] h-[54rem] bg-gray-100 drop-shadow-2xl rounded-xl rounded-tl-[4px] border-[5px] border-[#70AA9B] text-black overflow-y-auto mb-[10%]">
            <div className="grid grid-rows-2 grid-cols-1 h-[100%]">
                <div className="grid grid-rows-1 grid-cols-2">
                    <div className="bg-[#70AA9B] w-48 h-16 rounded-br-lg z-8">
                        <div className="float-left pl-4 pt-4 text-2xl font-bold text-white">Hierarchy</div>
                        <FaRegCaretSquareDown className="fixed text-md  text-gray-300 ml-[22%] mt-[3.25rem] pointer-events-none"/> 
                        <select className="px-3 text-xl ml-[10%] mt-[20%] w-36 border rounded h-10  shadow appearance-none mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => getEmployees(e.target.value)} id="managerName" >
                            <option value="01">District 01</option>
                            <option value="02">District 02</option>
                            <option value="03">District 03</option>
                            <option value="04">District 04</option>
                            <option value="05">District 05</option>
                            <option value="06">District 06</option>
                            <option value="07">District 07</option>
                            <option value="08">District 08</option>
                            <option value="09">District 09</option>
                            <option value="10">District 10</option>
                            <option value="11">District 11</option>
                            <option value="11">District 12</option>
                        </select>        
                    </div>  
                    <div className="ml-[165%] mt-[10%]">
                        <FaSitemap className="text-5xl text-[#75a3cc]"/>
                    </div>   
                </div>
                {Employees[0].deputy_name ?
                <div className="fixed text-center w-full mt-[25%]">Click an employee to expand the tree</div>: null}

                {Loading ?  
                            <div className="fixed grid place-content-center ml-[42%] mt-[50%]">
                            <div>
                                <MutatingDots
                                    height = "120"
                                    width = "120"
                                    radius = "16"
                                    color = '#70AA9B'
                                    secondaryColor= '#70AA9B'
                                    ariaLabel = "mutating-dots-loading"     
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                /> 
                            </div>
                        </div> 
                :  
                    <div className="ml-[10%] mt-[35%] fixed">
                        {Employees[0].deputy_name ?
                    <div className="mt-2">
                        <h1 className="underline text-black font-bold">Deputy</h1>
                        <h1 className={DeputyText} onClick={(e)=>togglePrinMap(e)}>{Employees[0].deputy_name}, #{Employees[0].deputy_efis}</h1>
                    </div>: <h1 className="mt-[30%] ml-6 w-full text-center italic">Error loading employee data. Please contact customer support.</h1>}

                    {PrinMap ? 
                        <div className="mt-2 ml-5 border-l-2 border-x-0 border-r-0"><h1 className="underline ml-2 text-black font-bold">Principal</h1>
                        <h1>{Employees[0].principals.map((principal, index) => {
                        return(
                            <h1 className={selectedTextPrincipal.textA} onClick={(e)=>toggleChiefMap(Employees[0].principals[index], e)}>{Employees[0].principals[index].prin_name}, #{Employees[0].principals[index].prin_efis}</h1>    
                        )
                    })}</h1></div>: null}

                    {PrinMap && ChiefMap ? 
                        <div className="mt-2 ml-10 border-l-2 border-x-0 border-r-0">
                            <h1 className="underline ml-2 text-black font-bold">Chief</h1>
                            <h1>{ChiefData.chiefs.map((chief, index) => {
                                return(
                                    <div> 
                                        {ChiefData.chiefs[index] != "" ?
                                            <h1 className={selectedTextChief.textA} onClick={(e)=>toggleSTEMap(ChiefData.chiefs[index], e)}>{ChiefData.chiefs[index].chief_name}, #{ChiefData.chiefs[index].chief_efis}</h1>:
                                            <h1 className="ml-2 italic">No Chiefs Assigned</h1>
                                        }
                                    </div>

                                )
                    })}</h1></div>:null}

                    {PrinMap && ChiefMap && STEMap ? 
                        <div className="mt-2 ml-16 border-l-2 border-x-0 border-r-0">
                            <h1 className="underline ml-2 text-black font-bold">STE</h1>
                         
                            <h1>{STEData.stes.map((ste, index) => {
                                return(
                                    <div>
                                        {STEData.stes[index].ste_name != "" ?
                                            STEData.stes[index].ste_name.map((ste_name, index2) => {
                                                return( 
                                                    <h1 className="ml-2">{STEData.stes[index].ste_name[index2]}, #{STEData.stes[index].ste_efis[index2]}</h1> 
                                                )
                                            }): 
                                            <h1 className="ml-2 italic">No STEs Assigned</h1>}
                                    </div>
                                )
                    })}</h1></div>:null}
                    <div className="h-12"></div>
                </div>
                }

                <div className="w-[100%] ml-[33%] text-center mt-[100%] mb-[2%] bottom-0">
                    <span onClick={()=>closeHandler()} className="cursor-pointer h-full underline">Close</span>
                </div>
            </div>
        </div> 
    </div>


  );
}