const express = require('express');
const pg = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const client = new pg.Client({
    user: process.env.DBUSER,
    database: process.env.DBNAME,
    password: process.env.DBPASSWORD,
    port: process.env.DBPORT,
    host: process.env.DBHOST,
})

client
    .connect()
    .then(() => {
        console.log('Connexion à la BD réussie');
    }).catch((err) => {
        console.error(err);
        process.exit(0);
    });

app.use(express.urlencoded({ extended: false }));

app
    .get('/read', (_, res) => {
        client.query("SELECT * FROM tasks", (_, data) => {
            res.json({ tasks: data.rows });
        })
    })
    .put('/add', (req, res) => {
        const valeur = req.body.value;
        client
            .query("INSERT INTO tasks(name) VALUES ($1)", [valeur])
            .then(() => res.status(200).json({ message: "Bien ajouter" }))
            .catch(() => res.status(401).json({ message: "Echec de l'ajout" }))
    })
    .delete('/delete/:id', (req, res) => {
        const taskId = req.params.id;
        taskId && client.query("DELETE FROM tasks WHERE id=$1", [taskId], (err, data) => {
            if(err || !data.rowCount) res.status(401).json({message: "Echec de suppression"})
            else res.status(200).json({ message: "Suppression réussie" })
        })
    })
    .post('/update/:id/:value', (req, res) => {
        const { id, value } = req.params;
        client
            .query("UPDATE tasks SET name=$1 WHERE id=$2", [value, id], (err, data) => {
                if (err || !data.rowCount) res.status(401).json({ message: "Echec de la mise à jour" })
                else res.status(200).json({ message: "Mis à jour réussie" })
            })
    })


app.listen(3001, () => console.log("Server à l'écoute au port"));
