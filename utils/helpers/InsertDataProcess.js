


export default function InsertProcess(data, superior, district,  emp_arr=[]){
      for (var i = 0; i < data.length; i++) {

        if(data[i]['STE_NAME'] == superior){

          return data[i]
        }else if(data[i]['CHIEF_NAME'] == superior){

          return data[i]
        }else if(data[i]['PRIN_NAME'] == superior){

          return data[i]

        }else if(data[i]['DEPUTY_NAME'] == superior){

          return data[i]
        }
      }

      return ""

  

      
    
}

