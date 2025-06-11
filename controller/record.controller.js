const Record = require('../models/record.model');


const getRecords = async (req, res) =>{
    try{
        const records = await Record.find({});
        res.status(200).json(records);
    } catch(error){
        res.status(500).json({message: error.message});
    }
}

const getSingleRecord = async(req, res) =>{
    try{
        const { id } = req.params;
        const record = await Record.findById(id);
        res.status(200).json(record);
    } catch(error){
        res.status(500).json({message: error.message});
    }
}

const getSingleRecordbyName = async (req, res) => {
    try {
        const { name } = req.params;
        
        const records = await Record.find({ name: name }); 

        if (records.length === 0) { 
            return res.status(404).json({ message: "No records found with that name" });
        }

        res.status(200).json(records); 
    } catch (error) {
        console.error("Error finding records by name:", error);
        res.status(500).json({message: error.message});
    }
}

const postRecord = async (req, res) => {
    try{
        const record = await Record.create(req.body);
        res.status(200).json(record);
    } catch(error){
        res.status(500).json({message: error.message});
    }
}

const updateRecord = async (req, res) => {
    try{
        const { id } = req.params;

        const record = await Record.findByIdAndUpdate(id, req.body);

        if (!record){
            return res.status(404).json({message: error.message})
        }
        
        const updatedRecord = await Record.findById(id);

        res.status(200).json(updatedRecord);
    } catch(error){
        res.status(500).json({message: error.message});
    }
}

const deleteRecord = async (req, res) => {
    try{
        const { id } = req.params;

        const record = await Record.findByIdAndDelete(id, req.body);

        if (!record){
            return res.status(404).json({message: error.message})
        }

        res.status(200).json({message: "Deleted"},record);
    } catch(error){
        res.status(500).json({message: error.message});
    }
}


module.exports = {
    getRecords,
    getSingleRecord,
    getSingleRecordbyName,
    postRecord,
    updateRecord,
    deleteRecord
}