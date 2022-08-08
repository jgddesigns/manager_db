import ManagerDBView from './ManagerDBView'
// import SearchBar from './SearchBar'
import Instructions from '../Instructions'
import SearchProcess from '../../utils/helpers/SearchProcess'
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import {useState, useEffect} from 'react'
import { connectSearchBox } from 'react-instantsearch-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function index() {

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
          {/* <SearchBar setSearchInput={setSearchInput}/> */}
          <Hits />
          </InstantSearch>
        </div>

        <div>
            <Instructions />
            <ManagerDBView searchResults={SearchProcess(searchInput, allManagerDB)} setSearchInput={setSearchInput} searchInput={searchInput} setAllManagerDB={setAllManagerDB}/>
        </div>
        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
    </div>
  )
}

