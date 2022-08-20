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
            id: "1",
            title: "sample title 1",
            description: "initial sample description",
            creator: "jinwoo1225",
            created_at: Date.now()
        },
        {
            id: "2",
            title: "sample title 2",
            description: "initial sample description",
            creator: "jinwoo1225",
            created_at: Date.now()
        },
        {
            id: "3",
            title: "sample title 3",
            description: "initial sample description",
            creator: "jinwoo1225",
            created_at: Date.now()
        },
        {
            id: "4",
            title: "sample title 4",
            description: "initial sample description",
            creator: "jinwoo1225",
            created_at: Date.now()
        },
        {
            id: "5",
            title: "sample title 5",
            description: "initial sample description",
            creator: "jinwoo1225",
            created_at: Date.now()
        },
        {
            id: "6",
            title: "sample title 6",
            description: "initial sample description",
            creator: "jinwoo1225",
            created_at: Date.now()
        }
    ]
}
