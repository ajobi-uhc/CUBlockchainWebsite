import newMember from "../models/newMember.js";

export const getRoutes = (req,res)=>{
    res.send('mainpage');
}

export const getRoutesExplore = (req,res)=>{
    res.send('explore');
}

export const getRoutesMembers = async (req,res)=>{
    
    try{
        const showmembers = await newMember.find();
        res.status(200).json(showmembers);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }

}

export const getRoutesConnect = (req,res)=>{
    res.send('connect');

}

export const postRoutesMembers = async (req,res) =>{
    const member = req.body;

    const newPost = new newMember(req.body);
    console.log(req.body)
    console.log(newMember.count())

    try{
       
        await newPost.save().then((res)=>{
            console.log('saved to db')
            
            
            

        });
        
        
        res.status(201).json(newPost);
    }
    catch(error){
        res.status(409).json({message:error.message});
    }
}