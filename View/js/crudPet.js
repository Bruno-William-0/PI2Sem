function cadastrarPet() {
    const pet = {
        name: document.getElementsByName('nomePet')[0].value,
        speec: document.getElementsByName('especie')[0].value,
        birth: document.getElementsByName('dataPet')[0].value,
        breed: document.getElementsByName('raca')[0].value,
        hair: document.getElementsByName('pelo')[0].value,
        color: document.getElementsByName('cor')[0].value,
        size: document.getElementsByName('tamanhoPet')[0].value,
        owner: localStorage.getItem('id')
    };

    const paragrafo = document.createElement('p');
    paragrafo.innerText = JSON.stringify(pet);

    document.body.appendChild(paragrafo);

    fetch('https://api-pets.onrender.com/pet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Pet cadastrado com sucesso:', data);
        })
        .catch(error => {
            console.error('Erro ao cadastrar Pet:', error);
        });
}

function listareexcluir() {
    fetch(`https://api-pets.onrender.com/pet/${localStorage.getItem('id')}`)
        .then(response => response.json())
        .then(pets => {
            const tabela = document.createElement('table');
            tabela.classList.add('table');

            const cabecalho = tabela.createTHead();
            const linhaCabecalho = cabecalho.insertRow();

            // Cria as células do cabeçalho
            const colunaNome = linhaCabecalho.insertCell();
            colunaNome.innerText = 'Nome';

            const colunaEspecie = linhaCabecalho.insertCell();
            colunaEspecie.innerText = 'Espécie';

            const colunaNascimento = linhaCabecalho.insertCell();
            colunaNascimento.innerText = 'Data de nascimento';

            const colunaRaca = linhaCabecalho.insertCell();
            colunaRaca.innerText = 'Raça';

            const colunaPelo = linhaCabecalho.insertCell();
            colunaPelo.innerText = 'Tipo de pelo';

            const colunaCor = linhaCabecalho.insertCell();
            colunaCor.innerText = 'Cor';

            const colunaTamanho = linhaCabecalho.insertCell();
            colunaTamanho.innerText = 'Tamanho';

            const corpoTabela = tabela.createTBody();

            // Preenche a tabela com os pets
            pets.forEach(pet => {
                const linha = corpoTabela.insertRow();

                // Insere os dados do pet nas células da linha
                const colunaNome = linha.insertCell();
                colunaNome.innerText = pet.nome;

                const colunaEspecie = linha.insertCell();
                colunaEspecie.innerText = pet.especie;

                const colunaNascimento = linha.insertCell();
                colunaNascimento.innerText = pet.nascimento;

                const colunaRaca = linha.insertCell();
                colunaRaca.innerText = pet.raca;

                const colunaPelo = linha.insertCell();
                colunaPelo.innerText = pet.pelo;

                const colunaCor = linha.insertCell();
                colunaCor.innerText = pet.cor;

                const colunaTamanho = linha.insertCell();
                colunaTamanho.innerText = pet.tamanho;

                const colunaAcoes = linha.insertCell();

                // Cria o botão de exclusão
                const botaoExcluir = document.createElement('button');
                botaoExcluir.classList.add('delete-button');
                botaoExcluir.addEventListener('click', () => {
                    fetch(`https://api-pets.onrender.com/pet/${pet.id}`, {
                        method: 'DELETE'
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log('Pet excluído com sucesso:', data);
                            // Atualiza a tabela após a exclusão
                            tabela.remove();
                            listareexcluir(); // Chama a função novamente para atualizar a tabela
                        })
                        .catch(error => {
                            console.error('Erro ao excluir funcionário:', error);
                        });
                });

                colunaAcoes.appendChild(botaoExcluir);
            });

            document.body.appendChild(tabela);
        })
        .catch(error => {
            console.error('Erro ao obter a lista de pets:', error);
        });
}
