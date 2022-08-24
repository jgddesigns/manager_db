// POST: create new audit
// GET : list all audits
// DELETE : Delete Audit 
import { prisma3 } from '../../../utils/prisma/prisma3'

export default async function handler(req,res){
    
    switch(req.method){
        case 'GET': // GET : list all users
            const tasks = await prisma3.task.findMany({
            }).then(tasks => {
                res.send(tasks) //Send user objects back to client
            }).catch(err => {
                res.status(500).json({
                    error: err
                })
            })
            break;
        case 'POST': // POST: create new user
       

            const task = await prisma3.task.create({  
                data: {
                    emp_num: req.body['emp_num'],
                    application: req.body['application'],
                    page: req.body['page'],
                    Priorty: req.body['priority'],
                    file_path: req.body['file_path'],
                    task_description: req.body['task_description'],
                },
            }).then(data => {
                res.send(data) 
            }).catch(err => {
                res.status(500).json({
                    error: err.message
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