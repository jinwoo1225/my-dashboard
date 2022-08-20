export const deleteArticle = async (id: string) => {
    let response = await fetch("http://localhost:3000/api/articles/" + id,
        {
            method: "DELETE1"
        }
    )
    return await response.json()
}
