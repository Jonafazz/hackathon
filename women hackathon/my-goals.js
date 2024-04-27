let addbutton = document.getElementById('addToDo');
let addField = document.getElementById('inputField');
let addContainer = document.getElementById('to-do-container');

addbutton.addEventListener('click', function () {
    var paragraf = document.createElement('p');
    paragraf.classList.add('p');
    paragraf.innerHTML = addField.value;
    addContainer.appendChild(paragraf);
    addField.value = "";
    paragraf.addEventListener('click', function () {
        paragraf.style.textDecoration = 'line-through';
    });
    paragraf.addEventListener('dblclick', function () {
        addContainer.removeChild(paragraf)
    });
})
