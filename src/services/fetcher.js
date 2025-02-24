export const getArticles = async () => {
    const articles = [];
    await fetch("/data/articles.json")
        .then(response => response.json())
        .then(response => articles.push(...response));
    return articles;
}