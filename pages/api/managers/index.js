// POST: create new audit
// GET : list all audits
// DELETE : Delete Audit 
import { prisma2 } from '../../../utils/prisma/prisma2'

export default async function handler(req,res){
    switch(req.method){
        case 'GET': 
            const managers = await prisma2.manager_dashboard_tbl.findMany({
            }).then(managers => {
                res.status(200).send(managers) //Send user objects back to client
            }).catch(err => {
                res.status(500).json({
                    error: err
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