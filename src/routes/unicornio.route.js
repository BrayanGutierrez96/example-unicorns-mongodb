import { Router } from "express";
import {createUnicorn, getUnicorns,getUnicorn,updateUnicorn, deleteUnicorn} from '../controllers/unicornio.controllers.js'


export const unicornioRoute = Router() 
unicornioRoute.get('/',(req,res)=>{
    res.send(
        <h1>Hola mundo</h1>
    )
})
unicornioRoute.get('/unicornios', getUnicorns);
unicornioRoute.get('/unicornios/:unicornId', getUnicorn);
unicornioRoute.post('/unicornios', createUnicorn);
unicornioRoute.put('/unicornios/:unicornId', updateUnicorn);
unicornioRoute.delete('/unicornios/:unicornId', deleteUnicorn);