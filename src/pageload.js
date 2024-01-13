export default function pageLoad() {

let body = document.querySelector("body");


let wrapper = document.createElement('div');
wrapper.id = "wrapper";
wrapper.style = "display: grid; grid-template-columns: 30% 70%; margin: 2rem; box-sizing: border-box; padding: 1rem;"

//overview Side
let overviewCol = document.createElement('div');
overviewCol.style = "border-top: 3px solid black; border-left: 3px solid black; border-bottom: 3px solid black; display: flex; flex-direction: column; grid-area: 1/1/2/2";
overviewCol.id = "overview";

wrapper.appendChild(overviewCol);

let management = document.createElement('div');
management.style = "display: grid; grid-template: 1fr 1fr / 1fr 1fr; grid-area:1/2/2/3; box-sizing: border-box; border: 3px solid black"

let taxBuy = document.createElement('div');
taxBuy.style = "display: flex;"
let tax = document.createElement('div');
tax.id = "taxBox";
taxBuy.appendChild(tax);

let buy = document.createElement('div');
buy.id = "buyBox";
taxBuy.appendChild(buy);
management.appendChild(taxBuy);

let projectManagement = document.createElement('div');
projectManagement.id = "projectManagement";
management.appendChild(projectManagement);

let buildingUpgrades = document.createElement('div');
buildingUpgrades.id = 'buildingUpgrades'
buildingUpgrades.style = "width: 100%; height: 100%"
management.appendChild(buildingUpgrades);

let logNotes = document.createElement('div');
logNotes.id = 'logNotes';
logNotes.style = 'display: grid; grid-template-columns: 1fr 1fr;'

let log = document.createElement('div');
log.id = 'weekLog';
logNotes.appendChild(log);

let notes = document.createElement('div');
notes.id = 'notes';
logNotes.appendChild(notes); 

management.appendChild(logNotes);

wrapper.appendChild(management);

body.appendChild(wrapper);

}