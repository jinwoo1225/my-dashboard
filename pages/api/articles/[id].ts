import {NextApiRequest, NextApiResponse} from "next";
import {database} from "../articles";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {id} = req.query

    let articles: any

    switch (req.method) {
        case "GET":
            articles = database.articles.filter((data: any) => data.id === id)
            if (articles) {
                res
                    .status(200)
                    .json(
                        {
                            "data": articles[0]
                        }
                    )
                return
            }
            res.status(200).json({"data": null})
            break

        case "PUT":
            let data = req.body
            data.id = id

            articles = database.articles.filter((data: any) => data.id !== id)
            articles.push(data)
            database.articles = articles

            res
                .status(201)
                .json({"data": data})
            break

        case "DELETE":
            articles = database.filter((data: any) => data.id !== id)
            database.articles = articles
            res
                .status(200)
                .json({"status": "success"})
            break

        default:
            res
                .status(405)
                .json({
                        "method": req.method,
                        "error": "not allowed"
                    }
                )

    }
}
