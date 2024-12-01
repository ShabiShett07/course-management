import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/database.js';
import courseRoutes from './routers/courseRouters.js'
import path from 'path';

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use("/api/coursepage", courseRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "/frontend/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend","build","index.html"));
    })
}

app.listen(PORT, () => {
    connectDB();
    console.log("Server starting at http://localhost:"+PORT);
})
