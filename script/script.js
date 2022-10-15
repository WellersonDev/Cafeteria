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