import {setState, useState, useEffect} from 'react'
import EmployeeDisplay from '../Employees/functions/EmployeeDisplay'



export default function ManagerDBView(props) {
  const results = Object.values(props.searchResults)
  const [displayNameHeading, setDisplayNameHeading] = useState([])
  const [displayRoleHeading, setDisplayRoleHeading] = useState([])
  const [displayEFISHeading, setDisplayEFISHeading] = useState([])
  const [displayDistrictHeading, setDisplayDistrictHeading] = useState([])
  const [displayRetrievedHeading, setDisplayRetrievedHeading] = useState(["Enter employee information above to make changes."])


  const setEmployeeData = (name, role, efis, district) => {
    props.setEmployeeName(name)
    props.setEmployeeRole(role)
    props.setEmployeeEFIS(efis)
    props.setEmployeeDistrict(district)
  }
  
  const changeScreen = (name, role, efis, district) => {
    setEmployeeData(name, role, efis, district)
    props.setSearchResults("")
    setDisplayNameHeading("")
    setDisplayRoleHeading("")
    setDisplayEFISHeading("")
    setDisplayDistrictHeading("")
  }


  const createEmployeeList = (data) => {
    var employeeList = []

    for(var i = 0; i < data[0].length; i++){
      employeeList.push(<div className="grid grid-rows-1 grid-flow-col gap-4 ml-4" key={i}><div className="w-60"><button className="underline text-blue-600" onClick={() => changeScreen(data[0][i], data[1][i], data[2][i], data[3][i])}>{data[0][i]}</button></div><div className="w-36"><button>{data[1][i]}</button></div><div className="w-32"><button>{data[2][i]}</button></div><div><button>{data[3][i]}</button></div></div>)
    }

    return employeeList
  }


  const submitEdits = () => {
    console.log("Submit Edits button clicked.")
  }


  useEffect(() => {

    if(results[0] != ""){
        setDisplayRetrievedHeading("")
      }else{
        setDisplayRetrievedHeading("Enter employee information above to make changes.")
      }
    
    if((results[0] != "") && (props.employeeName == "")){
      setDisplayNameHeading("Name")
      setDisplayRoleHeading("Role")
      setDisplayEFISHeading("EFIS")
      setDisplayDistrictHeading("District")
      setDisplayRetrievedHeading("")
    }
    
    if((results[0] == "") && (props.employeeName == "")){
      setDisplayNameHeading("")
      setDisplayRoleHeading("")
      setDisplayEFISHeading("")
      setDisplayDistrictHeading("")
    }

    if(props.searchInput == ""){
        setEmployeeData("","")
    }

    if(results[0] == "" && props.searchInput != ""){
      setDisplayRetrievedHeading("No results found.")
    }

  })


  var rows = [];
  if(results[0]){
    rows = createEmployeeList(results)
  }


  return (
    <div className="h-[36rem] max-h-[36rem] p-2 w-[44rem] rounded bg-[#70AA9B]">
      <div className="text-white text-2xl pb-2">Retrieved Information:</div>
      <div className="bg-white text-black rounded w-128 max-w-128 h-[32rem] pt-8 ">

        <EmployeeDisplay 
          employeeName={props.employeeName} 
          employeeRole={props.employeeRole} 
          employeeEFIS={props.employeeEFIS} 
          employeeDistrict={props.employeeDistrict}
        />

        <div className="grid auto-cols-grid max-h-[28rem] overflow-auto">
            <div className="ml-4 w-80" id="info_row">
              <div className="grid grid-rows-1 grid-flow-col gap-4 ml-4">
                <div className="font-bold w-60">{displayNameHeading}</div>
                <div className="font-bold w-36">{displayRoleHeading}</div>
                <div className="font-bold w-32">{displayEFISHeading}</div>
                <div className="font-bold">{displayDistrictHeading}</div>
              </div>
              {rows}
            </div>
            <div id="retrieved_message" className="text-center mt-48">{displayRetrievedHeading}</div>
        </div>
      </div>
    
      <div className="text-center p-6">
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 rounded m-2 w-auto h-10" onClick={submitEdits}>Submit Edits</button>
      </div>

    </div>
  )
}





