import express, { application } from "express";
import data from "./data/data.js";

const app = express();


app.get('/', (req, res) => {
    res.send("Server is ready")
});

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000')
})