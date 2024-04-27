let adddoc = document.getElementById('ink');
let addname = document.getElementById('namefold');
let addfolder = document.querySelector('.folder');

adddoc.addEventListener('click', function () {
    var paragraf = document.createElement('p');
    paragraf.classList.add('phiki');
    paragraf.innerHTML = addname.value;
    addfolder.appendChild(paragraf);
    addname.value = "";
    paragraf.addEventListener('click', function () {
        paragraf.style.textDecoration = 'line-through';
    });
    paragraf.addEventListener('dblclick', function () {
        addfolder.removeChild(paragraf)
    });
})