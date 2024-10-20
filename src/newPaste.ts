import { Request, Response } from "express";
import base62 from "base62";
import { dataModel } from "./db";

export async function newPaste(req: Request, res: Response){
    try{
        const content: string = req.body.content;
        if(!content){
            res.status(400).json({ message: "Content can't be empty" })
        }
        const randomId = Math.floor(Math.random() * 100000000000).toString()
        const id = base62.encode(parseInt(randomId))

        const newData = new dataModel({
            id: id,
            content: content
        })

        await newData.save();

        res.status(200).json({
            message: "paste successfully saved",
            data: {
                id: id,
                content: content
            }
        })
    }
    catch(err){
        console.log("Error saving paste: ",err)
        res.status(500).json({ message: "Server error"})
    }
}