document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");
    const error_message = document.getElementById("error_message");

    const k_reviews = Math.floor(Math.random() * 10) + 5;
    for (let i = 0; i < k_reviews; i++) {
        let id = Math.floor(Math.random() * 100) + 1;
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Ошибка сети");
                }
                return response.json();
            })
            .then(review => {
                const review_block = document.createElement("section");
                review_block.className = "review";
                const title = document.createElement("section");
                title.textContent = review.title;
                title.className = "review_title";
                const text = document.createElement("section");
                text.textContent = review.body;

                review_block.appendChild(title);
                review_block.appendChild(text);
                content.appendChild(review_block);
            })
            .catch((err) =>
                error_message.textContent = `⚠ Что-то пошло не так: ${err}`);
    }
    preloader.style.display = "none";
});
