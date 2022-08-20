export const create_article = async (data: any) => {
    let response = await fetch("http://localhost:3000/api/articles/",
        {
            method: "POST",
            body: data
        },
    )
    return await response.json()
}
