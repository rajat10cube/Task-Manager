//This file will handle the connection logic to the mongodb database

const mongoose = require('mongoose');

mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager',{ useNewUrlParser: true}).then(()=>{
        console.log("Connected to MongoDB successfully ");
}).catch((e)=>{
        console.log("Error while attempting to connect to MongoDB");
        console.log(e);
});

// To prevent deprectation warnings ( from mongoDB native drivers)
mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify',false);

module.exports={
        mongoose
};