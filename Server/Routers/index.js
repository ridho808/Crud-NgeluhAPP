import  Express  from "express";
import { CreateData, DeleteData, EditData, GetAllData, GetOneData } from "../controller/service.js";

const Router = Express.Router();

Router.get('/',GetAllData);
Router.post('/Message',CreateData);
Router.patch('/Edit/:id',EditData);
Router.get('/getmsg/:id',GetOneData);
Router.delete('/delete/:id',DeleteData);


export default Router;