import {listArticles} from "../../lib/listArticles";
import {useRouter} from "next/router";
import styles from '../../styles/Home.module.css'


export default function Article(props: { data: any[]; }) {
    console.log(props.data)
    const router = useRouter()
    const {id} = router.query

    let articles = props.data.filter((article: any) => article.id === id)
    if (articles.length <= 0) {
        return <>Not Found</>
    }

    let article = articles[0]


    return <div className={styles.container}>
        <p>id : {article.id}, title: {article.title}, description: {article.description}, creator: {article.creator}, created_at: {new Date(article.created_at).toISOString()}</p>
    </div>
};

export async function getServerSideProps({}) {
    let res = await listArticles()
    return {
        props: {
            data: res,
        }
    }
}
