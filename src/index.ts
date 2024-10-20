import express from "express";
import { connectDB } from "./db";

const app = express()
app.use(express.json())


async function startServer() {
    await connectDB()
    app.post('/new', )
}

startServer()