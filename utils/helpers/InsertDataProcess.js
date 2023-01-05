//Confirms the superiors of ther user to be inserted.
//@param data: The data to check.
//@param superior: The superior to match the data to.
//@return: The data assocated with the matched superior.
export default function InsertProcess(data, superior){
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

