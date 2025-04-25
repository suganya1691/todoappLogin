import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || 'mysecretkey';
export default async function handler(req,res){
    if(req.method == 'POST'){
        const{username,password} = req.body;
        if(username == 'sugan' && password == 'asd'){
            const token = jwt.sign({username},SECRET_KEY,{expiresIn : '1h'});
            return res.status(200).json({success:true,token:token,username:username});
        }
       return res.status(401).json({error:'Invalid Credentials'});
        
    }
    res.setHeader('Allow',[POST]);
    res.status(405).json({error:`Method ${req.method} not allowed`} );
}