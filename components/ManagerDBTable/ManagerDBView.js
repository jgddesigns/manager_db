import {setState, useState, useEffect} from 'react'
import SelectedEmployee from './SelectedEmployee'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function ManagerDBView({searchResults, setSearchInput}) {
  const [selectedUser, setSelectedUser] = useState(null)
  const MySwal = withReactContent(Swal)
  useEffect(() => {
    
   console.log(selectedUser)
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
      }
    })
  };

  // Map each ressult to a single json object {emp_name: "", emp_role: "", emp_efis: "", emp_district: ""}
  const resultsMap = searchResults[0].map((name, index) => {
    return {
      emp_name: searchResults[0][index],
      emp_role: searchResults[1][index],
      emp_efis: searchResults[2][index],
      emp_district: searchResults[3][index]
    }
  })

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
                  <td className="px-6 py-4 whitespace-nowrap text-left"><p className = "text-md text-blue-500 hover:text-blue-300" onClick={() => setSelectedUser(result)}>Update</p></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
      </div>
    )
  }
  
 
  
  return (

    <div className="h-[36rem] max-h-[36rem] p-2 w-[44rem] rounded bg-[#70AA9B] shadow-lg">

        <div className="text-white text-2xl pb-2 inline-block">
            Employees
        </div>
      
        <input
        onChange={(e) => { if(selectedUser != null) changeDisplay() ; setSearchInput(e.target.value); }}
        placeholder="Search by Name, EFIS"
        className=" inline-block form-control px-3 py-1.5text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:pl-2 h-8 rounded float-right shadow-lg"
        title='Search bar'
        />
        {/* <div className="text-right pt-2 text-sm">
          Click name to display information.
        </div> */}
      
          
        <div className="bg-white text-black rounded w-128 max-w-128 h-[32rem] pt-2 shadow-lg">
          {selectedUser ? <SelectedEmployee selectedEmployee={selectedUser}/> : renderResults(resultsMap)}
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






