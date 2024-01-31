import './style.css'
import { refreshPage, renderAll } from "./pageRenders";
import { checkStorage, setStorage } from "./storage";
import { weekLog } from './weekLog';


///localStorage.clear()
checkStorage();
refreshPage();

window.addEventListener('beforeunload', setStorage)

let reset = document.createElement('button');
reset.textContent = 'Reset Settlement';
reset.style = 'position: absolute; top: 0; left: calc(50%); border-radius: 1rem; background-color: red; color: white'
reset.addEventListener('click', () => {
    let answer = confirm('Clicking this button resets the settlement to default. Are you sure you want to do this? It cannot be reversed.')
    if(answer == true) {
       let answer2 = confirm("You're serious, yeah? IT CANNOT BE REVERSED AND PUTS EVERYTHING BACK TO BASIC LEVEL 3")
       if(answer2 == true) {
        window.removeEventListener('beforeunload',setStorage)
        localStorage.clear();
        refreshPage();
        location.reload();
       }
    }
})

let body = document.querySelector('body');
body.appendChild(reset);