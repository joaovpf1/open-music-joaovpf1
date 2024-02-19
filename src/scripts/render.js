import {categories, products} from './productsData.js'
//buttons Gênero Musical
const makeGenreBttn = (array)=>{
    const bttnsContainer = document.querySelector('.bttns-container')
    array.forEach((element, index) => {
        
        const liBttn = document.createElement('li')
        const bttn = document.createElement('button');

        bttn.id = index;

        liBttn.classList.add('li-bttn')
        bttn.classList.add('bttns-genre')
        bttn.innerText = element;
        liBttn.append(bttn)
        bttnsContainer.append(liBttn)
    })
}
makeGenreBttn(categories);

export const makeAlbumCard = (array)=>{
    const divContainer = document.querySelector('.album-options');
    divContainer.innerText = '';
    
    array.forEach(element =>{
        //element creation
        const albumCard = document.createElement('li');
        const cardImg = document.createElement('img');
        const divDescription = document.createElement('div');
        const autorName = document.createElement('p');
        const debutyear = document.createElement('p');
        const albumName = document.createElement('h2');
        const divBuy = document.createElement('div');
        const priceText = document.createElement('p');
        const buyBttn = document.createElement('button');
        //element class
        albumCard.classList.add('album-card');
        cardImg.classList.add('card-img');
        divDescription.classList.add('div-description');
        autorName.classList.add('autor-name');
        debutyear.classList.add('debut-year');
        albumName.classList.add('album-name');
        divBuy.classList.add('div-buy');
        priceText.classList.add('price-text');
        buyBttn.classList.add('buy-bttn');
        //elements content
        cardImg.src = element.img;
        autorName.innerText = element.band;
        debutyear.innerText = element.year;
        albumName.innerText = element.title;
        priceText.innerHTML = element.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
        buyBttn.innerText = "Comprar"
        //appends
        divDescription.append(autorName, debutyear);
        divBuy.append(priceText, buyBttn);
        albumCard.append(cardImg, divDescription, albumName, divBuy);
        divContainer.appendChild(albumCard);
    })
}

makeAlbumCard(products)