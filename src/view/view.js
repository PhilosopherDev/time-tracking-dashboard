export default (node, state) => {
    const template = document.querySelector("#time-tracking-container");
    const clone = template.content.firstElementChild.cloneNode(true)
    return node.appendChild(clone);
}