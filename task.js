const button = document.querySelector('#burger')
console.log(button);
const menu = document.querySelector('#menu')
console.log(menu);

button.addEventListener('click', () => {
    if(menu.classList.contains('disp') == true) {
        menu.classList.remove('disp')
    } else {
        menu.classList.add('disp')
    }
})
