let trocaDeImagem = document.getElementById('img');
const btnTroca = document.getElementById('trocar');
const imagens = ['Guitarra Ibanez.webp', 'Partitura.jpg', 'Clave de sol.jpg'];
let vezes = -1;

btnTroca.addEventListener('click',(event) => {
    event.preventDefault();
    vezes++;
    if(vezes === 3){
        vezes = 0;
    }
    proximaImagem();
});

function proximaImagem() {
        trocaDeImagem.innerHTML = `
    <img src="${imagens[vezes]}" alt="imagem1" >
    `;   
    }
    
