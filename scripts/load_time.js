const startTime = Date.now();
window.addEventListener("load", () => {
    const endTime = Date.now();
    const loadTime = endTime - startTime;
    document.getElementById("load_time").innerText = `Время загрузки страницы: ${loadTime} мс.`;
});