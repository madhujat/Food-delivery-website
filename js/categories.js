const categoriesContainer = document.querySelector('.box-container')

const categoriesDataPromise = fetch('../js/data/db.json')
    .then(response => response.json());

function categoryCardGen(src, alt, name, discount, href) {
    const card =
        `<div class="box">
            <img src=${src} alt=${alt}/>
            <h3>${name}</h3>
            <p>${discount}</p>
            <a href=${href} class="btn">Order Now</a>
        </div>`
    return card;
}

categoriesDataPromise
    .then(data => {
        console.log('data', data.categories)
        data.categories.forEach(element => {
            const { image, name, discount, href } = element;
            categoriesContainer.innerHTML += categoryCardGen(image.src, image.alt, name, discount, href)
        });
    })
    .catch(error => {
        console.error('Error fetching food category data:', error);
    });





