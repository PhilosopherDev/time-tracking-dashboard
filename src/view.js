import jeremy from '../images/image-jeremy.png';
import ellipsis from '../images/icon-ellipsis.svg';
import work from "../images/icon-work.svg";
import study from "../images/icon-study.svg";
import social from "../images/icon-social.svg";
import selfCare from "../images/icon-self-care.svg";
import play from "../images/icon-play.svg";
import exercise from "../images/icon-exercise.svg";

const svgArr = [work, play, study, exercise, social, selfCare];

export default (node, state) => {
    const template = document.querySelector("#time-tracking-container");
    const clone = template.content.firstElementChild.cloneNode(true)

    makeUser(clone.querySelector(".content__user"), state);
    makeCard(clone.querySelector(".content__card"), state);

    return node.appendChild(clone);
}

function makeUser(node) {
    const template = document.querySelector("#time-tracking-user");
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector('img').setAttribute("src", jeremy);

    node.appendChild(clone);

}

function makeCard(node, state) {
    const template = document.querySelector("#time-tracking-card");
    state.data.forEach((item, idx) => {
        const clone = template.content.firstElementChild.cloneNode(true)
        
        const markEl = document.createElement("img");
        markEl.setAttribute("src", svgArr[idx]);
        clone.querySelector(".mark").appendChild(markEl);

        const titleEl = document.createElement("h1")
        titleEl.innerText = item.title;
        clone.querySelector('.instruction__title').appendChild(titleEl);

        const ellipsisEl = document.createElement("img");
        ellipsisEl.setAttribute("src", ellipsis);
        clone.querySelector('.instruction__ellipsis').appendChild(ellipsisEl);

        const timeframeEl = document.createElement("div");
        timeframeEl.innerText = `${item["timeframes"][state.currentFilter].current}hrs`;
        clone.querySelector('.this-week').appendChild(timeframeEl);
        
        const historyEl = document.createElement("div");
        historyEl.innerText = `Last ${getPeriod(state.currentFilter)} - ${item["timeframes"][state.currentFilter].previous}hrs`;
        clone.querySelector('.last-week').appendChild(historyEl);

        node.appendChild(clone);
    });
}

function getPeriod(currentFilter) {
    if (currentFilter === "daily") {
        return "Date";
    } else if (currentFilter === "weekly") {
        return "Week";
    } else {
        return "Month";
    }
}