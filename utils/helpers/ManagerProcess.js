//Gets the manager array for the employee to be inserted.
//@param data: The data to check.
//@param selectedEmployee: The employee to be edited.
//@return: The information needed to update the form.
export default function SearchProcess(data, selectedEmployee){

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
      if((data[i]['DISTRICT'] == region) && (!manager_arr.includes(data[i]['DEPUTY_NAME']))) {
        manager_arr.push(data[i]['DEPUTY_NAME'])
        manager_efis_arr.push(data[i]['EFIS'])
        manager_email_arr.push(data[i]['DEPUTY_EMAIL'])
      }

      if(data[i]['PRIN_EFIS'] == emp_efis){
        current_manager = data[i]['DEPUTY_NAME']
      }


  }
}else if(role == "Chief"){
    for(var i=0; i<data.length; i++){  
      if((data[i]['DISTRICT'] == region) && (!manager_arr.includes(data[i]['PRIN_NAME']))) {
        manager_arr.push(data[i]['PRIN_NAME'])
        manager_efis_arr.push(data[i]['PRIN_EFIS'])
        manager_email_arr.push(data[i]['PRIN_EMAIL'])
      }

      if(data[i]['CHIEF_EFIS'] == emp_efis){
        current_manager = data[i]['PRIN_NAME']

      }
  }
    
  }else if(role == "STE"){
    for(var i=0; i<data.length; i++){
      if((data[i]['DISTRICT'] == region) && (!manager_arr.includes(data[i]['CHIEF_NAME']))) {
        manager_arr.push(data[i]['CHIEF_NAME'])
        manager_efis_arr.push(data[i]['CHIEF_EFIS'])
        manager_email_arr.push(data[i]['CHIEF_EMAIL'])
      }

      if(data[i]['STE_EFIS'] == emp_efis){
        current_manager = data[i]['CHIEF_NAME']

      }
    }
  }else{
      console.log("Manager edit hasn't proccessed.")
  }
  console.log(current_manager)

    update_package.push(manager_arr, manager_efis_arr, current_manager, manager_email_arr)
    

    return update_package

}