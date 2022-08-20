import {NextApiRequest, NextApiResponse} from "next";
import {randomUUID} from "crypto";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    switch (req.method) {
        case "GET" :
            res
                .status(200)
                .json(database.articles)
            break
        case "POST":
            let id = randomUUID()
            let data = req.body
            data.id = id
            database.articles.push(data)

            res
                .status(201)
                .json({
                    "status": "success",
                    "data": data.articles
                })
            break
        default:
            res
                .status(405)
                .json({
                    "method": req.method,
                    "error": "not allowed"
                })
    }
}


export var database: any = {
    articles: [
        {
            id: "hello",
            title: "hello world"
        }
    ]
}
