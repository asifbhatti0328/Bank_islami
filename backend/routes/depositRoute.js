import express from 'express'
import depositUser from '../controllers/depositController.js'



const depositRouter= express.Router();


depositRouter.post('/deposit',depositUser);

export default depositRouter;

