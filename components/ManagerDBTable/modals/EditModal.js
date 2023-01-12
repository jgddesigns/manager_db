import {useState, React } from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaRegCaretSquareDown } from 'react-icons/fa'

export default function EditModal({setShowEdit, selectedEmployee, superiorMap, setNewName, setNewEmail, setChangedManager, Display, Buttons, Close, Changed, Alert, setNameChanges, setEmailChanges, setManagerChanges}) {

    const okayHandler = () => {
        if(selectedEmployee.emp_role == "Deputy" || selectedEmployee.emp_role == "Principal"){
            console.log(document.getElementById('userName').value)
            console.log(document.getElementById('userEmail').value)
            if(document.getElementById('userName').value != selectedEmployee.emp_name || document.getElementById('userEmail').value != selectedEmployee.emp_email){
                document.getElementById('activate_edit').click()
                setShowEdit(false)
            }else{
                document.getElementById('no_changes').hidden = false
            }
        }else{
            if(document.getElementById('userName').value != selectedEmployee.emp_name || document.getElementById('userEmail').value != selectedEmployee.emp_email || document.getElementById('managerName').value != selectedEmployee.emp_manager){
                document.getElementById('activate_edit').click()
                setShowEdit(false)
            }else{
                document.getElementById('no_changes').hidden = false    
            }
        }
    }

    const closeHandler = () => {
        setShowEdit(false)
    }

    //If the email is not changed, the appropriate fields will be hidden and the email input will be cleared.
    //@param e: The event that is triggered when the email is not changed.
    //@return: Void.
    const noEmailChangeHandler = (e) => {
        var emailChange = document.getElementById('userEmail')
        var noChanges = document.getElementById('no_changes')
        var errorEmail = document.getElementById('error_email')
        setNewEmail(selectedEmployee.emp_email)
        emailChange.classList.remove('border-red-500')

        if(e){
            emailChange.value = selectedEmployee.emp_email
            errorEmail.hidden = true
            emailChange.classList.add('border-cyan-400')
        }else{
            emailChange.value = ""
            noChanges.hidden = true
            emailChange.classList.remove('border-cyan-400')     
        }
    }

    //If the manager is not changed, the appropriate fields will be hidden and the manager input will be cleared.
    //@param e: The event that is triggered when the manager is not changed.
    //@return: Void.
    const noManagerChangeHandler = (e) => {
        var managerChange = document.getElementById('managerName')
        var noChanges = document.getElementById('no_changes')
        var errorManager = document.getElementById('error_manager')
        setChangedManager(selectedEmployee.emp_manager)
        managerChange.classList.remove('border-red-500')

        if(e){
            managerChange.value = selectedEmployee.emp_manager
            errorManager.hidden = true
            managerChange.classList.add('border-cyan-400')
        }else{
            managerChange.value = ""
            noChanges.hidden = true
            managerChange.classList.remove('border-cyan-400')
        }
    }

    //If the name is not changed, the appropriate fields will be hidden and the name input will be cleared.
    //@param e: The event that is triggered when the name is not changed.
    //@return: Void.
    const noNameChangeHandler = (e) => {
        var nameChange = document.getElementById('userName')
        var noChanges = document.getElementById('no_changes')
        var errorName = document.getElementById('error_name')
        setNewName(selectedEmployee.emp_name)
        nameChange.classList.remove('border-red-500')

        if(e){
            nameChange.value = selectedEmployee.emp_name
            errorName.hidden = true
            nameChange.classList.add('border-cyan-400')
        }else{
            nameChange.value = ""
            noChanges.hidden = true
            nameChange.classList.remove('border-cyan-400')
        }
    }

    //Once the email address is changed, will check the fields to see if they are valid or need to be hidden.
    //@param val: The value of the email input.
    //@return: Void.
    const emailChangeHandler = (val) => {
        var emailChange = document.getElementById('userEmail')
        var noChanges = document.getElementById('no_changes')
        var errorEmail = document.getElementById('error_email')

        setNewEmail(val)
        if(emailChange.classList.contains('border-red-500')){
            emailChange.classList.remove('border-red-500')
            errorEmail.hidden = true
        }
        
        if(emailChange.value.length > 0){
            emailChange.classList.add('border-cyan-400')
            setEmailChanges(true)
        }else{
            emailChange.classList.remove('border-cyan-400') 
        }

        if(noChanges.hidden == false){
            noChanges.hidden = true
        }
    }
    
    //Once the name is changed, will check the fields to see if they are valid or need to be hidden.
    //@param val: The value of the name input.
    //@return: Void.
    const nameChangeHandler = (val) => {
        var nameChange = document.getElementById('userName')
        var noChanges = document.getElementById('no_changes')
        var errorName = document.getElementById('error_name')

        setNewName(val)
        if(nameChange.classList.contains('border-red-500')){
            nameChange.classList.remove('border-red-500')
            errorName.hidden = true
        }

        if(nameChange.value.length > 0){
            nameChange.classList.add('border-cyan-400')
            setNameChanges(true)
        }else{
            nameChange.classList.remove('border-cyan-400') 
        }

        if(noChanges.hidden == false){
            noChanges.hidden = true
        }
    }

    //Once the manager is changed, will check the fields to see if they are valid or need to be hidden.
    //@param val: The value of the manager input.
    //@return: Void.
    const managerChangeHandler = (val) => {
        var managerChange = document.getElementById('managerName')
        var noChanges = document.getElementById('no_changes')
        var errorManager = document.getElementById('error_manager')

        if(managerChange.classList.contains('border-red-500')){
            managerChange.classList.remove('border-red-500')
            errorManager.hidden = true
        }

        if(managerChange.value.length > 0){
            managerChange.classList.add('border-cyan-400')
            setManagerChanges(true)
        }else{
            managerChange.classList.remove('border-cyan-400') 
        }

        if(noChanges.hidden == false){
            noChanges.hidden = true
        }
    }

  return (
    <div>
        <div className="flex w-[40rem] h-[52rem] bg-gray-100 drop-shadow-2xl rounded-xl rounded-tl-[4px] border-[5px] border-[#70AA9B] mb-[10%] text-black overflow-y-auto">
            <div className="grid grid-rows-2 grid-cols-1 h-[100%]">
                <div className="grid grid-rows-1 grid-cols-2">
                    <div className="bg-[#70AA9B] w-48 h-16 rounded-br-lg z-8">
                        <div className="float-left pl-4 pt-4 text-2xl font-bold text-white">Edit Employee</div>
                    </div>  
                    <div className="ml-[165%] mt-[5%]">
                        <FaEdit className="text-5xl text-[#75a3cc]"/>
                    </div>   
                </div>
                <div className="grid grid-rows-8 gap-y-8 ml-[33%] w-72 mt-[-15%]">       
                </div>
                <div className={Display}>
                    <div className="mb-8">
                        <p className="text-sm"> Enter new data for:</p>
                        <p className="font-bold italic">EFIS #{selectedEmployee.emp_efis}</p>
                        <p className="text-sm mt-8 mb-2">Current Name</p> 
                        <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 bg-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={selectedEmployee.emp_name} disabled></input>
                        <p className="text-sm mt-4 mb-2">Current Email</p> 
                        <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 bg-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={selectedEmployee.emp_email} disabled></input>
                        {selectedEmployee.emp_role != "Deputy" ? <div>
                        <p className="text-sm mt-4 mb-2">Current Manager</p> 
                        <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border bg-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={selectedEmployee.emp_manager} disabled></input>
                        </div>
                        : null }
                        <div className="w-72 grid grid-cols-2 grid-rows-1 ml-24 mt-16 mb-2">
                            <p className="text-sm float-left mt-4" id="name">New Name<span className="text-red-400">*</span></p>
                            <div className="grid grid-rows-2">
                                <span className="text-[10px] ml-12 mb-1">No Change</span>
                                <input type="checkbox" className="ml-12 h-4 " id="noNameChange" onChange={(e) => noNameChangeHandler(e.target.checked)}></input>
                            </div>
                        </div>
                        <input className="px-3 text-xl w-72 border rounded h-10  shadow appearance-none py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => nameChangeHandler(e.target.value)} id="userName"></input>
                        <div className="w-72 grid grid-cols-2 grid-rows-1 ml-24 mt-8 mb-2">
                            <p className="text-sm mt-4" id="email">New Email</p>
                            <div className="grid grid-rows-2">
                                <span className="text-[10px] ml-12 mb-1">No Change</span>
                                <input type="checkbox" className="ml-12 h-4 " id="noEmailChange" onChange={(e) => noEmailChangeHandler(e.target.checked)}></input>
                            </div>
                        </div>
        
                        <input className="px-3 text-xl w-72 border rounded h-10  shadow appearance-none py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => emailChangeHandler(e.target.value)} id="userEmail"></input>

                        {selectedEmployee.emp_role == "Chief" || selectedEmployee.emp_role == "STE" ? <div>
                        <div className="w-72 grid grid-cols-2 grid-rows-1 ml-6 mt-8 mb-2">
                            <p className="text-sm ml-16 w-36 mt-4" id="email">New Manager<span className="text-red-400">*</span></p>
                            <div className="grid grid-rows-2 ml-20">
                                <span className="text-[10px] ml-12 w-16">No Change</span>
                                <input type="checkbox" className="ml-16 h-4" id="noManagerChange" onChange={(e) => noManagerChangeHandler(e.target.checked)}></input>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 w-84">
                        <select className="px-3 text-xl w-72 border rounded h-10  shadow appearance-none mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => managerChangeHandler(e.target.value)} id="managerName" >
                            <option value="">Select Manager</option>
                            {superiorMap.map(result => {
                                return (
                                    <option value={result.manager}>{result.manager}</option>
                                )
                                })}
                        </select> <FaRegCaretSquareDown className="text-md text-gray-300 ml-12 mt-[.75rem] pointer-events-none"/>
                        </div> </div>:null}
                        <div className="grid grid-rows-auto grid-cols-1 w-88 h-10 ml-2 mb-4">
                            <span className={Alert} id="error_name" hidden>Name cannot be blank.</span> 
                            <span className={Alert} id="error_both" hidden>Please enter new data.</span> 
                            <span className={Alert} id="error_email" hidden>Please enter a valid email address.</span> 
                            <span className={Changed} id="no_changes" hidden>No information was changed.</span> 
                            <span className={Alert} id="error_manager" hidden>Please select a manager.</span> 
                        </div>
                        <div className="grid-rows-2 w-[100%] mt-24">
                            <div className={Buttons}>
                                <button className="bg-[#c6c6c6] text-white bg-blue-500 hover:bg-blue-600 rounded-lg ml-[16%] h-8 w-16" onClick={()=>okayHandler()}>Okay</button><button className="bg-[#c6c6c6] text-white bg-gray-400 hover:bg-gray-500 rounded-lg h-8 w-24" onClick={()=>closeHandler()}>Nevermind</button>
                            </div> 
                            <div className="w-[100%] text-center mt-[30%] mb-[2%] mr-[90%] bottom-0">
                                <span onClick={()=>closeHandler()} className={Close}>Close</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  );
}

   