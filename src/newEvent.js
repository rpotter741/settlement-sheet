import { compileEvent } from "./compileEvent";
import overviewRender from "./overviewRender";
import { projectBoxRender } from "./projectBoxRender";
import renderProjects from "./renderProjects";
import taxRender from "./taxRender";

let costCount = 0; 
let impactCount = 0;

export default function newEvent() {
    let wrapper = document.querySelector('#projectManagement');
    wrapper.innerHTML = "";
    wrapper.style = "box-sizing: border-box; width: 100%; height: 100%";

    let header = document.createElement('div');
    header.textContent = "New Event";
    header.style = "display: flex; justify-content: center; align-items: center; background: rgba(200,120,120,.3);";
    wrapper.appendChild(header);

    let nameBox = document.createElement('div');
    nameBox.style = "padding: .5rem; background: aliceblue; height: 10%; align-items: center; display: flex;"
    let nameEntry = document.createElement('input');
    nameEntry.type = 'text';
    nameEntry.placeholder = "Event Name";
    nameEntry.style = "width: 95%;"
    nameEntry.id = "eventName";
    nameBox.appendChild(nameEntry);
    wrapper.appendChild(nameBox);

    let secondRow = document.createElement('div');
    secondRow.style = 'display: flex; height: 10%; align-items: center; background: aliceblue'

    let bigTypeBox = document.createElement('div');
    bigTypeBox.style = "display: flex; width: 50%; background: aliceblue"
    let typeHeader = document.createElement('div');
    typeHeader.style = 'display: flex; justify-content: start; align-items: center; width: 14.5%; font-size: 16px; margin-left: .5rem'
    typeHeader.textContent = "Type";
    bigTypeBox.appendChild(typeHeader);

    let typeBox = document.createElement('div');
    typeBox.style = "padding: .5rem 0 .5rem .5rem; width: 67%"

    let typeSelect = document.createElement('select');
    typeSelect.style = "width: 100%; font-size: 16px"
    typeSelect.id = "eventType";

    let immediate = document.createElement('option');
    immediate.value = "Immediate";
    immediate.textContent = "Immediate"
    typeSelect.appendChild(immediate);

    let active = document.createElement('option');
    active.value = "Active";
    active.textContent = "Active";
    typeSelect.appendChild(active);

    let passive = document.createElement('option');
    passive.value = "Passive";
    passive.textContent = "Passive";
    typeSelect.appendChild(passive);

    let indefinite = document.createElement('option');
    indefinite.value = "Indefinite";
    indefinite.textContent = "Indefinite";
    typeSelect.appendChild(indefinite);
    typeBox.appendChild(typeSelect);
    bigTypeBox.appendChild(typeBox);
    secondRow.appendChild(bigTypeBox);

    let bigTimeBox = document.createElement('div');
    bigTimeBox.style = 'display: flex; gap: 4px; justify-content: center; align-items: center; padding: .5; width: 50%; box-sizing: border-box; background: aliceblue; padding-left: .5rem'
    let timeBox = document.createElement('div');
    timeBox.style = 'display: none';
    let timeValBox = document.createElement('div');
    timeValBox.style = 'display: none'
    let timeVal = document.createElement('input');
    timeVal.type = 'number';   
    timeVal.style = "width: 25%; font-size: 16px;" 
    timeVal.id = "eventTimeVal"
    timeValBox.appendChild(timeVal);
    bigTimeBox.appendChild(timeBox);
    bigTimeBox.appendChild(timeValBox);
    secondRow.appendChild(bigTimeBox);
    wrapper.appendChild(secondRow);

    let contentBox = document.createElement('div');
    contentBox.style.height = ('33.25%');
    contentBox.style.background = "aliceblue";
    contentBox.style.display = "flex";

    let leftBox = document.createElement('div');
    leftBox.style = "width: 50%;"
    leftBox.id = "leftBox";    

    let componentHeader = document.createElement('div');
    componentHeader.textContent = "Event Costs";
    componentHeader.style = "display: flex; justify-content: center; align-items: center; font-size: 18px"
    leftBox.appendChild(componentHeader);

    leftBox.appendChild(createComponent());


    contentBox.appendChild(leftBox);


    let rightBox = document.createElement('div');
    rightBox.style = "width: 50%;"
    rightBox.id = 'rightBox';

    let impactHeader = document.createElement('div');
    impactHeader.textContent = "Event Changes";
    impactHeader.style = "display: flex; justify-content: center; align-items: center; font-size: 18px"
    rightBox.appendChild(impactHeader);

    rightBox.appendChild(createImpact())

    contentBox.appendChild(rightBox);    
    wrapper.appendChild(contentBox);

    let dBox = document.createElement('div');
    dBox.style = "background: aliceblue; padding: .5rem; height: 25.25%;";

    let description = document.createElement('textarea')
    description.style = "height: 100%; width: 100%; font-size: 16px; resize: none; overflow-y: auto;"
    description.placeholder = "Enter a description for the event";
    description.id = "eventDetails";
    dBox.appendChild(description);
    wrapper.appendChild(dBox);

    let buttonRow = document.createElement('div');
    buttonRow.style = "display: flex; justify-content: space-evenly; align-items: center; background: aliceblue; height: 10%;"; 

    let confirmBtn = document.createElement('button');
    confirmBtn.textContent = 'Confirm Event';
    confirmBtn.style = "font-size: 16px;"
    buttonRow.appendChild(confirmBtn);
    confirmBtn.addEventListener('click', () => {
        compileEvent();
        projectBoxRender();
        overviewRender();
        taxRender();
    })

    let cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel Event';
    cancelBtn.style = 'font-size: 16px;'
    buttonRow.appendChild(cancelBtn);
    cancelBtn.addEventListener('click', () => {
        costCount = 0;
        impactCount = 0;
        projectBoxRender();
    })

    wrapper.appendChild(buttonRow);

    typeSelect.addEventListener('change', () => {
        if(typeSelect.value == 'Immediate' || typeSelect.value == 'Indefinite') {
            timeBox.style = 'display: none';
            timeValBox.style = 'display: none';

        } else if(typeSelect.value == "Active") {
            timeBox.textContent = "Productivity Required:"
            timeBox.style = 'font-size: 16px; display: flex; justify-content: start; width: 85%'
            timeValBox.style = "font-size: 16px; display: flex; padding: .15rem; box-sizing: border-box; justify-content: center;";
            
        } else if(typeSelect.value == "Passive") {
            timeBox.textContent = "Weeks Remaining:"
            timeBox.style = 'font-size: 16px; display: flex; justify-content: start; width: 85%'
            timeValBox.style = "font-size: 16px; display: flex; padding: .15rem; box-sizing: border-box; justify-content: center;";
        } 
    })
}

function createComponent() {
    costCount++;

    let compBox = document.createElement('div');
    compBox.style = "display: flex; flex-direction: column; justify-content: center; align-items: center"

    let compRow = document.createElement('div');
    compRow.style = "display: flex; margin-left: .5rem;";

    let num = document.createElement('input');
    num.type = 'number';
    num.style = "width: 15%; font-size: 16px; text-align: center"
    num.classList.add('eventCompVal');
    compRow.appendChild(num); 

    let item = document.createElement('select');
    item.style = "width: 70%; font-size: 16px;"
    item.classList.add('eventCompItem')

    let selectItem = document.createElement('option');
    selectItem.value = 'none';
    selectItem.textContent = "Select Component";
    item.appendChild(selectItem);

    let food = document.createElement('option');
    food.value = "food";
    food.textContent = "Food";
    item.appendChild(food);

    let supplies = document.createElement('option');
    supplies.value = "supplies";
    supplies.textContent = "Supplies";
    item.appendChild(supplies);

    let med = document.createElement('option');
    med.value = "med";
    med.textContent = "Medical Capacity";
    item.appendChild(med);

    let di = document.createElement('option');
    di.value = "di";
    di.textContent = "Defensive Infrastructure";
    item.appendChild(di);

    let intel = document.createElement('option');
    intel.value = "intel";  
    intel.textContent = "Intelligence";
    item.appendChild(intel);

    let gar = document.createElement('option');
    gar.value = "gar";
    gar.textContent = "Garrison";
    item.appendChild(gar);

    let trade = document.createElement('option');
    trade.value = "trade";
    trade.textContent = "Trade";
    item.appendChild(trade);

    let prod = document.createElement('option');
    prod.value = "prod";
    prod.textContent = "Productivity";
    item.appendChild(prod);

    let gold = document.createElement('option');
    gold.value = "gold";
    gold.textContent = "Gold";
    item.appendChild(gold);

    compRow.appendChild(item);

    if(costCount > 1) {
    let cancelBtn = document.createElement('button');
    cancelBtn.style = 'height: 28px; border-radius: 1rem; font-size: 16px; border: none; background: none; ;'
    cancelBtn.textContent = "x";
    compRow.appendChild(cancelBtn);

    cancelBtn.addEventListener('click', () => {
        cancelBtn.parentElement.remove();
        costCount--
    })
}

    compBox.appendChild(compRow);
    
    let plus = document.createElement('button');
    plus.textContent = '+';
    plus.style = "background: none; border: none"
    plus.addEventListener('click', () => {
        let wrapper = document.querySelector('#leftBox');
        wrapper.appendChild(createComponent());
        plus.remove();
    })

    compBox.appendChild(plus);

    return compBox;

}

function createImpact() {
    impactCount++;

    let compBox = document.createElement('div');
    compBox.style = "display: flex; flex-direction: column; justify-content: center; align-items: center"

    let compRow = document.createElement('div');
    compRow.style = "display: flex; margin-left: .5rem;";

    let num = document.createElement('input');
    num.type = 'number';
    num.style = "width: 15%; font-size: 16px; text-align: center"
    num.classList.add('eventImpactVal');
    compRow.appendChild(num); 

    let item = document.createElement('select');
    item.style = "width: 70%; font-size: 16px;"
    item.classList.add('eventImpactItem');

    let selectItem = document.createElement('option');
    selectItem.value = 'none';
    selectItem.textContent = "Select Component";
    item.appendChild(selectItem);

    let survival = document.createElement('option');
    survival.value = "survival";
    survival.textContent = "Survival Mod";
    item.appendChild(survival);

    let food = document.createElement('option');
    food.value = "food";
    food.textContent = "Food Mod";
    item.appendChild(food);

    let supplies = document.createElement('option');
    supplies.value = "supplies";
    supplies.textContent = "Supplies Mod";
    item.appendChild(supplies);

    let med = document.createElement('option');
    med.value = "med";
    med.textContent = "Medical Capacity Mod";
    item.appendChild(med);

    let safety = document.createElement('option');
    safety.value = "safety";
    safety.textContent = "Safety Mod";
    item.appendChild(safety);

    let di = document.createElement('option');
    di.value = "di";
    di.textContent = "Defensive Infrastructure Mod";
    item.appendChild(di);

    let intel = document.createElement('option');
    intel.value = "intel";  
    intel.textContent = "Intelligence Mod";
    item.appendChild(intel);

    let gar = document.createElement('option');
    gar.value = "gar";
    gar.textContent = "Garrison Mod";
    item.appendChild(gar);

    let economy = document.createElement('option');
    economy.value = "economy";
    economy.textContent = "Economy Mod";
    item.appendChild(economy);

    let trade = document.createElement('option');
    trade.value = "trade";
    trade.textContent = "Trade Mod";
    item.appendChild(trade);

    let prod = document.createElement('option');
    prod.value = "prod";
    prod.textContent = "Productivity Mod";
    item.appendChild(prod);

    let maxHealth = document.createElement('option');
    maxHealth.value = "maxHealth";
    maxHealth.textContent = "Max Health";
    item.appendChild(maxHealth);

    let level = document.createElement('option');
    level.value = "level";
    level.textContent = "Level";
    item.appendChild(level);

    let sp = document.createElement('option');
    sp.value = "sp";
    sp.textContent = "Settlement Points";
    item.appendChild(sp);

    compRow.appendChild(item);

    if(impactCount > 1) {
    let cancelBtn = document.createElement('button');
    cancelBtn.style = 'height: 28px; border-radius: 1rem; font-size: 16px; border: none; background: none; ;'
    cancelBtn.textContent = "x";
    compRow.appendChild(cancelBtn);

    cancelBtn.addEventListener('click', () => {
        cancelBtn.parentElement.remove();
        costCount--
    })
}
    compBox.appendChild(compRow);

    let plus = document.createElement('button');
    plus.textContent = '+';
    plus.style = "background: none; border: none"
    plus.addEventListener('click', () => {
        let wrapper = document.querySelector('#rightBox');
        wrapper.appendChild(createImpact());
        plus.remove();
    })

    compBox.appendChild(plus);

    return compBox;

}