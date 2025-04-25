export default async function handler(req,res){
    if(req.method == 'POST'){
        const{username,password} = req.body;
        console.log('Login Successful', {username});
        return res.status(200).json({success:true,message:username});
    }
    res.setHeader('Allow',[POST]);
    res.status(405).json({error:`Method ${req.method} not allowed`} );
}