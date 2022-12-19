let clique = 0;
let precoFinal = 0;
function adicionarPedido() {
    let produto = document.querySelector('select').value;
    let lista = document.querySelector('section#pedidos');
    console.log(produto);
    

    if(produto != false) {
        clique++;
    }

    if(produto === 'Pão Francês') {
        lista.innerHTML += `<span class="item">${produto}</span> <span>R$2,50</span>`
        lista.innerHTML += `<hr>`
        precoFinal = precoFinal + 2.5;
    }
    
    else if(produto === 'Waffle') {
        lista.innerHTML += `<span class="item">${produto}</span> <span>R$4,00</span>`
        lista.innerHTML += `<hr>`
        precoFinal = precoFinal + 4.00;
    }

    else if(produto === 'Pão de Aveia') {
        lista.innerHTML += `<span class="item">${produto}</span> <span>R$3,00</span>`
        lista.innerHTML += `<hr>`
        precoFinal = precoFinal + 3.00;
    }

    else if(produto === 'Rosquinha') {
        lista.innerHTML += `<span class="item">${produto}</span> <span>R$3,00</span>`
        lista.innerHTML += `<hr>`
        precoFinal = precoFinal + 3.00;
    }

    else if(produto === 'Café') {
        lista.innerHTML += `<span class="item">${produto}</span> <span>R$4,00</span>`
        lista.innerHTML += `<hr>`
        precoFinal = precoFinal + 4.00;
    }

    else if(produto === 'Café Capuccinno') {
        lista.innerHTML += `<span class="item">${produto}</span> <span>R$5,00</span>`
        lista.innerHTML += `<hr>`
        precoFinal = precoFinal + 5.00;
    }

    else if(produto === 'Café Gelado') {
        lista.innerHTML += `<span class="item">${produto}</span> <span>R$4,50</span>`
        lista.innerHTML += `<hr>`
        precoFinal = precoFinal + 4.50;
    }

    

    console.log(precoFinal);
    console.log(clique);
    /*lista.innerHTML += `<p>${precoFinal}</p>`*/
}

function total() {
    let precoTotal = document.querySelector('section#precoFinal');
    precoTotal.innerHTML = ``
    precoTotal.innerHTML += `<span id="oTotal" class="item">Total: </span> <span>R$${precoFinal.toFixed(2).replace('.', ',')}</span>`
    precoTotal.innerHTML += `<hr>`


    if(precoFinal > 99.99) {
        let item = document.querySelector('span#oTotal');
        item.removeAttribute('id');
        item.setAttribute('id', 'item03');
    }

    else if(precoFinal > 9.99) {
        let item = document.querySelector('span#oTotal');
        item.removeAttribute('id');
        item.setAttribute('id', 'item02');
    }
}