

import ManagerDBView from './ManagerDBView'
import SearchBar from './SearchBar'
import { InstantSearch, SearchBox, Hits } 
    from "react-instantsearch-dom";
import  Button from 'react-bootstrap/Button';

export default function index() {
  return (
    <div className="grid gap-[1rem] space-y-4 pb-24">
      <div className="text-center text-3xl text-black mt-8 mb-8">Manager Update Tool for Construction</div>
        <div>
          
          <InstantSearch 
            searchClient={""} 
            indexName="gfg_dev">
      
            <SearchBar/>
      
            <Hits />
          </InstantSearch>

        </div>
        <div>
            <ManagerDBView />
            
        </div>

    </div>
  )
}

