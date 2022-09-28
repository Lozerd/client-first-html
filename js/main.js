document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".question--number").forEach(item => {
        item.addEventListener("click", () => {
            item.closest(".question--description").style.display = "block";
        })
    })
})