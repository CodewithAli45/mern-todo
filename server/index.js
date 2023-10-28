const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const router = require('./routes/taskRoutes');
const port = process.env.PORT;
const uri = process.env.DB_URL;

const app = express();


// middlewares
app.use(cors());
app.use(express.json());

// connecting to db
mongoose.connect(uri).then(() => {
    console.log("connected to database");
}).catch((error) => {
    console.log("error in connecting db ", error);
});

app.use('/api/v1', router);

app.listen(port, () => console.log(`server running at http://localhost:${port}`))
