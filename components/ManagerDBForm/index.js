

import ManagerDBView from './ManagerDBView'
import SearchBar from './SearchBar'
import SearchProcess from './SearchProcess'
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import {useState, useEffect} from 'react'
export default function index() {

  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    setSearchResults(["Waiting for search input..."], [""], [""], [""])
    console.log(searchInput)
    fetch("/ManagerDB/api/managers/", {
      method: "GET",
    }).then((res) => {
      res.json().then((data) => {
        setSearchResults(SearchProcess(searchInput, data))
      });
    });
 
  }, [searchInput])

  return (
    <div className="grid gap-[1rem] space-y-4 pb-24">
      <div className="text-center text-3xl text-black mt-8 mb-8">Manager Update Tool for Construction</div>
        <div>
          
          <InstantSearch 
            searchClient={""} 
            >
      
          <SearchBar setSearchInput={setSearchInput}/>
          <Hits />
          </InstantSearch>
        </div>

        <div>
            <ManagerDBView searchResults={searchResults}/>

            
            
        </div>

    </div>
  )
}

