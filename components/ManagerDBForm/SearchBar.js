
import { connectSearchBox } from 'react-instantsearch-dom';

  
function SearchBar(props) {
  
  const checkDisplay = () => {

    if(props.employeeName != ""){
      props.changeDisplay()
      console.log('change')
    }

  }
  
  return (

      <div className="p-2 pt-2 rounded bg-[#70AA9B] content-center max-w-[20rem] shadow-lg">
        <div className="text-white text-2xl pb-2">Employee Search:</div>
          
          <input id="search_input"
          onChange={(e) => props.setSearchInput(e.target.value)}
          onClick={() => checkDisplay()}
          placeholder="Search by Name or EFIS..."
          className="form-control block w-full px-3 py-1.5text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:pl-4 h-10 rounded"
          title='Search bar'
          />

            
          <div className="text-right pt-2 text-sm">
            Click name to display information.
          </div>
          
       </div>
    
      
  )
}


  
export default connectSearchBox(SearchBar);