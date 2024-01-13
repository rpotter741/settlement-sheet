import { settlement } from "./settlementStats";
import { safety } from "./safetyStats";
import { economy } from "./economyStats";
import { changeLog } from "./weekLog";

let survival = {
    Base: 0,
    Adjusted: 0,
    Rating: 0,
    Bonus: 0,
    foodB: 0,
    foodC: 7,
    foodM: 0,
    supB: 0,
    supC: 5,
    supM: 0,
    medB: 0,
    medC: 3,
    medM: 0
}

function survivalBase() {
    let a = 0;
    let b = 0; 
    let c = 0;

    if(survival.foodC > survival.foodM) {
        a = survival.foodM;
    } else a = survival.foodC;

    if(survival.supC > survival.supM) {
        b = survival.supM;
    } else b = survival.supC;

    if(survival.medC > survival.medM) {
        c = survival.medM;
    } else c = survival.medC;


    survival.Base = (((a + b + c) / settlement.level) * (settlement.currentHealth / settlement.maxHealth)).toFixed(1);
    return survival.Base;
}

function survivalBonus(i) {
    survival.Bonus += parseInt(i);
    changeLog.survival += parseInt(i);
    foodBonus(i);
    supBonus(i);
    medBonus(i);
    foodMax();
    supMax();
    medMax();
}

function foodBonus(i) {
    survival.foodB += parseInt(i);
    changeLog.foodB += parseInt(i);
    foodCurrent(i);
    foodMax();
}

function foodCurrent(i) {
    survival.foodC += parseInt(i);
    changeLog.food += parseInt(i);
}

function foodMax() {
    survival.foodM = ((settlement.level * 5) + survival.Bonus + survival.foodB);
    
}

function supBonus(i) {
    survival.supB += parseInt(i);
    changeLog.suppliesB += parseInt(i);
    supCurrent(i);
    supMax();
}

function supCurrent(i) {
    survival.supC += parseInt(i);
    changeLog.supplies += parseInt(i);
}

function supMax() {
    survival.supM = ((settlement.level * 3) + survival.Bonus + survival.supB);
}

function medBonus(i) {
    survival.medB += parseInt(i);
    changeLog.medsB += parseInt(i);
    medCurrent(i);
    medMax();
}

function medCurrent(i) {
    survival.medC += parseInt(i);
    changeLog.meds += parseInt(i);
}

function medMax() {
    survival.medM = ((settlement.level * 2) + survival.Bonus + survival.medB);
}


export { foodBonus, foodCurrent, foodMax, medBonus, medCurrent, medMax, supBonus, supCurrent, supMax, survival, survivalBase, survivalBonus }