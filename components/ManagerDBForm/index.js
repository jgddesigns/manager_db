

import ManagerDBView from './ManagerDBView'
import SearchBar from './SearchBar'
import SearchProcess from '../../utils/helpers/SearchProcess'
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import {React, useState, useEffect} from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



export default function index() {

  const MySwal = withReactContent(Swal)

  const [searchInput, setSearchInput] = useState('')
  const [allManagerDB, setAllManagerDB] = useState([])

  useEffect(() => {
    // if allManagers is empty, fetch all managers
    if (allManagerDB.length === 0) {
      fetch("/ManagerDB/api/managers/", {
        method: "GET",
      }).then((res) => {
        res.json().then((data) => {
          // console.log(data);
          setAllManagerDB(data)
        });
      });
    }
 
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
            <ManagerDBView searchResults={SearchProcess(searchInput, allManagerDB)}/>

        </div>
    </div>
  )
}




