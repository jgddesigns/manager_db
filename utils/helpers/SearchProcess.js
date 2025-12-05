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
    try{
      var deputyIncluded = false
      var prinIncluded = false
      var chiefIncluded = false
      var steIncluded = false

      if(users[i]['deputy_name'] != null){
        if(users[i]['deputy_name'].toLowerCase().includes(search_text.toLowerCase()) || users[i]['efis'].includes(search_text)){
          for(var j=0; j<filtered_users.length; j++){
              if(users[i]['deputy_name'] == filtered_users[j]){
                if(filtered_roles[j] == "Deputy"){
                    deputyIncluded = true
                }
              }
          }

          if(!filtered_users.includes(users[i]['deputy_name'])  && !deputyIncluded){
              filtered_users.push(users[i]['deputy_name'])
              filtered_email.push(users[i]['deputy_email'])
              filtered_roles.push('Deputy')
              filtered_efis.push(users[i]['efis'])
              filtered_district.push(users[i]['district'])
              filtered_tram.push(users[i]['tram'])
              filtered_unit.push('')
              filtered_manager.push('')
              if(users[i]['prin_name']){
                filtered_children.push(true)      
              }else{
                filtered_children.push(false)
              }
          }
        }
      }
      console.log(users[i]['prin_name'])
      console.log(users[i]['prin_efis'])
      if(users[i]['prin_name'] != null && users[i]['prin_efis'] != null){
        if(users[i]['prin_name'].toLowerCase().includes(search_text.toLowerCase()) || users[i]['prin_efis'].includes(search_text)){
          for(var j=0; j<filtered_users.length; j++){
              if(users[i]['prin_name'] == filtered_users[j]){
                if(filtered_roles[j] == "Principal"){
                    prinIncluded = true
                }
              }
          }

          if(!filtered_users.includes(users[i]['prin_name'])  && !prinIncluded) {
              filtered_users.push(users[i]['prin_name'])
              filtered_email.push(users[i]['prin_email'])
              filtered_roles.push('Principal')
              filtered_efis.push(users[i]['prin_efis'])
              filtered_district.push(users[i]['district'])
              filtered_tram.push(users[i]['tram'])
              filtered_unit.push(users[i]['prin_unit'])
              filtered_manager.push(users[i]['deputy_name'])
              if(users[i]['chief_name']){
                filtered_children.push(true)      
              }else{
                filtered_children.push(false)
              }
          }
        }
      }

      if(users[i]['chief_name'] != null && users[i]['chief_efis'] != null){
        if(users[i]['chief_name'].toLowerCase().includes(search_text.toLowerCase()) || users[i]['chief_efis'].includes(search_text)){
          for(var j=0; j<filtered_users.length; j++){
              if(users[i]['chief_name'] == filtered_users[j]){
                if(filtered_roles[j] == "Chief"){
                    chiefIncluded = true
                }
              }
          }

          if(!filtered_users.includes(users[i]['chief_name'])  && !chiefIncluded  ){
              filtered_users.push(users[i]['chief_name'])
              filtered_email.push(users[i]['chief_email'])
              filtered_roles.push('Chief')
              filtered_efis.push(users[i]['chief_efis'])
              filtered_district.push(users[i]['district'])
              filtered_tram.push(users[i]['tram'])
              filtered_unit.push(users[i]['chief_unit'])
              filtered_manager.push(users[i]['prin_name'])
              if(users[i]['ste_name']){
                filtered_children.push(true)      
              }else{
                filtered_children.push(false)
              }
          }
        }
      }

      if(users[i]['ste_name'] != null && users[i]['ste_efis'] != null){
        if(users[i]['ste_name'].toLowerCase().includes(search_text.toLowerCase()) || users[i]['ste_efis'].includes(search_text)){
          for(var j=0; j<filtered_users.length; j++){
              if(users[i]['ste_name'] == filtered_users[j]){
                if(filtered_roles[j] == "STE"){
                    steIncluded = true
                }
              }
          }
          
          if(!filtered_users.includes(users[i]['ste_name'])  && !steIncluded) {
            filtered_users.push(users[i]['ste_name'])
            filtered_email.push(users[i]['ste_email'])
            filtered_roles.push('STE')
            filtered_efis.push(users[i]['ste_efis'])
            filtered_district.push(users[i]['district'])
            filtered_tram.push(users[i]['tram'])
            filtered_unit.push(users[i]['ste_unit'])
            filtered_manager.push(users[i]['chief_name'])
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
      
    }catch{}
  }

    display_package.push(filtered_users, filtered_email, filtered_roles, filtered_efis, filtered_unit, filtered_district, filtered_tram, filtered_manager, filtered_children)

    return display_package

    
}


