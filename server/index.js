const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 5000;
const router = require('./routes/taskRoutes');
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// connecting to db
mongoose.connect("mongodb+srv://admin:ciA2ceqEbwllK7CH@todos1.vsgavr1.mongodb.net/todos?retryWrites=true&w=majority").then(() => {
    console.log("connected to database");
}).catch((error) => {
    console.log("error in connecting db ", error);
});

app.use('/', router);

app.listen(PORT, () => console.log(`server running at http://localhost:${PORT}`))

// ciA2ceqEbwllK7CH

// mongodb+srv://admin:ciA2ceqEbwllK7CH@todos1.vsgavr1.mongodb.net/todos?retryWrites=true&w=majority