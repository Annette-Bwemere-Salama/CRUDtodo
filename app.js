const express = require('express');

const app = express();

const taskslist = ["Dormir", "travailler"];

app.use(express.urlencoded({extended: false}));

app
    .get('/read', (req, res) => {
        res.json({tasks: taskslist})
    })
    .put('/add', (req, res) => {
        const valeur = req.body.value;
        taskslist.push(valeur);
        res.end();
    })
    .delete('/delete/:id', (req, res) => {
        const taskId = req.params.id;
        taskId && taskslist.splice(taskId, 1);
        res.end();
    })
    .post('/update/:id/:value', (req, res) => {
        const {id, value} = req.params;
        taskslist[id] = value;
        res.end();
    })
    

app.listen(3001, () => console.log("Server à l'écoute au port"));
