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
        
            const efis = req.body['efis']
            const role = req.body['role']

            if(role == "Deputy"){
                const deleteUser = await prisma2.manager_dashboard_tbl.updateMany({
                    where: {
                        EFIS: {contains: efis,
                        },
                    },
                    data: {
                        EFIS: "",
                        DEPUTY_NAME: "",
                        DEPUTY_EMAIL: "",
                    }
                }).then(data => {
                    res.send(data) 
                }).catch(err => {
                    res.status(500).json({
                        error: err.message
                    })
                })
            }else if(role == "Principal"){
                const deleteUser = await prisma2.manager_dashboard_tbl.updateMany({
                    where: {
                        PRIN_EFIS: {contains: efis,
                        },
                    },
                    data: {
                        PRIN_UNIT: "",
                        PRIN_EFIS: "",
                        PRIN_NAME: "",
                        PRIN_EMAIL: "",
                    }
                }).then(data => {
                    res.send(data) 
                }).catch(err => {
                    res.status(500).json({
                        error: err.message
                    })
                })
            }else if(role == "Chief"){
                const deleteUser = await prisma2.manager_dashboard_tbl.updateMany({
                    where: {
                        CHIEF_EFIS: {contains: efis,
                        },
                    },
                    data: {
                        CHIEF_UNIT: "",
                        CHIEF_EFIS: "",
                        CHIEF_NAME: "",
                        CHIEF_EMAIL: "",
                    }
                }).then(data => {
                    res.send(data) 
                }).catch(err => {
                    res.status(500).json({
                        error: err.message
                    })
                })
            }else if(role == "STE"){
                const deleteUser = await prisma2.manager_dashboard_tbl.updateMany({
                    where: {
                        STE_EFIS: {contains: efis,
                        },
                    },
                    data: {
                        STE_UNIT: "",
                        STE_EFIS: "",
                        STE_NAME: "",
                        STE_EMAIL: "",
                    }
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

