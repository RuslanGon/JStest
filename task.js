// <!-- 1 task -->

const button = document.querySelector('.btn')

const menu = document.querySelector('.second-div')


button.addEventListener('click', () => {
    if(menu.classList.contains('disp') == true) {
        menu.classList.remove('disp')
    } else {
        menu.classList.add('disp')
    }
})

// <!-- 1 task -->


// <!-- 2 task -->

// const link = document.querySelectorAll('.link')
// const item = document.querySelectorAll('.item')
// const list1 = document.querySelectorAll('.list1')

// document.addEventListener('click', () => {
// if(item.classList.contains('ower') == true) {
//     list1.classList.remove('ower')
// } else {
//     list1.classList.add('ower')
// }
// })


document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const submenu = item.querySelector('.list1');
            if (submenu) {
                submenu.classList.add('show');
            }
        });

        item.addEventListener('mouseleave', () => {
            const submenu = item.querySelector('.list1');
            if (submenu) {
                submenu.classList.remove('show');
            }
        });
    });