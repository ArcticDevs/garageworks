const mongoose = require('mongoose');

const connection = () =>{

    mongoose.connect('mongodb+srv://test:test@cluster0.gdkdv.mongodb.net/GarageWorks?retryWrites=true&w=majority' , {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(() =>{console.log('DB Connected')})
    .catch(() =>{console.log('DB Failed')})

}

module.exports = connection