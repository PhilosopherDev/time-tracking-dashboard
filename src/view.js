import jeremy from '../images/image-jeremy.png';

export default (node, state) => {
    const template = document.querySelector("#time-tracking-container");
    const clone = template.content.firstElementChild.cloneNode(true)

    makeUser(clone.querySelector(".content__user"), state);
    makeCard(clone.querySelector(".content__card"), state);

    return node.appendChild(clone);
}

function makeUser(node, state) {
    const template = document.querySelector("#time-tracking-user");
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector('img').setAttribute("src", jeremy);

    node.appendChild(clone);

}

function makeCard(node, state) {
    const template = document.querySelector("#time-tracking-card");
    const clone = template.content.firstElementChild.cloneNode(true)
    state.data.forEach((item) => {
        const el = document.createElement("h1")
        el.innerText = item.title;
        clone.appendChild(el);
    });

    node.appendChild(clone);
}