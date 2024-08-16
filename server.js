const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const task = require('./Routes/taskroutes');
const app = express();

const port = 4002;


 

app.use('./api',routes());



//mongoDB url
const MONGO_URI = "mongodb+srv://benishgeorge4:ben12345@cluster0.e8nczjd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(MONGO_URI,{});

mongoose.connection.on('connected', () =>{
    console.log("MongoDB successfully connected");
})

app.listen(port,()=>{
    console.log("The serveris started on port" + " " + port);

}
)