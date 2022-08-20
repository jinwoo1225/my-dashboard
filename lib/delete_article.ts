export const delete_article = async (id: string) => {
    let response = await fetch("http://localhost:3000/api/articles/" + id,
        {
            method: "DELETE"
        }
    )
    return await response.json()
}
