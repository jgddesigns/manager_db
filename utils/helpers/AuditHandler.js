import setAllManagerDB from '../../components/ManagerDBTable/index'

const AuditHandler = (audit) =>{
    //'audit' ARRAY MAP
    // change_type = audit[0]
    // changed_by_number = audit[1]
    // old_name = audit[2]
    // new_name = audit[3]
    // old_email = audit[4]
    // new_email = audit[5]
    // role = audit[6]
    // efis = audit[7]
    // region = audit[8]




    fetch("/ManagerDB/api/audits/", {
        method: "POST",
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify(audit) 
      }).then((res) => {
        res.json().then((data) => {
          console.log("Audit Response: " + JSON.stringify(data))
         
        });
      });

   
}

export default AuditHandler;