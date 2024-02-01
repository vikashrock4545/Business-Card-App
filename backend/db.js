require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;
mongoose.connect(uri)


const cardSchema = mongoose.Schema({
    name: String,
    description: String,
    interests: [String],
    linkedin: String,
    twitter: String
})

const adminSchema = mongoose.Schema({
    username: String,
    password: String
})

const card = mongoose.model('Card', cardSchema)
const admin = mongoose.model('Admin', adminSchema)

module.exports = {
    card,
    admin
}