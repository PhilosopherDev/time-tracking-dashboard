import view from "./view/view";
import css from "../styles/style.css";
import data from "./model/data.json"

const state = {
    data,
    currentFilter: "Daily"
}

const main = document.querySelector("#root");

window.requestAnimationFrame(() => {
    const newMain = view(main, state);
    main.replaceWith(newMain);
});