const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let client = new Schema(
    {
        name: {
            type: String,
            index: true,
            unique: true,
        },
        fileShareLocation : {
            type: String,
            index: true,
            unique: true,
        }
    },
    { collection: 'Clients', timestamps: true }
);


module.exports = mongoose.model('clients', client);