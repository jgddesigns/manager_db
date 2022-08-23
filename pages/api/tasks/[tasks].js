

import { prisma3 } from '../../../utils/prisma/prisma3'

export default function handler(req,res){
    //Find user based on User Id
    //Only allow GET requests.
    if (req.method !== 'GET'){
        res.status(405).json({
            message: `Method ${req.method} not allowed}`
        })
    }
    const tasks = Number(req.query.tasks);

    prisma3.task.findFirst({
        where: {
            id: tasks
        }
    }).then(task => {
        res.send(task)  //Send task object back to client
    }
    ).catch(err => {
        res.status(500).json({
            error: err
        })

    }
    )
    
}