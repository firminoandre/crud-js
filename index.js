var veiculos, index;


//criando função para cadastro 
function cadCarros(chassi, nome, categoria, ano){
    //pegando tabela que ta dentro do html
    veiculos = document.getElementById("tbCarros");
    //verificando quantas linhas tem a tabela pra servir de ID
    var qntsLinhas = veiculos.rows.length;
    //inserir uma linha após a ultima linha
    var linha = veiculos.insertRow(qntsLinhas);

    //inserir as colunas da tabela
    var colID = linha.insertCell(0);
    var colChassi = linha.insertCell(1);
    var colNome = linha.insertCell(2);
    var colCategoria = linha.insertCell(3);
    var colAno = linha.insertCell(4);
    
    if(document.getElementById("chassi").value == ''){
        alert("Preencha o campo do chassi")
    }
    if(document.getElementById("nome").value == ''){
        alert("Preencha o campo do nome")
    }
    if(document.getElementById("categoria").value == ''){
        alert("Preencha a categoria")
    }
    if(document.getElementById("ano").value == ''){
        alert("Preencha o campo do ano")
    }
    //inserindo campos do formulario na coluna
    
    colID.innerHTML = qntsLinhas;
    colChassi.innerHTML = chassi;
    colNome.innerHTML = nome;
    colCategoria.innerHTML = categoria;
    colAno.innerHTML = ano;
    
    preencheInput();   
    limparForm(); 
}



// função para limpar formulário após cadastro
function limparForm(){
    document.getElementById("id").value = '';
    document.getElementById("chassi").value = '';
    document.getElementById("nome").value = '';
    document.getElementById("categoria").value = '';
    document.getElementById("ano").value = '';
}

function alterar(chassi, nome, categoria, ano){
    //atribuir valores desses parametros para as linhas da tabela do HTML

    veiculos.rows[index].cells[1].innerHTML = chassi;
    veiculos.rows[index].cells[2].innerHTML = nome;
    veiculos.rows[index].cells[3].innerHTML = categoria;
    veiculos.rows[index].cells[4].innerHTML = ano;
}


// função para editar valores da tabela
function preencheInput(){
    for(var i = 0; i < veiculos.rows.length; i++){
        // ao clicar na linha
        veiculos.rows[i].onclick = function(){
            index = this.rowIndex;
            document.getElementById("id").value = veiculos.rows[index].cells[0].innerText;
            document.getElementById("chassi").value = veiculos.rows[index].cells[1].innerText;
            document.getElementById("nome").value = veiculos.rows[index].cells[2].innerText;
            document.getElementById("categoria").value = veiculos.rows[index].cells[3].innerText;
            document.getElementById("ano").value = veiculos.rows[index].cells[4].innerText;
            mostrarBotao();
        }
    }
}


function deletar(){
    for(var i = 0; i < veiculos.rows.length; i++){
        if(index == i){
            veiculos.deleteRow(index);
            limparForm();
            return;
        }

    }
}


function mostrarBotao(){
	document.getElementById("btnExcluir").style.display = '';
	document.getElementById("btnSalvar").style.display = '';
}
