// POST: create new audit
// GET : list all audits
// DELETE : Delete Audit 
import { prisma2 } from '../../../utils/prisma/prisma2'

export default async function handler(req,res){
    
    switch(req.method){
        case 'POST': 

            const change_type = req.body['change_data'][0]
            const changed_by_number = req.body['change_data'][1]
            const old_name = req.body['change_data'][2]
            const new_name = req.body['change_data'][3]
            const old_email = req.body['change_data'][4]
            const new_email = req.body['change_data'][5]
            const role = req.body['change_data'][6]
            const efis = req.body['change_data'][7]
            const region = req.body['change_data'][8]


            const audit = await prisma2.audit_table.create({
                data: {
                    change_type: change_type,
                    changed_by_number: changed_by_number,
                    old_name: old_name,
                    new_name: new_name,
                    old_email: old_email,
                    new_email: new_email,
                    role: role,
                    efis: efis,
                    region: region,
                },
            }).then(data => {
                res.send(data) 
            }).catch(err => {
                res.status(500).json({
                    error: err.message
                })
            })
            break;


        default:
            res.status(405).json({
                message: "Method not allowed"
            })
            break;
    }
    // end of switch
}