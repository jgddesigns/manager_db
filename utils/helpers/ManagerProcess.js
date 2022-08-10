export default function SearchProcess(data, region, role, emp_efis){

  console.log(role)
  console.log(region)

  var manager_arr = []
  var manager_efis_arr = []
  var update_package = []
  var current_manager

  if(role == "Chief"){
    for(var i=0; i<data.length; i++){  
      if((data[i]['DISTRICT'] == region) && (!manager_arr.includes(data[i]['PRIN_NAME']))) {
        manager_arr.push(data[i]['PRIN_NAME'])
        manager_efis_arr.push(data[i]['PRIN_EFIS'])
      }

      if((data[i]['DISTRICT'] == region) && (!manager_arr.includes(data[i]['PRIN_NAME'])) && (data[i]['CHIEF_NAME'] == emp_efis)){
        current_manager = data[i]['PRIN_NAME']

      }
  }
    
  }else if(role == "STE"){
    for(var i=0; i<data.length; i++){
      if((data[i]['DISTRICT'] == region) && (!manager_arr.includes(data[i]['CHIEF_NAME']))) {
        manager_arr.push(data[i]['CHIEF_NAME'])
        manager_efis_arr.push(data[i]['CHIEF_EFIS'])
      }

      if(data[i]['STE_EFIS'] == emp_efis){
        current_manager = data[i]['CHIEF_NAME']

      }
    }
  }else{
      console.log("Manager edit processing error.")
  }

    console.log(current_manager)

    update_package.push(manager_arr, manager_efis_arr, current_manager)
    

    return update_package

}