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

    // <!-- 3 task -->
    
    const divs = document.querySelectorAll('.one > div');

    // Добавляем обработчик события для каждого div
    divs.forEach(div => {
        div.addEventListener('click', function() {
            // Скрываем текущий div
            div.style.display = 'none';
            setTimeout(() => {
                div.style.display = 'block';
            }, 1000);

        });
    });

    // <!-- 3 task -->

    // <!-- 5 task -->

    const form = document.querySelector('.js-form')

    form.addEventListener('submit', onFormSubmit)

    function onFormSubmit(event) {
      event.preventDefault();
      const email = form.elements.email.value;
      const name = form.elements.name.value;
      const textera = form.elements.comment.value;

      const userData = {
        email, name, textera
      }
      form.reset()
      console.log(userData);
    }


   