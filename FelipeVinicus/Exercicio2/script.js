let nextId = 1;
const corpoTabela = document.getElementById('corpoTabela');

function criarLinha(nome, estoque) {
    const tr = document.createElement('tr');
    
    const tdId = document.createElement('td');
    tdId.innerText = nextId;
    
    const tdNome = document.createElement('td');
    tdNome.innerText = nome;
    
    const tdEstoque = document.createElement('td');
    tdEstoque.id = 'estoque-' + nextId; 
    tdEstoque.innerText = estoque;
    
    tr.appendChild(tdId);
    tr.appendChild(tdNome);
    tr.appendChild(tdEstoque);
    
    corpoTabela.appendChild(tr);
    
    nextId++;
}

window.onload = function() {
    criarLinha('Arroz 6kg', 10);
    criarLinha('Café 1kg', 50);
    criarLinha('Leite integral 1L', 25);
}

document.getElementById('btnSalvar').addEventListener('click', function() {
    const inputNome = document.getElementById('nomeProduto');
    const inputEstoque = document.getElementById('estoqueProduto');
    
    const nome = inputNome.value;
    const estoque = parseInt(inputEstoque.value);

    if (nome !== "" && !isNaN(estoque)) {
        criarLinha(nome, estoque);
        
        inputNome.value = "";
        inputEstoque.value = "";
    } else {
        alert("Por favor, preencha o nome e um valor numérico para o estoque.");
    }
});

document.getElementById('btnConfirmar').addEventListener('click', function() {
    const inputId = document.getElementById('idAcao');
    const inputQtd = document.getElementById('qtdAcao');
    const isAdicionar = document.getElementById('radioAdicionar').checked;
    
    const id = inputId.value;
    const qtd = parseInt(inputQtd.value);

    if (id !== "" && !isNaN(qtd)) {
        const celulaEstoque = document.getElementById('estoque-' + id);
        
        if (celulaEstoque) {
            let estoqueAtual = parseInt(celulaEstoque.innerText);
            
            if (isAdicionar) {
                estoqueAtual += qtd;
            } else {
                estoqueAtual -= qtd;
            }
            
            celulaEstoque.innerText = estoqueAtual;
            
            inputId.value = "";
            inputQtd.value = "";
        } else {
            alert("Produto com o ID informado não foi encontrado.");
        }
    } else {
        alert("Por favor, preencha o ID e uma quantidade numérica válida.");
    }
});