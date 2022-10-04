document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("anchor").scrollIntoView({
        behavior: "smooth",
        block: "center"
    })

    document.querySelectorAll(".question--title").forEach(item => {
        item.addEventListener("click", () => {

            let subitem = item.parentElement.children.item(1)

            if (subitem.classList.contains("active")) {
                item.children.item(0).classList.remove("active")
                subitem.classList.remove("active")
            } else {
                item.children.item(0).classList.add("active")
                subitem.classList.add("active")
            }
        })
    })
})