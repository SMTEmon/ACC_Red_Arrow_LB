const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 8080;
const recordRoute = require('./routes/record.route.js')
const env = require('dotenv').config();

//middleware

app.use(express.json());
app.use(express.urlencoded({extended: false}));



//routes
app.use("/api/records", recordRoute);





mongoose.connect(`mongodb+srv://SMTEmon:${process.env.password}@cluster0.okybngz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
    console.log(`Connected to DB`);
}).catch(() => {
    console.error(`Connection Failed`);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get(`/`, (request, response) => {
    response.send(`Pong`);
});
