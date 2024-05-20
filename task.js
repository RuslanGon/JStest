// <!-- 1 task -->

const button = document.querySelector('.btn')
console.log(button);
const menu = document.querySelector('.second-div')
console.log(menu);

button.addEventListener('click', () => {
    if(menu.classList.contains('disp') == true) {
        menu.classList.remove('disp')
    } else {
        menu.classList.add('disp')
    }
})

// <!-- 1 task -->
