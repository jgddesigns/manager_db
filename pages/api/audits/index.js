// POST: create new audit
// GET : list all audits
// DELETE : Delete Audit 
import { prisma2 } from '../../../utils/prisma/prisma2'

export default async function handler(req,res){
    
    switch(req.method){
        case 'GET': 
            const users = prisma2.audit_table.findMany({
            }).then(users => {
                res.send(users) //Send user objects back to client
            }).catch(err => {
                res.status(500).json({
                    error: err
                })
            })
            break;
        case 'POST': // POST: create new user
           break;



        default:
            res.status(405).json({
                message: "Method not allowed"
            })
            break;
    }
    // end of switch
}