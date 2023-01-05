//Processes the data to find the efis of the user's deputy.
//@param data: The data to process.
//@param selectedEmployee: The employee to process.
//@return: The efis of the user if it exists, or blank.
export default function DeputyProcess(data, selectedEmployee){
  var region = selectedEmployee.emp_district
  for(var i=0; i<data.length; i++){
    if(data[i]['DISTRICT'] == region){  
      return data[i]['EFIS']
    }
  }
  return ""
}