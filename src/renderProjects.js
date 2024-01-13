import { projectArray } from "./projectBoxRender";

export default function renderProjects() {
    let wrapper = document.querySelector('#projectBox');
    wrapper.innerHTML = "";

    projectArray.forEach((event) => {        

        let eventRow = document.createElement('div');
        eventRow.classList.add('eventRow'); 

        let boxOne = document.createElement('div');
        boxOne.style = 'display:flex; width: 25%; justify-content: start; gap: 1rem; height: 32px;'

        let expandBtn = document.createElement('button');
        expandBtn.classList.add('expandBtn');
        if(event.hide == true) {
            expandBtn.innerHTML = '&#8680;'

        } else {
            expandBtn.innerHTML = '&#8681;'
        }
        
        expandBtn.addEventListener('click', () => {
            if(event.hide == true) {
                let test = event.count;
                let find = projectArray.findIndex((e) => e.count == test);
                projectArray[find].hide = false;
                console.log(projectArray);
                renderProjects();
            } else {
                let test = event.count;
                let find = projectArray.findIndex((e) => e.count == test);
                projectArray[find].hide = true;
                renderProjects();
            }
        })
        boxOne.appendChild(expandBtn);

        let title = document.createElement('div');
        title.textContent = event.name;
        title.classList.add('eventTitle');
        title.style = "font-size: 15px;"
        boxOne.appendChild(title);

        eventRow.appendChild(boxOne);

        let boxTwo = document.createElement('div');
        boxTwo.style = 'display:flex; width: 25%; justify-content: start; gap: 1rem; height: 32px;'

        let durationBox = document.createElement('div');
        durationBox.classList.add('durationBox');

        let durationLabel = document.createElement('div');

        if(event.type == 'Active') {
            durationLabel.textContent = "Productivity:"    
        } else if(event.type == 'Passive') {
            durationLabel.textContent = "Weeks Remaining:"
        } else if(event.type == "Indefinite") {
            durationLabel.textContent = "Ongoing"
        }

        durationBox.appendChild(durationLabel);

        if(event.type == 'Active' || event.type == "Passive") {
            let durationVal = document.createElement('div');
            durationVal.textContent = event.duration;
            durationBox.appendChild(durationVal);
        }

        boxTwo.appendChild(durationBox);
        eventRow.appendChild(boxTwo);

        let boxThree = document.createElement('div');
        boxThree.style = 'display:flex; width: 25%; justify-content: start; gap: 1rem; height: 32px;'

        if(event.type == 'Active') { 
            let workerBox = document.createElement('div');
            workerBox.classList.add('workerBox');

            let removeWorkerBtn = document.createElement('button');
            removeWorkerBtn.classList.add('changeWorkerBtn');
            removeWorkerBtn.textContent = '-';
            workerBox.appendChild(removeWorkerBtn);

            let workerValue = document.createElement('div');
            workerValue.textContent = event.workers;
            workerValue.classList.add('workerValue');
            workerBox.appendChild(workerValue);

            let addWorkerBtn = document.createElement('button');
            addWorkerBtn.classList.add('changeWorkerBtn');
            addWorkerBtn.textContent = '+';
            workerBox.appendChild(addWorkerBtn);

            boxThree.appendChild(workerBox);
        } else {
            
        }

        

        if(event.type == 'Indefinite' && event.hasLink == false) {
            let linkFix = document.createElement('button');
            linkFix.style = "font-size: 12px; margin-left: 10%;"
            linkFix.textContent = "Link Fix Action";
            boxThree.appendChild(linkFix);
        }

        eventRow.appendChild(boxThree);

        let boxFour = document.createElement('div');
        boxFour.style = 'display:flex; width: 25%; justify-content: space-between; gap: 1rem; height: 32px;'

        let impactBox = document.createElement('div');
        impactBox.classList.add('eventImpactBox');
        for(let i = 0; i < event.impactItems.length; i++) {
            let impactRow = document.createElement('div');
            impactRow.style = "display: flex; align-items: center; gap: 4px;"

            let num = document.createElement('div');
            num.textContent = event.impactVals[i];
            impactRow.appendChild(num);

            let item = document.createElement('div');
            item.textContent = event.impactItems[i];
            impactRow.appendChild(item);

            impactBox.appendChild(impactRow);
        }
    

        boxFour.appendChild(impactBox);

        let endBtn = document.createElement('button');
        endBtn.classList.add('endBtn')
        endBtn.textContent = 'X';
        endBtn.addEventListener('click', () => {
            let place = event.count;
            let index = projectArray.findIndex((e) => e.count == place);
            projectArray.splice(index,1);
            renderProjects();
        })
        boxFour.appendChild(endBtn);

        eventRow.appendChild(boxFour);

        let descriptionBox = document.createElement('div');
        descriptionBox.id = `desc${event.count}`;
        descriptionBox.style = 'width: 200%; height: 10rem; max-height: 20rem;';
        if(event.hide == true) {
            descriptionBox.classList.add('hidden','descBox');
        }

        let descriptionLabel = document.createElement('div'); 
        descriptionLabel.textContent = 'Event Description';
        descriptionLabel.style = 'display: flex; justify-content: center; align-items: center; font-size: 15px;';
        descriptionBox.appendChild(descriptionLabel);

        let details = document.createElement('textarea');
        details.value = event.details;
        details.style = 'overflow-y: scroll; resize: none; font-size: 15px; width: 98%; height: 80%'
        details.addEventListener('change', () => {
            event.details = details.value;
        });
        descriptionBox.appendChild(details);
        eventRow.appendChild(descriptionBox);


        wrapper.appendChild(eventRow);

        
    });
}
