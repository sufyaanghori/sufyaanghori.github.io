const form = document.forms["myform"]
const input = form["input"]
const ul = document.getElementById("tasklist")

form.addEventListener("submit", (e)=> {
    e.preventDefault()
    const value = input.value
    const newli = document.createElement("li")

    newli.innerHTML = value + "<i onclick=\"deletetask(this)\" class=\"fa-solid fa-trash-can\" style=\"float:right;\"></i>"

    ul.appendChild(newli)
})

function deletetask(x) {
    x.parentElement.remove()
}