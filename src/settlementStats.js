import { buildings } from "./buildingsStats";
import overviewRender from "./overviewRender";
import render from "./overviewRender";
import { changeLog, trackChange } from "./weekLog";

let settlement = {
    name: "Cyfehil",
    level: 3,
    currentHealth: 100,
    maxHealth: 100,
    settlementPoints: 999,
    weeksPassed: 0,
    drought: false,
    type: "",
    vault: 385,

}

function baseTaxes() {
    return (settlement.level * 1.369 * 80).toFixed(0);
}

function levelUp(i) {
    settlement.level += parseInt(i)
    changeLog.level += parseInt(i);
}

function health(i) {
    settlement.currentHealth += parseInt(i);
    changeLog.health += parseInt(i);
}

function spend(i) {
    if(i > settlement.settlementPoints) {
        return;
    } else {
        i *= -1;
        settlementPoints(i);
    }    
}

function settlementPoints(i) {
    settlement.settlementPoints += parseInt(i);
    changeLog.sp += parseInt(i);
}

function nextWeek() {
    //if statement for using more workers than allowed;
    settlement.settlementPoints += settlement.level;
    recoverHealth();
    trackChange();
}

function maxHealth(i) {
    settlement.maxHealth += parseInt(i);
}

function recoverHealth() {
    let i = buildings.infirmLevel;
    if(settlement.drought == true) {
        return;
    } else {
        switch(i) {
            case 0:
                settlement.currentHealth += 2;
                break;
            case 1:
                settlement.currentHealth += 4;
                break;
            case 2: 
                settlement.currentHealth += 6;
                break;
            case 3:
                settlement.currentHealth += 10;
                break;
        }
    }
}

function vaultAdd(i) {
    settlement.vault += parseInt(i);
}

export { baseTaxes, health, levelUp, maxHealth, nextWeek, settlement, settlementPoints, spend, vaultAdd }