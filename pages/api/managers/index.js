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
            
                console.log(req.body['old_data'])
                const old_name = req.body['emp_name']
                const old_role = req.body['emp_role']
                const old_efis = req.body['emp_efis']
        
                const new_name = req.body['new_name']
                const new_email = req.body['new_email']
        
                if (old_role == "Deputy"){
        
                    const deputy = await prisma2.manager_dashboard_tbl.updateMany({
                        where: {
                            DEPUTY_NAME: {
                                contains: old_name,
                            },
                            EFIS: {
                                contains: old_efis,
                            },
                        },
                        data: {
                            DEPUTY_NAME: {set: new_name},
                            DEPUTY_EMAIL: {set: new_email},
                        },
                    }).then(data => {
                        res.send(data) 
                    }).catch(err => {
                        res.status(500).json({
                            error: err.message
                        })
                    })
        
                }else if(old_role == "Principal"){
        
                    const principal = await prisma2.manager_dashboard_tbl.updateMany({
                        where: {
                            PRIN_NAME: {
                                contains: old_name,
                            },
                            PRIN_EFIS: {
                                contains: old_efis,
                            },
                        },
                        data: {
                            PRIN_NAME: {set: new_name},
                            PRIN_EMAIL: {set: new_email},
                        },
                    }).then(data => {
                        res.send(data)
                    }).catch(err => {
                        res.status(500).json({
                            error: err.message
                        })
                    })
        
                }else if(old_role == "Chief"){
        
                    const chief = await prisma2.manager_dashboard_tbl.updateMany({
                        where: {
                            CHIEF_NAME: {
                                contains: old_name,
                            },
                            CHIEF_EFIS: {
                                contains: old_efis,
                            },
                        },
                        data: {
                            CHIEF_NAME: {set: new_name},
                            CHIEF_EMAIL: {set: new_email},
                        },
                    }).then(data => {
                        res.send(data) 
                    }).catch(err => {
                        res.status(500).json({
                            error: err.message
                        })
                    })
                }
                else if(old_role == "STE"){
        
                    const ste = await prisma2.manager_dashboard_tbl.updateMany({
                        where: {
                            STE_NAME: {
                                contains: old_name,
                            },
                            STE_EFIS: {
                                contains: old_efis,
                            },
                        },
                        data: {
                            STE_NAME: {set: new_name},
                            STE_EMAIL: {set: new_email},
                        },
                    }).then(data => {
                        res.send(data) 
                        console.log(data)
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



    // end of switch
