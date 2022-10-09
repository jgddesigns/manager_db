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
            
                // region: a['REGION'],
                // district: a['DISTRICT'],
                // tram: a['TRAM'],
                // efis: a['EFIS'],
                // deputy_name: a['DEPUTY_NAME'],
                // deputy_email: a['DEPUTY_EMAIL'],
                // prin_unit: a['PRIN_UNIT'],
                // prin_efis: a['PRIN_EFIS'],
                // prin_name: a['PRIN_NAME'],
                // prin_email: a['PRIN_EMAIL'],
                // chief_unit: a['CHIEF_UNIT'],
                // chief_efis: a['CHIEF_EFIS'],
                // chief_name: a['CHIEF_NAME'],
                // chief_email: a['CHIEF_EMAIL'],
                // ste_unit: a['STE_UNIT'],
                // ste_efis: a['STE_EFIS'],
                // ste_name: a['STE_NAME'],
                // ste_email: a['STE_EMAIL'],

                const region = req.body['region']
                const district = req.body['district']
                const tram = req.body['tram']
                const efis = req.body['efis']
                const deputy_name = req.body['deputy_name']
                const deputy_email = req.body['deputy_email']
                const prin_unit = req.body['prin_unit']
                const prin_efis = req.body['prin_efis']
                const prin_name = req.body['prin_name']
                const prin_email = req.body['prin_email']
                const chief_unit = req.body['chief_unit']
                const chief_efis = req.body['chief_efis']
                const chief_name = req.body['chief_name']
                const chief_email = req.body['chief_email']
                const ste_unit = req.body['ste_unit']
                const ste_efis = req.body['ste_efis']   
                const ste_name = req.body['ste_name']
                const ste_email = req.body['ste_email']
                const supervisor_name = req.body['supervisor_name']
                const emp_role = req.body['emp_role']
                const emp_name = req.body['emp_name']
                const emp_email = req.body['emp_email']
                const emp_district = req.body['emp_district']
                const emp_efis = req.body['emp_efis']
        
                if (emp_role == "Principal"){
        
                    const principal = await prisma2.manager_dashboard_tbl.create({
                        data: {
                            REGION: region,
                            DISTRICT: district,
                            TRAM: tram,
                            EFIS: efis, //
                            DEPUTY_NAME:  deputy_name,
                            DEPUTY_EMAIL: deputy_email,
                            PRIN_UNIT: prin_unit,
                            PRIN_EFIS: emp_efis,
                            PRIN_NAME: emp_name,
                            PRIN_EMAIL: emp_email,
                            CHIEF_UNIT: "",
                            CHIEF_EFIS: "",
                            CHIEF_NAME: "",
                            CHIEF_EMAIL: "",
                            STE_UNIT: "",
                            STE_EFIS: "",
                            STE_NAME: "",
                            STE_EMAIL: "",
                        },
                    }).then(data => {
                        res.send(data) 
                    }).catch(err => {
                        res.status(500).json({
                            error: err.message
                        })
                    })

                   
        
                }else if(emp_role == "Chief"){

                    const chief = await prisma2.manager_dashboard_tbl.create({
                        data: {
                            REGION: region,
                            DISTRICT: district,
                            TRAM: tram,
                            EFIS: efis, //
                            DEPUTY_NAME:  deputy_name,
                            DEPUTY_EMAIL: deputy_email,
                            PRIN_UNIT: prin_unit,
                            PRIN_EFIS: prin_efis,
                            PRIN_NAME: prin_name,
                            PRIN_EMAIL: prin_email,
                            CHIEF_UNIT: chief_unit,
                            CHIEF_EFIS: emp_efis,
                            CHIEF_NAME: emp_name,
                            CHIEF_EMAIL: emp_email,
                            STE_UNIT: "",
                            STE_EFIS: "",
                            STE_NAME: "",
                            STE_EMAIL: "",
                        },
                    }).then(data => {
                        res.send(data) 
                    }).catch(err => {
                        res.status(500).json({
                            error: err.message
                        })
                    })


                }else if(emp_role == "STE"){

                    const ste = await prisma2.manager_dashboard_tbl.create({
                        data: {
                            REGION: region,
                            DISTRICT: district,
                            TRAM: tram,
                            EFIS: efis, //
                            DEPUTY_NAME:  deputy_name,
                            DEPUTY_EMAIL: deputy_email,
                            PRIN_UNIT: prin_unit,
                            PRIN_EFIS: prin_efis,
                            PRIN_NAME: prin_name,
                            PRIN_EMAIL: prin_email,
                            CHIEF_UNIT: chief_unit,
                            CHIEF_EFIS: chief_efis,
                            CHIEF_NAME: chief_name,
                            CHIEF_EMAIL: chief_email,
                            STE_UNIT: ste_unit,
                            STE_EFIS: emp_efis,
                            STE_NAME: emp_name,
                            STE_EMAIL: emp_email,
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



    // end of switch
