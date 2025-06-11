const mongoose = require('mongoose');

const RecordSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Please enter a valid name"]
        },
        laptime: {
            type: Number,
            required: [true, "Please enter a valid laptime"],
            min: [0, "Laptime cannot be negative"]
        },
        circuit: {
            type: String,
            required: [true, "Please enter a valid Circuit"]
        }
    },
    {
        timestamps: true
    }
);

const Record = mongoose.model("Record", RecordSchema);

module.exports = Record;