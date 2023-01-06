import {setState, useState, useEffect} from 'react'
import SelectedEmployee from './SelectedEmployee'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FaSort } from 'react-icons/fa'
import BugReport from './modals/BugReport'

export default function ManagerDBView({searchResults, setSearchInput, searchInput, setAllManagerDB}){
  const [selectedUser, setSelectedUser] = useState(null)
  const [reloadPopup, setReloadPopup] = useState(false)
  const [loadingGraphic, setLoadingGraphic] = useState(false)
  const [SortBy, setSortBy] = useState("Name")
  const [ToggleName, setToggleName] = useState(false)
  const [ToggleEFIS, setToggleEFIS] = useState(false)
  const [ToggleRole, setToggleRole] = useState(false)
  const [ToggleDistrict, setToggleDistrict] = useState(false)
  const [isBugReport, setIsBugReport] = useState(false)
  const MySwal = withReactContent(Swal)
  
  useEffect(() => {
    if(selectedUser == null && !reloadPopup){
      setSearchInput("")
      fetch("/ManagerDB/api/managers/", {
        method: "GET",
      }).then((res) => {
        res.json().then((data) => {
          setAllManagerDB(data)
        }).then(()=>{
          setLoadingGraphic(false)
        })
      });
    }
  }, [selectedUser])

  //Alerts the user that entering any new information in the search field will clear the current displayed employee.
  //@param: None.
  //@return: Void.
  function changeDisplay() {
    MySwal.fire({
      icon: 'question',
      title: <p>Clear Info</p>,
      text: 'This will clear current employee information. Continue?',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setSelectedUser(null)
        setReloadPopup(true)
      }
    })
  };

  //Alerts the user that entering any new information in the search field will clear the current displayed employee.
  //@param: None.
  //@return: Void.
  const setEmployeeHandler = (result) => {
    console.log(result)
    setSelectedUser(result)
    setReloadPopup(false)
  }

  // Map each ressult to a single json object {emp_name: "", emp_role: "", emp_efis: "", emp_district: ""}
  const resultsMap = searchResults[0].map((name, index) => {
  
    return {
      emp_name: searchResults[0][index],
      emp_email: searchResults[1][index],
      emp_role: searchResults[2][index],
      emp_efis: searchResults[3][index],
      emp_unit: searchResults[4][index],
      emp_district: searchResults[5][index],
      emp_tram: searchResults[6][index],
      emp_manager: searchResults[7][index],
      emp_children: searchResults[8][index]
    }
  })

  //Based on the column header clicked, sort the results by that column.
  //@param type: The string of the column name that was clicked.
  //@return: Void.
  const SortHandler = (type) => {
    
    if(type == "Name"){
      setToggleName(!ToggleName)
    }
    if(type == "EFIS"){
      setToggleEFIS(!ToggleEFIS)
    }
    if(type == "Role"){
      setToggleRole(!ToggleRole)
    }
    if(type == "District"){
      setToggleDistrict(!ToggleDistrict)
    }

    setSortBy(type)
    renderResults(resultsMap)
  }

  //When the search information is entered, the function is called to update the searchInput state. This will then display the search results.
  //@param e: The event that is triggered when the user enters information into the search field.
  //@return: Void.
  const SetSearch = (e) => {
    setSortBy("Name")
    setToggleName(true)
    setSearchInput(e.target.value)
  }

  //When the clear button is clicked, sets all search related values to null or empty.
  //@param: None.
  //@return: Void.
  const SetClear = () => {
    document.getElementById('reset_test').click()
  }

  //When the reset button is clicked, resets all displayed employee information.
  //@param: None.
  //@return: Void.
  const activateReset = () => {
    setSearchInput("")
    setSelectedUser(null)
    document.getElementById("search_id").value = ""
  }

  //Processes the sort function and returns the sorted results.
  //@param results: The array of results to be sorted.
  //@return: The sorted array of results.
  const sortBy = (results) => {
    if(SortBy == "Name" && ToggleName){
      return results.sort((a, b) => (a.emp_name > b.emp_name) ? 1 : -1)
    }else if(SortBy == "Name" && !ToggleName){
      return results.sort((a, b) => (a.emp_name < b.emp_name) ? 1 : -1)
    }

    if(SortBy == "EFIS" && ToggleEFIS){
      return results.sort((a, b) => (a.emp_efis > b.emp_efis) ? 1 : -1)
    }else if(SortBy == "EFIS" && !ToggleEFIS){
      return results.sort((a, b) => (a.emp_efis < b.emp_efis) ? 1 : -1)
    }

    if(SortBy == "Role" && ToggleRole){
      return results.sort((a, b) => (a.emp_role > b.emp_role) ? 1 : -1)
    }else if(SortBy == "Role" && !ToggleRole){
      return results.sort((a, b) => (a.emp_role < b.emp_role) ? 1 : -1)
    }

    if(SortBy == "District" && ToggleDistrict){
      return results.sort((a, b) => (a.emp_district > b.emp_district) ? 1 : -1)
    }else if(SortBy == "District" && !ToggleDistrict){
      return results.sort((a, b) => (a.emp_district < b.emp_district) ? 1 : -1)
    }

    return results.sort((a, b) => (a.emp_name > b.emp_name) ? 1 : -1)
  }

  //Displays the search results after thney have been processed by background functions.
  //@param results: The array of results to be displayed.
  //@return: The JSX to be displayed.
  const renderResults = (results) =>{
    return(

      // /Map each result to a row in a table.
      <div className="flex flex-col text-center">
        <button id="activate_reset" className="hidden" onClick={() => activateReset()}></button>
        <div className="overflow-y-auto max-h-[28rem] ">
          { results.length > 0 ?
            <div className="grid grid-rows-1 grid-cols-5">
              <div className="text-md font-medium text-gray-900 px-6 py-4 text-left w-96"><a className="underline text-blue-600 hover:text-blue-800 cursor-pointer" onClick={()=>SortHandler("Name")}>Name</a></div>
              <div className="text-md font-medium text-gray-900 px-32 py-4 text-left w-16"><a className="underline text-blue-600 hover:text-blue-800 cursor-pointer" onClick={()=>SortHandler("EFIS")}>EFIS</a></div>
              <div className="text-md font-medium text-gray-900 px-20 py-4 text-left ml-4 w-16 "><a className="underline text-blue-600 hover:text-blue-800 cursor-pointer" onClick={()=>SortHandler("Role")}>Role</a></div>
              <div className="text-md font-medium text-gray-900 px-12 py-4 text-left ml-6 w-16"><a className="underline text-blue-600 hover:text-blue-800 cursor-pointer" onClick={()=>SortHandler("District")}>District</a></div>
              <div> <FaSort className="text-md text-center font-medium text-gray-900 mx-auto my-5"/></div>
            </div>
          : ( results.length < 1 && searchInput.length > 0 ? <div className="text-center mt-56">No results.</div> :<div className="text-center mt-56">Enter employee information above to search records.</div> )}
          <tbody>

            {sortBy(results).map(result => {
              return (
                  <div className="grid grid-rows-1 grid-cols-5 bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <div className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left w-96">{result.emp_name}</div>
                  <div className="text-md text-gray-900 font-light px-32 py-4 whitespace-nowrap text-left">{result.emp_efis}</div>
                  <div className="text-md text-gray-900 font-light px-24 py-4 whitespace-nowrap text-left">{result.emp_role}</div>
                  <div className="text-md text-gray-900 font-light px-20 py-4 whitespace-nowrap text-left">{result.emp_district}</div>
                  <div className="px-6 py-4 whitespace-nowrap text-left ml-6 w-16"><p className = "text-md text-blue-500 hover:text-blue-300 cursor-pointer" onClick={() => setEmployeeHandler(result)}>Update</p></div>
                  </div>
              )
            })}
          </tbody>
        </div>
      </div>
    )
  }
  
  return (
    <div className="h-[36rem] max-h-[36rem] p-2 w-[44rem] rounded bg-[#70AA9B] shadow-lg">    
        {!isBugReport ?
          <div>
            <div className="text-white text-2xl pb-2 inline-block">
                Employees 
            </div>

            <input 
            onChange={(e) => { if(selectedUser != null) changeDisplay() ; SetSearch(e) }}
            placeholder="Search by Name, EFIS" id="search_id"
            className="inline-block form-control px-3 py-1.5text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:pl-2 h-8 rounded float-right shadow-lg"
            title='Search bar'
            />
            <button id="set_clear" className="hidden" onClick={() => activateReset()}></button>
            <div className="text-white text-sm pb-2 float-right mr-4 mt-2 underline text-blue-700 cursor-pointer" onClick={(e)=>SetClear()}>
                Clear
            </div>
            <div className="bg-white text-black rounded w-128 max-w-128 h-[32rem] pt-2 shadow-lg">
              {selectedUser ? <SelectedEmployee selectedEmployee={selectedUser} setSelectedUser={setSelectedUser} setLoadingGraphic={setLoadingGraphic}/> : (!loadingGraphic ? renderResults(resultsMap) : renderResults([]))}
            </div>
          </div>
        :
            <div>
                <BugReport/>
            </div>
        }
    </div>
  )
}








