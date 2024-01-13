import { baseTaxes, settlement } from './settlementStats';
import { safety } from './safetyStats';
import { survival } from './survivalStats';
import { changeLog } from './weekLog';


let economy = {
    Base: 0,
    Adjusted: 0,
    Rating: 0,
    Bonus: 0,
    tradeB: 0,
    tradeC: 6,
    tradeM: 0,
    prodB: 0,
    prodC: 4,
    prodM: 0,
    taxInc: 0,
    taxDec: 0,
}

function economyBase() {
    let a = 0;
    let b = 0;

    if(economy.tradeC > economy.tradeM) {
        a = economy.tradeM;
    } else a = economy.tradeC;

    if(economy.prodC > economy.prodM) {
        b = economy.prodM;
    } else b = economy.prodC;

    economy.Base = (((a + b) / settlement.level) * (settlement.currentHealth / settlement.maxHealth)).toFixed(1);
    return economy.Base;
}

function economyBonus(i) {
    economy.Bonus += parseInt(i);
    changeLog.economy += parseInt(i);
    tradeCurrent(i);
    prodCurrent(i);
    tradeMax();
    prodMax();
}

function tradeBonus(i) {
    economy.tradeB += parseInt(i);
    changeLog.tradeB += parseInt(i);
    tradeCurrent(i);
    tradeMax();
}

function tradeCurrent(i) {
    economy.tradeC += parseInt(i);
    changeLog.trade += parseInt(i);
}

function tradeMax() {
    economy.tradeM = ((settlement.level * 5) + economy.Bonus + economy.tradeB);
}

function prodBonus(i) {
    economy.prodB += parseInt(i);
    changeLog.prodB += parseInt(i);
    prodCurrent(i)
    prodMax();
}

function prodCurrent(i) {
    economy.prodC += parseInt(i);
    changeLog.prod += parseInt(i);
}

function prodMax() {
    economy.prodM =  ((settlement.level * 2) + economy.Bonus + economy.prodB)
}

function actualTaxes() {
    let i = baseTaxes();
    return (i*1.05).toFixed(0);
}

function commonItem() {
    return settlement.level; 
}

function uncommonItem() {
    return settlement.level - 2;
}

export { actualTaxes, commonItem, economy, economyBase, economyBonus, prodBonus, prodCurrent, prodMax, tradeBonus, tradeCurrent, tradeMax, uncommonItem }