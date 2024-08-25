import { connect } from "mongoose";
import { DB_URL } from "./config.js";

export async function conexion (DB_URL){
    try{
    const result = await  connect(DB_URL)
    console.log("DB connected");
    }catch(error){
        console.log(error);
    }
}   

conexion(DB_URL)