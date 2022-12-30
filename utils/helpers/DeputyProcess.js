export default function DeputyProcess(data, selectedEmployee){

  var region = selectedEmployee.emp_district

  for(var i=0; i<data.length; i++){
    if(data[i]['DISTRICT'] == region){  
      return data[i]['EFIS']
    }
  }
  return ""
}