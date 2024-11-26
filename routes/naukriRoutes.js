import express from 'express';
import { getNaukri, getOneNaukri } from '../controllers/naukriController.js';


const router=express.Router();

// get road map
router.get('/get',getNaukri)

// add road map
router.get('/getone/:id',getOneNaukri)




export default router;