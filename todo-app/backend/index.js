const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');

const app = express();

const port = 3000;

app.use(express.json());

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        return res.status(400).json({
            msg: "Invalid input",
            errors: parsedPayload.error.errors
        });
    }
    try {
        await todo.create({
            title: parsedPayload.data.title,
            description: parsedPayload.data.description,
        });
        res.json({
            msg: "Todo Created!"
        });
    } catch {
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
});

app.get("/todos", async function(req, res){
    try{
        const data = await todo.find({});
        res.status(200).json(data);
    }catch{
        res.status(404).json({
            message: "Error"
        })
    }
})

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"Wrong inputs" 
        })
        return;
    } 
    await todo.findByIdAndUpdate(req.body.id, {
        completed: true
    })
    res.json({
        msg: "Todo Updated"
    })
});

app.listen(port, ()=> {
    console.log(`App running on the port ${port}`);
})