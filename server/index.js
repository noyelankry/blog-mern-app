import express from 'express'
import { router as authRoute } from './routes/auth-route.js'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express();
const PORT = 4000;
const DATABASE_URI = "mongodb://localhost:27017";

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use('/user', authRoute);

mongoose.connect(DATABASE_URI);

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});