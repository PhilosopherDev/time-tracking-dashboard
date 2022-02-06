import view from "./view";
import data from "./data.json"
import jeremy from '../images/image-jeremy.png';
import ellipsis from '../images/icon-ellipsis.svg';
import work from "../images/icon-work.svg";
import study from "../images/icon-study.svg";
import social from "../images/icon-social.svg";
import selfCare from "../images/icon-self-care.svg";
import play from "../images/icon-play.svg";
import exercise from "../images/icon-exercise.svg";
import css from "./style.css";


const imagePath = {
    jeremy,
    ellipsis,
    svg: [work, play, study, exercise, social, selfCare]
}

const state = {
    data,
    currentFilter: "weekly"
}

const main = document.querySelector("#root");

window.requestAnimationFrame(() => {
    const newMain = view(main, state, imagePath);
    main.replaceWith(newMain);
});