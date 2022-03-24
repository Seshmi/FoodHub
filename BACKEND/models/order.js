const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 

    age: {
        type: Number,
        required: true,
        trim: true
    },

    gender: {
        type: String,
        required: true,
        trim: true
    }, 

    address: {
        type: String,
        required: true,
        trim: true
    },
    
    phone: {
        type: Number,
       
        trim: true
    },

    email:{
        type:String,
        required:true , 
        unique:true,
    },

    

});

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 

    age: {
        type: Number,
        required: true,
        trim: true
    },

    gender: {
        type: String,
        required: true,
        trim: true
    }, 

    address: {
        type: String,
        required: true,
        trim: true
    },
    
    phone: {
        type: Number,
       
        trim: true
    },

    email:{
        type:String,
        required:true , 
        unique:true,
    },

    

});

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;