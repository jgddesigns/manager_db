// POST: create new audit
// GET : list all audits
// DELETE : Delete Audit 
import { prisma } from '../../../utils/prisma/prisma'

export default async function handler(req,res){
    
    switch(req.method){
        case 'GET': // GET : list all users
            const users = await prisma.users.findMany({
            }).then(users => {
                res.send(users) //Send user objects back to client
            }).catch(err => {
                res.status(500).json({
                    error: err
                })
            })
            break;
        case 'POST': // POST: create new user
            const user = JSON.parse(req.body);
            const{emp_num,first_name,last_name,role,password,email_address} = user;

            await prisma.users.create({
                data: {
                    emp_num:emp_num,
                    first_name:first_name,
                    last_name: last_name,
                    role:role,
                    passward: password,
                    email_address: email_address
                }
            }).then(user => {
                res.send(user) //Send user object back to client
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