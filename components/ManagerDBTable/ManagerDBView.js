import {setState, useState, useEffect} from 'react'

export default function ManagerDBView({searchResults, setSearchInput}) {


  const results = Object.values(searchResults)
  if(results[1]){
    var emp_name = Object.values(results[0])
  }else{
    emp_name = [""]
  }
  if(results[2]){
    var emp_role = Object.values(results[1]) 
  }else{
    emp_role = [""]
  }
  if(results.length  > 2){
    var emp_efis = Object.values(results[2])
  }else{
    emp_efis = [""]
  }
  if(results.length  > 3){
    var emp_district = Object.values(results[3])
  }else{
    emp_district = [""]
  }

  // Map each ressult to a single json object {emp_name: "", emp_role: "", emp_efis: "", emp_district: ""}
  const resultsMap = emp_name.map((name, index) => {
    return {
      emp_name: name,
      emp_role: emp_role[index],
      emp_efis: emp_efis[index],
      emp_district: emp_district[index]
    }
  })
  console.log(resultsMap);
  
  return (

    <div className="h-[36rem] max-h-[36rem] p-2 w-[44rem] rounded bg-[#70AA9B] shadow-lg">
      <div className="text-white text-2xl pb-2 inline-block">
          Employees
      </div>
      
      <input
      onChange={(e) => setSearchInput(e.target.value)}
      placeholder="Search by Name, EFIS"
      className=" inline-block form-control px-3 py-1.5text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:pl-2 h-8 rounded float-right shadow-lg"
      title='Search bar'
      />
      {/* <div className="text-right pt-2 text-sm">
        Click name to display information.
      </div> */}
      
          
      <div className="bg-white text-black rounded w-128 max-w-128 h-[32rem] pt-2 shadow-lg">
        {resultsMap.length > 0 || resultsMap === undefined ? renderResults(resultsMap) : <div className="text-center text-lg text-black">No results found.</div>}
      </div>

      <div className="text-center p-6">
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 rounded m-2 w-auto h-10" onClick={submitEdits}>Submit Edits</button>
      </div>

    </div>

  )
}


const submitEdits = () => {
  // Do stuff on button click
  console.log("Submit Edits button clicked.")
  
  // if(this.value == "Dashboard"){
  //     console.log(this)
  // }
}

const renderResults = (results) =>{
  return(
    // /Map each result to a row in a table.
    <div className="flex flex-col text-center">
      <div className="overflow-y-auto max-h-[28rem] ">
      <table className="scroll-auto table-auto overflow-scroll w-full max-h-[36rem]">
        <thead>
          <tr>
            <th className=" text-md font-medium text-gray-900 px-6 py-4 text-left">Name</th>
            <th className=" text-md font-medium text-gray-900 px-6 py-4 text-left">EFIS</th>
            <th className=" text-md font-medium text-gray-900 px-6 py-4 text-left">Role</th>
            <th className=" text-md font-medium text-gray-900 px-6 py-4 text-left">District</th>
          </tr>
        </thead>
        <tbody>
          {/* sort by name */}

          {results.sort((a, b) => (a.emp_name > b.emp_name) ? 1 : -1).map(result => {
            return (
              <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">{result.emp_name}</td>
                <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">{result.emp_efis}</td>
                <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">{result.emp_role}</td>
                <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">{result.emp_district}</td>
                <td className="px-6 py-4 whitespace-nowrap text-left"><p className = "text-md text-blue-500 hover:text-blue-300" onClick={() => console.log("Clicked")}>Update</p></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
    </div>
  )
}



