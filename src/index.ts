import express from "express";
import { connectDB } from "./db";
import { newPaste } from "./newPaste";

const app = express()
app.use(express.json())


async function startServer() {
    await connectDB()
    app.post('/new', newPaste)
}

startServer()