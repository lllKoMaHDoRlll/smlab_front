export const getArticles = async (signal) => {
    const articles = [];
    await fetch("http://localhost:8000/articles", { signal })
        .then(response => response.json())
        .then(response => articles.push(...response));
    return articles;
}