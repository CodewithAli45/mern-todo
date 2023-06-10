const mongoose = require('mongoose');

const connection = () => {
   mongoose.connect('mongodb://127.0.0.1:27017/playground').then(() => {
    console.log('database connected ');
    }).catch((error) => {
        console.log("something went wrong ", error);
    });
 
} 
module.exports = connection;
