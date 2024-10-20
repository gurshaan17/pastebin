import express from "express";
import { connectDB } from "./db";
import { newPaste } from "./newPaste";
import { getPaste } from "./getPaste";

const app = express()
app.use(express.json())


async function startServer() {
    try{
        await connectDB()
        app.post('/new', newPaste)
        app.get('/get/:id', getPaste)
        app.listen(8080)
    } catch(err) {
        console.log("Error in index.ts: ", err)
    }
}

startServer()