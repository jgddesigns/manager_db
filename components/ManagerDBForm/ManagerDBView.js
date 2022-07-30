import {setState, useState, useEffect} from 'react'

export default function ManagerDBView({searchResults}) {
  const results = Object.values(searchResults)

  var emp_name = [""]
  var emp_role = [""]
  var emp_efis = [""]
  var emp_district = [""]
  if(results[1]){
    emp_name = Object.values(results[0])
  }
  if(results[2]){
    emp_role = Object.values(results[1]) 
  }
  if(results.length  > 2){
    emp_efis = Object.values(results[2])
  }
  if(results.length  > 3){
    var emp_district = Object.values(results[3])
  }

  var name_heading = ""
  var efis_heading = ""
  var role_heading = ""
  var district_heading = ""

 var retrieved_message = "Enter employee information above to make changes."

 if(document.getElementById("search_input")){
  if(document.getElementById("search_input").value == ""){
    retrieved_message = "Enter employee information above to make changes."
  }else{
    retrieved_message = "No results found."
  }
 }
 if(results[0] != ""){
  name_heading = "Name"
  efis_heading = "EFIS"
  role_heading = "Role"
  district_heading = "District"
  if(document.getElementById("retrieved_message")){
    document.getElementById("retrieved_message").hidden = true;
  }
 }
 else{
  document.getElementById("retrieved_message").hidden = false;
 }



  return (

    <div className="h-[36rem] max-h-[36rem] p-2 w-[44rem] rounded bg-[#70AA9B]">
    <div className="text-white text-2xl pb-2">Retrieved Information:</div>
    <div className="bg-white text-black rounded w-128 max-w-128 h-[32rem] pt-8 ">
    <div id="retrieved_message" className="mt-48 text-center">{retrieved_message}</div>

      <div className="grid grid-cols-4 max-h-[28rem] overflow-auto">
        <div className="ml-4 w-80 ">
          <span className="font-bold">{name_heading}</span>
      {emp_name.map(empname => {
              return (
                <div>{empname}</div>
              )    
      })}
      </div>

        <div className="ml-20">
        <span className="font-bold">{efis_heading}</span>
        {emp_efis.map(efis => {
                return (
                  <div>{efis}</div>
                )    
        })}
        </div>

        <div className="ml-14">
        <span className="font-bold">{role_heading}</span>
        {emp_role.map(role => {
                return (
                  <div>{role}</div>
                )
        })}
        </div>

        <div className="ml-12">
        <span className="font-bold mb-4">{district_heading}</span>
        {emp_district.map(district => {
                return (
                  <div>{district}</div>
                )
        })}
        </div>

      </div>

    </div>

    <div className="text-center p-6">
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 rounded m-2 w-auto h-10" onClick={submitEdits}>Submit Edits</button>
    </div>

    </div>
  )
}


const submitEdits = () => {

  console.log("Submit Edits button clicked.")
  
}