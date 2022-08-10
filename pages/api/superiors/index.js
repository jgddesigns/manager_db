// POST: create new audit
// GET : list all audits
// DELETE : Delete Audit 
import { prisma2 } from '../../../utils/prisma/prisma2'

export default async function handler(req,res){
    switch(req.method){
        case 'GET': 

            const region = req.body['region']

                const superior = await prisma2.manager_dashboard_tbl.findMany({
                    where: {
                        REGION: {
                            contains: region,
                        },
                    },
                }).then(data => {
                    res.send(data) 
                }).catch(err => {
                    res.status(500).json({
                        error: err.message
                    })
                })
    
       
            break;
    
            case 'PATCH':
            
        
        
                break;
        
            default:
                res.status(405).json({
                    message: "Method not allowed"
                })
                break;
            
            }
    }



    // end of switch
