import {Sequelize} from "sequelize";
import db from "../config/db.js";
const {DataTypes} = Sequelize;

const Crud = db.define("Visiter",{
    name: {
        type: DataTypes.STRING,
    },
    Message : {
        type : DataTypes.TEXT,
    }
});

export default Crud;