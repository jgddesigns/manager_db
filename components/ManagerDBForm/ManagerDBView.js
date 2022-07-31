import {setState, useState, useEffect} from 'react'
import EmployeeDisplay from '../Employees/functions/EmployeeDisplay'



export default function ManagerDBView({searchResults}) {
  const results = Object.values(searchResults)

  const [employeeName, setEmployeeName] = useState([])
  const [employeeEFIS, setEmployeeEFIS] = useState([])

  const setEmployeeData = (name, efis) => {
    setEmployeeName(name)
    setEmployeeEFIS(efis)
  }

  useEffect(() => {
    if(employeeName!=''){
      EmployeeDisplay(employeeName, employeeEFIS)
      console.log("employee name:" + employeeName +  " efis:" + employeeEFIS)
      setEmployeeData("", "")
    }
  }, [employeeName])

  var name_heading = ""
  var efis_heading = ""
  var role_heading = ""
  var district_heading = ""
  var retrieved_message = "Enter employee information above to make changes."

 if(document.getElementById("search_input")){
  if(document.getElementById("search_input").value == ""){
    retrieved_message = "Enter employee information above to make changes."
    document.getElementById('display_row').hidden = true;
  }else{
    retrieved_message = "No results found."
  }
 }
 if(results[0] != ""){
  name_heading = "Name"
  efis_heading = "EFIS"
  role_heading = "Role"
  district_heading = "District"
  if(document.getElementById("retrieved_message")){
    document.getElementById("retrieved_message").hidden = true;
  }
  if(document.getElementById("employee_info")){
    document.getElementById("employee_info").hidden = true;
  }
 }
 else{
  document.getElementById("retrieved_message").hidden = false;
 }

 var rows = [];

 if(results[0]){
  for(var i = 0; i < results[0].length; i++){
    rows.push(<div className="grid grid-rows-1 grid-flow-col gap-4 ml-4" key={i}><div className="w-60"><button className="underline text-blue-600" onClick={() => setEmployeeData(results[0][i],results[2][i])}>{results[0][i]}</button></div><div className="w-36"><button>{results[1][i]}</button></div><div className="w-32"><button>{results[2][i]}</button></div><div><button>{results[3][i]}</button></div></div>)
  }
 }
  return (
    <div className="h-[36rem] max-h-[36rem] p-2 w-[44rem] rounded bg-[#70AA9B]">
      <div className="text-white text-2xl pb-2">Retrieved Information:</div>
      <div className="bg-white text-black rounded w-128 max-w-128 h-[32rem] pt-8 ">
      <div id="retrieved_message" className="mt-48 text-center">{retrieved_message}</div>

      <div id="employee_info" className="mt-16 text-center"></div>

      <div id ="display_row" hidden></div>

      {/* /* <EmployeeDisplay employeeName={employeeName} employeeEFIS={employeeEFIS}/> */ }

      <div className="grid grid-cols-4 max-h-[28rem] overflow-auto">
          <div className="ml-4 w-80" id="info_row">
            <div className="grid grid-rows-1 grid-flow-col gap-4 ml-4">
              <div className="font-bold w-60">{name_heading}</div>
              <div className="font-bold w-36">{role_heading}</div>
              <div className="font-bold w-32">{efis_heading}</div>
              <div className="font-bold">{district_heading}</div>
            </div>
            {rows}
          </div>
      </div>
    </div>

    <div className="text-center p-6">
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 rounded m-2 w-auto h-10" onClick={submitEdits}>Submit Edits</button>
    </div>

    </div>
  )
}


const submitEdits = () => {

  console.log("Submit Edits button clicked.")
  
}


