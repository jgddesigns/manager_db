import setAllManagerDB from '../../components/ManagerDBTable/index'

const AuditHandler = (audit) =>{
    //'audit' map key:
    // type 
    // changed_by_number 
    // old_name 
    // new_name 
    // old_email 
    // new_email 
    // role
    // efis 
    // region




    fetch("/ManagerDB/api/audits/", {
        method: "POST",
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify(audit) 
      }).then((res) => {
        res.json().then((data) => {
          // console.log("Audit Response: " + JSON.stringify(data))
          console.log("Audit Success")
         
        });
      });

   
}

export default AuditHandler;