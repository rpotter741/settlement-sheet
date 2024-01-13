import { economyBonus, prodBonus, prodCurrent, tradeBonus, tradeCurrent } from "./economyStats";
import { projectArray } from "./projectBoxRender";
import { diBonus, diCurrent, garBonus, garCurrent, intelBonus, intelCurrent, safetyBonus } from "./safetyStats";
import { levelUp, maxHealth, settlementPoints, vaultAdd } from "./settlementStats";
import { foodBonus, foodCurrent, medBonus, medCurrent, supBonus, supCurrent, survivalBonus } from "./survivalStats";
import { changeLog } from "./weekLog";


let count = 0;

function compileEvent() {
    let proj = [];
    let compVals = [];
    let compItems = [];
    let impactVals = [];
    let impactItems = []; 

    let compValElements = document.querySelectorAll('.eventCompVal');
    compValElements.forEach((item) => {
        compVals.push(item.value);
    })

    let compItemElements = document.querySelectorAll('.eventCompItem');
    compItemElements.forEach((item) => {
        compItems.push(item.value);
    })

    let impactValElements = document.querySelectorAll('.eventImpactVal');
    impactValElements.forEach((item) => {
        impactVals.push(item.value);
    })

    let impactItemElements = document.querySelectorAll('.eventImpactItem');
    impactItemElements.forEach((item) => {
        impactItems.push(item.value);
    })

    proj.duration = document.querySelector('#eventTimeVal').value;

    proj.name = document.querySelector('#eventName').value;

    proj.type = document.querySelector('#eventType').value;

    proj.details = document.querySelector('#eventDetails').value;

    proj.count = count;

    proj.workers = 0;

    proj.impactItems = impactItems;

    proj.impactVals = impactVals;

    proj.costItems = compItems; 

    proj.costVals = compVals;

    proj.hide = true;

    for(let i = 0; i < impactItems.length; i++) {
        let item = impactItems[i];
        let num = impactVals[i];
        let namer = 'comp' + i;
        let number = 'cost' +i;
        proj[namer] = item;
        proj[number] = num;
    }

    if(proj.type == 'Indefinite') {
        proj.hasLink = false;
        proj.duration = 99999;
    }

    for(let i = 0; i < proj.impactItems.length; i++) {
        calcPain(proj.impactVals[i], proj.impactItems[i]);
    }

    for(let i = 0; i < proj.costItems.length; i++) {
        calcCost(proj.costVals[i],proj.costItems[i]);
    }

    if(proj.type != 'Immediate') {
        projectArray.push(proj);
    }

    countUp();

    changeLog.eventStart.push(proj);

    if(proj.type == 'Immediate') {
        changeLog.eventEnd.push(proj);
    }

    console.log(changeLog);

}

function countUp() {
    count++
}

function calcCost(i, item) {
    if(i == 0 || item == "none" || item == undefined) {
        return;
    };

    switch(item) {
        case 'food':
            foodCurrent(i);
            break;
        case 'supplies':
            supCurrent(i);
            break;
        case 'med': 
            medCurrent(i);
            break;
        case 'di':
            diCurrent(i);
            break;
        case 'intel':
            intelCurrent(i);
            break;
        case 'gar':
            garCurrent(i);
            break;
        case 'trade':
            tradeCurrent(i);
            break;
        case 'prod':
            prodCurrent(i);
            break;
        case 'gold':
            vaultAdd(i);
        default:
            break;
            
    } 

}

function calcPain(i, item) {
    if(i == 0 || item == 'none' || item == undefined) {
        return;
    }

    switch(item) {
        case 'food':
            foodBonus(i);
            break;
        case 'supplies':
            supBonus(i);
            break;
        case 'med':
            medBonus(i);
            break;
        case 'di':
            diBonus(i);
            break;
        case 'intel':
            intelBonus(i);
            break;
        case 'gar':
            garBonus(i);
            break;
        case 'trade':
            tradeBonus(i);
            break;
        case 'prod':
            prodBonus(i);
            break;
        case 'survival': 
            survivalBonus(i);
            break;
        case 'safety':
            safetyBonus(i);
            break;
        case 'economy':
            economyBonus(i);
            break;
        case 'maxHealth':
            maxHealth(i);
            break;
        case "level":
            levelUp(i);
            break;
        case "sp":
            settlementPoints(i);
            break;
        default: 
            break;

    }

}

export {compileEvent, countUp}