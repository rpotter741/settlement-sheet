import { settlement, spend } from './settlementStats.js';
import { foodCurrent, foodMax, medCurrent, medMax, supCurrent, supMax, survival, survivalBase, survivalBonus, survivalChange } from './survivalStats.js';
import { diCurrent, diMax, garCurrent, garMax, intelCurrent, intelMax, safety, safetyBase, safetyBonus } from './safetyStats.js';
import { economy, economyBase, economyBonus, prodCurrent, prodMax, tradeCurrent, tradeMax } from './economyStats.js';
import { buildings } from './buildingsStats.js';
import { calcWorkers } from './projectBoxRender.js';

export default function overviewRender() {


//overview Side
let overviewCol = document.querySelector("#overview");
overviewCol.innerHTML = "";

//creating settlement info header
let nameLevel = document.createElement('div');
nameLevel.style = "display: flex; justify-content: space-around; height: 85px"

let info = document.createElement('div');
info.style = "display: flex; flex-direction: column; width: 50%;";

let name = document.createElement('input');
name.id = "settlementName"
name.type = 'text';
name.placeholder = "Enter Settlement Name";
name.value = settlement.name;
name.addEventListener('change', () => {
    settlement.name = name.value;
})
info.appendChild(name);

let levelBox = document.createElement('div');
levelBox.style = "display: flex; gap: .5rem;"

let levelLabel = document.createElement('div');
levelLabel.textContent = "Level";
levelBox.appendChild(levelLabel);

let levelValue = document.createElement('div');
levelValue.textContent = settlement.level;
levelBox.appendChild(levelValue);

//type unlocked at level 4
let settlementType = document.createElement('div');
settlementType.textContent = settlement.type;
if(settlement.type != "") {
    levelBox.appendChild(settlementType);
}

let settlementLabel = document.createElement('div');
settlementLabel.textContent = "Settlement";
levelBox.appendChild(settlementLabel);
info.appendChild(levelBox);

nameLevel.appendChild(info);

let spBox = document.createElement('div');
spBox.style = "display: flex; flex-direction: column; justify-content: center; align-items: center; width: 50%";

let spVal = document.createElement('div');
spVal.id = "settlementPoints";
spVal.textContent = settlement.settlementPoints;
spBox.appendChild(spVal);

let spLabel = document.createElement('div');
spLabel.textContent = "Settlement Points";
spBox.appendChild(spLabel);

nameLevel.appendChild(spBox);

overviewCol.appendChild(nameLevel);

////////SURVIVAL SCORE BOX////////
let survivalBox = document.createElement('div');
survivalBox.style = "display: flex; flex-direction: column";
survivalBox.id = "surBox"

let surHeader = document.createElement('div');
surHeader.style = 'display: flex; gap: 1rem;';

let survivalLabel = document.createElement('div');
survivalLabel.textContent = "Survival Rating:";
surHeader.appendChild(survivalLabel);

let surRating = document.createElement('div');
surRating.textContent = survival.Rating;
surHeader.appendChild(surRating);

////////SURVIVAL BONUS/////////
let surBonusBox = document.createElement('div');
surBonusBox.style = "display: flex;"

let surPM = document.createElement('div');
if(survival.Bonus >= 0) {
    surPM.textContent = "+"
} else {
    surPM.textContent = "";
};
surBonusBox.appendChild(surPM);

let surB = document.createElement('div');
surB.textContent = survival.Bonus;
surBonusBox.appendChild(surB);
surHeader.appendChild(surBonusBox);

survivalBox.appendChild(surHeader);

////////SURVIVAL COMPONENTS////////
///////SURVIVAL COMPONENT LABELS////////
let surCLRow = document.createElement('div');
surCLRow.style = "display: flex;";

let surComp = document.createElement('div');
surComp.textContent = "Component";
surComp.classList.add('component');
surCLRow.appendChild(surComp);

let surCB = document.createElement('div');
surCB.textContent = "Bonus";
surCB.classList.add('compScore');
surCLRow.appendChild(surCB);

let surCC = document.createElement('div');
surCC.textContent = "Current";
surCC.classList.add('compScore');
surCLRow.appendChild(surCC);

let surCM = document.createElement('div');
surCM.textContent = "Max";
surCM.classList.add('compScore');
surCLRow.appendChild(surCM);

survivalBox.appendChild(surCLRow);

////////FOOD COMPONENT/////////
let foodRow = document.createElement('div');
foodRow.style = "display: flex;";

let foodLabel = document.createElement('div');
foodLabel.classList.add('glosBtn','component');
foodLabel.textContent = "Food";
foodRow.appendChild(foodLabel);

let foodB = document.createElement('div');
foodB.textContent = survival.foodB;
foodB.classList.add('compScore')
foodRow.appendChild(foodB);

let foodCPair = document.createElement('div');
foodCPair.style = "display: flex";
foodCPair.classList.add('compScore');

let foodC = document.createElement('div');
foodC.textContent = survival.foodC;
foodCPair.appendChild(foodC);

let foodSP = document.createElement('button');
foodSP.classList.add('SPBuyBtn');
foodSP.textContent = "+";
foodSP.addEventListener('click', () => {
    if(settlement.settlementPoints > 0) {
        spend(1);
        foodCurrent(1);
        overviewRender();
    }
});
foodCPair.appendChild(foodSP);

foodRow.appendChild(foodCPair);

let foodM = document.createElement('div');
foodMax();
foodM.textContent = survival.foodM;
foodM.classList.add('compScore');
foodRow.appendChild(foodM);

survivalBox.appendChild(foodRow);

////////SUPPLIES COMPONENT////////
let supRow = document.createElement('div');
supRow.style = "display: flex;" ;

let supLabel = document.createElement('div');
supLabel.classList.add('glosBtn','component');
supLabel.textContent = "General Supplies";
supRow.appendChild(supLabel);

let supB = document.createElement('div');
supB.textContent = survival.supB;
supB.classList.add('compScore')
supRow.appendChild(supB);

let supCPair = document.createElement('div');
supCPair.style = "display: flex";
supCPair.classList.add('compScore')

let supC = document.createElement('div');
supC.textContent = survival.supC;
supCPair.appendChild(supC);

let supSP = document.createElement('button');
supSP.classList.add('SPBuyBtn');
supSP.textContent = "+";
supSP.addEventListener('click', () => {
    if(settlement.settlementPoints > 1) {
        spend(2);
        supCurrent(1);
        overviewRender();
    }
});
supCPair.appendChild(supSP);

supRow.appendChild(supCPair);

let supM = document.createElement('div');
supMax();
supM.textContent = survival.supM;
supM.classList.add('compScore')
supRow.appendChild(supM);

survivalBox.appendChild(supRow);

////////MEDICAL CAPACITY COMPONENT////////
let medRow = document.createElement('div');
medRow.style = "display: flex;";

let medLabel = document.createElement('div');
medLabel.classList.add('glosBtn','component');
medLabel.textContent = "Medical Capacity";
medRow.appendChild(medLabel);

let medB = document.createElement('div');
medB.textContent = survival.medB;
medB.classList.add('compScore')
medRow.appendChild(medB);

let medCPair = document.createElement('div');
medCPair.style = "display: flex";
medCPair.classList.add('compScore')

let medC = document.createElement('div');
medC.textContent = survival.medC;
medCPair.appendChild(medC);

let medSP = document.createElement('button');
medSP.classList.add('SPBuyBtn');
medSP.textContent = "+";
medSP.addEventListener('click', () => {
    if(settlement.settlementPoints > 2) {
        spend(3);
        medCurrent(1);
        overviewRender();
    }
});
medCPair.appendChild(medSP);

medRow.appendChild(medCPair);

let medM = document.createElement('div');
medMax();
medM.textContent = survival.medM;
medM.classList.add('compScore')
medRow.appendChild(medM);

survivalBox.appendChild(medRow);

let surScoreBox = document.createElement('div');
surScoreBox.classList.add('scoreBox')

let surBBox = document.createElement('div');
surBBox.style = "display: flex; flex-direction: column; justify-content: center; align-items: center;"

let surBScore = document.createElement('div');
surBScore.textContent = survivalBase();
surBBox.appendChild(surBScore);

let surBLabel = document.createElement('div');
surBLabel.textContent = "Base Score";
surBBox.appendChild(surBLabel);
surScoreBox.appendChild(surBBox);

let surABox = document.createElement('div');
surABox.style = "display: flex; flex-direction: column; justify-content: center; align-items: center;"

let surAScore = document.createElement('div');
surAScore.textContent = survival.Adjusted;
surABox.appendChild(surAScore);

let surALabel = document.createElement('div');
surALabel.textContent = "Adjusted Score";
surABox.appendChild(surALabel);
surScoreBox.appendChild(surABox);

survivalBox.appendChild(surScoreBox);

overviewCol.appendChild(survivalBox);

////////SAFETY SCORE BOX////////
let safetyBox = document.createElement('div');
safetyBox.style = "display: flex; flex-direction: column";
safetyBox.id = "safBox"

let safHeader = document.createElement('div');
safHeader.style = 'display: flex; gap: 1rem;';

let safetyLabel = document.createElement('div');
safetyLabel.textContent = "Safety Rating:"
safHeader.appendChild(safetyLabel);

let safRating = document.createElement('div');
safRating.textContent = safety.Rating;
safHeader.appendChild(safRating);

////////SAFETY BONUS/////////
let safBonusBox = document.createElement('div');
safBonusBox.style = "display: flex;"

let safPM = document.createElement('div');
if(safety.Bonus >= 0) {
    safPM.textContent = "+"
} else {
    safPM.textContent = "";
};
safBonusBox.appendChild(safPM);

let safB = document.createElement('div');
safB.textContent = safety.Bonus;
safBonusBox.appendChild(safB);
safHeader.appendChild(safBonusBox);

safetyBox.appendChild(safHeader);



////////SAFETY COMPONENTS////////
///////SAFETY COMPONENT LABELS////////
let safCLRow = document.createElement('div');
safCLRow.style = "display: flex;";

let safComp = document.createElement('div');
safComp.textContent = "Component";
safComp.classList.add('component');
safCLRow.appendChild(safComp);

let safCB = document.createElement('div');
safCB.textContent = "Bonus";
safCB.classList.add('compScore');
safCLRow.appendChild(safCB);

let safCC = document.createElement('div');
safCC.textContent = "Current";
safCC.classList.add('compScore');
safCLRow.appendChild(safCC);

let safCM = document.createElement('div');
safCM.textContent = "Max";
safCM.classList.add('compScore');
safCLRow.appendChild(safCM);

safetyBox.appendChild(safCLRow);

////////DEFENSIVE INFRASTRUCTURE COMPONENT/////////
let diRow = document.createElement('div');
diRow.style = "display: flex;";

let diLabel = document.createElement('div');
diLabel.classList.add('glosBtn','component');
diLabel.textContent = "Defensive Infrastructure";
diRow.appendChild(diLabel);

let diB = document.createElement('div');
diB.textContent = safety.diB;
diB.classList.add('compScore');
diRow.appendChild(diB);

let diCPair = document.createElement('div');
diCPair.style = "display: flex";
diCPair.classList.add('compScore');

let diC = document.createElement('div');
diC.textContent = safety.diC;
diCPair.appendChild(diC);

let diSP = document.createElement('button');
diSP.classList.add('SPBuyBtn');
diSP.textContent = "+";
diSP.addEventListener('click', () => {
    if(settlement.settlementPoints > 1) {
        spend(2);
        diCurrent(1);
        overviewRender();
    }
});
diCPair.appendChild(diSP);

diRow.appendChild(diCPair);

let diM = document.createElement('div');
diMax();
diM.textContent = safety.diM;
diM.classList.add('compScore');
diRow.appendChild(diM);

safetyBox.appendChild(diRow);

////////INTEL COMPONENT////////
let intelRow = document.createElement('div');
intelRow.style = "display: flex;";

let intelLabel = document.createElement('div');
intelLabel.classList.add('glosBtn','component');
intelLabel.textContent = "Intelligence";
intelRow.appendChild(intelLabel);

let intelB = document.createElement('div');
intelB.textContent = safety.intelB;
intelB.classList.add('compScore');
intelRow.appendChild(intelB);

let intelCPair = document.createElement('div');
intelCPair.style = "display: flex";
intelCPair.classList.add('compScore');

let intelC = document.createElement('div');
intelC.textContent = safety.intelC;
intelCPair.appendChild(intelC);

let intelSP = document.createElement('button');
intelSP.classList.add('SPBuyBtn');
intelSP.textContent = "+";
intelSP.addEventListener('click', () => {
    if(settlement.settlementPoints > 1) {
        spend(2);
        intelCurrent(1);
        overviewRender()
    }
});
intelCPair.appendChild(intelSP);

intelRow.appendChild(intelCPair);

let intelM = document.createElement('div');
intelMax();
intelM.textContent = safety.intelM;
intelM.classList.add('compScore');
intelRow.appendChild(intelM);

safetyBox.appendChild(intelRow);

////////GARRISON COMPONENT////////
let garRow = document.createElement('div');
garRow.style = "display: flex; ";

let garLabel = document.createElement('div');
garLabel.classList.add('glosBtn','component');
garLabel.textContent = "Garrison";
garRow.appendChild(garLabel);

let garB = document.createElement('div');
garB.textContent = safety.garB;
garB.classList.add('compScore');
garRow.appendChild(garB);

let garCPair = document.createElement('div');
garCPair.style = "display: flex";
garCPair.classList.add('compScore');

let garC = document.createElement('div');
garC.textContent = safety.garC;
garCPair.appendChild(garC);

let garSP = document.createElement('button');
garSP.classList.add('SPBuyBtn');
garSP.textContent = "+";
garSP.addEventListener('click', () => {
    if(settlement.settlementPoints > 2) {
        spend(3);
        garCurrent(1);
        overviewRender();
        
    }
});
garCPair.appendChild(garSP);

garRow.appendChild(garCPair);

let garM = document.createElement('div');
garMax();
garM.textContent = safety.garM;
garM.classList.add('compScore');
garRow.appendChild(garM);

safetyBox.appendChild(garRow);

let safScoreBox = document.createElement('div');
safScoreBox.classList.add('scoreBox')

let safBBox = document.createElement('div');
safBBox.style = "display: flex; flex-direction: column; justify-content: center; align-items: center;"

let safBScore = document.createElement('div');
safBScore.textContent = safetyBase();
safBBox.appendChild(safBScore);

let safBLabel = document.createElement('div');
safBLabel.textContent = "Base Score";
safBBox.appendChild(safBLabel);
safScoreBox.appendChild(safBBox);

let safABox = document.createElement('div');
safABox.style = "display: flex; flex-direction: column; justify-content: center; align-items: center;"

let safAScore = document.createElement('div');
safAScore.textContent = safety.Adjusted;
safABox.appendChild(safAScore);

let safALabel = document.createElement('div');
safALabel.textContent = "Adjusted Score";
safABox.appendChild(safALabel);
safScoreBox.appendChild(safABox);

safetyBox.appendChild(safScoreBox);

overviewCol.appendChild(safetyBox);

////////ECONOMY SCORE BOX////////
let economyBox = document.createElement('div');
economyBox.style = "display: flex; flex-direction: column";
economyBox.id = 'econBox'

let econHeader = document.createElement('div');
econHeader.style = 'display: flex; gap: 1rem;';

let economyLabel = document.createElement('div');
economyLabel.textContent = "Economy Rating:"
econHeader.appendChild(economyLabel);

let econRating = document.createElement('div');
econRating.textContent = economy.Rating;
econHeader.appendChild(econRating);

////////economy BONUS/////////
let econBonusBox = document.createElement('div');
econBonusBox.style = "display: flex;"

let econPM = document.createElement('div');
if(economy.Bonus >= 0) {
    econPM.textContent = "+"
} else {
    econPM.textContent = "";
};
econBonusBox.appendChild(econPM);

let econB = document.createElement('div');
econB.textContent = economy.Bonus;
econBonusBox.appendChild(econB);
econHeader.appendChild(econBonusBox);

economyBox.appendChild(econHeader);

////////ECONOMY COMPONENTS////////
///////ECONOMY COMPONENT LABELS////////
let econCLRow = document.createElement('div');
econCLRow.style = "display: flex;";

let econComp = document.createElement('div');
econComp.textContent = "Component";
econComp.classList.add('component');
econCLRow.appendChild(econComp);

let econCB = document.createElement('div');
econCB.textContent = "Bonus";
econCB.classList.add('compScore');
econCLRow.appendChild(econCB);

let econCC = document.createElement('div');
econCC.textContent = "Current";
econCC.classList.add('compScore');
econCLRow.appendChild(econCC);

let econCM = document.createElement('div');
econCM.textContent = "Max";
econCM.classList.add('compScore');
econCLRow.appendChild(econCM);

economyBox.appendChild(econCLRow);

////////TRADE COMPONENT/////////
let tradeRow = document.createElement('div');
tradeRow.style = "display: flex;";

let tradeLabel = document.createElement('div');
tradeLabel.classList.add('glosBtn','component');
tradeLabel.textContent = "Trade";
tradeRow.appendChild(tradeLabel);

let tradeB = document.createElement('div');
tradeB.textContent = economy.tradeB;
tradeB.classList.add('compScore');
tradeRow.appendChild(tradeB);

let tradeCPair = document.createElement('div');
tradeCPair.style = "display: flex";
tradeCPair.classList.add('compScore');

let tradeC = document.createElement('div');
tradeC.textContent = economy.tradeC;
tradeCPair.appendChild(tradeC);

let tradeSP = document.createElement('button');
tradeSP.classList.add('SPBuyBtn');
tradeSP.textContent = "+";
tradeSP.addEventListener('click', () => {
    if(settlement.settlementPoints > 1) {
        spend(2);
        tradeCurrent(1);
        overviewRender();
    }
});
tradeCPair.appendChild(tradeSP);

tradeRow.appendChild(tradeCPair);

let tradeM = document.createElement('div');
tradeMax();
tradeM.textContent = economy.tradeM;
tradeM.classList.add('compScore');
tradeRow.appendChild(tradeM);

economyBox.appendChild(tradeRow);

////////PRODUCTIVITY COMPONENT////////
let prodRow = document.createElement('div');
prodRow.style = "display: flex;";

let prodLabel = document.createElement('div');
prodLabel.classList.add('glosBtn','component');
prodLabel.textContent = "Productivity";
prodRow.appendChild(prodLabel);

let prodB = document.createElement('div');
prodB.textContent = economy.prodB;
prodB.classList.add('compScore');
prodRow.appendChild(prodB);

let prodCPair = document.createElement('div');
prodCPair.style = "display: flex";
prodCPair.classList.add('compScore');

let prodC = document.createElement('div');
prodC.textContent = economy.prodC;
prodCPair.appendChild(prodC);

let prodSP = document.createElement('button');
prodSP.classList.add('SPBuyBtn');
prodSP.textContent = "+";
prodSP.addEventListener('click', () => {
    if(settlement.settlementPoints > 1) {
        spend(2);
        prodCurrent(1);
        overviewRender();
        if(document.querySelector('#prodAvailValue') != undefined) {
        document.querySelector('#prodAvailValue').textContent = calcWorkers();
        }
    }
});
prodCPair.appendChild(prodSP);

prodRow.appendChild(prodCPair);

let prodM = document.createElement('div');
prodMax();
prodM.textContent = economy.prodM;
prodM.classList.add('compScore');
prodRow.appendChild(prodM);

economyBox.appendChild(prodRow);

let econScoreBox = document.createElement('div');
econScoreBox.classList.add('scoreBox')

let econBBox = document.createElement('div');
econBBox.style = "display: flex; flex-direction: column; justify-content: center; align-items: center;"

let econBScore = document.createElement('div');
econBScore.textContent = economyBase();
econBBox.appendChild(econBScore);

let econBLabel = document.createElement('div');
econBLabel.textContent = "Base Score";
econBBox.appendChild(econBLabel);
econScoreBox.appendChild(econBBox);

let econABox = document.createElement('div');
econABox.style = "display: flex; flex-direction: column; justify-content: center; align-items: center;"

let econAScore = document.createElement('div');
econAScore.textContent = economy.Adjusted;
econABox.appendChild(econAScore);

let econALabel = document.createElement('div');
econALabel.textContent = "Adjusted Score";
econABox.appendChild(econALabel);
econScoreBox.appendChild(econABox);

economyBox.appendChild(econScoreBox);

let tax = document.createElement('div');
tax.id = 'taxBox';


overviewCol.appendChild(economyBox);


wrapper.appendChild(overviewCol);






}