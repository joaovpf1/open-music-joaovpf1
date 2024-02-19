/* Desenvolva sua lógica aqui ... */


const inputValue = ()=>{
    const price = document.querySelector('label');
    const inputPrice = document.querySelector('#price')

    inputPrice.addEventListener('input', (event)=>{
        price.textContent = "Até R$"+ event.target.value +",00";
        
    })
}

inputValue()

const darkMode = ()=>{
    const bttnDarkMode = document.querySelector('.dark-theme__img');
    const container = document.querySelector('html');
    const localStoragePreference = JSON.parse(localStorage.getItem('darkMode'));

    if(localStoragePreference){
        bttnDarkMode.src = './src/assets/img/sun.svg';
        bttnDarkMode.alt = "Sol";
        container.classList.add('dark-mode');
    }else{
        bttnDarkMode.src = './src/assets/img/moon.svg';
        bttnDarkMode.alt = "Lua";
        container.classList.remove('dark-mode');
    }
    
    bttnDarkMode.addEventListener('click', ()=>{
        container.classList.toggle('dark-mode');

        if(container.classList.contains('dark-mode')){
            bttnDarkMode.src = './src/assets/img/sun.svg';
            bttnDarkMode.alt = "Lua";
            localStorage.setItem('darkMode', true);
        } else{
            bttnDarkMode.src = './src/assets/img/moon.svg';
            bttnDarkMode.alt = "Sol";
            localStorage.setItem('darkMode', false)
        }
    })
}

darkMode()
