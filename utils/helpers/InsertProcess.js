//Gets the manager array for the employee to be inserted
//@param data: The data to check.
//@param role: The role of the employee to be inserted.
//@param district: The the district to insert the data into.
//@param manager_arr: The array to store the managers in.
//@return: The data assocated with the manager array.
export default function InsertProcess(data, role, district,  manager_arr=[]){
      for (var i = 0; i < data.length; i++) {
        if(data[i]['DISTRICT'] == district){
          if(role == "STE"){
            if(!manager_arr.includes(data[i]['CHIEF_NAME'])){
              manager_arr.push(data[i]['CHIEF_NAME'])
            }
          }else if(role == "Chief"){
            if(!manager_arr.includes(data[i]['PRIN_NAME'])){
              manager_arr.push(data[i]['PRIN_NAME'])
            }
          }else{
            if(!manager_arr.includes(data[i]['DEPUTY_NAME'])){
              manager_arr.push(data[i]['DEPUTY_NAME'])
            }
          }
        }
      }
      return manager_arr  
}

