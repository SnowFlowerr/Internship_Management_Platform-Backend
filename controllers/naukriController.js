import Naukri_jobs from "../models/Naukri_jobs.js";

export const getNaukri=async(req,res,next)=>{
    // const {time,domain}=req.body
    try{
        const user=await Naukri_jobs.find();
        res.status(200).json(user)
    }
    catch(err){
        next(err)
    }
}
export const getOneNaukri=async(req,res,next)=>{
    try{
        const user=await Naukri_jobs.findById(req.params.id);
        res.status(200).json(user)
    }
    catch(err){
        next(err)
    }
}