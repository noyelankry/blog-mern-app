import express from 'express'
import { router as authRoute } from './routes/auth-route.js'
import { router as postRoute } from './routes/post-route.js'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

const app = express();
const PORT = 4000;
const DATABASE_URI = "mongodb://localhost:27017";

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json())
app.use(cookieParser())

app.use('/user', authRoute);
app.use('/', postRoute);
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect(DATABASE_URI);

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});