const mongoose = require("mongoose");


module.exports = new mongoose.Schema({
    Precio: {
        type: Number,
        required: true,
       
    },
    Cantidad: {
        type: Number,
        required: true
    },
    Min: {
        type: Number,
        required: true
    },

    Max: {
        type: Number,
        required: true  
    },
    Costo: {
        type: Number,
        required: true  
    },
     Nombre:{
        type: String,
        required: true  
    }
});
