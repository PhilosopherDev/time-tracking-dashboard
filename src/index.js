import view from "./view";
import data from "./data.json"
import css from "./style.css";

const state = {
    data,
    currentFilter: "weekly"
}

const main = document.querySelector("#root");

window.requestAnimationFrame(() => {
    const newMain = view(main, state);
    main.replaceWith(newMain);
});