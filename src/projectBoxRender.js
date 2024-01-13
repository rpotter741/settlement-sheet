import { economy } from "./economyStats";
import newEvent from "./newEvent";
import renderProjects from "./renderProjects";

function projectBoxRender() {
    let wrapper = document.querySelector('#projectManagement');
    wrapper.innerHTML = "";
    wrapper.style = 'width: 100%'

    let header = document.createElement('div');
    header.textContent = "Event Management";
    header.style = "height: 10%; box-sizing: border-box; display: flex; justify-content: center; align-items: center; background: gray;"
    wrapper.appendChild(header);

    let subHeader = document.createElement('div');
    subHeader.style = "display: grid; grid-template: 1fr / 2fr 1fr; place-items: center; height: 10%; box-sizing: border-box";

    let prodAvailBox = document.createElement('div');
    prodAvailBox.id = 'prodAvailBox'

    let prodAvailLabel = document.createElement('div');
    prodAvailLabel.textContent = "Productivity Available:"
    prodAvailBox.appendChild(prodAvailLabel);

    let prodAvailValue = document.createElement('div');
    prodAvailValue.id = 'prodAvailValue';
    prodAvailValue.textContent = calcWorkers();
    prodAvailBox.appendChild(prodAvailValue);
    subHeader.appendChild(prodAvailBox)

    let newProjBtn = document.createElement('button');
    newProjBtn.textContent = "New Event";
    newProjBtn.id = 'newProjBtn'
    newProjBtn.addEventListener('click', () => {
        newEvent();
    })
    subHeader.appendChild(newProjBtn);

    wrapper.appendChild(subHeader);

    let projectBox = document.createElement('div');
    projectBox.id = 'projectBox'
    projectBox.style = "height: 78%; background: aliceblue";
    wrapper.appendChild(projectBox)

    renderProjects();
}

let activeWorkerCount = 0;

let projectArray = [];

function calcWorkers() {
    
    let num = 0; 
    if(economy.prodC > economy.prodM) {
        num = economy.prodM
    } else {
        num = economy.prodC;
    };
    return (num -= activeWorkerCount)

}

export { calcWorkers, projectArray, projectBoxRender}