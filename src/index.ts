import express from "express";
import { connectDB } from "./db";
import { newPaste } from "./newPaste";
import { getPaste } from "./getPaste";
import cors from "cors"

const app = express()
app.use(express.json())

app.use(cors())
async function startServer() {
    try{
        await connectDB()
        app.get('/',(req,res)=>{
            res.status(200).json({ message: "Server working fine"})
        })
        app.post('/new', newPaste)
        app.get('/get/:id', getPaste)
        app.listen(8080)
    } catch(err) {
        console.log("Error in index.ts: ", err)
    }
}

startServer()