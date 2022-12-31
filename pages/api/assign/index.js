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
    
            case 'PATCH':
                const update_role = req.body['update_role']
                const update_name = req.body['update_name']
                const update_unit = req.body['update_unit']
                const update_email = req.body['update_email']
                const update_efis = req.body['update_efis']
                const prin_name = req.body['prin_name']
                const prin_unit = req.body['prin_unit']
                const prin_email = req.body['prin_email']
                const prin_efis = req.body['prin_efis']
                const chief_name = req.body['chief_name']
                const chief_unit = req.body['chief_unit']
                const chief_email = req.body['chief_email']
                const chief_efis = req.body['chief_efis']
                const ste_name = req.body['ste_name']
                const ste_unit = req.body['ste_unit']
                const ste_email = req.body['ste_email']
                const ste_efis = req.body['ste_efis']

                if (update_role == "Principal"){
                    const principal = await prisma2.manager_dashboard_tbl.updateMany({
                        where: {
                            PRIN_EFIS: {
                                contains: update_efis,
                            },
                        },
                        data: {
                            CHIEF_NAME: {set: chief_name},
                            CHIEF_UNIT: {set: chief_unit},
                            CHIEF_EMAIL: {set: chief_email},
                            CHIEF_EFIS: {set: chief_efis},
                            STE_NAME: {set: ste_name},
                            STE_UNIT: {set: ste_unit},
                            STE_EMAIL: {set: ste_email},
                            STE_EFIS: {set: ste_efis},
                        },
                    }).then(data => {
                        res.send(data) 
                    }).catch(err => {
                        res.status(500).json({
                            error: err.message
                        })
                    })
                }else if (update_role == "Chief"){
                    const chief = await prisma2.manager_dashboard_tbl.updateMany({
                        where: {
                            CHIEF_EFIS: {
                                contains: update_efis,
                            },
                        },
                        data: {
                            STE_NAME: {set: ste_name},
                            STE_UNIT: {set: ste_unit},
                            STE_EMAIL: {set: ste_email},
                            STE_EFIS: {set: ste_efis},
                        },
                    }).then(data => {
                        res.send(data) 
                    }).catch(err => {
                        res.status(500).json({
                            error: err.message
                        })
                    })              
                }else{
                    console.log("An update role error has occured.")
                }
        
                break;
        
            default:
                res.status(405).json({
                    message: "Method not allowed"
                })
                break;
            }
    }



