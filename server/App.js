import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";

import postRouts from './routes/postRouts.js';

/* CONFIGURATIONS */
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: "60mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "60mb", extended: true }));
app.use(cors());

app.use('/post', postRouts );

const PORT = process.env.PORT || 5000;

/* MONGOOSE SETUP */
const connection_url = 'mongodb+srv://debasish:debasish123@cluster0.dyhkoei.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);
mongoose.connect(
    connection_url, 
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use('/', (req, res) => res.send('<h1>Debasish</h1>'));

app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
