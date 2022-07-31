

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



  function changeDisplay() {

    MySwal.fire({
      icon: 'question',
      title: <p>Clear Info</p>,
      text: 'This will clear current employee information. Continue?',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
      document.getElementById('info_row').hidden = false;
      document.getElementById('display_row').hidden = true;
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
    // setSearchResults(["Waiting for search input..."], [""], [""], [""])
    console.log(searchInput)
    if(!document.getElementById('display_row').hidden){
      changeDisplay()
      console.log('change')
    }
    
    setSearchResults(SearchProcess(searchInput, searchData))

 
  }, [searchInput])




  return (
    <div className="grid gap-[1rem] space-y-4 pb-24">
      <div className="text-center text-3xl text-black mt-8 mb-8">Manager Update Tool for Construction</div>
        <div>
          <InstantSearch searchClient={""} >
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




