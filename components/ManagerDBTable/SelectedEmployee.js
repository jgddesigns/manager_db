import {React, useState, useEffect} from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import AuditHandler from '../../utils/helpers/AuditHandler'
import { Grid } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManagerProcess from '../../utils/helpers/ManagerProcess'

export default function SelectedEmployee({selectedEmployee, setSelectedUser, setLoadingGraphic}) {

    const MySwal = withReactContent(Swal)

    const [newEmail, setNewEmail] = useState("")
    const [newName, setNewName] = useState("")
    const [NameChanges, setNameChanges] = useState(false)
    const [EmailChanges, setEmailChanges] = useState(false)
    const [ManagerChanges, setManagerChanges] = useState(false)
    const [loadingGraphicDisplay, setLoadingGraphicDisplay] = useState(false)
    const [user,setUser] = useState({}) 
    const [Superiors, setSuperiors] = useState([],[],[])
    const [ChangedManager, setChangedManager] = useState([],[])


    useEffect(() => {
        // fetch from api/current-user
        
        fetch("/ManagerDB/api/current-user/", {
          method: "GET",
        }).then((res) => {
          if (res.status === 200) {
            res.json().then((data) => {
            //   console.log(data);
              setUser(data)
     
            });
          }
        }
        );

    
        fetch("/ManagerDB/api/managers/", {
            method: "GET",
        }).then((res) => {
            res.json().then((data) => {
                setSuperiors(ManagerProcess(data, selectedEmployee.emp_district, selectedEmployee.emp_role, selectedEmployee.emp_efis))    
            });
        })
        
      }, [])

      
      const superiorMap = Superiors.map((name, index) => {
        return {
          manager: Superiors[0][index],
          efis: Superiors[1][index],
          current_manager: Superiors[2],
          email: Superiors[3][index]
        }
      })

    const UpdateHandler = (data) => {
        //AUDIT DATA START
        var audit_type; 

        if((data["emp_name"] != data["new_name"]) && (data["emp_email"] != data["new_email"])){
            audit_type ="Name/Email"
        }else if((data["emp_name"] != data["new_name"]) && (data["emp_email"] == data["new_email"])){
            audit_type = "Name"
        }else if((data["emp_name"] == data["new_name"]) && (data["emp_email"] != data["new_email"])){
            audit_type = "Email"
        }else{
            audit_type = ""
            return false
        }

        var date = new Date()
        date = date.toLocaleString()

        const audit_data = {
            type: audit_type,
            employee_number: user.userid,
            old_name: data["emp_name"],
            new_name: data["new_name"],
            old_email: data["emp_email"],
            new_email: data["new_email"],
            old_manager: data["old_manager"],
            new_manager: data["new_manager"],
            role: data["emp_role"],
            efis: data["emp_efis"],
            region: data["region"], 
            date_time: date,
        }
        //AUDIT DATA END


        //UPDATE API CALLS AUDIT HANDLER AFTER SUCCESSFUL RESPONSE
        fetch("/ManagerDB/api/managers/", {
            method: "PATCH",
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
            fetch("/ManagerDB/api/superiors/", {
                method: "PATCH",
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json'
              },
                body: JSON.stringify(data)
              }).then((res) => {

              fetch("/ManagerDB/api/managers/", {
                method: "GET",
              })
              setLoadingGraphic(true)
              setSelectedUser(null)  
              AuditHandler(audit_data)
            });
          }).then(() => {
            // console.log("Update Response: ", data)   
            console.log("Update Success")   
            setTimeout(() => {
                setLoadingGraphicDisplay(false)
            }, 2000) 
            toast.success('Update Successful!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }


    


    // const UpdateManagerHandler = (data) => {

    //     //AUDIT DATA START
    //     var audit_type = "Manager"; 


    //     var date = new Date()
    //     date = date.toLocaleString()
    //     const audit_data = {
    //         type: audit_type,
    //         employee_number: user.userid,
    //         old_name: data["emp_name"],
    //         new_name: "",
    //         old_email: data["emp_email"],
    //         new_email: "",
    //         old_manager: Superiors[2],
    //         new_manager: ChangedManager[0],
    //         role: data["emp_role"],
    //         efis: data["emp_efis"],
    //         region: data["region"], 
    //         date_time: date,
    //     }
    //     //AUDIT DATA END


    //     //UPDATE API CALLS AUDIT HANDLER AFTER SUCCESSFUL RESPONSE
    //     fetch("/ManagerDB/api/superiors/", {
    //         method: "PATCH",
    //         headers: {
    //             'Content-Type':'application/json',
    //             'Accept':'application/json'
    //         },
    //         body: JSON.stringify(data)
    //       }).then((res) => {
    //         res.json().then((data) => {
    //           fetch("/ManagerDB/api/managers/", {
    //             method: "GET",
    //           })
    //           setLoadingGraphic(true)
    //           setSelectedUser(null)  
    //           AuditHandler(audit_data)
    //         });
    //       }).then(() => {
    //         // console.log("Update Response: ", data)   
    //         console.log("Update Success")   
    //         setTimeout(() => {
    //             setLoadingGraphicDisplay(false)
    //         }, 2000) 
    //         toast.success('Update Successful!', {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         });
    //     })
    // }

    const SaveChanges = (selected) =>{
        setNameChanges(false)
        setEmailChanges(false)


        var new_name
        var new_email
        var new_manager
        var new_manager_email

        if(newName.length < 1){
            new_name = null
        }else{
            new_name = newName
        }
        if(newEmail.length < 1){
            new_email = null
        }else{
            new_email = newEmail
        }
        if(ChangedManager[0].length < 1){
            new_manager= null      
            new_manager_email = null
        }else{
            new_manager = ChangedManager[0]
            new_manager_email = ChangedManager[2]
        }


        if(Superiors[2]) {
            var old_manager_str = Superiors[2]
        }else{
            old_manager_str = null
        }
        
        const data = {
            emp_name: selected.emp_name,
            emp_role: selected.emp_role,
            emp_efis: selected.emp_efis,
            emp_email: selected.emp_email,
            old_manager: old_manager_str,
            new_manager: new_manager,
            new_manager_email: new_manager_email,
            region: selected.emp_district,
            new_name: new_name,
            new_email: new_email
        }

        setLoadingGraphicDisplay(true)   
        UpdateHandler(data)
    }


    // const SaveManagerChanges = (selected) =>{
    //     alert("Save Manager Changes")
    //     setManagerChanges(false)

    //     var new_manager
    //     var new_manager_email

    //     if(ChangedManager[0].length < 1){
    //         new_manager= ""      
    //         new_manager_email = ""
    //     }else{
    //         new_manager = ChangedManager[0]
    //         new_manager_email = ChangedManager[2]
    //     }

    //     const data = {
    //         emp_name: selected.emp_name,
    //         emp_role: selected.emp_role,
    //         emp_efis: selected.emp_efis,
    //         emp_email: selected.emp_email,
    //         region: selected.emp_district,
    //         new_manager: new_manager,
    //         new_manager_email: new_manager_email,
    //     }

    //     setLoadingGraphicDisplay(true)   
    //     UpdateManagerHandler(data)
    // }

    const EditEmployeeHandler = () => {
        setNameChanges(false)
        setEmailChanges(false)
        setManagerChanges(false)
        setNewName("")
        setNewEmail("")
        setChangedManager([])
        // EditEmployee()
        EditEmployee()
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

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
        }else{
            emailChange.classList.remove('border-cyan-400') 
        }

        if(noChanges.hidden == false){
            noChanges.hidden = true
        }
    }

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
        }else{
            nameChange.classList.remove('border-cyan-400') 
        }

        if(noChanges.hidden == false){
            noChanges.hidden = true
        }
    }


    const managerChangeHandler = (val) => {
        var managerChange = document.getElementById('managerName')
        var noChanges = document.getElementById('no_changes')
        var errorManager = document.getElementById('error_manager')

        // setNewName(val)
        if(managerChange.classList.contains('border-red-500')){
            managerChange.classList.remove('border-red-500')
            errorManager.hidden = true
        }

        if(managerChange.value.length > 0){
            managerChange.classList.add('border-cyan-400')
        }else{
            managerChange.classList.remove('border-cyan-400') 
        }


        if(noChanges.hidden == false){
            noChanges.hidden = true
        }
    }
    // const emailChangeHandler = (val) => {
    //     var nameChange = document.getElementById('userName')
    //     var emailChange = document.getElementById('userEmail')
    //     var managerChange = document.getElementById('managerName')
    //     var noChanges = document.getElementById('no_changes')
    //     var errorName = document.getElementById('error_name')
    //     var errorBoth = document.getElementById('error_both')
    //     var errorEmail = document.getElementById('error_email')
    //     var errorManager = document.getElementById('error_manager')
    //     setNewEmail(val)
    //     if(document.getElementById('userEmail').classList.contains('border-red-500')){
    //         document.getElementById('email').classList.remove('text-red-500')
    //         document.getElementById('userEmail').classList.remove('border-red-500')
    //         document.getElementById('userName').classList.remove('border-red-500')
    //         document.getElementById('error_email').hidden = true
    //         document.getElementById('error_both').hidden = true
    //     }
        
    //     if(document.getElementById('userEmail').value.length > 0){
    //         document.getElementById('userEmail').classList.add('border-cyan-400')
    //     }else{
    //         document.getElementById('userEmail').classList.remove('border-cyan-400') 
    //     }

    //     if(document.getElementById('no_changes').hidden == false){
    //         document.getElementById('no_changes').hidden = true
    //     }
    // }

    // const nameChangeHandler = (val) => {
    //     var nameChange = document.getElementById('userName')
    //     var emailChange = document.getElementById('userEmail')
    //     var managerChange = document.getElementById('managerName')
    //     var noChanges = document.getElementById('no_changes')
    //     var errorName = document.getElementById('error_name')
    //     var errorBoth = document.getElementById('error_both')
    //     var errorEmail = document.getElementById('error_email')
    //     var errorManager = document.getElementById('error_manager')
    //     setNewName(val)
    //     if(document.getElementById('userName').classList.contains('border-red-500')){
    //         document.getElementById('userEmail').classList.remove('border-red-500')
    //         document.getElementById('userName').classList.remove('border-red-500')
    //         document.getElementById('error_email').hidden = true
    //         document.getElementById('error_both').hidden = true
       
    //     }

    //     if(document.getElementById('userName').value.length > 0){
    //         document.getElementById('userName').classList.add('border-cyan-400')
    //     }else{
    //         document.getElementById('userName').classList.remove('border-cyan-400') 
    //     }
    //     if(document.getElementById('userEmail').value.length > 0){
    //         document.getElementById('userEmail').classList.add('border-cyan-400')
    //     }else{
    //         document.getElementById('userEmail').classList.remove('border-cyan-400') 
    //     }

    //     if(document.getElementById('no_changes').hidden == false){
    //         document.getElementById('no_changes').hidden = true
    //     }
    // }

    const SaveHandler = (emp_name, emp_role, emp_efis) => {
        MySwal.fire({
            icon: 'question',
            title: 'Confirm Changes',
            text: "Are you sure you want to save changes to this employee?",
            showCancelButton: true ,
            confirmButtonColor: 'bg-indigo-400',
        }).then(function(result) {
            if (result.value) {
                SaveChanges(emp_name, emp_role, emp_efis)
                // SaveManagerChanges(emp_name, emp_role, emp_efis)
            }
        })
    }


    const ClearHandler = () => {
        MySwal.fire({
            icon: 'warning',
            title: 'Clear Data',
            text: "Proceeding will clear all employee changes. Continue?",
            showCancelButton: true ,
            confirmButtonColor: 'bg-indigo-400',
        }).then(function(result) {
            if (result.value) {
                setNewName("")
                setNewEmail("")
                setChangedManager("")
                setEmailChanges(false)
                setNameChanges(false)
                setManagerChanges(false)
            }
        })
    }

    // const SaveManagerHandler = (emp_name, emp_role, emp_efis) => {
    //     MySwal.fire({
    //         icon: 'question',
    //         title: 'Confirm Changes',
    //         text: "Are you sure you want to change this employee's assigned manager?",
    //         showCancelButton: true ,
    //         confirmButtonColor: 'bg-indigo-400',
    //     }).then(function(result) {
    //         if (result.value) {
    //             SaveManagerChanges(emp_name, emp_role, emp_efis)
    //         }
    //     })
    // }


    // const ClearManagerHandler = () => {
    //     MySwal.fire({
    //         icon: 'warning',
    //         title: 'Clear Data',
    //         text: "Proceeding will clear all manager changes. Continue?",
    //         showCancelButton: true ,
    //         confirmButtonColor: 'bg-indigo-400',
    //     }).then(function(result) {
    //         if (result.value) {
    //             setChangedManager("")
    //             setManagerChanges(false)

    //         }

    //     })
    // }
       
    const EditManagerHandler = (e) => {
        var manager_arr = []
        setChangedManager("")
        Superiors.map((name, index) => {
            if(e == Superiors[0][index]){
                manager_arr.push(Superiors[0][index], Superiors[1][index], Superiors[3][index])
                setChangedManager(manager_arr)
                return
            }
          })
    }


    const EditManager = () => {
        MySwal.fire({
            title: "Edit Employee's Manager",
            html: (
            <div className="mb-8">
                <p className="text-sm"> Change manager for:</p>
                <p className="font-bold italic">EFIS #{selectedEmployee.emp_efis}</p>
                <p className="text-sm mt-8 mb-2">Employee</p> 
                <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 bg-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={selectedEmployee.emp_name} disabled></input>
                <p className="text-sm mt-6 mb-2">Current Manager</p> 
                <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 bg-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={Superiors[2]} disabled></input>
                <p className="text-sm text-center mt-12 mb-2" id="name">New Manager</p>
                <select className="px-3 text-xl w-72 border rounded h-10  shadow appearance-none py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="userName">
                    <option value="">Select Manager</option>
                    {superiorMap.map(result => {
                        return (
                            <option value={result.manager}>{result.manager}</option>
                        )
                        })}
                </select>
                <div className="w-36 grid grid-cols-2 grid-rows-1 ml-48 mt-4 mb-2"></div>
            </div>
            ),   
            showCancelButton: true ,
            confirmButtonColor: 'bg-indigo-400',
        }).then(function(result) {
            if (result.value) {
                if(document.getElementById('userName').value.length > 0 && document.getElementById('userName').value != Superiors[2]){
                    EditManagerHandler(document.getElementById('userName').value)
                    setManagerChanges(true)
                }
            }
        })

    }

    // const EditEmployee = async () => {

    //     MySwal.fire({
    //         title: "Edit Employee Record",
    //         html: (
    //         <div className="mb-8">
    //             <p className="text-sm"> Enter new data for:</p>
    //             <p className="font-bold italic">EFIS #{selectedEmployee.emp_efis}</p>
    //             <p className="text-sm mt-8 mb-2">Current Name</p> 
    //             <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 bg-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={selectedEmployee.emp_name} disabled></input>
    //             <p className="text-sm mt-4 mb-2">Current Email</p> 
    //             <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 bg-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={selectedEmployee.emp_email} disabled></input>
    //             <div className="w-36 grid grid-cols-2 grid-rows-1 ml-48 mt-12 mb-2">
    //                 <p className="text-sm" id="name">New Name</p>
    //             </div>
    //             <input className="px-3 text-xl w-72 border rounded h-10  shadow appearance-none py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => nameChangeHandler(e.target.value)} id="userName"></input>
    //             <div className="w-36 grid grid-cols-2 grid-rows-1 ml-48 mt-4 mb-2">
    //                 <p className="text-sm" id="email">New Email</p>
    //                 {/* <input type="checkbox" class="h-4" value="false" /><span class="text-xs">Set Blank</span> */}
    //             </div>
 
    //             <input className="px-3 text-xl w-72 border rounded h-10  shadow appearance-none py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => emailChangeHandler(e.target.value)} id="userEmail"></input>
                 
    //             <div className="grid grid-rows-auto grid-cols-1 w-88 h-10 ml-2 mb-4">
    //                 <span className="text-red-400 text-center font-bold mt-8" id="error_both" hidden>Please enter a new name or email address.</span> 
    //                 <span className="text-red-400 text-center static font-bold mt-8" id="error_email" hidden>Please enter a valid email address.</span> 
    //                 <span className="text-cyan-500 text-center font-bold mt-8" id="no_changes" hidden>No information was changed.</span> 
    //             </div>
    //         </div>
    //         ),   
    //         showCancelButton: true ,
    //         confirmButtonColor: 'bg-indigo-400',

    //         preConfirm: function() {
    //             try{
    //             var new_email = document.getElementById('userEmail').value
    //             }catch{
    //                 new_email = ""
    //             }
    //             try{ 
    //             var new_name = document.getElementById('userName').value
    //             }catch{
    //                 new_name = ""
    //             }
    //             return new Promise(function(resolve){
    //                 if((new_name == selectedEmployee.emp_name) && (new_email  == selectedEmployee.emp_email)){
    //                     document.getElementById('no_changes').hidden = false
    //                     resolve(false)
    //                 } 
    //                 if((new_name != "" && new_email == "") || (new_email != "" && validateEmail(new_email))){
    //                     resolve()
    //                 }else if (new_name == "" && new_email == ""){
    //                     document.getElementById('userName').classList.remove('border-cyan-400')
    //                     document.getElementById('userEmail').classList.remove('border-cyan-400')
    //                     document.getElementById("userName").classList.add("border-red-500")
    //                     document.getElementById("userEmail").classList.add("border-red-500")
    //                     document.getElementById('error_both').hidden = false
    //                     resolve(false)
    //                 }
    //                 if (new_email != "" && !validateEmail(new_email)){      
    //                     document.getElementById('userEmail').classList.remove('border-cyan-400')
    //                     document.getElementById("userEmail").classList.add("border-red-500")
    //                     document.getElementById('error_email').hidden = false
    //                     resolve(false)
    //                 }
                    
    //              })
    //         },                        
    //         }).then(function(result, new_name, new_email){
    //             if (result.value) {  
    //                 try{
    //                     var new_email = document.getElementById('userEmail').value
    //                 }catch{
    //                     new_email = ""
    //                 }
    //                 try{ 
    //                     var new_name = document.getElementById('userName').value
    //                 }catch{
    //                     new_name = ""
    //                 }

    //                 if(new_name != ""){
    //                     setNameChanges(true)    
    //                 }
                    
    //                 if(new_email != ""){
    //                     setEmailChanges(true)
    //                 }
    //             }
    //         })
    // }


    const EditEmployee = async () => {

        MySwal.fire({
            title: "Edit Employee Record",
            html: (
            <div className="mb-8">
                <p className="text-sm"> Enter new data for:</p>
                <p className="font-bold italic">EFIS #{selectedEmployee.emp_efis}</p>
                <p className="text-sm mt-8 mb-2">Current Name</p> 
                <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 bg-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={selectedEmployee.emp_name} disabled></input>
                <p className="text-sm mt-4 mb-2">Current Email</p> 
                <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border py-2 bg-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={selectedEmployee.emp_email} disabled></input>
                <p className="text-sm mt-4 mb-2">Current Manager</p> 
                <input className="px-3 text-xl w-72 rounded h-10 shadow appearance-none border bg-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={Superiors[2]} disabled></input>
                <div className="w-36 grid grid-cols-2 grid-rows-1 ml-48 mt-16 mb-2">
                    <p className="text-sm" id="name">New Name</p>
                </div>
                <input className="px-3 text-xl w-72 border rounded h-10  shadow appearance-none py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => nameChangeHandler(e.target.value)} id="userName"></input>
                <div className="w-36 grid grid-cols-2 grid-rows-1 ml-48 mt-4 mb-2">
                    <p className="text-sm" id="email">New Email</p>
                    {/* <input type="checkbox" class="h-4" value="false" /><span class="text-xs">Set Blank</span> */}
                </div>
 
                <input className="px-3 text-xl w-72 border rounded h-10  shadow appearance-none mt-2 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => emailChangeHandler(e.target.value)} id="userEmail"></input>
                
                <p className="text-sm text-center mt-6 mb-2" id="name">New Manager</p>
                <select className="px-3 text-xl w-72 border rounded h-10  shadow appearance-none mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => managerChangeHandler(e.target.value)} id="managerName">
                    <option value="">Select Manager</option>
                    {superiorMap.map(result => {
                        return (
                            <option value={result.manager}>{result.manager}</option>
                        )
                        })}
                </select> 
                <div className="grid grid-rows-auto grid-cols-1 w-88 h-10 ml-2 mb-4">
                    <span className="text-red-400 text-center font-bold mt-8" id="error_name" hidden>Name cannot be blank.</span> 
                    <span className="text-red-400 text-center font-bold mt-8" id="error_both" hidden>Please enter new data.</span> 
                    <span className="text-red-400 text-center static font-bold mt-8" id="error_email" hidden>Please enter a valid email address.</span> 
                    <span className="text-cyan-500 text-center font-bold mt-8" id="no_changes" hidden>No information was changed.</span> 
                    <span className="text-red-400 text-center font-bold mt-8" id="error_manager" hidden>Please select a manager.</span> 
                </div>
            </div>
            ),   
            showCancelButton: true ,
            confirmButtonColor: 'bg-indigo-400',

            preConfirm: function() {
                var nameChange = document.getElementById('userName')
                var emailChange = document.getElementById('userEmail')
                var managerChange = document.getElementById('managerName')
                var noChanges = document.getElementById('no_changes')
                var errorName = document.getElementById('error_name')
                var errorBoth = document.getElementById('error_both')
                var errorEmail = document.getElementById('error_email')
                var errorManager = document.getElementById('error_manager')

                try{ 
                    var new_name = nameChange.value
                }catch{
                    new_name = ""
                }
                try{
                    var new_email = emailChange.value
                }catch{
                    new_email = ""
                }
                try{
                    var new_manager = managerChange.value
                }catch{
                    new_manager = ""
                }

                return new Promise(function(resolve){
                    if((new_name == selectedEmployee.emp_name) && (new_email  == selectedEmployee.emp_email) && (new_manager == Superiors[2])) {
                        noChanges.hidden = false
                        resolve(false)
                    }else{
                        noChanges.hidden = true
                    }
                    if (new_name == ""){
                        nameChange.classList.remove('border-cyan-400')
                        emailChange.classList.remove('border-cyan-400')
                        managerChange.classList.remove('border-cyan-400')
                        nameChange.classList.add("border-red-500")
                        errorName.hidden = false

                        resolve(false)
                    }else{
                        nameChange.classList.remove('border-red-500')
                        errorName.hidden = true
                    }

                    if ((new_email != "") && !validateEmail(new_email)){      
                        nameChange.classList.remove('border-cyan-400')
                        emailChange.classList.add("border-red-500")
                        managerChange.classList.remove('border-cyan-400')
                        errorEmail.hidden = false

                        resolve(false)
                    }else{
                        emailChange.classList.remove('border-red-500')
                        errorEmail.hidden = true
                    }

                    if (new_manager == ""){      
                        nameChange.classList.remove('border-cyan-400')
                        emailChange.classList.remove("border-cyan-400")
                        managerChange.classList.add("border-red-500")
                        errorManager.hidden = false

                        resolve(false)
                    }else{
                        managerChange.classList.remove('border-red-500')
                        errorManager.hidden = true
                    }

                    if(new_name != "" && (new_email == "" || validateEmail(new_email)) && managerChange.value){
                        resolve()
                    }

                    
                 })
            },                        
            }).then(function(result, new_name, new_email){
                var nameChange = document.getElementById('userName')
                var emailChange = document.getElementById('userEmail')
                var managerChange = document.getElementById('managerName')

                if (result.value) {  
                    try{ 
                        var new_name = nameChange.value
                    }catch{
                        new_name = ""
                    }

                    try{
                        var new_email = emailChange.value
                    }catch{
                        new_email = ""
                    }

                    try{ 
                        var new_manager = managerName.value
                    }catch{
                        new_manager = ""
                    }

                    if(new_name != ""){
                        setNameChanges(true)    
                    }
                    
                    if(new_email != ""){
                        setEmailChanges(true)
                    }

                    if(new_manager != ""){
                        if(managerChange.value.length > 0 && managerChange.value != Superiors[2]){
                            EditManagerHandler(managerChange.value)
                            setManagerChanges(true)
                        }
                    }
                }
            })
    }



    return (
    
        <div className='w-full'>
            {!loadingGraphicDisplay ? 
            <div>
                <h2 className="px-4 py-2 text-center w-full text-xl">Selected Employee:</h2>
                <table className="table-auto w-full mt-12 static">
                    
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
                        {selectedEmployee.emp_role == "Chief" || selectedEmployee.emp_role == "STE" ? <tr> <td className="border px-4 py-2">Manager:</td>
                     <td className="border px-4 py-2">{Superiors[2]}{ChangedManager[0] ? <span className="float-right text-white bg-gray-300 rounded px-2 mr-2"><span className="text-xs font-bold underline">New:</span> {ChangedManager[0]}</span>:null}</td> </tr> : null}
                    </tbody>
                </table>
                <div className="float-right grid grid-rows-3">
                    <button className="float-right bg-indigo-400 hover:bg-indigo-500 text-white rounded mt-4 mr-8 h-6 w-16 text-xs" onClick={() => EditEmployeeHandler()}>Edit</button>
                    {(NameChanges || EmailChanges || ManagerChanges) ?  <button className="float-right bg-green-500 hover:bg-green-600 text-white rounded mt-2 h-6 w-16 text-xs" onClick={() => SaveHandler(selectedEmployee)}>Save</button>   : null}
                    {(NameChanges || EmailChanges || ManagerChanges) ?  <button className="float-right bg-gray-500 hover:bg-gray-600 text-white rounded h-6 w-16 text-xs" onClick={() => ClearHandler()}>Clear</button>   : null}
                </div>
                {/* {selectedEmployee.emp_role == "Chief" || selectedEmployee.emp_role == "STE" ?<div className="float-left grid grid-rows-3"> <button className="float-left bg-indigo-600 hover:bg-indigo-800 text-white rounded mt-4 ml-6 h-6 w-16 text-xs" onClick={() => EditManager()}>Manager</button> {ManagerChanges ? <button className="float-left bg-green-700 hover:bg-green-800 text-white rounded ml-6 mt-2 h-6 w-16 text-xs" onClick={() => SaveManagerHandler(selectedEmployee)}>Save</button>  :null} 
                {ManagerChanges ?  <button className="float-left bg-gray-600 hover:bg-gray-700 text-white rounded ml-6 h-6 w-16 text-xs" onClick={() => ClearManagerHandler()}>Clear</button>   : null}</div>:null} */}
                </div> :
            <div className="grid place-content-center mt-48">
                <div>
                    <Grid
                        height = "80"
                        width = "80"
                        radius = "9"
                        color = '#70AA9B'
                        ariaLabel = 'three-dots-loading'     
                        wrapperStyle
                        wrapperClass
                    /> 
                </div>
            </div> 
            }
        </div>
      );
}



