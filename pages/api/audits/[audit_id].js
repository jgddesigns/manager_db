
import { prisma2 } from '../../../utils/prisma/prisma2'

export default function handler(req,res){
    //Find Audit based on Audit ID
    //Only allow GET requests.
    if (req.method !== 'POST'){
        res.status(405).json({
            message: `Method ${req.method} not allowed}`
        })
    }
    const audit_id = Number(req.query.audit_id);

    prisma2.audit_table.findFirst({
        where: {
            id: audit_id
        }
    }).then(audit => {
        res.send(audit)  //Send Audit object back to client
    }
    ).catch(err => {
        res.status(500).json({
            error: err
        })

    }
    )
    
}