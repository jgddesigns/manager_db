

export default function SearchProcess(input, data){



    var search_text = input
    var users = data
    var filtered_users = []
    var filtered_roles = []
    var filtered_efis = []
    var filtered_district = []
    var display_arr = [[],[],[],[]]
    var display_package = []

    for(var i=0; i<users.length; i++){
        var deputyIncluded = false
        var prinIncluded = false
        var chiefIncluded = false
        var steIncluded = false
      if(users[i]['DEPUTY_NAME'].toLowerCase().includes(search_text.toLowerCase()) || users[i]['EFIS'].includes(search_text)){

        for(var j=0; j<filtered_users.length; j++){
            if(users[i]['DEPUTY_NAME'] == filtered_users[j]){
              if(filtered_roles[j] == "Deputy"){
                  deputyIncluded = true
              }
            }
        }

          if(!filtered_users.includes(users[i]['DEPUTY_NAME']) || (((users[i]['DEPUTY_NAME'] == users[i]['CHIEF_NAME']) || (users[i]['DEPUTY_NAME'] == users[i]['PRIN_NAME']) || (users[i]['DEPUTY_NAME'] == users[i]['STE_NAME'])) && !deputyIncluded)){
              filtered_users.push(users[i]['DEPUTY_NAME'])
              filtered_roles.push('Deputy')
              filtered_efis.push(users[i]['EFIS'])
              filtered_district.push(users[i]['DISTRICT'])

            //   display_arr[0].push(users[i]['DEPUTY_NAME'])
            //   display_arr[1].push('Deputy')
            //   display_arr[2].push(users[i]['EFIS'])
            //   display_arr[3].push(users[i]['DISTRICT'])
          }
      }
      if(users[i]['PRIN_NAME'].toLowerCase().includes(search_text.toLowerCase()) || users[i]['PRIN_EFIS'].includes(search_text)){

        for(var j=0; j<filtered_users.length; j++){
            if(users[i]['PRIN_NAME'] == filtered_users[j]){
              if(filtered_roles[j] == "Principal"){
                  prinIncluded = true
              }
            }
        }

          if(!filtered_users.includes(users[i]['PRIN_NAME']) || (((users[i]['PRIN_NAME'] == users[i]['DEPUTY_NAME']) || (users[i]['PRIN_NAME'] == users[i]['CHIEF_NAME']) || (users[i]['PRIN_NAME'] == users[i]['STE_NAME'])) && !prinIncluded) ){
              filtered_users.push(users[i]['PRIN_NAME'])
              filtered_roles.push('Principal')
              filtered_efis.push(users[i]['PRIN_EFIS'])
              filtered_district.push(users[i]['DISTRICT'])
              

            //   display_arr[0].push(users[i]['DEPUTY_NAME'])
            //   display_arr[1].push('Deputy')
            //   display_arr[2].push(users[i]['EFIS'])
            //   display_arr[3].push(users[i]['DISTRICT'])
          }
      }
      if(users[i]['CHIEF_NAME'].toLowerCase().includes(search_text.toLowerCase()) || users[i]['CHIEF_EFIS'].includes(search_text)){

        for(var j=0; j<filtered_users.length; j++){
            if(users[i]['CHIEF_NAME'] == filtered_users[j]){
              if(filtered_roles[j] == "Chief"){
                  chiefIncluded = true
              }
            }
        }


          if(!filtered_users.includes(users[i]['CHIEF_NAME']) || (((users[i]['CHIEF_NAME'] == users[i]['DEPUTY_NAME']) || (users[i]['CHIEF_NAME'] == users[i]['PRIN_NAME']) || (users[i]['CHIEF_NAME'] == users[i]['STE_NAME'])) && !chiefIncluded)  ){
              filtered_users.push(users[i]['CHIEF_NAME'])
              filtered_roles.push('Chief')
              filtered_efis.push(users[i]['CHIEF_EFIS'])
              filtered_district.push(users[i]['DISTRICT'])
          }
      }


      if(users[i]['STE_NAME'].toLowerCase().includes(search_text.toLowerCase()) || users[i]['STE_EFIS'].includes(search_text)){

        for(var j=0; j<filtered_users.length; j++){
            if(users[i]['STE_NAME'] == filtered_users[j]){
              if(filtered_roles[j] == "STE"){
                  steIncluded = true
              }
            }
        }
        
        if(!filtered_users.includes(users[i]['STE_NAME']) || (((users[i]['STE_NAME'] == users[i]['DEPUTY_NAME']) || (users[i]['STE_NAME'] == users[i]['PRIN_NAME']) || (users[i]['STE_NAME'] == users[i]['CHIEF_NAME'])) && !steIncluded) ){
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

    //   alert("display " + display_arr[0][1])

      return display_package



}