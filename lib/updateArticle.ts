export const updateArticle = async (id: string, data: any) => {
    let response = await fetch("http://localhost:3000/api/articles" + id,
        {
            method: "PUT",
            body: data
        }
    )
    return await response.json()
}
