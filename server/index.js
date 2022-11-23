const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const port = 3001;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "feedback",
});

app.use(cors());
app.use(express.json());

app.get("/feedbacks", (req, res) => {
    let SQL = "SELECT * FROM feedbacks";
    db.query(SQL, (err, result) => {
        err ? console.log(err) : res.send(result)
    })
})

app.post("/filterByDate", (req, res) => {

    const { data1 } = req.body;
    const { data2 } = req.body;

    let SQL = "SELECT * FROM feedbacks WHERE `data` >= ? AND `data` <= ?";
    db.query(SQL, [data1, data2] ,(err, result) => {
        err ? console.log(err) : res.send(result)
    })
})

app.post("/filterByDateComplete", (req, res) => {

    const { data1 } = req.body;
    const { data2 } = req.body;

    let SQL = "SELECT * FROM feedbackscomplete WHERE `data` >= ? AND `data` <= ?";
    db.query(SQL, [data1, data2] ,(err, result) => {
        err ? console.log(err) : res.send(result)
    })
})

app.post("/sendFeedback", (req, res) => {
    const { resposta0 } = req.body;
    const { resposta1 } = req.body;
    const { justificativa } = req.body;
    const { data } = req.body;

    let SQL = "INSERT INTO feedbacks VALUES (?,?,?,?)"

    db.query(SQL, [resposta0, resposta1, justificativa, data], (err, result) => {
        err ? console.log(err) : res.send(result)
    })

})

app.post("/sendFeedbackComplete", (req, res) => {
    const { resposta0 } = req.body;
    const { resposta1 } = req.body;
    const { resposta2 } = req.body;
    const { resposta3 } = req.body;
    const { resposta4 } = req.body;
    const { resposta5 } = req.body;
    const { resposta6 } = req.body;
    const { resposta7 } = req.body;
    const { resposta8 } = req.body;
    const { resposta9 } = req.body;
    const { resposta10 } = req.body;
    const { justificativa } = req.body;
    const { data } = req.body;

    let SQL = "INSERT INTO feedbacksComplete VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)"

    db.query(SQL, [resposta0, resposta1, resposta2, resposta3, resposta4, resposta5, resposta6, resposta7, resposta8, resposta9, resposta10, justificativa, data], (err, result) => {
        err ? console.log(err) : res.send(result)
    })

})

app.get("/feedbacksComplete", (req, res) => {
    let SQL = "SELECT * FROM feedbackscomplete";
    db.query(SQL, (err, result) => {
        err ? console.log(err) : res.send(result)
    })
})

app.listen(port , () => {
    console.log(`Rodando servidor na porta ${port}`)
})