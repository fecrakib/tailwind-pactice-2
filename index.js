const menuIcon = document.getElementById('menuIcon');
const dropdown = document.getElementById('dropdown');


menuIcon.addEventListener('click', ()=>{
    if(dropdown.classList.contains('hidden'))  dropdown.classList.remove('hidden')
    else dropdown.classList.add('hidden')
})