//Processes the data to display the hierarchy of the selected district.
//@param employees: The array of employees to display.
//@param dist: The selected district.
//@return: The array of employees to be displayed.
export default function HierarchyProcess(employees, dist){
    var hierarchy = []
    var prin_added = []
    var chief_added = []
    var ste_added = []
    var deputy_map = {
        deputy_name : "",
        deputy_efis : "",
        district: "",
        principals : []
    }

    for (let i = 0; i < employees.length; i++) {
        // console.log("employees")
        // console.log(employees[i]['district'] )
        // break
        if(employees[i]['district'] == dist && (deputy_map.deputy_name != employees[i]['deputy_name'])){
            deputy_map.deputy_name = employees[i]['deputy_name']
            deputy_map.deputy_efis = employees[i]['efis']
            deputy_map.district = employees[i]['district']
        }   

        for (let i = 0; i < employees.length; i++) {
            if(employees[i]['district'] == dist && (!prin_added.includes(employees[i]['prin_name']))){
                var principal_map = {
                    prin_name: "",
                    prin_efis: "",
                    chiefs: []
                }

                principal_map.prin_name = employees[i]['prin_name']
                principal_map.prin_efis = employees[i]['prin_efis']

                for (let j = 0; j < employees.length; j++) {
                    if(principal_map.prin_name == employees[j]['prin_name'] && (employees[j]['district'] == dist) && !chief_added.includes(employees[j]['chief_name'])){
                        var chief_map = {
                            chief_name: "",
                            chief_efis: "",
                            stes: []
                        }

                        chief_map.chief_name = employees[j]['chief_name']
                        chief_map.chief_efis = employees[j]['chief_efis']
                        
                        var ste_arr = []
                        var ste_efis_arr = []
                        var ste_map = {
                            ste_name: ste_arr,
                            ste_efis: ste_efis_arr,
                        }
                        for(let k = 0; k < employees.length; k++){
                            if((chief_map.chief_name == employees[k]['chief_name']) && (employees[k]['district'] == dist) &&  (!ste_added.includes(employees[k]['chief_name']))){
                                ste_arr.push(employees[k]['chief_name'])
                                ste_efis_arr.push(employees[k]['ste_efis'])
                                ste_added.push(employees[k]['chief_name'])
                            }
                        }

                        ste_map.ste_name = ste_arr
                        chief_map.stes.push(ste_map)
                        console.log(JSON.stringify(chief_map))
                        if(!chief_added.includes(chief_map.chief_name)){
                            principal_map.chiefs.push(chief_map)
                            chief_added.push(chief_map.chief_name)
                        }
                    }

                    if(!prin_added.includes(principal_map.prin_name)){
                        deputy_map.principals.push(principal_map)
                        prin_added.push(principal_map.prin_name)
                    }   
                }
            }
        }
    }
        hierarchy.push(deputy_map)
        console.log("\n\nhierarchy")
        console.log(hierarchy)
    return hierarchy
}





