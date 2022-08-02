import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function SelectedEmployee({selectedEmployee}) {

    const MySwal = withReactContent(Swal)

    const EditEmployee = (type) => {

        if(type === 'Name'){
            var text = '<br><p class="text-sm"> Enter new name for: <br><p class="font-bold italic">'+ selectedEmployee.emp_name +'</span> </p>\
            <br><br><label id="name" style="font-size:14px;">New Name:</label> <br><input id="userName" class="swal2-input" style="font-size: 16px; width: 300px;" placeholder="Enter New Name..."><br><br>'
        }else if(type === 'Email'){
            text = '<br><p class="text-sm"> Enter new email address for: <br><p class="font-bold italic">'+ selectedEmployee.emp_name +'</span> </p>\
            <br><br><label style="font-size:14px;">Current Email:</label> <br><input class="swal2-input" style="font-size: 16px; width: 300px; background-color: #c9c9c9;  color:white;" value="'+selectedEmployee.emp_email+'" disabled>\
            <br><br><label id="email" style="font-size:14px;">New Email:</label> <br><input id="userEmail" class="swal2-input" style="font-size: 16px; width: 300px;" placeholder="Enter New Email..."<br><br>'

        }else{
            console.log("Error")
        }


        MySwal.fire({
            title: "Edit Employee " + type,
            html: text,    
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
                    if (type==='Name'){
                        if(new_name != ""){
                            resolve()
                        }else{
                            document.getElementById("name").classList.add("text-red-500");
                            document.getElementById("userName").classList.add("border-red-500");
                            resolve(false)
                        }
                    }else{
                        if (validateEmail(email)) {   
                            resolve();                
                        }
                        else{      
                            document.getElementById("email").classList.add("text-red-500");
                            document.getElementById("userEmail").classList.add("border-red-500");
                            resolve(false);
                        }
                    }
                })
            },                        
            }).then((result) => {
            if (result.value) {  
                //Update email value in db by name and efis
            }
            })

    
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


    return (
    
        <div className='w-full'>
            <h2 className="px-4 py-2 text-center w-full text-xl">Selected Employee:</h2>
            <table className="table-auto w-full mt-20">
                
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">Name:</td>
                        <td className="border px-4 py-2">{selectedEmployee.emp_name}<button className="float-right bg-indigo-400 hover:bg-indigo-500 text-white px-4 rounded m-2 w-auto h-4 text-xs" onClick={() => EditEmployee("Name")}>Edit</button></td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Email:</td>
                        <td className="border px-4 py-2">{selectedEmployee.emp_email}{selectedEmployee.emp_email != "" ? <button className="float-right bg-indigo-400 hover:bg-indigo-500 text-white px-4 rounded m-2 w-auto h-4 text-xs" onClick={() => EditEmployee("Email")}>Edit</button>:null}</td>
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
            </table>
        </div>
      );
}



