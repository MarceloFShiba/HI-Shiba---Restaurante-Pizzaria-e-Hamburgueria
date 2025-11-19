document.addEventListener("DOMContentLoaded", () => {
 // seletores do modal 
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalProduto = document.getElementById("modal-produto");
const modalDescricao = document.getElementById("modal-descricao");
const modalTamanhos = document.getElementById("modal-tamanhos");
const modalPrecoFinal = document.getElementById("modal-preco-final");
const modalQty = document.getElementById("modal-qty");
const decreaseBtn = document.getElementById("decrease-qty");
const increaseBtn = document.getElementById("increase-qty");
const addToCartBtn = document.getElementById("add-to-cart-btn");

//produtos
const produtos = [
  { id:'m1', 
    nome:'Marmitex Tradicional', 
    descricao:'Arroz, feijão, bife acebolado, batata frita e legumes.', 
    image:'/assets/marmitex1.jpg', 
    precos:{ P:20.00, M:22.00, G:25.00 } 
},
  { id:'m2', 
    nome:'Marmitex Frango', 
    descricao:'Arroz, feijão, frango grelhado, batata frita e lugumes e farofa.', 
    image:'/assets/marmitex2.jpg', 
    precos:{ P:19.00, M:21.00, G:24.00 } 
},
  { id:'m3', 
    nome:'Marmitex Lombo', 
    descricao:'Arroz, feijão, lombo grelhado, batata frita, lugumes e farofa', 
    image:'/assets/marmitex3.jpg',
    precos:{ P:19.00, M:21.00, G:24.00 } 
    },

  { id:'m4', 
    nome:'Marmitex Vegetariana', 
    descricao:'Arroz integral, feijão, legumes grelhados.', 
    image:'/assets/marmitex4.jpg', 
    precos:{ P:20.00, M:22.00, G:25.00 } 
},
  { id:'m5', 
    nome:'Marmitex Picanha', 
    descricao:'Arroz, feijão, batata frita e Picanha.', 
    image:'/assets/marmitex5.jpg', 
    precos:{ P:30.00, M:35.00, G:40.00 } 
},
  { id:'m6', 
    nome:'Marmitex File de Peixe', 
    descricao:'rroz, Feijao, farofa, batata Frita, File de peixe grelhado.', 
    image:'/assets/marmitex6.jpg', 
    precos:{ P:18.00, M:20.00, G:22.00 } 
},
  { id:'m7', 
    nome:'Marmitex Salada', 
    descricao:'tomate. alface, beterraba e cenoura.', 
    image:'/assets/marmitex7.jpg', 
    precos:{ P:8.00, M:10.00 } 
},
  { id:'h1', 
    nome:'Hamburguer Tradicional', 
    descricao:'Hamburguer 180g, Pao de fermentação natural, queijo prato e maionese da casa', 
    image:'/assets/hamburguer1.jpg', 
    precos:{ M:24.00, G:30.00 } 
},
  { id:'h2', 
    nome:'Hamburguer Tradicional', 
    descricao:'Hamburguer 180g, Pao de fermentação natural, bacon fatiado, queijo prato e maionese da casa', 
    image:'/assets/hamburguer2.jpg', precos:{ M:25.00, G:31.00 } 
},
  { id:'h3', 
    nome:'Hamburguer Duplo', 
    descricao:'2 Hamburguer 180g, Pao de fermentação natural, queijo prato e maionese da casa', 
    image:'/assets/hamburguer3.jpg', 
    precos:{ M:32.00, G:38.00 } 
},
  { id:'h4', 
    nome:'Hamburguer x-salada', 
    descricao:'Hamburguer 180g, Pao de fermentação natural, tomate, alface, queijo prato e maionese da casa', 
    image:'/assets/hamburguer4.jpg', 
    precos:{ M:26.00, G:28.00 } 
},
  { id:'h5', 
    nome:'Hamburguer x-salada bacon', 
    descricao:'Hamburguer 180g, Pao de fermentação natural, bacon, tomate, alface e queijo prato', 
    image:'/assets/hamburguer5.jpg', 
    precos:{ M:28.00, G:34.00 } 
},
  { id:'h6', 
    nome:'Hamburguer cheddar', 
    descricao:'Hamburguer 180g, Pao de fermentação natural, bacon e queijo cheddar cremoso', 
    image:'/assets/hamburguer6.jpg', 
    precos:{ M:28.00, G:34.00 } 
},
  { id:'h7', 
    nome:'Hamburguer Smash Cheddar', 
    descricao:'Hamburguer 90g prensados, Pao de fermentação natural, bacon e queijo cheddar fatiado', 
    image:'/assets/hamburguer7.jpg', 
    precos:{ M:28.00, G:34.00 } 
},
  { id:'h8', 
    nome:'Hamburguer vulcao', 
    descricao:'2 Hamburguer 90g prensados, Pao de fermentação natural, bacon e queijo cheddar cremoso em dobro', 
    image:'/assets/hamburguer8.jpg', 
    precos:{ M:34.00, G:40.00 } 
},
  { id:'h9', 
    nome:'Hamburguer Matatata Fome', 
    descricao:'3 Hamburguer 180g, Pao de fermentação natural, alface, tomate, bacon e queijo cheddar cremoso em dobro', 
    image:'/assets/hamburguer9.jpg', 
    precos:{ M:48.00, G:54.00 } 
},
  { id:'p1', 
    nome:'Pizza Tradicional', 
    descricao:'Molho de tomate, queijo prato e Oregano', 
    image:'/assets/pizza1.jpg', 
    precos:{ M:35.00, G:45.00 } 
},
  { id:'p2', 
    nome:'Pizza Calabresa', 
    descricao:'Molho de tomate, queijo prato, Calabresa, Requeijao e Oregano', 
    image:'/assets/pizza2.jpg', 
    precos:{ M:40.00, G:50.00 } 
},
  { id:'p3', 
    nome:'Pizza 4 Queijos', 
    descricao:'Molho de tomate, queijo prato, parmesão, muçarela, gorgonzola', 
    image:'/assets/pizza3.jpg', 
    precos:{ M:40.00, G:50.00 } 
},
  { id:'p4', 
    nome:'Pizza Frango com Catupiry', 
    descricao:'Molho de tomate, queijo prato, frango desfiado, catupiry e Oregano', 
    image:'/assets/pizza4.jpg', 
    precos:{ M:40.00, G:50.00 } 

},
  { id:'p5', 
    nome:'Pizza de Atum', 
    descricao:'Molho de tomate, queijo prato, Atum, Cebola e Oregano', 
    image:'/assets/pizza5.jpg', 
    precos:{ M:40.00, G:50.00 } 
},
  { id:'p6', 
    nome:'Pizza Estrangonoff', 
    descricao:'Molho de tomate, queijo prato, Estrangonoff, Batata Palha e Oregano', 
    image:'/assets/pizza6.jpg', 
    precos:{ M:45.00, G:55.00 } 
},
  { id:'b1', 
    nome:'Coca Lata', 
    descricao:'Refrigerante coca cola 350ml', 
    image:'/assets/bebida1.jpg', 
    precos:{ U:5.00 } 
},
  { id:'b2', 
    nome:'guarana Lata', 
    descricao:'Refrigerante guarana 350ml', 
    image:'/assets/bebida2.jpg', 
    precos:{ U:4.50 } 
},
  { id:'b3', 
    nome:'Fanta Lata', 
    descricao:'Refrigerante fanta 350ml', 
    image:'/assets/bebida3.jpg', 
    precos:{ U:4.50 } 
}
];

// variável para armazenar preço selecionado (número)
let precoSelecionado = 0;

// função utilitária para formatar preço BR
function formatBR(value) {
  return 'R$ ' + Number(value).toFixed(2).replace('.', ',');
}

// evento: abrir modal ao clicar em um card
document.querySelectorAll(".open-modal").forEach(card => {
  card.addEventListener("click", () => {
    const index = card.dataset.index;
    const produto = produtos[index];

    if (!produto) {
      console.error("Produto não encontrado para id:", index);
      return;
    }

    // preencher modal com os dados 
    modalImage.src = produto.image;
    modalProduto.textContent = produto.nome;
    modalDescricao.textContent = produto.descricao;

    // montar as opções de tamanho com o preço junto 
    modalTamanhos.innerHTML = Object.entries(produto.precos).map(([tamanho, preco]) => {
      const label = tamanho === 'P' ? 'Pequena' : tamanho === 'M' ? 'Média' : tamanho === 'G' ? 'Grande' : 'Unidade';
      return `
        <div class="hover:bg-gray-200 p-2 rounded-md mb-2">
          <label class="flex items-center justify-between gap-4 cursor-pointer">
            <input type="radio" name="tamanho" data-preco="${preco}" value="${tamanho}">
            <span class="flex-1">${label}</span>
            <span class="text-gray-700 font-semibold">R$ ${Number(preco).toFixed(2).replace('.', ',')}</span>
          </label>
        </div>
      `;
    }).join('');

    // reset quantidade e preço
    modalQty.value = 1;
    precoSelecionado = 0;
    modalPrecoFinal.textContent = formatBR(0);

    // abrir modal
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
  });
});
// evento: mudar preço ao selecionar tamanho
modalTamanhos.addEventListener('change', (e) => {
  const radio = e.target;
  if (radio && radio.name === 'tamanho') {
    precoSelecionado = Number(radio.dataset.preco) || 0;
    const qty = Number(modalQty.value) || 1;
    modalPrecoFinal.textContent = formatBR(precoSelecionado * qty);
  }
});

// controles de quantidade
increaseBtn.addEventListener('click', () => {
  modalQty.value = Number(modalQty.value) + 1;
  const qty = Number(modalQty.value);
  modalPrecoFinal.textContent = formatBR(precoSelecionado * qty);
});

decreaseBtn.addEventListener('click', () => {
  if (Number(modalQty.value) > 1) {
    modalQty.value = Number(modalQty.value) - 1;
    const qty = Number(modalQty.value);
    modalPrecoFinal.textContent = formatBR(precoSelecionado * qty);
  }
});

// adicionar ao carrinho 
addToCartBtn.addEventListener('click', () => {
  // garante que escolheu um tamanho
  const escolhido = modalTamanhos.querySelector('input[name="tamanho"]:checked');
  if (!escolhido) {
    alert('Escolha um tamanho antes de adicionar ao carrinho.');
    return;
  }

  const tamanho = escolhido.value;
  const precoUnit = Number(escolhido.dataset.preco);
  const quantidade = Number(modalQty.value);

  const produto = {
    id: produtoIdFromModal(), 
    nome: modalProduto.textContent,
    tamanho,
    precoUnit,
    quantidade,
    subtotal: precoUnit * quantidade
  };

  console.log('Adicionar ao carrinho:', produto);
  alert(`${produto.quantidade}x ${produto.nome} (${produto.tamanho}) adicionados — ${formatBR(produto.subtotal)}`);


  // fechar modal (preciso adicionar o botao fechar no HTML)
  modal.classList.add('hidden');
});

// fechar modal clicando fora do conteúdo
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden')
    modal.style.display = 'none ';
});

// função para obter o id do produto a partir do nome exibido no modal
function produtoIdFromModal() {
  const nome = modalProduto.textContent;
  const prod = produtos.find(p => p.nome === nome);
  return prod ? prod.id : null;
}

})
