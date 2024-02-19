import { products} from './productsData.js'
import { makeAlbumCard } from './render.js'

let filteredAlbumList = [];

const inputFilter = (album) =>{
    const inputPrice = document.querySelector('#price');
    const rangeFilter = album.filter((product)=>{
        return product.price <= inputPrice.value
    })
    makeAlbumCard(rangeFilter)

    inputPrice.addEventListener('input', () => {
       const rangeFilter = album.filter((product)=>{
        return product.price <= inputPrice.value
       })
       makeAlbumCard(rangeFilter)
       
    })
}


const bttnFilters = (album) => {
    const bttnGenre = document.querySelectorAll('.bttns-genre');
    const bttnAll = document.getElementById('0');
    
    bttnGenre.forEach((element) => {
        element.addEventListener('click', () => {
            filteredAlbumList = "";
    
            let bttnsFilter = album.filter( (product)=> {
                return product.category == Number(element.id);
            })
            inputFilter(bttnsFilter)
        })
        bttnAll.addEventListener('click', ()=>{
            inputFilter(products)
        })
    })
}

inputFilter(products)
bttnFilters(products)