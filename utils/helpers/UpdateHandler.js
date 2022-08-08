import setAllManagerDB from '../../components/ManagerDBTable/index'

const UpdateHandler = (update) =>{
    //'data' ARRAY MAP
    // emp_name: data[0][0],
    // emp_role: data[0][1],
    // emp_efis: data[0][2],

    // new_name: data[1][0],
    // new_email: data[1][1]

    fetch("/ManagerDB/api/update/", {
        method: "POST",
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify(update) 
      }).then((res) => {
        res.json().then((data) => {
          fetch("/ManagerDB/api/managers/", {
            method: "GET",
          }).then((res) => {
            console.log(res)
          });
        
         
        });
      });

   
}

export default UpdateHandler;