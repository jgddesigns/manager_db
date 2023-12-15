import jwt_decode from 'jwt-decode';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req : NextApiRequest,res: NextApiResponse){
// return the current user making the request based off the jwt in the header
// if the user is not logged in, return null
// if the user is logged in, return the user object
// Get jwt from cookie
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5ODAyNDY1NywiaWF0IjoxNjk4MDI0NjU3fQ.NoW570xtZ7o57Ul9VbtymhQvQbDf1bpcPGityMwleco';
    if (token) {
    const decoded = jwt_decode(token);
    res.send(decoded);
    }
    else{
        res.status(200).json({
            message: "You are not logged in"
        })
        
    }


}