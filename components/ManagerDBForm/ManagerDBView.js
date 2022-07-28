import {setState, useState, useEffect} from 'react'

export default function ManagerDBView({searchResults}) {
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

 
 
  return (

    <div className="h-[36rem] max-h-[36rem] p-2 w-[44rem] rounded bg-[#70AA9B] shadow-lg">
      <div className="text-white text-2xl pb-2">
        Retrieved Information:
      </div>
      <div className="bg-white text-black rounded w-128 max-w-128 h-[32rem] pt-2 ">
        {renderResults(resultsMap)}
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
          {results.map(result => {
            return (
              <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">{result.emp_name}</td>
                <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">{result.emp_efis}</td>
                <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">{result.emp_role}</td>
                <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">{result.emp_district}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
    </div>
  )
}




{/* <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                First
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Last
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Otto
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @mdo
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Jacob
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Thornton
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @fat
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Larry
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Wild
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @twitter
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div> */}