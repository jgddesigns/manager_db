

import ManagerDBView from './ManagerDBView'
import SearchBar from './SearchBar'
import SearchProcess from './functions/SearchProcess'
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import {React, useState, useEffect} from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



export default function index() {

  const MySwal = withReactContent(Swal)

  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searchData, setSearchData] = useState([])
  const [employeeName, setEmployeeName] = useState([])
  const [employeeRole, setEmployeeRole] = useState([])
  const [employeeEFIS, setEmployeeEFIS] = useState([])
  const [employeeDistrict, setEmployeeDistrict] = useState([])



  function changeDisplay() {

    MySwal.fire({
      icon: 'question',
      title: <p>Clear Info</p>,
      text: 'This will clear current employee information. Continue?',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        document.getElementById("display_row").classList.remove('gap-4')
        document.getElementById("display_title").classList.remove('mb-8')
        setEmployeeName("")
        setEmployeeRole("")
        setEmployeeEFIS("")
        setEmployeeDistrict("")
        setSearchResults(SearchProcess(searchInput, searchData))
      }
    })
  };
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/ManagerDB/api/managers/`);
      const newData = await response.json();
      setSearchData(newData);
    };
  
    fetchData();
    
  },[]);

  useEffect(() => {
   
    setSearchResults(SearchProcess(searchInput, searchData))

  }, [searchInput])




  return (
    <div className="grid gap-[1rem] space-y-4 pb-24">
      <div className="text-center text-3xl text-black mt-8 mb-8">Manager Update Tool for Construction</div>
        <div>
          <InstantSearch 
            searchClient={""} 
          >
            <SearchBar 
              setSearchInput={setSearchInput} 
              employeeName={employeeName} 
              changeDisplay={changeDisplay}
            />
            <Hits />
          </InstantSearch>
        </div>

        <div>
            <ManagerDBView 
              searchResults={searchResults} 
              employeeName={employeeName} 
              employeeRole={employeeRole} 
              employeeEFIS={employeeEFIS} 
              employeeDistrict={employeeDistrict} 
              setSearchResults={setSearchResults} 
              setEmployeeName={setEmployeeName} 
              setSearchData={setSearchData} 
              setEmployeeRole={setEmployeeRole} 
              setEmployeeEFIS={setEmployeeEFIS} 
              setEmployeeDistrict={setEmployeeDistrict} 
              searchInput={searchInput}
            /> 
        </div>
    </div>
  )
}




