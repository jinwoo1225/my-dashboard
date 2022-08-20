export const get_article = async (id: string) => {
    let response = await fetch("http://localhost:3000/api/articles/" + id)
    return await response.json()
};
