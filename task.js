// <!-- 1 task -->

const button = document.querySelector('.btn')

const menu = document.querySelector('.second-div')


// button.addEventListener('click', () => {
//     if(menu.classList.contains('disp') == true) {
//             menu.classList.remove('disp')
//     } else {
//         menu.classList.add('disp')
//     }
// })

button.addEventListener('click', () => {
    menu.classList.toggle('disp')
} )

// <!-- 1 task -->


// <!-- 2 task -->

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

    // <!-- 2 task -->