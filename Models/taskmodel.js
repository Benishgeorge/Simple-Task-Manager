const mongoose = require ('mongoose');


const TaskSchema = new mongoose.Schema({

    title:{
        type:String,
        require : true
    },
    description: {
        type:String,
        require : true
    },
    Date:{
        type:date,
        require : true
    },
})

const Task = new mongoose.model('Task',TaskSchema)
module.exports= Task


