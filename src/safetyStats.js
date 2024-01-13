import { settlement } from "./settlementStats";
import { survival } from "./survivalStats";
import { economy } from "./economyStats";
import { changeLog } from "./weekLog";

let safety = {
    Base: 0,
    Adjusted: 0,
    Rating: 0,
    Bonus: 0,
    diB: 0,
    diC: 2,
    diM: 0,
    intelB: 0,
    intelC: 2,
    intelM: 0,
    garB: 0,
    garC: 3,
    garM: 0
}

function safetyBase() {
    let a = 0;
    let b = 0;
    let c = 0;

    if(safety.diC > safety.diM) {
        a = safety.diM;
    } else a = safety.diC;

    if(safety.intelC > safety.intelM) {
        b = safety.intelM;
    } else b = safety.intelC;

    if(safety.garC > safety.garM) {
        c = safety.garM;
    } else c = safety.garC;

    safety.Base = (((a + b + c) / settlement.level) * (settlement.currentHealth / settlement.maxHealth)).toFixed(1);
    return safety.Base;
}

function safetyBonus(i) {
    safety.Bonus += parseInt(i);
    changeLog.safety += parseInt(i);
    diCurrent(i);
    intelCurrent(i);
    garCurrent(i);
    diMax();
    intelMax();
    garMax();
}

function diBonus(i) {
    safety.diB += parseInt(i);
    changeLog.diB += parseInt(i);
    diCurrent(i)
    diMax();
}

function diCurrent(i) {
    safety.diC += parseInt(i);
    changeLog.di += parseInt(i);
}

function diMax() {
    safety.diM = ((settlement.level * 2) + safety.Bonus + safety.diB);

}

function intelBonus(i) {
    safety.intelB += parseInt(i);
    changeLog.intelB += parseInt(i);
    intelCurrent(i)
    intelMax();
}

function intelCurrent(i) {
    safety.intelC += parseInt(i);
    changeLog.intel += parseInt(i);
}

function intelMax() {
    safety.intelM = (settlement.level + safety.Bonus + safety.intelB);
    
}

function garBonus(i) {
    safety.garB += parseInt(i);
    changeLog.garB += parseInt(i);
    garCurrent(i)
    garMax();
}

function garCurrent(i) {
    safety.garC += parseInt(i);
    changeLog.gar += parseInt(i);
}

function garMax() {
    safety.garM = ((settlement.level * 2) + safety.Bonus + safety.garB);
    
}

export { diBonus, diCurrent, diMax, garBonus, garCurrent, garMax, intelBonus, intelCurrent, intelMax, safety, safetyBase, safetyBonus }