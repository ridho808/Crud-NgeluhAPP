import express  from "express";
import db from "./config/db.js";
import Router from "./Routers/index.js";
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config()
try {
    db.authenticate()
    console.log("db connected")
} catch (error) {
    console.log("db error",error)
}
const App = express();
const Port = 3033;
App.use(express.json());
App.use(cors({ credentials: true, origin: "http://localhost:3000" }));
App.use(Router);
App.listen(process.env.PORT || Port,()=>{
    console.log('server running')
})