//your code here!
document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("infi-list");

    const addItems = (count) => {
        for (let i = 0; i < count; i++) {
            let li = document.createElement("li");
            li.textContent = `Item ${list.children.length + 1}`;
            list.appendChild(li);
        }
    };

    addItems(10);

    let isLoading = false;

    window.addEventListener("scroll", () => {
        if (!isLoading && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
            isLoading = true;
            setTimeout(() => {
                addItems(2);
                isLoading = false;
            }, 100);
        }
    });
})