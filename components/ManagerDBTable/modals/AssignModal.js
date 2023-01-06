import {React, useState, useEffect} from 'react'
import {FaEdit} from 'react-icons/fa'

export default function AssignModal({setShowAssign, selectedEmployee}) {

    const okayHandler = () => {
        document.getElementById('activate_assign').click()
    }

    const closeHandler = () => {
        setShowAssign(false)
    }

    //Validates the name input for the form.
    //@param name: The name to validate.
    //@return: True if name is valid, false if not.
    const validateName = (name) => {
        if(name.length < 5){
            return false
        }
        for(let i=0; i<name.length; i++){
            if(!name[i].match(/[a-z]/i) && (name[i] != ' ')){
                return false
            }
        }
        return true
    }

    //Validates the email input for the form.
    //@param email: The email to validate.
    //@return: True if email is valid, false if not.
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    //Validates the efis input for the form.
    //@param efis: The efis to validate.
    //@return: True if efis is valid, false if not.
    const validateEFIS = (efis) => {
        if(efis.length!=4 || isNaN(efis)){
            return false
          }
          return true
    }

    //Validates the unit input for the form.
    //@param unit: The unit to validate.
    //@return: True if unit is valid, false if not.
    const validateUnit = (unit) => {
        if(unit.length!=3 || isNaN(unit)){
            return false
          }
          return true
    }

    //Checks the assign employee form for errors and displays the appropriate error messages.
    //@param e: The event that is triggered when the form is submitted.
    //@return: Void.
    const clearErrorHandler = (e) => {
        var text_id_split = e.target.id.split("_")
        var text_id = text_id_split[1] + "_" + text_id_split[2] + "_text"

        try{ 
            var check_value = document.getElementById(e.target.id).value
        }catch{
            check_value = ""
        }

        if(text_id_split[2] == "name"){
            var validate = validateName(check_value)
        }else if(text_id_split[2] == "unit"){
            var validate = validateUnit(check_value)
        }else if(text_id_split[2] == "efis"){
            var validate = validateEFIS(check_value)
        }else if(text_id_split[2] == "email"){
            var validate = validateEmail(check_value)
        }

        if(!validate){
            document.getElementById(e.target.id).classList.add("border-red-500")
            document.getElementById(text_id).classList.add("text-red-500")
        }else{
            document.getElementById(e.target.id).classList.remove("border-red-500")
            document.getElementById(text_id).classList.remove("text-red-500")
        }

        if(e.target.value == ""){
            document.getElementById(e.target.id).classList.remove('border-red-500')
            document.getElementById(text_id).classList.remove('text-red-500')
        }

        var error = false
        var error_fields = ""
        var name_correct = ""
        var unit_correct = ""
        var efis_correct = ""
        var email_correct = ""

        try{
            if(document.getElementById('assign_prin_name').classList.contains('border-red-500')){
                error = true
                if(error_fields != ""){
                    error_fields = error_fields + ","
                }
                error_fields = error_fields + " Principal Name"
                if(name_correct == ""){
                    name_correct =  "</br>Name: Engineer Name"
                }
            }
        }catch{}
        try{
            if(document.getElementById('assign_prin_unit').classList.contains('border-red-500')){
                error = true
                if(error_fields != ""){
                    error_fields = error_fields + ","
                }
                error_fields = error_fields + " Principal Unit"
                if(unit_correct == ""){
                    unit_correct = "</br>Unit: 123"
                }
            }
        }catch{}
        try{
            if(document.getElementById('assign_prin_efis').classList.contains('border-red-500')){
                error = true
                if(error_fields != ""){
                    error_fields = error_fields + ","
                }
                error_fields = error_fields + " Principal EFIS"
                if(efis_correct == ""){
                    efis_correct = "</br>EFIS: 1234"
                }
            }
        }catch{}
        try{
            if(document.getElementById('assign_prin_email').classList.contains('border-red-500')){
                error = true
                if(error_fields != ""){
                    error_fields = error_fields + ","
                }
                error_fields = error_fields + " Principal Email"
                if(email_correct == ""){
                    email_correct = "</br>Email: TestEmail@dot.ca.gov"
                }
            }
        }catch{}
        try{
            if(document.getElementById('assign_chief_name').classList.contains('border-red-500')){
                error = true
                if(error_fields != ""){
                    error_fields = error_fields + ","
                }
                error_fields = error_fields + " Chief Name"
                if(name_correct == ""){
                    name_correct = "</br>Name: Engineer Name"
                }
            }
        }catch{}
        try{
            if(document.getElementById('assign_chief_unit').classList.contains('border-red-500')){
                error = true
                if(error_fields != ""){
                    error_fields = error_fields + ","
                }
                error_fields = error_fields + " Chief Unit"
                if(unit_correct == ""){
                    unit_correct = "</br>Unit: 123"
                }
            }
        }catch{}
        try{
            if(document.getElementById('assign_chief_efis').classList.contains('border-red-500')){
                error = true
                if(error_fields != ""){
                    error_fields = error_fields + ","
                }
                error_fields = error_fields + " Chief EFIS"
                if(efis_correct == ""){
                    efis_correct = "</br>EFIS: 1234"
                }
            }
        }catch{}
        try{
            if(document.getElementById('assign_chief_email').classList.contains('border-red-500')){
                error = true
                if(error_fields != ""){
                    error_fields = error_fields + ","
                }
                error_fields = error_fields + " Chief Email"
                if(email_correct == ""){
                    email_correct = "</br>Email: TestEmail@dot.ca.gov"
                }
            }
        }catch{}
        try{
            if(document.getElementById('assign_ste_name').classList.contains('border-red-500')){
                error = true
                if(error_fields != ""){
                    error_fields = error_fields + ","
                }
                error_fields = error_fields + " STE Name"
                if(name_correct == ""){
                    name_correct = "</br>Name: Engineer Name"
                }
            }
        }catch{}
        try{
            if(document.getElementById('assign_ste_unit').classList.contains('border-red-500')){
                error = true
                if(error_fields != ""){
                    error_fields = error_fields + ","
                }
                error_fields = error_fields + " STE Unit"
                if(unit_correct == ""){
                    unit_correct = "</br>Unit: 123"
                }
            }
        }catch{}
        try{
            if(document.getElementById('assign_ste_efis').classList.contains('border-red-500')){
                error = true
                if(error_fields != ""){
                    error_fields = error_fields + ","
                }
                error_fields = error_fields + " STE EFIS"
                if(efis_correct == ""){
                    efis_correct = "</br>EFIS: 1234"
                }
            }
        }catch{}
        try{
            if(document.getElementById('assign_ste_email').classList.contains('border-red-500')){
                error = true
                if(error_fields != ""){
                    error_fields = error_fields + ","
                }
                error_fields = error_fields + " STE Email"
                if(email_correct == ""){
                    email_correct = "</br>Email: TestEmail@dot.ca.gov"
                }
            }
        }catch{}

        if(!error){
            document.getElementById('error_assign').hidden = true
        }else{
            document.getElementById('error_assign').hidden = false
            document.getElementById("error_assign").innerHTML = "Please correct the following fields:<br><br><span className='ml-8'>" + error_fields + "<br><br><u>Example</u>:</label>" + name_correct + unit_correct + efis_correct + email_correct + "</span>"
        }
    }

    
  return (
    <div>
        <div className="flex w-[40rem] h-[48rem] bg-gray-100 drop-shadow-2xl rounded-xl rounded-tl-[4px] border-[5px] border-[#70AA9B] mb-[10%]  text-black overflow-y-auto">
            <div className="grid grid-rows-2 grid-cols-1 h-[100%]">
                <div className="grid grid-rows-1 grid-cols-2">
                    <div className="bg-[#70AA9B] w-48 h-16 rounded-br-lg z-8">
                        <div className="float-left pl-4 pt-4 text-2xl font-bold text-white">Assign</div>
                    </div>  
                    <div className="ml-[165%] mt-[10%]">
                        <FaEdit className="text-5xl text-[#75a3cc]"/>
                    </div>   
                </div>
                <div className="grid grid-rows-8 gap-y-8 ml-[33%] w-72 mt-[-15%]"></div>
                <div className="mb-8 mt-28 ml-[42%]">
                    <p className="text-sm"> Enter new data for:</p>
                    <p className="font-bold italic">{selectedEmployee.emp_name}, EFIS #{selectedEmployee.emp_efis}</p>

                    {(selectedEmployee.emp_role == "Deputy") ?
                    <div className="grid grid-rows-2 mt-8">
                            <span className="mr-[20%] mt-[15px]" id="prin_name_text">Principal Name</span>
                            <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 leading-tight focus:outline-none focus:shadow-outline" id="assign_prin_name" yyyyyye={(e)=>clearErrorHandler(e)}></input>
                            <span className="mr-[20%] mt-[15px]" id="prin_unit_text">Principal Unit</span>
                            <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 leading-tight focus:outline-none focus:shadow-outline" id="assign_prin_unit" onChange={(e)=>clearErrorHandler(e)}></input>
                            <span className="mr-[20%] mt-[15px]" id="prin_efis_text">Principal EFIS</span>
                            <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 leading-tight focus:outline-none focus:shadow-outline" id="assign_prin_efis" onChange={(e)=>clearErrorHandler(e)}></input>
                            <span className="mr-[20%] mt-[15px]" id="prin_email_text">Principal Email</span>
                            <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 leading-tight focus:outline-none focus:shadow-outline" id="assign_prin_email" onChange={(e)=>clearErrorHandler(e)}></input>
                        </div>
                    : null }

                    {(selectedEmployee.emp_role == "Deputy" ||selectedEmployee.emp_role == "Principal") ?
                        <div className="grid grid-rows-2 mt-8"> 
                            <span className="mr-[20%] mt-[15px]" id="chief_name_text">Chief Name</span>
                            <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 leading-tight focus:outline-none focus:shadow-outline" id="assign_chief_name" onChange={(e)=>clearErrorHandler(e)}></input>
                            <span className="mr-[20%] mt-[15px]" id="chief_unit_text">Chief Unit</span>
                            <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 leading-tight focus:outline-none focus:shadow-outline" id="assign_chief_unit" onChange={(e)=>clearErrorHandler(e)}></input>
                            <span className="mr-[20%] mt-[15px]" id="chief_efis_text">Chief EFIS</span>
                            <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 leading-tight focus:outline-none focus:shadow-outline" id="assign_chief_efis" onChange={(e)=>clearErrorHandler(e)}></input>
                            <span className="mr-[20%] mt-[15px]" id="chief_email_text">Chief Email</span>
                            <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 leading-tight focus:outline-none focus:shadow-outline" id="assign_chief_email" onChange={(e)=>clearErrorHandler(e)}></input>
                        </div>
                    : null }

                    {selectedEmployee.emp_role == "Deputy" || selectedEmployee.emp_role == "Principal" || selectedEmployee.emp_role == "Chief" ?
                        <div className="grid grid-rows-2 mt-8"> 
                            <span className="mr-[20%] mt-[15px]" id="ste_name_text">STE Name</span>
                            <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 leading-tight focus:outline-none focus:shadow-outline" id="assign_ste_name" onChange={(e)=>clearErrorHandler(e)}></input>
                            <span className="mr-[20%] mt-[15px]" id="ste_unit_text">STE Unit</span>
                            <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 leading-tight focus:outline-none focus:shadow-outline" id="assign_ste_unit" onChange={(e)=>clearErrorHandler(e)}></input>
                            <span className="mr-[20%] mt-[15px]" id="ste_efis_text">STE EFIS</span>
                            <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 leading-tight focus:outline-none focus:shadow-outline" id="assign_ste_efis" onChange={(e)=>clearErrorHandler(e)}></input>
                            <span className="mr-[20%] mt-[15px]" id="ste_email_text">STE Email</span>
                            <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 leading-tight focus:outline-none focus:shadow-outline" id="assign_ste_email" onChange={(e)=>clearErrorHandler(e)}></input>
                        </div>
                    : null }
                    <div className="w-64 ml-[10%] mt-8">
                        <span className="text-red-400 text-center text-base mt-8" id="error_assign" hidden></span> 
                    </div>
                </div>
                
                <div className="grid-rows-2 ml-36 w-[100%] mt-8">
                    <div className="grid grid-cols-2">
                        <button className="bg-[#c6c6c6] text-white bg-blue-500 hover:bg-blue-600 rounded-lg ml-[16%] h-8 w-16" onChange={()=>okayHandler()}>Okay</button><button className="bg-[#c6c6c6] text-white bg-gray-400 hover:bg-gray-500 rounded-lg h-8 w-24" onClick={()=>closeHandler()}>Nevermind</button>
                    </div> 
                    <div className="w-[100%]  text-center mt-[30%] mb-[2%] bottom-0">
                        <span onClick={()=>closeHandler()} className="cursor-pointer h-full underline mr-12">Close</span>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  );
}

   