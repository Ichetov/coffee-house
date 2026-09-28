
const loadMoreBtn = document.querySelector('.menu__load-more');

const grid = document.querySelector('.menu__grid');

loadMoreBtn.addEventListener('click', () => {
  grid.classList.add('menu__grid--expanded');

  loadMoreBtn.classList.add(
    'menu__load-more--hidden'
  );
});




const data = {
  coffee: [
    {
      title: 'Irish coffee',
      price: '7.00',
      imgLink: './image/coffee-1.jpg',
      description:
        'Fragrant black coffee with Jameson Irish whiskey and whipped milk',

      sizes: {
        s: { name: '200 ml', addPrice: 0 },
        m: { name: '300 ml', addPrice: 0.5 },
        l: { name: '400 ml', addPrice: 1 },
      },

      additives: [
        { name: 'Sugar', addPrice: 0.5 },
        { name: 'Cinnamon', addPrice: 0.5 },
        { name: 'Syrup', addPrice: 0.5 },
      ],
    },

    {
      title: 'Kahlua coffee',
      price: '7.00',
      imgLink: './image/coffee-2.jpg',
      description:
        'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',

      sizes: {
        s: { name: '200 ml', addPrice: 0 },
        m: { name: '300 ml', addPrice: 0.5 },
        l: { name: '400 ml', addPrice: 1 },
      },

      additives: [
        { name: 'Sugar', addPrice: 0.5 },
        { name: 'Cinnamon', addPrice: 0.5 },
        { name: 'Syrup', addPrice: 0.5 },
      ],
    },

    {
      title: 'Honey raf',
      price: '5.50',
      imgLink: './image/coffee-3.jpg',
      description:
        'Espresso with frothed milk, cream and aromatic honey',

      sizes: {
        s: { name: '200 ml', addPrice: 0 },
        m: { name: '300 ml', addPrice: 0.5 },
        l: { name: '400 ml', addPrice: 1 },
      },

      additives: [
        { name: 'Sugar', addPrice: 0.5 },
        { name: 'Cinnamon', addPrice: 0.5 },
        { name: 'Syrup', addPrice: 0.5 },
      ],
    },

    {
      title: 'Ice cappuccino',
      price: '5.00',
      imgLink: './image/coffee-4.jpg',
      description:
        'Cappuccino with soft thick foam in summer version with ice',

      sizes: {
        s: { name: '200 ml', addPrice: 0 },
        m: { name: '300 ml', addPrice: 0.5 },
        l: { name: '400 ml', addPrice: 1 },
      },

      additives: [
        { name: 'Sugar', addPrice: 0.5 },
        { name: 'Cinnamon', addPrice: 0.5 },
        { name: 'Syrup', addPrice: 0.5 },
      ],
    },

    {
      title: 'Espresso',
      price: '4.50',
      imgLink: './image/coffee-5.jpg',
      description: 'Classic black coffee',

      sizes: {
        s: { name: '200 ml', addPrice: 0 },
        m: { name: '300 ml', addPrice: 0.5 },
        l: { name: '400 ml', addPrice: 1 },
      },

      additives: [
        { name: 'Sugar', addPrice: 0.5 },
        { name: 'Cinnamon', addPrice: 0.5 },
        { name: 'Syrup', addPrice: 0.5 },
      ],
    },

    {
      title: 'Latte',
      price: '5.50',
      imgLink: './image/coffee-6.jpg',
      description:
        'Espresso coffee with the addition of steamed milk and dense milk foam',

      sizes: {
        s: { name: '200 ml', addPrice: 0 },
        m: { name: '300 ml', addPrice: 0.5 },
        l: { name: '400 ml', addPrice: 1 },
      },

      additives: [
        { name: 'Sugar', addPrice: 0.5 },
        { name: 'Cinnamon', addPrice: 0.5 },
        { name: 'Syrup', addPrice: 0.5 },
      ],
    },

    {
      title: 'Latte macchiato',
      price: '5.50',
      imgLink: './image/coffee-7.jpg',
      description:
        'Espresso with frothed milk and chocolate',

      sizes: {
        s: { name: '200 ml', addPrice: 0 },
        m: { name: '300 ml', addPrice: 0.5 },
        l: { name: '400 ml', addPrice: 1 },
      },

      additives: [
        { name: 'Sugar', addPrice: 0.5 },
        { name: 'Cinnamon', addPrice: 0.5 },
        { name: 'Syrup', addPrice: 0.5 },
      ],
    },

    {
      title: 'Coffee with cognac',
      price: '6.50',
      imgLink: './image/coffee-8.jpg',
      description:
        'Fragrant black coffee with cognac and whipped cream',

      sizes: {
        s: { name: '200 ml', addPrice: 0 },
        m: { name: '300 ml', addPrice: 0.5 },
        l: { name: '400 ml', addPrice: 1 },
      },

      additives: [
        { name: 'Sugar', addPrice: 0.5 },
        { name: 'Cinnamon', addPrice: 0.5 },
        { name: 'Syrup', addPrice: 0.5 },
      ],
    },
  ],

  tea: [
    {
      title: 'Moroccan',
      price: '4.50',
      imgLink: './image/tea-1.png',
      description:
        'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',

      sizes: {
        s: { name: '200 ml', addPrice: 0 },
        m: { name: '300 ml', addPrice: 0.5 },
        l: { name: '400 ml', addPrice: 1 },
      },

      additives: [
        { name: 'Sugar', addPrice: 0.5 },
        { name: 'Lemon', addPrice: 0.5 },
        { name: 'Syrup', addPrice: 0.5 },
      ],
    },

    {
      title: 'Ginger',
      price: '5.00',
      imgLink: './image/tea-2.png',
      description:
        'Original black tea with fresh ginger, lemon and honey',

      sizes: {
        s: { name: '200 ml', addPrice: 0 },
        m: { name: '300 ml', addPrice: 0.5 },
        l: { name: '400 ml', addPrice: 1 },
      },

      additives: [
        { name: 'Sugar', addPrice: 0.5 },
        { name: 'Lemon', addPrice: 0.5 },
        { name: 'Syrup', addPrice: 0.5 },
      ],
    },

    {
      title: 'Cranberry',
      price: '5.00',
      imgLink: './image/tea-3.png',
      description:
        'Invigorating black tea with cranberry and honey',

      sizes: {
        s: { name: '200 ml', addPrice: 0 },
        m: { name: '300 ml', addPrice: 0.5 },
        l: { name: '400 ml', addPrice: 1 },
      },

      additives: [
        { name: 'Sugar', addPrice: 0.5 },
        { name: 'Lemon', addPrice: 0.5 },
        { name: 'Syrup', addPrice: 0.5 },
      ],
    },

    {
      title: 'Sea buckthorn',
      price: '5.50',
      imgLink: './image/tea-4.png',
      description:
        'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon',

      sizes: {
        s: { name: '200 ml', addPrice: 0 },
        m: { name: '300 ml', addPrice: 0.5 },
        l: { name: '400 ml', addPrice: 1 },
      },

      additives: [
        { name: 'Sugar', addPrice: 0.5 },
        { name: 'Lemon', addPrice: 0.5 },
        { name: 'Syrup', addPrice: 0.5 },
      ],
    },
  ],

  dessert: [
    {
      title: 'Marble cheesecake',
      price: '3.50',
      imgLink: './image/dessert-1.png',
      description:
        'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',

      sizes: {
        s: { name: '50 g', addPrice: 0 },
        m: { name: '100 g', addPrice: 0.5 },
        l: { name: '200 g', addPrice: 1 },
      },

      additives: [
        { name: 'Berries', addPrice: 0.5 },
        { name: 'Nuts', addPrice: 0.5 },
        { name: 'Jam', addPrice: 0.5 },
      ],
    },

    {
      title: 'Red velvet',
      price: '4.00',
      imgLink: './image/dessert-2.png',
      description:
        'Layer cake with cream cheese frosting',

      sizes: {
        s: { name: '50 g', addPrice: 0 },
        m: { name: '100 g', addPrice: 0.5 },
        l: { name: '200 g', addPrice: 1 },
      },

      additives: [
        { name: 'Berries', addPrice: 0.5 },
        { name: 'Nuts', addPrice: 0.5 },
        { name: 'Jam', addPrice: 0.5 },
      ],
    },

    {
      title: 'Cheesecakes',
      price: '4.50',
      imgLink: './image/dessert-3.png',
      description:
        'Cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',

      sizes: {
        s: { name: '50 g', addPrice: 0 },
        m: { name: '100 g', addPrice: 0.5 },
        l: { name: '200 g', addPrice: 1 },
      },

      additives: [
        { name: 'Berries', addPrice: 0.5 },
        { name: 'Nuts', addPrice: 0.5 },
        { name: 'Jam', addPrice: 0.5 },
      ],
    },

    {
      title: 'Creme brulee',
      price: '4.00',
      imgLink: './image/dessert-4.png',
      description:
        'Delicate creamy dessert in a caramel basket with wild berries',

      sizes: {
        s: { name: '50 g', addPrice: 0 },
        m: { name: '100 g', addPrice: 0.5 },
        l: { name: '200 g', addPrice: 1 },
      },

      additives: [
        { name: 'Berries', addPrice: 0.5 },
        { name: 'Nuts', addPrice: 0.5 },
        { name: 'Jam', addPrice: 0.5 },
      ],
    },

    {
      title: 'Pancakes',
      price: '4.50',
      imgLink: './image/dessert-5.png',
      description:
        'Tender pancakes with strawberry jam and fresh strawberries',

      sizes: {
        s: { name: '50 g', addPrice: 0 },
        m: { name: '100 g', addPrice: 0.5 },
        l: { name: '200 g', addPrice: 1 },
      },

      additives: [
        { name: 'Berries', addPrice: 0.5 },
        { name: 'Nuts', addPrice: 0.5 },
        { name: 'Jam', addPrice: 0.5 },
      ],
    },

    {
      title: 'Honey cake',
      price: '4.50',
      imgLink: './image/dessert-6.png',
      description:
        'Classic honey cake with delicate custard',

      sizes: {
        s: { name: '50 g', addPrice: 0 },
        m: { name: '100 g', addPrice: 0.5 },
        l: { name: '200 g', addPrice: 1 },
      },

      additives: [
        { name: 'Berries', addPrice: 0.5 },
        { name: 'Nuts', addPrice: 0.5 },
        { name: 'Jam', addPrice: 0.5 },
      ],
    },

    {
      title: 'Chocolate cake',
      price: '5.50',
      imgLink: './image/dessert-7.png',
      description:
        'Cake with hot chocolate filling and nuts with dried apricots',

      sizes: {
        s: { name: '50 g', addPrice: 0 },
        m: { name: '100 g', addPrice: 0.5 },
        l: { name: '200 g', addPrice: 1 },
      },

      additives: [
        { name: 'Berries', addPrice: 0.5 },
        { name: 'Nuts', addPrice: 0.5 },
        { name: 'Jam', addPrice: 0.5 },
      ],
    },

    {
      title: 'Black forest',
      price: '6.50',
      imgLink: './image/dessert-8.png',
      description:
        'A combination of thin sponge cake with cherry jam and light chocolate mousse',

      sizes: {
        s: { name: '50 g', addPrice: 0 },
        m: { name: '100 g', addPrice: 0.5 },
        l: { name: '200 g', addPrice: 1 },
      },

      additives: [
        { name: 'Berries', addPrice: 0.5 },
        { name: 'Nuts', addPrice: 0.5 },
        { name: 'Jam', addPrice: 0.5 },
      ],
    },
  ],
};

let buttonLoadMore = document.querySelector(".menu__load-more")

let tabs = document.querySelectorAll(".menu__category");

let gridProducts = document.querySelector('.menu__grid')

let currentCategory = 'coffee';

function renderProducts(category){
currentCategory = category
  let ind = 0
   gridProducts.innerHTML = "";
   buttonLoadMore.classList.remove('menu__button-hidden');
  gridProducts.classList.remove('menu__grid--expanded');

  buttonLoadMore.classList.remove(
    'menu__load-more--hidden'
  );
   data[category].forEach((item, index)=>{

       ind++
      gridProducts.innerHTML+=`
  <article class="product-card ${index + 1 > 4 ? "product-card--extra" : ""}" data-index=${index}>
  <button
    class="product-card__button"
    type="button"
    data-product-id="irish-coffee"
  >
    <img
      class="product-card__image"
      src="${item.imgLink}"
      alt="Irish coffee"
    >

    <div class="menu__wrap">
        <p class="product-card__title">
      ${item.title}
    </p>

    <p class="product-card__description">
      ${item.description}
    </p>

    <p class="product-card__price">
       $${item.price}
    </p>
    </div>

    
  </button>
</article>
      `
   })
   if(ind <= 4){
buttonLoadMore.classList.add('menu__button-hidden')
   }

}


tabs.forEach(it=>{
  it.addEventListener('click', ()=>{
    tabs.forEach(it=>{
      it.classList.remove('menu__category--active');
    })
    it.classList.add('menu__category--active')
    const category = it.dataset.category;
      
      renderProducts(category);
  })
})

renderProducts('coffee');



const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal__image');
const modalTitle = document.querySelector('.modal__title');
const modalDescription = document.querySelector('.modal__description');
const modalPrice = document.querySelector('.modal__price');
const modalClose = document.querySelector('.modal__close');
const modalBackdrop = document.querySelector('.modal__backdrop');


gridProducts.addEventListener('click', (event) => {
  const card = event.target.closest('.product-card');
  if (!card) {
    return;
  }
console.log(card)
  const index = Number(card.dataset.index);
  console.log(index)

  const product = data[currentCategory][index];
  console.log(product)
  openModal(product);
});


function openModal(product) {
   currentProduct = product;

  selectedSize = 's';
  selectedAdditives = [];

  modalImage.src = product.imgLink;
  modalImage.alt = product.title;

  modalTitle.textContent = product.title;
  modalDescription.textContent = product.description;

  modal.hidden = false;

  fillModalOptions();
  updateTotal();
}


function closeModal() {
  modal.hidden = true;

  document.body.classList.remove('no-scroll');
  document.documentElement.classList.remove('no-scroll');
}

modalClose.addEventListener(
  'click',
  closeModal
);

modalBackdrop.addEventListener(
  'click',
  closeModal
);

document.addEventListener('keydown', (event) => {
  if (
    event.key === 'Escape' &&
    !modal.hidden
  ) {
    closeModal();
  }
});


let currentProduct = null;
let selectedSize = 's';
let selectedAdditives = [];


function fillModalOptions() {
  const sizeButtons =
    document.querySelectorAll('.modal__sizes .modal__item');

  sizeButtons.forEach((button) => {
    const size = button.dataset.size;

    const text =
      button.querySelector('.modal__text');

    text.textContent =
      currentProduct.sizes[size].name;

    const isActive = size === 's';

    button.classList.toggle(
      'modal__item--active',
      isActive
    );

    button.setAttribute(
      'aria-pressed',
      String(isActive)
    );
  });


  const additiveButtons =
    document.querySelectorAll('.modal__additives .modal__item');

  additiveButtons.forEach((button) => {
    const index =
      Number(button.dataset.additive);

    const text =
      button.querySelector('.modal__text');

    text.textContent =
      currentProduct.additives[index].name;

    button.classList.remove(
      'modal__item--active'
    );

    button.setAttribute(
      'aria-pressed',
      'false'
    );
  });
}

const sizeButtons =
  document.querySelectorAll(
    '.modal__sizes .modal__item'
  );

sizeButtons.forEach((button) => {
  button.addEventListener('click', () => {

    sizeButtons.forEach((item) => {
      item.classList.remove(
        'modal__item--active'
      );

      item.setAttribute(
        'aria-pressed',
        'false'
      );
    });

    button.classList.add(
      'modal__item--active'
    );

    button.setAttribute(
      'aria-pressed',
      'true'
    );

    selectedSize =
      button.dataset.size;

    updateTotal();
  });
});


const additiveButtons =
  document.querySelectorAll(
    '.modal__additives .modal__item'
  );

additiveButtons.forEach((button) => {
  button.addEventListener('click', () => {

    const index =
      Number(button.dataset.additive);

    const isActive =
      button.classList.toggle(
        'modal__item--active'
      );

    button.setAttribute(
      'aria-pressed',
      String(isActive)
    );

    if (isActive) {
      selectedAdditives.push(index);
    } else {
      selectedAdditives =
        selectedAdditives.filter(
          (item) => item !== index
        );
    }

    updateTotal();
  });
});

function updateTotal() {
  let total =
    Number(currentProduct.price);

  total +=
    currentProduct.sizes[
      selectedSize
    ].addPrice;

  selectedAdditives.forEach((index) => {
    total +=
      currentProduct.additives[index]
        .addPrice;
  });

  modalPrice.textContent =
    `$${total.toFixed(2)}`;
}