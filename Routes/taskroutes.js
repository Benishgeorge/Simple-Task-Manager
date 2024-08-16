const express = require ('express')

const task = require ('./Controllers/taskcontroller')

const routes = express.Router();

app.get('./task',gettask);
app.post('./task1',gettask);
app.put('./task2',updatetask.id);
app.delete('./task3',deletetetask.id);


module.exports = routes;








// npx create-react-app frontend