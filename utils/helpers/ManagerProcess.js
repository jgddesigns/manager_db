//Gets the manager array for the employee to be inserted.
//@param data: The data to check.
//@param selectedEmployee: The employee to be edited.
//@return: The information needed to update the form.
export default function SearchProcess(data, selectedEmployee){
  console.log("\n\nmanager process")
  console.log(data)
  console.log(selectedEmployee)
  var region = selectedEmployee.emp_district
  var role = selectedEmployee.emp_role
  var emp_efis = selectedEmployee.emp_efis

  var manager_arr = []
  var manager_efis_arr = []
  var manager_email_arr = []
  var update_package = []
  var current_manager


  if(role == "Principal"){
    for(var i=0; i<data.length; i++){  
      if((data[i]['district'] == region) && (!manager_arr.includes(data[i]['ddeputy_name']))) {
        manager_arr.push(data[i]['ddeputy_name'])
        manager_efis_arr.push(data[i]['efis'])
        manager_email_arr.push(data[i]['efis'])
      }

      if(data[i]['prin_efis'] == emp_efis){
        current_manager = data[i]['ddeputy_name']
      }


  }
}else if(role == "Chief"){
    for(var i=0; i<data.length; i++){  
      if((data[i]['district'] == region) && (!manager_arr.includes(data[i]['prin_name']))) {
        manager_arr.push(data[i]['prin_name'])
        manager_efis_arr.push(data[i]['prin_efis'])
        manager_email_arr.push(data[i]['prin_email'])
      }

      if(data[i]['chief_efis'] == emp_efis){
        current_manager = data[i]['prin_name']

      }
  }
    
  }else if(role == "STE"){
    for(var i=0; i<data.length; i++){
      if((data[i]['district'] == region) && (!manager_arr.includes(data[i]['chief_name']))) {
        manager_arr.push(data[i]['chief_name'])
        manager_efis_arr.push(data[i]['chief_efis'])
        manager_email_arr.push(data[i]['chief_email'])
      }

      if(data[i]['ste_efis'] == emp_efis){
        current_manager = data[i]['chief_name']

      }
    }
  }else{
      console.log("Manager edit hasn't proccessed.")
  }

  update_package.push(manager_arr, manager_efis_arr, current_manager, manager_email_arr)
    

  return update_package
}