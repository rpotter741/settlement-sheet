import { economy, economyRating, prodBox, tradeBox, tradeModifier } from "./economyStats";
import pageLoad from "./pageload";
import { projectBoxRender} from "./projectBoxRender";
import renderActionsArea from "./renderActionsArea";
import renderTroops from "./renderTroops";
import { renderUpgrades } from "./renderUpgrades";
import { diBox, garBox, garrisonModifier, intelBox, safety, safetyRating } from "./safetyStats";
import { settlementList, swapButtonRender } from "./settlementManager";
import { healthPercent, levelUp, nextWeek, settlement, vaultAdd } from "./settlementStats";
import { shopWindow } from "./shopWindow";
import { saveSettlement } from "./storage";
import { foodBox, medBox, suppliesBox, suppliesModifier, survival, survivalRating } from "./survivalStats";
import taxRender from "./taxRender";


function renderNameLevel() {
    const wrapper = document.querySelector('#NameLevel')
    wrapper.innerHTML = '';

    const nameBox = document.createElement('div')
    nameBox.classList.add('flexRow','center');

    const name = document.createElement('input');
    name.type = 'text';
    name.placeholder = 'Settlement Name';
    name.value = settlement.name;
    name.id = 'settlementName';
    name.addEventListener('change', () => {
        let holdover = settlement.name;
        settlement.name = name.value;
        saveSettlement(settlement.name);
        delete settlementList[holdover];
        
    })

    nameBox.appendChild(name);
    wrapper.appendChild(nameBox);

    const levelBox = document.createElement('div');
    levelBox.classList.add('flexRow','gap','center');

    const levelText = document.createElement('div');
    levelText.textContent = 'Level';
    levelBox.appendChild(levelText);

    const levelValue = document.createElement('div');
    levelValue.textContent = settlement.level;
    levelBox.appendChild(levelValue);

    if(settlement.type != '') {
    const setType = document.createElement('div');
    setType.textContent = settlement.type;
    levelBox.appendChild(setType);
    }

    const setLabel = document.createElement('div');
    setLabel.textContent = "Settlement";
    levelBox.appendChild(setLabel);

    const lvlUpBtn = document.createElement('button');
    lvlUpBtn.textContent = 'Level Up';
    lvlUpBtn.addEventListener('click', () => {
        const choice = confirm('Upgrading will cost ' + levelCost() + ' gold. Do you want to commit?')

        if(choice === true) {
            if(settlement.vault >= levelCost()) {
                vaultAdd(-levelCost());
                levelUp(1);
            } else if (settlement.vault < levelCost()) {
                alert('You cannot afford to upgrade the settlement level yet')
                return;
            }
        }
    })
    
    wrapper.appendChild(levelBox);
    wrapper.appendChild(lvlUpBtn);
}

function levelCost() {
    const multiplier = Math.pow(1.392, settlement.level);
    const cost = parseInt((200 * multiplier).toFixed(0));
    return cost;
}

function renderHealth() {
    const wrapper = document.querySelector('#SetHealth');
    wrapper.innerHTML = '';

    const healthBox = document.createElement('div');
    healthBox.classList.add('flexCol','gap')

    const healthLabel = document.createElement('div');
    healthLabel.textContent = 'Settlement Health';
    healthLabel.classList.add('text-center')
    healthBox.appendChild(healthLabel);

    const healthValsBox = document.createElement('div');
    healthValsBox.classList.add('flexRow','center');

    const currentHealth = document.createElement('input');
    currentHealth.type = 'number';
    currentHealth.classList.add('text-center');
    currentHealth.id = 'currentHealth';
    currentHealth.style = 'font-size: 20px;';
    if(healthPercent() >= .8) {
        currentHealth.style.color = 'green';
    } else if(healthPercent() >= .5 && healthPercent() < .8) {
        currentHealth.style.color = 'darkgoldenrod';
    } else if(healthPercent() >= .25 && healthPercent() < .5) {
        currentHealth.style.color = 'orange';
    } else if(healthPercent() < .25) {
        currentHealth.style.color = 'red';
    }
    currentHealth.addEventListener('change', () => {
        settlement.currentHealth = currentHealth.value;
        if(healthPercent() >= .8) {
            currentHealth.style.color = 'green';
        } else if(healthPercent() >= .5 && healthPercent() < .8) {
            currentHealth.style.color = 'darkgoldenrod';
        } else if(healthPercent() >= .25 && healthPercent() < .5) {
            currentHealth.style.color = 'orange';
        } else if(healthPercent() < .25) {
            currentHealth.style.color = 'red';
        }
    })

    currentHealth.value = settlement.currentHealth;
    healthValsBox.appendChild(currentHealth);

    const healthSpacer = document.createElement('div');
    healthSpacer.textContent = '/';
    healthSpacer.classList.add('text-center')
    healthSpacer.style = 'width: 10%;'
    healthValsBox.appendChild(healthSpacer);

    const maxHealth = document.createElement('div');
    maxHealth.textContent = settlement.maxHealthBase + settlement.maxHealthBonus;
    maxHealth.classList.add('text-center')
    maxHealth.style = 'width: 15%; font-size: 20px'
    healthValsBox.appendChild(maxHealth);

    healthBox.appendChild(healthValsBox);

    wrapper.appendChild(healthBox);
}

function renderConditions() {
    const wrapper = document.querySelector('#SetConditions');
    wrapper.innerHTML = '';

    const header = document.createElement('div');
    header.classList.add('text-center')
    header.textContent = 'Settlement Conditions';
    wrapper.appendChild(header);

    const impactBox = document.createElement('div');
    impactBox.classList.add('flexRow','gap','center');
    wrapper.appendChild(impactBox);

    const addBox = document.createElement('div');
    addBox.style = 'display: flex; justify-content: end;'

    const addBtn = document.createElement('button');
    addBtn.textContent = '+';
    addBox.appendChild(addBtn);
    wrapper.appendChild(addBox);
}

function renderSettlementPointsBox() {
    const wrapper = document.querySelector('#SettlementPointsBox');
    wrapper.innerHTML = '';

    const header = document.createElement('div');
    header.textContent = 'Settlement Points';
    header.classList.add('text-center');
    wrapper.appendChild(header);

    const spVal = document.createElement('div');
    spVal.textContent = settlement.settlementPoints;
    spVal.classList.add('text-center','valBall');
    wrapper.appendChild(spVal);

}

function renderWeekBox() {
    const wrapper = document.querySelector('#WeekBox');
    wrapper.innerHTML = '';
    wrapper.style = 'justify-content: space-around'

    const valBox = document.createElement('div');
    valBox.classList.add('flexCol','center','gap');

    const weekVal = document.createElement('div');
    weekVal.classList.add('valBall');
    weekVal.textContent = settlement.weeksPassed;
    valBox.appendChild(weekVal);

    const weekLabel = document.createElement('div');
    weekLabel.textContent = 'Weeks Passed';
    weekLabel.classList.add('text-center');
    valBox.appendChild(weekLabel); 

    wrapper.appendChild(valBox);

    const nxtWeek = document.createElement('button');
    nxtWeek.textContent = 'Next Week';
    nxtWeek.addEventListener('click', () => {
        nextWeek();
    })
    nxtWeek.style = 'border-radius: .5rem;'
    wrapper.appendChild(nxtWeek);
}

function renderEventModBox() {
    const wrapper = document.querySelector('#EventModBox');
    wrapper.innerHTML = '';

    const header = document.createElement('div');
    header.textContent = 'Event Modifiers';
    header.classList.add('text-center');
    wrapper.appendChild(header);

    const modRow = document.createElement('div');
    modRow.classList.add('flexRow','center')

    const supModBox = document.createElement('div');
    supModBox.classList.add('flexCol','gap','center');
    supModBox.style = 'width: 33.333%; border-right: 1px solid black';

    const supModLabel = document.createElement('div');
    supModLabel.textContent = "Supplies";
    supModLabel.style = 'font-size: 16px; text-align: center'
    supModBox.appendChild(supModLabel);
    modRow.appendChild(supModBox);

    const supModVal = document.createElement('div');
    let i = '';
    if(suppliesModifier() >= 0){
        i = '+';
    } 
    supModVal.textContent = i + " " + suppliesModifier();
    supModBox.appendChild(supModVal);   

    const garModBox = document.createElement('div');
    garModBox.classList.add('flexCol','gap','center');
    garModBox.style = 'width: 33.333%; border-right: 1px solid black';

    const garModLabel = document.createElement('div');
    garModLabel.textContent = "Garrison";
    garModLabel.style = 'font-size: 16px; text-align: center'
    garModBox.appendChild(garModLabel);
    modRow.appendChild(garModBox);

    const garModVal = document.createElement('div');
    let n = '';
        if(garrisonModifier() >= 0){
            n = '+';
        } 
    garModVal.textContent = n + " " + garrisonModifier();
    garModBox.appendChild(garModVal);

    const tradeModBox = document.createElement('div');
    tradeModBox.classList.add('flexCol','gap','center');
    tradeModBox.style = 'width: 33.333%;';

    const tradeModLabel = document.createElement('div');
    tradeModLabel.textContent = "Trade";
    tradeModLabel.style = 'font-size: 16px; text-align: center'
    tradeModBox.appendChild(tradeModLabel);
    modRow.appendChild(tradeModBox);

    const tradeModVal = document.createElement('div');
    let o = '';
        if(tradeModifier() >= 0){
            o = '+';
        } 
    tradeModVal.textContent = o + " " + tradeModifier();
    tradeModBox.appendChild(tradeModVal);

    wrapper.appendChild(modRow);
}

function renderCompScoreBox() {
    const wrapper = document.querySelector('#compScoreBox');
    wrapper.innerHTML = '';

    const headers = document.createElement('div');
    headers.style = 'display: grid; grid-template-columns: 3fr 3fr 2fr; padding-right: 2%';

    const surHead = document.createElement('div');
    surHead.textContent = 'Survival';
    surHead.classList.add('text-center');
    surHead.style = 'font-size: 22px;'

    const surBonus = document.createElement('span');
    let sb = '';
    if(survival.Bonus >= 0) {
        sb = '+';
    } 
    surBonus.textContent = " " + sb + survival.Bonus
    surBonus.style = 'font-size: 14px'
    surHead.appendChild(surBonus)
    headers.appendChild(surHead);

    const safHead = document.createElement('div');
    safHead.textContent = 'Safety';
    safHead.classList.add('text-center');
    safHead.style = 'font-size: 22px'

    const safBonus = document.createElement('span');
    let sab = '';
    if(safety.Bonus >= 0) {
        sab = '+';
    } 
    safBonus.textContent = " " + sab + safety.Bonus;
    safBonus.style = 'font-size: 14px'
    safHead.appendChild(safBonus);
    headers.appendChild(safHead);

    const econHead = document.createElement('div');
    econHead.textContent = 'Economy';
    econHead.classList.add('text-center');
    econHead.style = 'font-size: 22px'

    const eBonus = document.createElement('span');
    let eb = '';
    if(economy.Bonus >= 0) {
        eb = '+';
    }
    eBonus.textContent = " " + eb + economy.Bonus;
    eBonus.style = 'font-size: 14px'
    econHead.appendChild(eBonus);
    headers.appendChild(econHead);

    wrapper.appendChild(headers);

    const scoreRow = document.createElement('div');
    scoreRow.classList.add('flexRow',);
    scoreRow.style = 'justify-content: space-around; padding-right: 2%'

    const foodBox = document.createElement('div');
    foodBox.classList.add('flexCol','box4','center');
    foodBox.id = 'foodBox';
    scoreRow.appendChild(foodBox);

    const suppliesBox = document.createElement('div');
    suppliesBox.classList.add('flexCol','box4','center');
    suppliesBox.id = 'suppliesBox';
    scoreRow.appendChild(suppliesBox);

    const medBox = document.createElement('div');
    medBox.classList.add('flexCol','box4','center');
    ////////FOR THE DIVIDER////////
    medBox.style = 'border-right: 2px solid black';
    medBox.id = 'medBox';
    scoreRow.appendChild(medBox);

    const diBox = document.createElement('div');
    diBox.classList.add('flexCol','box4','center');
    diBox.id = 'diBox';
    scoreRow.appendChild(diBox);

    const intelBox = document.createElement('div');
    intelBox.classList.add('flexCol','box4','center');
    intelBox.id = 'intelBox';
    scoreRow.appendChild(intelBox);

    const garBox = document.createElement('div');
    garBox.classList.add('flexCol','box4','center');
    ////////FOR THE DIVIDER////////
    garBox.style = 'border-right: 2px solid black'
    garBox.id = 'garBox';
    scoreRow.appendChild(garBox);

    const tradeBox = document.createElement('div');
    tradeBox.classList.add('flexCol','box4','center');
    tradeBox.id = 'tradeBox';
    scoreRow.appendChild(tradeBox);

    const prodBox = document.createElement('div');
    prodBox.classList.add('flexCol','box4','center');
    prodBox.id = 'prodBox';
    scoreRow.appendChild(prodBox);

    wrapper.appendChild(scoreRow);

}

function renderScoreBonus() {
    const wrapper = document.querySelector('#ScoreBonusBox');
    wrapper.innerHTML = '';

    const header = document.createElement('div');
    header.textContent = 'Settlement Scores';
    header.classList.add('text-center');
    wrapper.appendChild(header);

    const modRow = document.createElement('div');
    modRow.classList.add('flexRow','center')

    const surModBox = document.createElement('div');
    surModBox.classList.add('flexCol','gap','center');
    surModBox.style = 'width: 33.333%; border-right: 1px solid black';

    const surModLabel = document.createElement('div');
    surModLabel.textContent = "Survival";
    surModLabel.style = 'font-size: 16px; text-align: center'
    surModBox.appendChild(surModLabel);
    modRow.appendChild(surModBox);

    const surRate = document.createElement('div');
    surRate.textContent = survivalRating();
    surRate.style = 'font-size: 14px'

    const surModVal = document.createElement('div');
    surModVal.classList.add('valBall');
    surModVal.textContent = survival.Base;
    surModBox.appendChild(surModVal);
    surModBox.appendChild(surRate);   

    const safModBox = document.createElement('div');
    safModBox.classList.add('flexCol','gap','center');
    safModBox.style = 'width: 33.333%; border-right: 1px solid black';

    const safModLabel = document.createElement('div');
    safModLabel.textContent = "Safety";
    safModLabel.style = 'font-size: 16px; text-align: center'
    safModBox.appendChild(safModLabel);
    modRow.appendChild(safModBox);

    const safRate = document.createElement('div');
    safRate.textContent = safetyRating();
    safRate.style = 'font-size: 14px'

    const safModVal = document.createElement('div');
    safModVal.classList.add('valBall')
    safModVal.textContent = safety.Adjusted;
    safModBox.appendChild(safModVal);
    safModBox.appendChild(safRate);

    const econModBox = document.createElement('div');
    econModBox.classList.add('flexCol','gap','center');
    econModBox.style = 'width: 33.333%;';

    const econModLabel = document.createElement('div');
    econModLabel.textContent = "Economy";
    econModLabel.style = 'font-size: 16px; text-align: center'
    econModBox.appendChild(econModLabel);
    modRow.appendChild(econModBox);

    const eRate = document.createElement('div');
    eRate.textContent = economyRating();
    eRate.style = 'font-size: 14px';

    const econModVal = document.createElement('div');
    econModVal.classList.add('valBall');
    econModVal.textContent = economy.Adjusted;
    econModBox.appendChild(econModVal);
    econModBox.appendChild(eRate);

    wrapper.appendChild(modRow);
}


function renderAll() {
    renderConditions();
    renderHealth();
    renderNameLevel();
    renderSettlementPointsBox();
    renderWeekBox();

    renderCompScoreBox();
    foodBox();
    suppliesBox();
    medBox();
    diBox();
    intelBox();
    garBox();
    tradeBox();
    prodBox();
    renderScoreBonus();
    taxRender();
    renderActionsArea();
    economyRating();
    survivalRating();
    safetyRating();
    renderEventModBox();

    if(document.querySelector('#a4c1') != undefined) {
        renderUpgrades();
    }

    if(document.querySelector('#troopScreen') != undefined) {
        renderTroops();
    }

    if(document.querySelector('#projectBox') != undefined) {
        projectBoxRender();
    }
    
}

function refreshPage() {
    pageLoad();
    renderAll();
    taxRender();
    shopWindow();
    projectBoxRender();
    swapButtonRender();
}

export { levelCost, refreshPage, renderAll, renderCompScoreBox, renderConditions, renderEventModBox, renderHealth, renderNameLevel, renderSettlementPointsBox, renderScoreBonus, renderWeekBox }