export default function SearchProcess(input, data){



    var search_text = input
    var users = data
    var filtered_users = []
    var filtered_roles = []
    var filtered_efis = []
    var filtered_district = []
    var display_package = []

    for(var i=0; i<users.length; i++){
      if(users[i]['DEPUTY_NAME'].toLowerCase().includes(search_text.toLowerCase()) || users[i]['EFIS'].includes(search_text)){
          if(!filtered_users.includes(users[i]['DEPUTY_NAME'])){
              filtered_users.push(users[i]['DEPUTY_NAME'])
              filtered_roles.push('Deputy')
              filtered_efis.push(users[i]['EFIS'])
              filtered_district.push(users[i]['DISTRICT'])
          }
      }
      if(users[i]['PRIN_NAME'].toLowerCase().includes(search_text.toLowerCase()) || users[i]['PRIN_EFIS'].includes(search_text)){
          if(!filtered_users.includes(users[i]['PRIN_NAME'])){
              filtered_users.push(users[i]['PRIN_NAME'])
              filtered_roles.push('Principal')
              filtered_efis.push(users[i]['PRIN_EFIS'])
              filtered_district.push(users[i]['DISTRICT'])
          }
      }
      if(users[i]['CHIEF_NAME'].toLowerCase().includes(search_text.toLowerCase()) || users[i]['CHIEF_EFIS'].includes(search_text)){
          if(!filtered_users.includes(users[i]['CHIEF_NAME'])){
              filtered_users.push(users[i]['CHIEF_NAME'])
              filtered_roles.push('Chief')
              filtered_efis.push(users[i]['CHIEF_EFIS'])
              filtered_district.push(users[i]['DISTRICT'])
          }
      }
      if(users[i]['STE_NAME'].toLowerCase().includes(search_text.toLowerCase()) || users[i]['STE_EFIS'].includes(search_text)){
          if(!filtered_users.includes(users[i]['STE_NAME'])){
              filtered_users.push(users[i]['STE_NAME'])
              filtered_roles.push('STE')
              filtered_efis.push(users[i]['STE_EFIS'])
              filtered_district.push(users[i]['DISTRICT'])
          }
      }

      if(!search_text || search_text == ' '){
          filtered_users = []
          filtered_roles = []
          filtered_efis = []
          filtered_district = []

          display_name = "";
          
      }
    }


      for(i=0; i<filtered_users.length; i++){
          var display_name = filtered_users[i]
          var display_role = filtered_roles[i]
          var display_efis = filtered_efis[i]
          var display_district = filtered_district[i]
          
          
      }
      if(filtered_users.length<1){
        display_name = ""
        display_role = ""
        display_efis = ""
        display_district = ""

      }
      display_package.push(filtered_users, filtered_roles, filtered_efis, filtered_district)

      return display_package



}