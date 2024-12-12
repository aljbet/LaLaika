const currentPage = window.location.pathname.split('/').pop();

document.addEventListener('DOMContentLoaded', () => {
    let items = document.getElementsByClassName("instrument_class");
    for (let i = 0; i < items.length; i++) {
        if (items.item(i).getAttribute("href") === currentPage) {
            items.item(i).classList.add("active");
            break;
        }
    }
});
