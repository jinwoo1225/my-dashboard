export const listArticles = async () => {
    let response = await fetch("http://localhost:3000/api/articles")
    return await response.json()
}
