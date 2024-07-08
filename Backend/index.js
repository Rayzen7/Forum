import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import cors from 'cors';
import connectDB from './Config/connect.js';
import router from './Routes/AuthRoutes.js';
import fileRouter from './Routes/FileRoutes.js';
import AdminRouter from './Routes/AdminRoutes.js';

const app = express();

app.use(express.json())
app.use(cors({
    origin: ["https://forum-user.vercel.app"], 
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
}));
connectDB();

const PORT = process.env.PORT

// crud
app.use('/uploads', express.static('uploads')); 
app.use('/api/files', fileRouter);

// login
app.use('/api/users', router);

// Admin Login
app.use('/api/admin', AdminRouter);

app.listen(PORT, () => {(
    console.log("server running...")
)});

app.get("/", (req, res) => {
    res.json("Hello");
})