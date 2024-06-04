// import { products } from "./products"

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

    // <!-- 5 task -->

    // <!-- 6 task -->

    const products = [
        {
          "id": 1,
          "title": "iPhone 9",
          "description": "An apple mobile which is nothing like apple",
          "price": 549,
          "discountPercentage": 12.96,
          "rating": 4.69,
          "stock": 94,
          "brand": "Apple",
          "category": "smartphones",
          "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
          "images": [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
          ]
        },
        {
          "id": 2,
          "title": "iPhone X",
          "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
          "price": 899,
          "discountPercentage": 17.94,
          "rating": 4.44,
          "stock": 34,
          "brand": "Apple",
          "category": "smartphones",
          "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
          "images": [
            "https://cdn.dummyjson.com/product-images/2/1.jpg",
            "https://cdn.dummyjson.com/product-images/2/2.jpg",
            "https://cdn.dummyjson.com/product-images/2/3.jpg",
            "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
          ]
        },
        {
          "id": 3,
          "title": "Samsung Universe 9",
          "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
          "price": 1249,
          "discountPercentage": 15.46,
          "rating": 4.09,
          "stock": 36,
          "brand": "Samsung",
          "category": "smartphones",
          "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
          "images": [
            "https://cdn.dummyjson.com/product-images/3/1.jpg"
          ]
        },
        {
          "id": 4,
          "title": "OPPOF19",
          "description": "OPPO F19 is officially announced on April 2021.",
          "price": 280,
          "discountPercentage": 17.91,
          "rating": 4.3,
          "stock": 123,
          "brand": "OPPO",
          "category": "smartphones",
          "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
          "images": [
            "https://cdn.dummyjson.com/product-images/4/1.jpg",
            "https://cdn.dummyjson.com/product-images/4/2.jpg",
            "https://cdn.dummyjson.com/product-images/4/3.jpg",
            "https://cdn.dummyjson.com/product-images/4/4.jpg",
            "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
          ]
        },
        {
          "id": 5,
          "title": "Huawei P30",
          "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
          "price": 499,
          "discountPercentage": 10.58,
          "rating": 4.09,
          "stock": 32,
          "brand": "Huawei",
          "category": "smartphones",
          "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
          "images": [
            "https://cdn.dummyjson.com/product-images/5/1.jpg",
            "https://cdn.dummyjson.com/product-images/5/2.jpg",
            "https://cdn.dummyjson.com/product-images/5/3.jpg"
          ]
        },
        {
          "id": 6,
          "title": "MacBook Pro",
          "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
          "price": 1749,
          "discountPercentage": 11.02,
          "rating": 4.57,
          "stock": 83,
          "brand": "Apple",
          "category": "laptops",
          "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
          "images": [
            "https://cdn.dummyjson.com/product-images/6/1.png",
            "https://cdn.dummyjson.com/product-images/6/2.jpg",
            "https://cdn.dummyjson.com/product-images/6/3.png",
            "https://cdn.dummyjson.com/product-images/6/4.jpg"
          ]
        },
        {
          "id": 7,
          "title": "Samsung Galaxy Book",
          "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
          "price": 1499,
          "discountPercentage": 4.15,
          "rating": 4.25,
          "stock": 50,
          "brand": "Samsung",
          "category": "laptops",
          "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
          "images": [
            "https://cdn.dummyjson.com/product-images/7/1.jpg",
            "https://cdn.dummyjson.com/product-images/7/2.jpg",
            "https://cdn.dummyjson.com/product-images/7/3.jpg",
            "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
          ]
        },
        {
          "id": 8,
          "title": "Microsoft Surface Laptop 4",
          "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
          "price": 1499,
          "discountPercentage": 10.23,
          "rating": 4.43,
          "stock": 68,
          "brand": "Microsoft Surface",
          "category": "laptops",
          "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
          "images": [
            "https://cdn.dummyjson.com/product-images/8/1.jpg",
            "https://cdn.dummyjson.com/product-images/8/2.jpg",
            "https://cdn.dummyjson.com/product-images/8/3.jpg",
            "https://cdn.dummyjson.com/product-images/8/4.jpg",
            "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
          ]
        },
        {
          "id": 9,
          "title": "Infinix INBOOK",
          "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
          "price": 1099,
          "discountPercentage": 11.83,
          "rating": 4.54,
          "stock": 96,
          "brand": "Infinix",
          "category": "laptops",
          "thumbnail": "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
          "images": [
            "https://cdn.dummyjson.com/product-images/9/1.jpg",
            "https://cdn.dummyjson.com/product-images/9/2.png",
            "https://cdn.dummyjson.com/product-images/9/3.png",
            "https://cdn.dummyjson.com/product-images/9/4.jpg",
            "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg"
          ]
        },
        {
          "id": 10,
          "title": "HP Pavilion 15-DK1056WM",
          "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
          "price": 1099,
          "discountPercentage": 6.18,
          "rating": 4.43,
          "stock": 89,
          "brand": "HP Pavilion",
          "category": "laptops",
          "thumbnail": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
          "images": [
            "https://cdn.dummyjson.com/product-images/10/1.jpg",
            "https://cdn.dummyjson.com/product-images/10/2.jpg",
            "https://cdn.dummyjson.com/product-images/10/3.jpg",
            "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg"
          ]
        }
    ]

    const elements = {
        form: document.querySelector('.js-search-form'),
        container: document.querySelector('.js-list')
    }
        
elements.form.addEventListener('submit', (e) => {
e.preventDefault()
const value = e.target.elements.query.value
const type = e.target.elements.options.value
const filterProductsArr = products.filter((product) => {
    // return product[type].includes(value)
    if(type === 'brand'){
        return product.brand.toLowerCase().includes(value.toLowerCase())
    } else {
        return product.title.toLowerCase().includes(value.toLowerCase())
    }
})
renderProducts(filterProductsArr)
})


function productTemplate (product) {
    return `
    <li class="item-product pro">
        <p><b>Name: ${product.title} ${product.brand}</b></p>
        <p> Price: ${product.price}</p>
        <p> Rating: ${product.rating}</p>
        <p> Category: ${product.category}</p>
        <img src="${product.thumbnail}" alt="" width="350" height="200">
    </li>
    `
}
   
function renderProducts (products) {
    const  markup = products.map(productTemplate).join('')
    elements.container.innerHTML = markup
}

// <!-- 6 task --> 

// <!-- 7 task -->

const backdrop = document.querySelector('.backdrop')
const btnmodal = document.querySelector('.btn-modal')
const container = document.querySelector('.container')
const modal = document.querySelector('.modal')
const close = document.querySelector('.js-close')
const closeX = document.querySelector('.div-close')



container.addEventListener('click', (e) => {
  if(e.target.nodeName !== 'BUTTON') return
showmodal()
})


backdrop.addEventListener('click', (e) => {
  if(e.target === e.currentTarget)
  hidemodal()
})

modal.addEventListener('click', (e)=> {
e.stopPropagation()
})

function showmodal (e) {
backdrop.classList.add('show-modal')
document.addEventListener('keydown', onCloseModalEsc)
}

function hidemodal () {
backdrop.classList.remove('show-modal')
document.removeEventListener('keydown', onCloseModalEsc)
}

function onCloseModalEsc (e) {
  if(e.code === 'Escape'){
    hidemodal()
  }
}

close.addEventListener('click', () => {
  backdrop.classList.remove('show-modal')
})

closeX.addEventListener('click', () => {
backdrop.classList.remove('show-modal')
})

// <!-- 7 task -->

// <!-- 8 task -->


const productsList = document.querySelector('.products-list');

function productTemplate(item) {
    return `
        <li class="product-item" data-title="${item.title}" data-rating="${item.rating}" data-category="${item.category}" data-price="${item.price}" data-thumbnail="${item.thumbnail}">
            <img src="${item.thumbnail}" alt="" width="300" height="300">
            <h2>${item.title}</h2>
            <h3>rating: ${item.rating}</h3>
            <h4>category: ${item.category}</h4>
            <p><b>price: ${item.price}</b></p>
        </li>
    `;
}

function productListTemplate(products) {
    const markup = products.map(productTemplate).join('');
    return markup;
}

function render() {
    const markup = productListTemplate(products);
    productsList.innerHTML = markup;
}

render();

productsList.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) return;

    const liElem = e.target.closest('li');

    const item = {
        title: liElem.dataset.title,
        rating: liElem.dataset.rating,
        category: liElem.dataset.category,
        price: liElem.dataset.price,
        thumbnail: liElem.dataset.thumbnail
    };

    const instance = basicLightbox.create(
      `
        <div class="modal">
            <img src="${item.thumbnail}" alt="" width="300" height="300">
            <h2>${item.title}</h2>
            <h3>rating: ${item.rating}</h3>
            <h4>category: ${item.category}</h4>
            <p><b>price: ${item.price}</b></p>
            <button>Close</button>
        </div>
    `,
      {
        onShow: (instance) => {
          const escListener = (e) => ModalEsc(e, instance);
          window.addEventListener('keydown', escListener);
          instance.element().querySelector("button").onclick = instance.close;
          instance.escListener = escListener;
        },
        onClose: (instance) => {
          // instance.element().querySelector('a').onclick = instance.close
        },
      },

    );

    function ModalEsc(e, instance) {
      if (e.code === 'Escape') {
          instance.close();
      }
  }

    instance.show();
});

// <!-- 8 task -->

// <!-- 9 Local storage task -->

function saveToLS(key = 'empty', value = '') {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    const result = JSON.parse(data);
    return result;
  } catch {
    return data;
  }
}

const STORAGE_KEY = 'feedback-msg';
const formLS = document.querySelector('.form-ls');
const textareaLS = document.querySelector('.textarea-ls');

formLS.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = loadFromLS(STORAGE_KEY) || {};
  formLS.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(data);
});


formLS.addEventListener('input', () => {
  const userName = formLS.elements.name.value;
  const userMessage = formLS.elements.message.value;

  const data = {
    name: userName,
    message: userMessage
  };
  saveToLS(STORAGE_KEY, data);
});

function restoreData() {
  const data = loadFromLS(STORAGE_KEY) || {};

  formLS.elements.name.value = data.name || "Anonymus";
  formLS.elements.message.value = data.message || "";
}

restoreData()

// Вызов функции восстановления данных при загрузке страницы
// document.addEventListener('DOMContentLoaded', restoreData);

// <!-- 9 task -->

// <!-- 11 task -->

// const id = setInterval(() => {
//   console.log('Hello word');
// }, 1000)

// setTimeout(() => {
//   clearTimeout(id)
// },5000)

const divSet = document.querySelector('.div-set')
// console.log(divSet);

// const id =  setInterval(() => {
//   divSet.classList.toggle('is-visible')
// },1000)

// setTimeout(() => {
//   clearInterval(id)
// },7000)

// ======================================

function showDiv () {
  divSet.classList.add('is-visible')
}

function hideDiv () {
  divSet.classList.remove('is-visible')
}

setTimeout(showDiv, 1000)
setTimeout(hideDiv,5000)

/* <!-- 11 task --> */

/* <!-- 12 task --> */

const starBtn = document.querySelector('.start-btn')
const container1 = document.querySelector('.main-container')
const resultEl =document.querySelector('.result')

function createPromise(delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const isActive = Math.random() > 0.5;
      if (isActive) {
        resolve("😄");
      } else {
        reject("😡");
      }
    }, delay);
  });
  return promise
}

starBtn.addEventListener('click', onStartBtnClick) 

function onStartBtnClick() {
  const promises = [];
  const COUNT = 3;
  for (let i = 0; i < COUNT; i++) {
    container1.children[i].textContent = ''
    const promise = createPromise((i + 1) * 100);
    promises.push(promise)
    promise
      .then((smile) => {
        container1.children[i].textContent = smile;
      })
      .catch((smile) => {
        container1.children[i].textContent = smile;
      });
  }

  Promise.allSettled(promises).then(result => {
    result = result.map(el => {
      return el.reason || el.value
    })
    // console.log(result);
    const isWin = result.every(el => el === "😄")
    
    if(isWin){
      resultEl.textContent = '😄 You win 😄'
    } else {
      resultEl.textContent = '😡 You loss 😡'
    }
  } )
}

/* <!-- 12 task --> */

/* <!-- 13 task --> */

 let switchMode = document.getElementById("switchMode");

 switchMode.addEventListener("click", darkModel);

 function darkModel() {
   let dark = document.getElementById("theme");
   if (dark.getAttribute("href") == "./css/style.css") {
     dark.href = "./css/dark-mode.css";
   } else {
     dark.href = "./css/style.css";
   }
 }

//  =====================
 darkCheck = document.getElementById('darkCheck')
 darkCheck.addEventListener('change', darkModel)

 /* <!-- 13 task --> */

 /* <!-- 14 task --> */

 const goToBtn = document.querySelector('.go-top');
 document.addEventListener('scroll', trackScroll);
 
 goToBtn.addEventListener('click', goTop);
 
 function goTop() {
   if (window.pageYOffset > 0) {
     window.scrollBy(0, -75); // Уменьшили шаг скролла для более плавного эффекта
     setTimeout(goTop, 10); // Уменьшили интервал времени для медленного скролла
   }
 }
 
 function trackScroll() {
   const offset = window.pageYOffset;
   const coords = document.documentElement.clientHeight;
   if (offset > coords) {
     goToBtn.classList.add('go-top-show');
   } else {
     goToBtn.classList.remove('go-top-show');
   }
 }

 /* <!-- 14 task --> */

 /* <!-- 15 task --> */

 new Swiper('.swiper', {
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true, 
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
    // type: 'fraction' ,
    // type: 'progressbar',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  },

  mousewheel: {
    sensitivity: 1,
  },


  slidesPerView: 3,








  
 })
