import jwt_decode from 'jwt-decode';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req : NextApiRequest,res: NextApiResponse){
// Destroy the cookie with jwt
// Set the cookie to expire in the past
const token = req.cookies.jwt;

    if (token) {
    res.setHeader('Set-Cookie', `jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`);
    // 
    res.status(200).json({
        message: "You have been logged out"
        })
    }
    


}