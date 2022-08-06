

export default function UpdateHandler(update){
    //'data' ARRAY MAP
    // emp_name: data[0][0],
    // emp_role: data[0][1],
    // emp_efis: data[0][2],

    // new_name: data[1][0],
    // new_email: data[1][1]

    // var name_col
    // var email_col
    // var efis_col
    // var cols_data = []
    // var update_package = []

    // if(data[0][1] == "Deputy"){
    //     name_col = "DEPUTY_NAME"
    //     email_col = "DEPUTY_EMAIL"
    //     efis_col = "EFIS"
    // }else if(data[0][1]== "Principal"){
    //     name_col = "PRIN_NAME"
    //     email_col = "PRIN_EMAIL"
    //     efis_col = "PRIN_EFIS"
    // }else if(data[0][1] == "Chief"){
    //     name_col = "CHIEF_NAME"
    //     email_col = "CHIEF_EMAIL"
    //     efis_col = "CHIEF_EFIS"
    // }else if(data[0][1] == "STE"){
    //     name_col = "STE_NAME"
    //     email_col = "STE_EMAIL"
    //     efis_col = "STE_EFIS"
    // }else{
    //     console.log("An update role error has occured.")
    // }
    
    // cols_data.push(name_col, email_col, efis_col)

    // var update_package = {
    //     columns: cols_data,
    //     old_data: data[0],
    //     new_data: data[1]
    // }

    // update_package.push(data[0], data[1], cols_data)

    // console.log(update_package)

    fetch("/ManagerDB/api/update/", {
        method: "POST",
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify(update) 
      }).then((res) => {
        res.json().then((data) => {
           console.log(data);
         
        });
      });

   
}