import {NextPage} from "next";
import styles from '../styles/Home.module.css'
import {listArticles} from "../lib/listArticles";
import {useEffect, useState} from "react";

const Articles: NextPage = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        listArticles()
            .then((data) => {
                    let articles_data = data.map((article: any) => {
                        let created_at =  new Date(article.created_at)


                        return <div key={article.id}>
                            <p>ID: {article.id}</p>
                            <p>Title: {article.title}</p>
                            <p>Description: {article.description}</p>
                            <p>Creator: {article.creator}</p>
                            <p>Created at: {created_at.toISOString()}</p>
                        </div>
                    })

                    setArticles(articles_data)
                }
            );
    }, []);


    return <>
        <div className={styles.container}>
            {articles}
        </div>
    </>
};


export default Articles
