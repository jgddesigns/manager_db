

import { prisma } from '../../../utils/prisma/prisma'

export default function handler(req,res){
    //Find user based on User Id
    //Only allow GET requests.
    if (req.method !== 'GET'){
        res.status(405).json({
            message: `Method ${req.method} not allowed}`
        })
    }
    const user_id = Number(req.query.user_id);

    prisma.users.findFirst({
        where: {
            id: user_id
        }
    }).then(user => {
        res.send(user)  //Send user object back to client
    }
    ).catch(err => {
        res.status(500).json({
            error: err
        })

    }
    )
    
}