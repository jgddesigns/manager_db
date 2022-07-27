
import { connectSearchBox } from 'react-instantsearch-dom';

  
function SearchBar({ currentRefinement, isSearchStalled, refine }) {
  
  return (

      <div className="p-2 pt-2 rounded bg-[#70AA9B]">
     <span className="text-white text-2xl">Employee Search:</span>
      <form noValidate action="" role="search" className="pt-2">
        <input
          value={currentRefinement}
          onChange={event => refine(event.currentTarget.value)}
          placeholder="Search by Name, EFIS, Region..."
          className="placeholder:pl-4 h-10 w-[32rem] rounded"

          title='Search bar'
        /><div className="text-right pt-2 text-sm">Click name to display information.</div>
       </form>
       </div>
    
      
  )
}
  
export default connectSearchBox(SearchBar);