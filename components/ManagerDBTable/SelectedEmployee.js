import {React, useState, useEffect} from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import AuditProcess from '../../utils/helpers/AuditProcess'
import AssignModal from './modals/AssignModal'
import EditModal from './modals/EditModal'
import { Grid } from 'react-loader-spinner'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ManagerProcess from '../../utils/helpers/ManagerProcess'



export default function SelectedEmployee({selectedEmployee, setSelectedUser, setLoadingGraphic}) {
    const MySwal = withReactContent(Swal)
    const [newEmail, setNewEmail] = useState("")
    const [newName, setNewName] = useState("")
    const [NameChanges, setNameChanges] = useState(false)
    const [EmailChanges, setEmailChanges] = useState(false)
    const [ManagerChanges, setManagerChanges] = useState(false)
    const [loadingGraphicDisplay, setLoadingGraphicDisplay] = useState(false)
    const [user, setUser] = useState({}) 
    const [Superiors, setSuperiors] = useState([],[],[])
    const [ChangedManager, setChangedManager] = useState([],[])
    const [AssignCheck, setAssignCheck] = useState(false)
    const [showAssign, setShowAssign] = useState(false)
    const [showEdit, setShowEdit] = useState(false)

    useEffect(() => {
        fetch("/ManagerDB/api/current-user/", {
            method: "GET",
          }).then((res) => {
            if (res.status === 200) {
              res.json().then((data) => {
                setUser(data)
              });
            }
        });

        fetch("/ManagerDB/api/managers/", {
            method: "GET",
        }).then((res) => {
            res.json().then((data) => {
                setSuperiors(ManagerProcess(data, selectedEmployee)) 
            })
        }) 
    }, [])
  
    const superiorMap = Superiors.map((name, index) => {
        return {
          manager: Superiors[0][index],
          efis: Superiors[1][index],
          current_manager: selectedEmployee.emp_manager,
          email: Superiors[3][index]
        }
    })

    //After the employee information is updated, the audit information is sent to the database
    //@param data: The information to update the employee with.
    //@return: Void.
    const UpdateProcess = (data) => {
        var audit_type = ""
        var nameInclude = false
        var emailInclude = false
        var new_name = null
        var old_email = null
        var new_email = null
        var new_manager = null

        if(data["new_name"] && (data["new_name"] != data["emp_name"])){
            audit_type = audit_type + "Name"
            nameInclude = true
            new_name = data["new_name"]
        }

        if(data["emp_email"]){
            old_email = data["emp_email"]
        }

        if(data["new_email"] != data["emp_email"]){
            if(nameInclude){
                audit_type = audit_type + "/Email"
            }else{
                audit_type = audit_type + "Email"
            }
            emailInclude = true
            new_email = data["new_email"]
        }

        if(data["new_manager"] && (data["new_manager"] != data["old_manager"])){
            new_manager = data["new_manager"]
            if(nameInclude || emailInclude){
                audit_type = audit_type + "/Manager"
            }else{
                audit_type = audit_type + "Manager"
            }
            new_manager = data["new_manager"]
        }

        var date = new Date()
        date = date.toLocaleString()
        const audit_data = {
            type: audit_type,
            employee_number: user.userid,
            old_name: data["emp_name"],
            new_name: new_name,
            old_email: old_email,
            new_email: new_email,
            old_manager: data["old_manager"],
            new_manager: new_manager,
            role: data["emp_role"],
            efis: data["emp_efis"],
            region: data["region"], 
            date_time: date,
        }

        fetch("/ManagerDB/api/managers/", {
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
              AuditProcess(audit_data)
          }).then(() => {
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
            document.getElementById('set_clear').click()
        })
    }

    //Once the employee information is updated, the audit information is sent to the database.
    //@param selected: The information to update the employee with.
    //@return: Void.
    const SaveChanges = (selected) =>{
        setNameChanges(false)
        setEmailChanges(false)
        var new_name
        var new_email
        var new_manager
        var new_manager_email

        if(newName.length < 1){
            new_name = ""
        }else{
            new_name = newName
        }
        if(newEmail.length < 1){
            new_email = ""
        }else{
            new_email = newEmail
        }

        if(ChangedManager[0] == ""){
            new_manager= ""      
            new_manager_email = ""
        }else{
            new_manager = ChangedManager[0]
            new_manager_email = ChangedManager[2]
        }

        if(selectedEmployee.emp_manager) {
            var old_manager_str = selectedEmployee.emp_manager
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
        UpdateProcess(data)
    }

    //Sets all changes to false and clears the input fields, the calls the EditEmployee function.
    //@param: None.
    //@return: Void.
    const EditEmployeeHandler = () => {
        console.log(selectedEmployee.emp_children)
        setNameChanges(false)
        setEmailChanges(false)
        setManagerChanges(false)
        setNewName("")
        setNewEmail("")
        setChangedManager([])
        EditEmployee()
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
        }else{
            nameChange.classList.remove('border-cyan-400') 
        }

        if(noChanges.hidden == false){
            noChanges.hidden = true
        }
    }

    //Will call the sweet alert that displays the save message relating to the employee edit form. 
    //@param emp_name: The name of the employee.
    //@param emp_role: The role of the employee.
    //@param emp_efis: The efis of the employee.
    //@return: Void.
    const SaveHandler = () => {
        document.getElementById('save_test').click()
    }

    //Displays the sweet alert that displays the clear message relating to the employee edit form.
    //@param: None.
    //@return: Void.
    const ClearHandler = () => {
        document.getElementById('clear_data_test').click()
    }

    //Will clear the current displayed employee from the database. The row is maintained in the database, but the employee is removed from the table.
    //@param: None.
    //@return: Void.
    const clearEmployeeHandler = () => {
        document.getElementById('clear_test').click()   
    }

    const activateClearEmployee = () => {
        const data = {
            efis: selectedEmployee.emp_efis,
            role: selectedEmployee.emp_role
        }
        setLoadingGraphicDisplay(true)
        setSelectedUser(null)  
        fetch("/ManagerDB/api/clear/", {
            method: "PATCH",
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(data)
        }).then(() => {
          console.log("Clear Success")   
          setTimeout(() => {
              setLoadingGraphicDisplay(false)
          }, 2000) 
          toast.success('Clear Successful!', {
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

    const activateSaveEmployee = (emp_name, emp_role, emp_efis) => {
        SaveChanges(emp_name, emp_role, emp_efis)
    }

    const activateClearData = () => {
        setNewName("")
        setNewEmail("")
        setChangedManager("")
        setEmailChanges(false)
        setNameChanges(false)
        setManagerChanges(false)
    }




    //Calls the assign employee sweet alert that will allow the user to assign employees under an inserted with the insert function.
    //@param: None.
    //@return: Void.
    const AssignEmployees = () => {
        setShowAssign(true)
    }

    const activateAssigned = () => {
        try{ 
            var prin_name = document.getElementById("assign_prin_name").value
        }catch{
            prin_name = ""
        }
        var valid_prin_name = validateName(prin_name)
        try{ 
            var prin_unit = document.getElementById("assign_prin_unit").value
        }catch{
            prin_unit = ""
        }
        var valid_prin_unit = validateUnit(prin_unit) 
        try{ 
            var prin_efis = document.getElementById("assign_prin_efis").value 
        }catch{
            prin_efis = ""
        }
        var valid_prin_efis = validateEFIS(prin_efis)
        try{ 
            var prin_email = document.getElementById("assign_prin_email").value
        }catch{
            prin_email = ""
        }
        var valid_prin_email = validateEmail(prin_email) 
        
        if(selectedEmployee.emp_role == "Principal" || selectedEmployee.emp_role == "Chief"){
            valid_prin_name = true
            valid_prin_unit = true
            valid_prin_efis = true
            valid_prin_email = true
        }
        try{ 
            var chief_name = document.getElementById("assign_chief_name").value 
        }catch{
            chief_name = ""
        }
        var valid_chief_name = validateName(chief_name)
        try{ 
            var chief_unit = document.getElementById("assign_chief_unit").value 
        }catch{
            chief_unit = ""
        }
        var valid_chief_unit = validateUnit(chief_unit)
        try{ 
            var chief_efis = document.getElementById("assign_chief_efis").value 
        }catch{
            chief_efis = ""
        }
        var valid_chief_efis = validateEFIS(chief_efis)
        try{ 
            var chief_email = document.getElementById("assign_chief_email").value 
        }catch{
            chief_email = ""
        }
        var valid_chief_email = validateEmail(chief_email)
        if(selectedEmployee.emp_role == "Chief"){
            valid_chief_name = true
            valid_chief_unit = true
            valid_chief_efis = true
            valid_chief_email = true
        }
        try{ 
            var ste_name = document.getElementById("assign_ste_name").value 
        }catch{
            ste_name = ""
        }
        var valid_ste_name = validateName(ste_name)
        try{ 
            var ste_unit = document.getElementById("assign_ste_unit").value 
        }catch{
            ste_unit = ""
        }
        var valid_ste_unit = validateUnit(ste_unit)
        try{ 
            var ste_efis = document.getElementById("assign_ste_efis").value 
        }catch{
            ste_efis = ""
        }
        var valid_ste_efis = validateEFIS(ste_efis)
        try{ 
            var ste_email = document.getElementById("assign_ste_email").value 
        }catch{
            ste_email = ""
        }
        var valid_ste_email = validateEmail(ste_email)
        if(selectedEmployee.emp_role == "STE"){
            valid_ste_name = true
            valid_ste_unit = true
            valid_ste_efis = true
            valid_ste_email = true
        }
        if(valid_prin_name && valid_prin_unit && valid_prin_efis && valid_prin_email && valid_chief_name && valid_chief_unit && valid_chief_efis && valid_chief_email && valid_ste_name && valid_ste_unit && valid_ste_efis && valid_ste_email){
            var data = {
                update_role: selectedEmployee.emp_role,
                update_name: selectedEmployee.emp_name,
                update_unit: selectedEmployee.emp_unit,
                update_efis: selectedEmployee.emp_efis,
                update_email: selectedEmployee.emp_email,
                prin_name: prin_name,
                prin_unit: prin_unit,
                prin_efis: prin_efis,
                prin_email: prin_email,
                chief_name: chief_name,
                chief_unit: chief_unit,
                chief_efis: chief_efis,
                chief_email: chief_email,
                ste_name: ste_name,
                ste_unit: ste_unit,
                ste_efis: ste_efis,
                ste_email: ste_email,
            }
            try{ 
                document.getElementById("assign_prin_name").classList.remove("border-red-500")
                document.getElementById("prin_name_text").classList.remove("text-red-500")
            }catch{}
            try{
                document.getElementById("assign_prin_unit").classList.remove("border-red-500")
                document.getElementById("prin_unit_text").classList.remove("text-red-500")
            }catch{}
            try{
                document.getElementById("assign_prin_efis").classList.remove("border-red-500")
                document.getElementById("prin_efis_text").classList.remove("text-red-500")
            }catch{}
            try{
                document.getElementById("assign_prin_email").classList.remove("border-red-500")
                document.getElementById("prin_email_text").classList.remove("text-red-500")        
            }catch{}
            
            try{ 
                document.getElementById("assign_chief_name").classList.remove("border-red-500")
                document.getElementById("chief_name_text").classList.remove("text-red-500")
            }catch{}
            try{
                document.getElementById("assign_chief_unit").classList.remove("border-red-500")
                document.getElementById("chief_unit_text").classList.remove("text-red-500")
            }catch{}
            try{
                document.getElementById("assign_chief_efis").classList.remove("border-red-500")
                document.getElementById("chief_efis_text").classList.remove("text-red-500")
            }catch{}
            try{
                document.getElementById("assign_chief_email").classList.remove("border-red-500")
                document.getElementById("chief_email_text").classList.remove("text-red-500")
            }catch{}
            
            try{ 
                document.getElementById("assign_ste_name").classList.remove("border-red-500")
                document.getElementById("ste_name_text").classList.remove("text-red-500")
            }catch{}
            try{
                document.getElementById("assign_ste_unit").classList.remove("border-red-500")
                document.getElementById("ste_unit_text").classList.remove("text-red-500")
            }catch{}
            try{
                document.getElementById("assign_ste_efis").classList.remove("border-red-500")
                document.getElementById("ste_efis_text").classList.remove("text-red-500")
            }catch{}
            try{
                document.getElementById("assign_ste_email").classList.remove("border-red-500")
                document.getElementById("ste_email_text").classList.remove("text-red-500")
            }catch{} 
            setAssignCheck(true)
            InsertAssigned(data)
        }else{
            try{ 
                if(document.getElementById("assign_prin_name").value == ""){
                    document.getElementById("assign_prin_name").classList.add("border-red-500")
                    document.getElementById("prin_name_text").classList.add("text-red-500")
                }
                if(document.getElementById("assign_prin_unit").value == ""){
                    document.getElementById("assign_prin_unit").classList.add("border-red-500")
                    document.getElementById("prin_unit_text").classList.add("text-red-500")
                }
                if(document.getElementById("assign_prin_efis").value == ""){
                    document.getElementById("assign_prin_efis").classList.add("border-red-500")
                    document.getElementById("prin_efis_text").classList.add("text-red-500")
                }
                if(document.getElementById("assign_prin_email").value == ""){
                    document.getElementById("assign_prin_email").classList.add("border-red-500")
                    document.getElementById("prin_email_text").classList.add("text-red-500")
                }
            }catch{}

            try{ 
                if(document.getElementById("assign_chief_name").value == ""){
                    document.getElementById("assign_chief_name").classList.add("border-red-500")
                    document.getElementById("chief_name_text").classList.add("text-red-500")
                }
                if(document.getElementById("assign_chief_unit").value == ""){
                    document.getElementById("assign_chief_unit").classList.add("border-red-500")
                    document.getElementById("chief_unit_text").classList.add("text-red-500")
                }
                if(document.getElementById("assign_chief_efis").value == ""){
                    document.getElementById("assign_chief_efis").classList.add("border-red-500")
                    document.getElementById("chief_efis_text").classList.add("text-red-500")
                }
                if(document.getElementById("assign_chief_email").value == ""){
                    document.getElementById("assign_chief_email").classList.add("border-red-500")
                    document.getElementById("chief_email_text").classList.add("text-red-500")
                }
            }catch{}

            try{ 
                if(document.getElementById("assign_ste_name").value == ""){
                    document.getElementById("assign_ste_name").classList.add("border-red-500")
                    document.getElementById("ste_name_text").classList.add("text-red-500")
                }
                if(document.getElementById("assign_ste_unit").value == ""){
                    document.getElementById("assign_ste_unit").classList.add("border-red-500")
                    document.getElementById("ste_unit_text").classList.add("text-red-500")
                }
                if(document.getElementById("assign_ste_efis").value == ""){
                    document.getElementById("assign_ste_efis").classList.add("border-red-500")
                    document.getElementById("ste_efis_text").classList.add("text-red-500")
                }
                if(document.getElementById("assign_ste_email").value == ""){
                    document.getElementById("assign_ste_email").classList.add("border-red-500")
                    document.getElementById("ste_email_text").classList.add("text-red-500")
                }
            }catch{}

            document.getElementById('error_assign').innerHTML = "Please fill out all fields"
            document.getElementById('error_assign').hidden = false
        }

    }

    //After the information has been filled out in the assign form, this function will insert the data into the database.
    //@param data: The data to be inserted.
    //@return: Void.
    const InsertAssigned = (data) => {
        fetch("/ManagerDB/api/assign/", {
            method: "PATCH",
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log(res)
        })
    }

    //When the manager is changed, the changed manager state will be set to the new manager for further procesing after the form is submitted.
    //@param e: The event that is triggered when the manager is changed.
    //@return: Void.
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

    const activateEdit = () => {
        var nameChange = document.getElementById('userName')
        var emailChange = document.getElementById('userEmail')
        try{
            var managerChange = document.getElementById('managerName')
        }catch{
            managerChange = null
        }
        var noChanges = document.getElementById('no_changes')
        var errorName = document.getElementById('error_name')
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

        if(managerChange){
            if((new_name == selectedEmployee.emp_name) && (new_email  == selectedEmployee.emp_email) && new_manager == selectedEmployee.emp_manager) {
                noChanges.hidden = false
            }else{
                noChanges.hidden = true
            }
        }else{
            if((new_name == selectedEmployee.emp_name) && (new_email  == selectedEmployee.emp_email)) {
                noChanges.hidden = false
            }else{
                noChanges.hidden = true
            }
        }

        if (new_name == ""){
            nameChange.classList.remove('border-cyan-400')
            emailChange.classList.remove('border-cyan-400')
            if(managerChange){
                managerChange.classList.remove('border-cyan-400')
            }
            nameChange.classList.remove("border-cyan-400")
            nameChange.classList.add("border-red-500")
            errorName.hidden = false
        }else{
            nameChange.classList.remove('border-red-500')
            errorName.hidden = true
        }

        if ((new_email != "") && !validateEmail(new_email)){      
            nameChange.classList.remove('border-cyan-400')
            emailChange.classList.remove("border-cyan-400")
            emailChange.classList.add("border-red-500")
            if(managerChange){
                managerChange.classList.remove('border-cyan-400')
            }
            errorEmail.hidden = false
        }else{
            emailChange.classList.remove('border-red-500')
            errorEmail.hidden = true
        }

        if(managerChange){
            if (new_manager == ""){      
                nameChange.classList.remove('border-cyan-400')
                emailChange.classList.remove("border-cyan-400")
                managerChange.classList.remove("border-cyan-400")
                managerChange.classList.add("border-red-500")
                errorManager.hidden = false
            }else{
                managerChange.classList.remove('border-red-500')
                errorManager.hidden = true
            }

            if(new_name != "" && (new_email == "" || validateEmail(new_email)) && managerChange.value){
            }
        }else{
            if(new_name != "" && (new_email == "" || validateEmail(new_email))){
                
            }
        }
    
        var nameChange = document.getElementById('userName')
        var emailChange = document.getElementById('userEmail')
        var managerChange = document.getElementById('managerName')

   
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
            
            if(new_email != selectedEmployee.emp_email){
                setEmailChanges(true)
            }

            if(new_manager != ""){
                if(managerChange.value.length > 0){
                    EditManagerHandler(managerChange.value)
                    setManagerChanges(true)
                }
            }
        
    }

    //This function will call the the edit employee sweet alert, which will allow all of the employee data to be edited.
    //@param: None.
    //@return: Void.
    const EditEmployee = async () => {
        setShowEdit(true)
    }

    return (
        <div className='w-full'>
            {showAssign ? 
              <div>
                <div className="fixed w-[100%] h-[100%] left-0 top-0 z-1 bg-gray-800 opacity-75"></div>
                <div className="absolute z-2 top-[10%] left-[29%]">
                <AssignModal setShowAssign={setShowAssign} selectedEmployee={selectedEmployee}/>
                </div>
              </div>
            : null }
            {showEdit ? 
              <div>
                <div className="fixed w-[100%] h-[100%] left-0 top-0 z-1 bg-gray-800 opacity-75"></div>
                <div className="absolute z-2 top-[10%] left-[29%]">
                <EditModal setShowEdit={setShowEdit} selectedEmployee={selectedEmployee} superiorMap={superiorMap} setNewName={setNewName} setNewEmail={setNewEmail} setChangedManager={setChangedManager}/>
                </div>
              </div>
            : null }
            {!loadingGraphicDisplay ? 
            <div>
                <h2 className="px-4 py-2 text-center w-full text-xl font-bold underline">Selected Employee</h2>
                <table className="table-auto w-full mt-12 static">
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2 w-16 font-bold">Name:</td>
                            <td className="border px-4 py-2 w-96">{selectedEmployee.emp_name} {NameChanges && (newName != selectedEmployee.emp_name) ? <span className="float-right text-white bg-gray-300 rounded px-2 mr-2"><span className="text-xs font-bold underline">New:</span> {newName}</span>:null}</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 font-bold">Email:</td>
                            <td className="border px-4 py-2">{selectedEmployee.emp_email} {EmailChanges && (newEmail != selectedEmployee.emp_email) ? 
                            <span className="float-right text-white bg-gray-300 rounded px-2 mr-2">
                            <span className="text-xs font-bold underline">New:</span> {newEmail}</span>:null}</td>       
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 font-bold">Role:</td>
                            <td className="border px-4 py-2">{selectedEmployee.emp_role}</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 font-bold">EFIS:</td>
                            <td className="border px-4 py-2">{selectedEmployee.emp_efis}</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 font-bold">District:</td>
                            <td className="border px-4 py-2">{selectedEmployee.emp_district}</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 font-bold">TRAM:</td>
                            <td className="border px-4 py-2">{selectedEmployee.emp_tram}</td>
                        </tr>
                        {selectedEmployee.emp_role == "Chief" || selectedEmployee.emp_role == "STE" ? <tr> <td className="border px-4 py-2 font-bold">Manager:</td>
                     <td className="border px-4 py-2">{selectedEmployee.emp_manager}{ManagerChanges && ChangedManager[0] && (ChangedManager[0] != selectedEmployee.emp_manager) ? <span className="float-right text-white bg-gray-300 rounded px-2 mr-2"><span className="text-xs font-bold underline">New:</span> {ChangedManager[0]}</span>:null}</td> </tr> : null}
                    </tbody>
                </table>
                <div className="float-left">
                    {!selectedEmployee.emp_children && !AssignCheck ? 
                    <button className="float-right bg-yellow-300 hover:bg-yellow-400 text-white rounded mt-4 ml-8 p-1 w-16 text-xs" onClick={() => AssignEmployees()}>Assign Employees</button>: null}
                </div>
                <div className="float-right grid grid-cols-1 grid-rows-3">
                    <button className="float-right bg-indigo-400 hover:bg-indigo-500 text-white rounded mt-4 h-6 w-16 text-xs mr-12" onClick={() => EditEmployeeHandler()}>Edit</button>
                    {(NameChanges || EmailChanges || ManagerChanges) ?  <button className="float-right bg-green-500 hover:bg-green-600 text-white rounded mt-2 h-6 w-16 text-xs" onClick={() => SaveHandler()}>Save</button>   : null}
                    {(NameChanges || EmailChanges || ManagerChanges) ?  <button className="float-right bg-gray-500 hover:bg-gray-600 text-white rounded h-6 w-16 text-xs" onClick={() => ClearHandler()}>Clear</button>   : null}
                </div>
                <div>
                    <button className="float-center bg-orange-400 hover:bg-orange-500 text-white rounded mt-4 ml-12 h-6 w-20 text-xs cursor-pointer" onClick={(e) => clearEmployeeHandler(e)} >Empty Data</button>
                    <button className="hidden" id="activate_clear" onClick={(e) => activateClearEmployee(e)}></button>
                    <button className="hidden" id="activate_save" onClick={(e) => activateSaveEmployee(selectedEmployee)}></button>
                    <button className="hidden" id="activate_clear_data" onClick={(e) => activateClearData()}></button>
                    <button className="hidden" id="activate_assign" onClick={(e) => activateAssigned()}></button>
                    <button className="hidden" id="activate_edit" onClick={(e) => activateEdit()}></button>
                </div>
            </div> :
            <div className="grid place-content-center mt-48">
                <div>
                    <Grid
                        height = "80"
                        width = "80"
                        radius = "9"
                        color = '#70AA9B'
                        ariaLabel = 'grid-loading'     
                        wrapperStyle
                        wrapperClass
                    /> 
                </div>
            </div> 
            }
        </div>
      );
}



