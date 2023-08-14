import express from 'express'
import { router as authRoute } from './routes/auth-route.js'
import { router as postRoute } from './routes/post-route.js'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import config from './config/config.js'

const app = express();
const PORT = config.server.port;
const DATABASE_URI = config.database.url;

app.use(cors({
    credentials: true,
    origin: config.client.url
}));

app.use(express.json())
app.use(cookieParser())

app.use('/user', authRoute);
app.use('/', postRoute);
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect(DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});