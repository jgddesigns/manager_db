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
        if(employees[i]['DISTRICT'] == dist && (deputy_map.deputy_name != employees[i]['DEPUTY_NAME'])){
            deputy_map.deputy_name = employees[i]['DEPUTY_NAME']
            deputy_map.deputy_efis = employees[i]['EFIS']
            deputy_map.district = employees[i]['DISTRICT']
        }   

        for (let i = 0; i < employees.length; i++) {
            if(employees[i]['DISTRICT'] == dist && (!prin_added.includes(employees[i]['PRIN_NAME']))){
                var principal_map = {
                    prin_name: "",
                    prin_efis: "",
                    chiefs: []
                }

                principal_map.prin_name = employees[i]['PRIN_NAME']
                principal_map.prin_efis = employees[i]['PRIN_EFIS']

                for (let j = 0; j < employees.length; j++) {
                    if(principal_map.prin_name == employees[j]['PRIN_NAME'] && (employees[j]['DISTRICT'] == dist) && !chief_added.includes(employees[j]['CHIEF_NAME'])){
                        var chief_map = {
                            chief_name: "",
                            chief_efis: "",
                            stes: []
                        }

                        chief_map.chief_name = employees[j]['CHIEF_NAME']
                        chief_map.chief_efis = employees[j]['CHIEF_EFIS']
                        
                        var ste_arr = []
                        var ste_efis_arr = []
                        var ste_map = {
                            ste_name: ste_arr,
                            ste_efis: ste_efis_arr,
                        }
                        for(let k = 0; k < employees.length; k++){
                            if((chief_map.chief_name == employees[k]['CHIEF_NAME']) && (employees[k]['DISTRICT'] == dist) &&  (!ste_added.includes(employees[k]['STE_NAME']))){
                                ste_arr.push(employees[k]['STE_NAME'])
                                ste_efis_arr.push(employees[k]['STE_EFIS'])
                                ste_added.push(employees[k]['STE_NAME'])
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
    return hierarchy
}





