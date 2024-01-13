import { buildings } from "./buildingsStats";
import renderUpgrades from "./renderUpgrades";



 function renderBuildings() {
    let wrapper = document.querySelector('#buildingUpgrades'); 
    wrapper.innerHTML = '';
    wrapper.style = 'border-right: 2px solid black'

    let headerBox = document.createElement('div');
    headerBox.style = 'display: flex; background: gray; align-items: center';

    let spacer = document.createElement('div');
    spacer.style = "width: 40%";
    headerBox.appendChild(spacer);

    let header = document.createElement('div');
    header.style = 'display: flex; align-items: center; justify-content: center; height: 9.0909%; width: 100%; background: gray; font-size: 22px';
    header.textContent = "Building Management";
    headerBox.appendChild(header);

    let upgrades = document.createElement('button');
    upgrades.style = 'width: 40%; background: rgba(240,240,255,.6); border-radius: 1rem; font-size: 14px; margin-right: .5rem'
    upgrades.textContent = "Upgrades"
    upgrades.addEventListener('click', () => {
        renderUpgrades();
    })
    headerBox.appendChild(upgrades);

    wrapper.appendChild(headerBox);


    buildings.forEach((bldg) => {
        let row = document.createElement('div');
        row.style = 'display: flex; align-items: center; height: 9.0909%'

        let title = document.createElement('div');
        title.textContent = bldg.name;
        title.style = 'font-size: 15px; width: 22%; padding-left: .5rem; box-sizing: border-box'
        row.appendChild(title);

        let buttonRow = document.createElement('div');
        buttonRow.style = 'width: 20%; display: flex; justify-content: space-evenly'

        let button0 = document.createElement('button')
        button0.textContent = "0";
        button0.classList.add('bldgBtn');
        button0.id = `${bldg.id}0`;
        buttonRow.appendChild(button0);

        let button1 = document.createElement('button');
        button1.textContent = "1";
        button1.classList.add('bldgBtn');
        button1.id = `${bldg.id}1`;
        buttonRow.appendChild(button1);

        let button2 = document.createElement('button');
        button2.textContent = "2";
        button2.classList.add('bldgBtn');
        button2.id = `${bldg.id}2`;
        buttonRow.appendChild(button2);

        let button3 = document.createElement('button');
        button3.textContent = "3";
        button3.classList.add('bldgBtn');
        button3.id = `${bldg.id}3`;
        buttonRow.appendChild(button3);
        row.appendChild(buttonRow);

        let statusArea = document.createElement('div');
        statusArea.textContent = bldg.status;
        statusArea.style = 'font-size: 15px'
        row.appendChild(statusArea);

        switch(bldg.level) {
            case 0: 
                button0.style = 'background: green';
                break;
            case .5: 
                button1.style = 'background: yellow';
                break;
            case 1:
                button1.style = 'background: green';
                break;
            case 1.5: 
                button2.style = 'background: yellow';
                break;
            case 2: 
                button2.style = 'background: green';
                break;
            case 2.5: 
                button3.style = 'background: yellow';
                break;
            case 3:
                button3.style = 'background: green';
    }

        wrapper.appendChild(row);
})
}

export { renderBuildings }

