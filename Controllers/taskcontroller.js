const Task = rquire ('./Models/taskmodel')

exports.getTask = async (req,res) => {

    const  Task = Task.find({isDelete:false})

    try {
        res.status(200).json({
            success : true,
            data :Task,
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message : error.message
        })
        
    }
    
}

exports.createTask = async (req,res) => {

    try {
        const {tittle, description, date}=req.body()

           const  Task = newTask({
      
            tittle:tittle,
            description:description,
            date:date,

           
        })
        await Task.save();
        
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
        
    }
    
}