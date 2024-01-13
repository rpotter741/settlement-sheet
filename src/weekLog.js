import { settlement } from "./settlementStats";

let weekLog = [];

let changeLog = {

    survival: 0,
    food: 0,
    foodB: 0,
    supplies: 0,
    suppliesB: 0,
    meds: 0,
    medsB: 0,
    safety: 0,
    di: 0,
    diB: 0,
    intel: 0,
    intelB: 0,
    gar: 0,
    garB: 0,
    economy: 0,
    trade: 0,
    tradeB: 0,
    prod: 0,
    prodB: 0,
    vault: 0,
    health: 0,
    level: 0,
    sp: 0,
    eventStart: [],
    eventEnd: [],
    week: 0,

}

function trackChange() {

    let events = changeLog;
    weekLog.push(events)

    clearChangeLog();

}

function renderWeeks() {
    let wrapper = document.querySelector('#weekLog');
    wrapper.innerHTML = '';
    wrapper.style = 'border-right: 2px solid black'

    let header = document.createElement('div');
    header.textContent = 'Weekly Logs';
    header.style = 'display: flex; justify-content: center; align-items: center; font-size: 22px; height: 10%; margin-bottom: 1rem;'
    wrapper.appendChild(header); 

    let logArea = document.createElement('div'); 
    logArea.style = 'overflow-y: scroll'
    
    if(weekLog.length == 0) {
        logArea.textContent = "You don't have any weekly logs yet.";
        logArea.style = 'display: flex; justify-content: center; align-items: center; font-size: 16px; text-align: center;'
    } else {

        weekLog.forEach((week) => {
            let row = document.createElement('div');

            let title = document.createElement('button');
            title.textContent = `Week ${week.week} Log`
            row.appendChild(title);

            title.addEventListener('click', () => {
                displayWeek(week);
            })
        })
    }
    wrapper.appendChild(logArea);
}

function clearChangeLog() {
    changeLog.forEach((value) => {
        value = 0;
    })

    changeLog.eventStart = [];
    changeLog.eventEnd = [];
}

function displayWeek(week) {

}

export { changeLog, renderWeeks, trackChange }