import Crud from "../model/crud.js"


export const GetAllData = async (req,res)=>{
   await Crud.findAll().then((response)=>{
        res.json(response)
    }).catch((error)=>{
        res.json(error)
    })
};

export const CreateData = async (req,res) => {
    const {name,Message} = req.body;
    await Crud.create({
        name : name,
        Message : Message,
    }).then((response) => {
        res.json({"message" : response}).status(200)
    }).catch((err) => {
        res.json({"message" : err})
    })
};

export const EditData = async (req,res) => {
    const{name,Message} = req.body;
    await Crud.update({
        name : name,
        Message : Message,
    },{
        where : {
        id : req.params.id
        }
    }).then((response)=>{
        res.json({"Message" : "Data Berhasil Diubah" , response})
    }).catch((error)=>{
        res.json(error)
    })
};

export const GetOneData = async (req,res) => {
    const {id} = req.params
    Crud.findOne({where : {id:id}})
    .then((response)=>{
        res.json(response)
    }).catch((error)=>{
        res.json(error)
    })
};

export const DeleteData = async (req,res) => {
    const {id} = req.params
    Crud.destroy({
        where:{
            id : id
        }
    }).then((response)=>{
        res.json({"message": "data dihapus" , response})
    }).catch(error => {
        res.json(error)
    })
};