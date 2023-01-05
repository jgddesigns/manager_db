//Matches and returns the information associated with the search input.
//@param input: The search input.
//@param data: The array of users.
//@return: The results to display.
export default function SearchProcess(input, data){
  var search_text = input
  var users = data
  var filtered_users = []
  var filtered_email = []
  var filtered_roles = []
  var filtered_efis = []
  var filtered_district = []
  var filtered_tram = []
  var filtered_unit = []
  var filtered_manager = []
  var filtered_children = []
  var display_package = []

  for(var i=0; i<users.length; i++){
    var deputyIncluded = false
    var prinIncluded = false
    var chiefIncluded = false
    var steIncluded = false

    if(users[i]['DEPUTY_NAME'] != null){
      if(users[i]['DEPUTY_NAME'].toLowerCase().includes(search_text.toLowerCase()) || users[i]['EFIS'].includes(search_text)){
        for(var j=0; j<filtered_users.length; j++){
            if(users[i]['DEPUTY_NAME'] == filtered_users[j]){
              if(filtered_roles[j] == "Deputy"){
                  deputyIncluded = true
              }
            }
        }

        if(!filtered_users.includes(users[i]['DEPUTY_NAME'])  && !deputyIncluded){
            filtered_users.push(users[i]['DEPUTY_NAME'])
            filtered_email.push(users[i]['DEPUTY_EMAIL'])
            filtered_roles.push('Deputy')
            filtered_efis.push(users[i]['EFIS'])
            filtered_district.push(users[i]['DISTRICT'])
            filtered_tram.push(users[i]['TRAM'])
            filtered_unit.push('')
            filtered_manager.push('')
            if(users[i]['PRIN_NAME']){
              filtered_children.push(true)      
            }else{
              filtered_children.push(false)
            }
        }
      }
    }

    if(users[i]['PRIN_NAME'] != null){
      if(users[i]['PRIN_NAME'].toLowerCase().includes(search_text.toLowerCase()) || users[i]['PRIN_EFIS'].includes(search_text)){
        for(var j=0; j<filtered_users.length; j++){
            if(users[i]['PRIN_NAME'] == filtered_users[j]){
              if(filtered_roles[j] == "Principal"){
                  prinIncluded = true
              }
            }
        }

        if(!filtered_users.includes(users[i]['PRIN_NAME'])  && !prinIncluded) {
            filtered_users.push(users[i]['PRIN_NAME'])
            filtered_email.push(users[i]['PRIN_EMAIL'])
            filtered_roles.push('Principal')
            filtered_efis.push(users[i]['PRIN_EFIS'])
            filtered_district.push(users[i]['DISTRICT'])
            filtered_tram.push(users[i]['TRAM'])
            filtered_unit.push(users[i]['PRIN_UNIT'])
            filtered_manager.push(users[i]['DEPUTY_NAME'])
            if(users[i]['CHIEF_NAME']){
              filtered_children.push(true)      
            }else{
              filtered_children.push(false)
            }
        }
      }
    }

    if(users[i]['CHIEF_NAME'] != null){
      if(users[i]['CHIEF_NAME'].toLowerCase().includes(search_text.toLowerCase()) || users[i]['CHIEF_EFIS'].includes(search_text)){
        for(var j=0; j<filtered_users.length; j++){
            if(users[i]['CHIEF_NAME'] == filtered_users[j]){
              if(filtered_roles[j] == "Chief"){
                  chiefIncluded = true
              }
            }
        }

        if(!filtered_users.includes(users[i]['CHIEF_NAME'])  && !chiefIncluded  ){
            filtered_users.push(users[i]['CHIEF_NAME'])
            filtered_email.push(users[i]['CHIEF_EMAIL'])
            filtered_roles.push('Chief')
            filtered_efis.push(users[i]['CHIEF_EFIS'])
            filtered_district.push(users[i]['DISTRICT'])
            filtered_tram.push(users[i]['TRAM'])
            filtered_unit.push(users[i]['CHIEF_UNIT'])
            filtered_manager.push(users[i]['STE_NAME'])
            if(users[i]['STE_NAME']){
              filtered_children.push(true)      
            }else{
              filtered_children.push(false)
            }
        }
      }
    }

    if(users[i]['STE_NAME'] != null){
      if(users[i]['STE_NAME'].toLowerCase().includes(search_text.toLowerCase()) || users[i]['STE_EFIS'].includes(search_text)){
        for(var j=0; j<filtered_users.length; j++){
            if(users[i]['STE_NAME'] == filtered_users[j]){
              if(filtered_roles[j] == "STE"){
                  steIncluded = true
              }
            }
        }
        
        if(!filtered_users.includes(users[i]['STE_NAME'])  && !steIncluded) {
          filtered_users.push(users[i]['STE_NAME'])
          filtered_email.push(users[i]['STE_EMAIL'])
          filtered_roles.push('STE')
          filtered_efis.push(users[i]['STE_EFIS'])
          filtered_district.push(users[i]['DISTRICT'])
          filtered_tram.push(users[i]['TRAM'])
          filtered_unit.push(users[i]['STE_UNIT'])
          filtered_manager.push(users[i]['CHIEF_NAME'])
          filtered_children.push(true)
        }
      }
    }

    if(!search_text || search_text == ' '){
        filtered_users = []
        filtered_email = []
        filtered_roles = []
        filtered_efis = []
        filtered_unit = []
        filtered_district = []
        filtered_tram = []
        filtered_manager = [] 
        filtered_children = []
    }
  }

    display_package.push(filtered_users, filtered_email, filtered_roles, filtered_efis, filtered_unit, filtered_district, filtered_tram, filtered_manager, filtered_children)

    return display_package
}


