const dropdown = document.querySelector('.dropdown');
const droptoggle = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');
const nextbutton = document.querySelector('.next-button');
const options = document.querySelectorAll('.dropdown-option');
const button = document.querySelector('.next-button');

console.log(button);

droptoggle.addEventListener('click' , () => {
    menu.classList.toggle('show');
});

droptoggle.addEventListener('blur' , () => {
    menu.classList.remove('show');
});

options.forEach(function(item){
        item.addEventListener('click', (e) => {
            const value = e.currentTarget.textContent.trim();
            droptoggle.textContent = value;
            droptoggle.classList.add('selected');
            button.removeAttribute('disabled');
        })
});

//when item click, the selected option must be shown in the menu.

// When option selected then, next-button is allowed. 
// function optionselect () {
//     option
//     droptoggle.classList.add('selected');
//     button.classList.remove('disabled');
// }

// optionselect();