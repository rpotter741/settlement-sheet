import { renderBuildings } from "./renderBuildings";
import { settlement } from "./settlementStats";

export default function renderUpgrades() {
    let wrapper = document.querySelector('#buildingUpgrades'); 
    wrapper.innerHTML = '';
    wrapper.style = 'border-right: 2px solid black; overflow-y: scroll'

    let headerBox = document.createElement('div');
    headerBox.style = 'display: flex; background: gray; align-items: center';

    let spacer = document.createElement('div');
    spacer.style = "width: 40%";
    headerBox.appendChild(spacer);

    let header = document.createElement('div');
    header.style = 'display: flex; align-items: center; justify-content: center; height: 9.0909%; width: 100%; background: gray; font-size: 22px';
    header.textContent = "Settlement Upgrades";
    headerBox.appendChild(header);

    let bldgs = document.createElement('button');
    bldgs.style = 'width: 40%; background: rgba(240,240,255,.6); border-radius: 1rem; font-size: 14px; margin-right: .5rem'
    bldgs.textContent = "Buildings"
    bldgs.addEventListener('click', () => {
        renderBuildings();
    })
    headerBox.appendChild(bldgs);

    wrapper.appendChild(headerBox);

    if(settlement.level < 4) {
        let disclaimer = document.createElement('div'); 
        disclaimer.style = "display: flex; align-items: center; justify-content: center; width: 100%; height: 50%;"
        disclaimer.textContent = "Your Settlement needs to be level 4 to unlock Settlement Upgrades"
        wrapper.appendChild(disclaimer);
        return;
    }

    upgradeTree.forEach((level) => {
        if(level.value <= settlement.level)
        {
            let header = document.createElement('div');
            header.style = 'display: flex; justify-content: center; align-items: center; width: 100%; height: 10%;';
            header.textContent = level.title;
            wrapper.appendChild(header);
            
            let row = document.createElement('div'); 
            row.style = 'display: flex; align-items: center; justify-content: space-around'
    
            level.array.forEach((upg) => {
                let btn = document.createElement('button');
                btn.style = 'background: none; border-radius: 1rem; border-bottom: 2px solid black;'
                btn.textContent = upg.name;
                btn.id = upg.id;
                row.appendChild(btn);
    
            })

            wrapper.appendChild(row);
        }
    })

}

let upgradeTree = [
    {
        value: 4,
        title: 'Level 4 - Settlement Style',
        array: [
            {
                name: 'Survivalist Settlement',
                id: 'l4c1',
            },
            {
                name: 'Defender Settlement',
                id: 'l4c2',
            },
            {
                name: 'Mercantile Settlement',
                id: 'l4c3'
            }
        ]
    }
]
