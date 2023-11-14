const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
        nama: {
                type: String,
                required: [true, 'silahkan isikan nama'],
                unique: true
        
        },
        email: {
                type: String,
                required: true,
                match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'silahkan isikan emial validasi']
        }
})

module.exports = mongoose.model('User', UserSchema)