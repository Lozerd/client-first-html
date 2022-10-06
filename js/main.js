document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
        })
    })

    let anchor = document.getElementById("anchor")

    anchor?.scrollIntoView({
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