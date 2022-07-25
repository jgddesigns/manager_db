// POST: create new audit
// GET : list all audits
// DELETE : Delete Audit 
import { prisma2 } from '../../../utils/prisma/prisma2'

export default function handler(req,res){
    const audit_id = Number(req.query.audit_id);

    prisma2.audit_
    
}