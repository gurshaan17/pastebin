import { Request, Response } from "express";
import { dataModel } from "./db";


export async function getPaste(req: Request, res: Response){
    const { id } = req.params;

    if(!id){
        res.status(400).json({ message: "ID required" })
    }

    const data = await dataModel.findOne({
        id: id
    })

    if(!data){
        res.status(400).json({ message: "paste not found"})
    }
    else{
        res.status(200).json({
            message: "paste found",
            data: {
                id: id,
                content: data?.content
            }
        })
    }
}