
import { prisma2 } from '../../../utils/prisma/prisma2'

export default function handler(req,res){
    //Find Audit based on Audit ID
    //Only allow GET requests.
    if (req.method !== 'GET'){
        res.status(405).json({
            message: `Method ${req.method} not allowed}`
        })
    }
    const manager_dashboard_id = Number(req.query.manager_dashboard_id);
    
    prisma2.manager_dashboard_tbl.findFirst({
        where: {
            manager_dashboard_id: manager_dashboard_id
        }
    }).then(manager => {
        res.send(manager)  //Send Audit object back to client
    }
    ).catch(err => {
        res.status(500).json({
            error: err
        })

    }
    )
    
}
    