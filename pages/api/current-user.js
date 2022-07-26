import jwt_decode from 'jwt-decode';

export default async function handler(req,res){
// return the current user making the request based off the jwt in the header
// if the user is not logged in, return null
// if the user is logged in, return the user object
// Get jwt from cookie
const token = req.cookies.jwt;
    if (token) {
    const decoded= jwt_decode(token);
    res.send(decoded);
    }
    else{
        res.status(401).json({
            message: "You are not logged in"
        })
        
    }


}