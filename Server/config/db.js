import {Sequelize} from "sequelize";
import dotenv from 'dotenv'
dotenv.config();
const db = new Sequelize(process.env.NAME_DB,process.env.USER,process.env.PASSWORD,{
    host:"localhost",
    dialect:"mysql"
});

export default db;