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
    lista.innerHTML += `<p>${precoFinal}</p>`
}