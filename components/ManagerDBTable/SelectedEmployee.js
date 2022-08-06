import {React, useState, useEffect} from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import UpdateHandler from '../../utils/helpers/UpdateHandler'


export default function SelectedEmployee({selectedEmployee}) {

    const MySwal = withReactContent(Swal)

    const [newEmail, setNewEmail] = useState("")
    const [newName, setNewName] = useState("")
    const [NameChanges, setNameChanges] = useState(false)
    const [EmailChanges, setEmailChanges] = useState(false)

    const SaveChanges = (name, role, efis) =>{
        setNameChanges(false)
        setEmailChanges(false)

        var old_data = []
        var new_data = []
        var data = []

    

        old_data.push(name, role, efis)
        new_data.push(newName, newEmail)
        data = {
            old_data: old_data,
            new_data: new_data
        }     
        UpdateHandler(data)

    }

    const EditEmployeeHandler = () => {
        setNameChanges(false)
        setEmailChanges(false)
        setNewName("")
        setNewEmail("")
        EditEmployee()
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const emailChangeHandler = (val) => {
        setNewEmail(val)
        if(document.getElementById('userEmail').classList.contains('border-red-500')){
            document.getElementById('email').classList.remove('text-red-500')
            document.getElementById('userEmail').classList.remove('border-red-500')
            document.getElementById('error_email').hidden = true
            document.getElementById('error_both').hidden = true
        }
    }

    const nameChangeHandler = (val) => {
        setNewName(val)
        if(document.getElementById('userName').classList.contains('border-red-500')){
            document.getElementById('email').classList.remove('text-red-500')
            document.getElementById('userEmail').classList.remove('border-red-500')
            document.getElementById('name').classList.remove('text-red-500')
            document.getElementById('userName').classList.remove('border-red-500')
            document.getElementById('error_email').hidden = true
            document.getElementById('error_both').hidden = true
        }
    }


    const EditEmployee = async () => {

        MySwal.fire({
            title: "Edit Employee Record",
            html: (
            <div className="mb-8">
                <p className="text-sm"> Enter new data for:</p>
                <p className="font-bold italic">EFIS #{selectedEmployee.emp_efis}</p>
                <p className="text-sm mt-8 mb-2">Current Name</p> 
                <input className="px-3 text-xl w-72 bg-gray-300 text-white rounded h-10" value={selectedEmployee.emp_name} disabled></input>
                <p className="text-sm mt-4 mb-2">Current Email</p> 
                <input className="px-3 text-xl w-72 bg-gray-300 text-white rounded h-10" value={selectedEmployee.emp_email} disabled></input>
                <div className="w-36 grid grid-cols-2 grid-rows-1 ml-48 mt-12 mb-2">
                    <p class="text-sm" id="name">New Name</p>
               
                </div>
                <input className="px-3 text-xl w-72 border rounded h-10" onChange={(e) => nameChangeHandler(e.target.value)} id="userName"></input>
                <div className="w-36 grid grid-cols-2 grid-rows-1 ml-48 mt-4 mb-2">
                    <p className="text-sm" id="email">New Email</p>
               
                </div> 
                <input class="px-3 text-xl w-72 border rounded h-10 mb-8" onChange={(e) => emailChangeHandler(e.target.value)} id="userEmail"></input> 
                <div className="grid grid-cols-1 w-88 h-10 ml-16 fixed mb-4">
                    <span className="text-red-400 text-center" id="error_both" hidden>Please enter a new name or email address.</span> 
                    <span className="text-red-400 ml-8 text-center fixed" id="error_email" hidden>Please enter a valid email address.</span> 
                </div>

            </div>
            ),   
            showCancelButton: true ,
            confirmButtonColor: 'bg-indigo-400',

            preConfirm: function() {
                try{
                var new_email = document.getElementById('userEmail').value
                }catch{
                    new_email = ""
                }
                try{ 
                var new_name = document.getElementById('userName').value
                }catch{
                    new_name = ""
                }
                return new Promise(function(resolve){
                    if((new_name != "" && new_email == "") || (new_email != "" && validateEmail(new_email))){
                        resolve()
                    }else if (new_name == "" && new_email == ""){
                        document.getElementById("name").classList.add("text-red-500")
                        document.getElementById("email").classList.add("text-red-500")
                        document.getElementById("userName").classList.add("border-red-500")
                        document.getElementById("userEmail").classList.add("border-red-500")
                        document.getElementById('error_both').hidden = false
                        resolve(false)
                    }
                    if (new_email != "" && !validateEmail(new_email)){      
                        document.getElementById("email").classList.add("text-red-500")
                        document.getElementById("userEmail").classList.add("border-red-500")
                        document.getElementById('error_email').hidden = false
                        resolve(false)
                    }
                 })
            },                        
            }).then(function(result, new_name, new_email){
                if (result.value) {  
                    //NEEDS WORK. DATA WON'T PASS IN RESPONSE? HAD TO DECLARE AGAIN...I SWEAR I'VE DONE THIS BEFORE. BTW, HAD TO USE JS IN THIS SWAL BECAUSE THE REACT STATES WON'T UPDATE UNTIL THE MODAL CLOSED.
                    try{
                        var new_email = document.getElementById('userEmail').value
                    }catch{
                        new_email = ""
                    }
                    try{ 
                        var new_name = document.getElementById('userName').value
                    }catch{
                        new_name = ""
                    }

                    if(new_name != ""){
                        setNameChanges(true)    
                    }
                    
                    if(new_email != ""){
                        setEmailChanges(true)
                    }
                }
            })
    }


    return (
    
        <div className='w-full'>
            <h2 className="px-4 py-2 text-center w-full text-xl">Selected Employee:</h2>
            <table className="table-auto w-full mt-20 static">
                
                <tbody>
                    <tr>
                        <td className="border px-4 py-2 w-16">Name:</td>
                        <td className="border px-4 py-2 w-96">{selectedEmployee.emp_name} {NameChanges ? <span className="float-right text-white bg-gray-300 rounded px-2 mr-2"><span className="text-xs font-bold underline">New:</span> {newName}</span>:null}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Email:</td>
                        <td className="border px-4 py-2">{selectedEmployee.emp_email} {EmailChanges ? <span className="float-right text-white bg-gray-300 rounded px-2 mr-2"><span className="text-xs font-bold underline">New:</span> {newEmail}</span>:null}</td> 
                        
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Role:</td>
                        <td className="border px-4 py-2">{selectedEmployee.emp_role}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">EFIS:</td>
                        <td className="border px-4 py-2">{selectedEmployee.emp_efis}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">District:</td>
                        <td className="border px-4 py-2">{selectedEmployee.emp_district}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">TRAM:</td>
                        <td className="border px-4 py-2">{selectedEmployee.emp_tram}</td>
                    </tr>
                </tbody>
            </table><div className="float-right grid grid-rows-2">
            <button className="float-right bg-indigo-400 hover:bg-indigo-500 text-white rounded mt-4 mr-8 h-6 w-16 text-xs" onClick={() => EditEmployeeHandler()}>Edit</button>
            {(NameChanges || EmailChanges) ?  <button className="float-right bg-green-500 hover:bg-green-600 text-white rounded mt-2 h-6 w-16 text-xs" onClick={() => SaveChanges(selectedEmployee.emp_name,selectedEmployee.emp_role,  selectedEmployee.emp_efis)}>Save</button>   : null}
    
            </div>
        </div>
      );
}



