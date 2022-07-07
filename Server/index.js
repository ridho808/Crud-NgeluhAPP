import express  from "express";
import db from "./config/db.js";
import Router from "./Routers/index.js";


try {
    db.authenticate()
    console.log("db connected")
} catch (error) {
    console.log("db error",error)
}
const App = express();
const Port = 3000;
App.use(express.json());
App.use(Router);
App.listen(Port,()=>{
    console.log('server running')
})