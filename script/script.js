function menu() {
    let menu = document.querySelector(['menu']);
    
    if(menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}

function tamanho() {
    let menu = document.querySelector(['menu']);

    if(window.innerWidth >= 768) {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
}

function horas() {
    let texto = document.querySelector('.horas');
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();

    if(horas < 10) {
        horas = '0' + horas
    }

    if(minutos < 10) {
        minutos = '0' + minutos;
    }

    /*console.log(`Bom dia! ${horas}:${minutos}`);*/

    if(horas >= 6 && horas < 12) {
        texto.innerHTML = `Bom dia! ${horas}:${minutos} <span class="material-icons">light_mode</span>`
    }

    else if(horas >= 12 && horas < 18) {
        texto.innerHTML = `Boa tarde! ${horas}:${minutos} <span class="material-icons">light_mode</span>`
    }

    else {
        texto.innerHTML = `Boa noite! ${horas}:${minutos} <span class="material-icons">nights_stay</span>`
    }
}