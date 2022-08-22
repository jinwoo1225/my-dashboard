import {NextPage} from "next";
import styles from '../styles/Home.module.css'
import {listArticles} from "../lib/listArticles";
import {useEffect, useState} from "react";
import articlesStyles from "../styles/Articles.module.css"

const Articles: NextPage = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        listArticles()
            .then((data) => {
                    let articles_data = data.map((article: any) => {
                        let created_at = new Date(article.created_at)
                        return {
                            ...article,
                            created_at
                        }
                    })
                    setArticles(articles_data)
                    setLoading(false)
                }
            );
    }, []);

    if (loading) {
        return <div>loading...</div>
    }

    return <>
        <div className={styles.container}>
            {articles.length > 0 ? (
                    <table className={articlesStyles.tableStyle}>
                        <thead>
                        <tr>
                            <th className={articlesStyles.tableHeadStyle}>ID</th>
                            <th className={articlesStyles.tableHeadStyle}>Title</th>
                            <th className={articlesStyles.tableHeadStyle}>Description</th>
                            <th className={articlesStyles.tableHeadStyle}>Creator</th>
                            <th className={articlesStyles.tableHeadStyle}>Created at</th>
                        </tr>
                        </thead>
                        <tbody>
                        {articles.map((article: any) => (
                            <tr key={article.id}>
                                <td className={articlesStyles.tableRowStyle}>{article.id}</td>
                                <td className={articlesStyles.tableRowStyle}>{article.title}</td>
                                <td className={articlesStyles.tableRowStyle}>{article.description}</td>
                                <td className={articlesStyles.tableRowStyle}>{article.creator}</td>
                                <td className={articlesStyles.tableRowStyle}>{article.created_at.toISOString()}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )
                : <h1>Please Add Articles :) </h1>}
        </div>
    </>;
};

function ArticleListComponent() {

}


export default Articles
