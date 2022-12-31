import {setState, useState, useEffect} from 'react'
import SelectedEmployee from './SelectedEmployee'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FaSort } from 'react-icons/fa'
import BugReport from './BugReport'

export default function ManagerDBView({searchResults, setSearchInput, searchInput, setAllManagerDB}) {
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

  // Fire on Change of SearchInput when a User is Selected.
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

  const setEmployeeHandler = (result) => {
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

  const SetSearch = (e) => {
    setSortBy("Name")
    setToggleName(true)
    setSearchInput(e.target.value);
  }

  const SetClear = (e) => {
    setSearchInput("");
    setSelectedUser(null);
    document.getElementById("search_id").value = "";
  }

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

  const renderResults = (results) =>{
    return(
      // /Map each result to a row in a table.
      <div className="flex flex-col text-center">
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








