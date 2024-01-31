import { renderWeeks } from "./weekLog";

function renderNotes() {
    let wrapper = document.querySelector('#contentArea'); 
    wrapper.innerHTML = '';

    let header = document.createElement('div');
    header.classList.add('subHeader');
    header.textContent = "Notes";

    wrapper.appendChild(header);

    let notes = document.createElement('textarea');
    notes.style = ' overflow-y: scroll; font-family: "monospace";'
    notes.placeholder = "Start writing some notes..."
    notes.value = userNotes;
    notes.addEventListener('change', () => {
        userNotes = notes.value;
    })

    wrapper.appendChild(notes);

    notes.scrollTop = 9999999;

    console.log(userNotes);

}

let userNotes = '';

function setNotes(data) {
    userNotes = data;
}

export { renderNotes, userNotes, setNotes }