
import "./index.css"
  import Icon from "./todo-logo-1.png"

let heading = document.getElementById("heading")
let h1 = document.createElement("h1")
let image = document.createElement("img")

h1.innerText="Todo-list"
h1.setAttribute("id","title")
heading.append(h1)

let todologo = document.getElementById("todo-logo")
 image.src=Icon

todologo.append(image)
