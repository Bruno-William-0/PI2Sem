    function cadastrarFuncionario() {
        const funcionario = {
        name: document.getElementsByName('nomef')[0].value,
        birth: document.getElementsByName('dataf')[0].value,
        phone: document.getElementsByName('telf')[0].value,
        email: document.getElementsByName('emailf')[0].value,
        employerfunction: document.getElementsByName('funcaof')[0].value
        };
    
        const paragrafo = document.createElement('p');
        paragrafo.innerText = JSON.stringify(funcionario);  
    
        document.body.appendChild(paragrafo);
    
        fetch('https://api-pets.onrender.com/employer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(funcionario)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Funcionário cadastrado com sucesso:', data);
        })
        .catch(error => {
            console.error('Erro ao cadastrar funcionário:', error);
        });
    }

    function listareexcluir() {
        fetch('https://api-pets.onrender.com/employer')
          .then(response => response.json())
          .then(funcionarios => {
            const tabela = document.createElement('table');
            tabela.classList.add('table');
      
            const cabecalho = tabela.createTHead();
            const linhaCabecalho = cabecalho.insertRow();
      
            // Cria as células do cabeçalho
            const colunaId = linhaCabecalho.insertCell();
            colunaId.innerText = 'ID';
      
            const colunaNome = linhaCabecalho.insertCell();
            colunaNome.innerText = 'Nome';
      
            const colunaNascimento = linhaCabecalho.insertCell();
            colunaNascimento.innerText = 'Nascimento';
      
            const colunaTelefone = linhaCabecalho.insertCell();
            colunaTelefone.innerText = 'Telefone';
      
            const colunaEmail = linhaCabecalho.insertCell();
            colunaEmail.innerText = 'E-mail';
      
            const colunaFuncao = linhaCabecalho.insertCell();
            colunaFuncao.innerText = 'Função';
      
            const colunaAcoes = linhaCabecalho.insertCell();
            colunaAcoes.innerText = 'Ações';
      
            const corpoTabela = tabela.createTBody();
      
            // Preenche a tabela com os funcionários
            funcionarios.forEach(funcionario => {
              const linha = corpoTabela.insertRow();
      
              // Insere os dados do funcionário nas células da linha
              const colunaId = linha.insertCell();
              colunaId.innerText = funcionario.id;
      
              const colunaNome = linha.insertCell();
              colunaNome.innerText = funcionario.nome;
      
              const colunaNascimento = linha.insertCell();
              colunaNascimento.innerText = funcionario.nascimento;
      
              const colunaTelefone = linha.insertCell();
              colunaTelefone.innerText = funcionario.telefone;
      
              const colunaEmail = linha.insertCell();
              colunaEmail.innerText = funcionario.email;
      
              const colunaFuncao = linha.insertCell();
              colunaFuncao.innerText = funcionario.funcao;
      
              const colunaAcoes = linha.insertCell();
      
              // Cria o botão de exclusão
              const botaoExcluir = document.createElement('button');
              botaoExcluir.classList.add('delete-button');
              botaoExcluir.addEventListener('click', () => {
                fetch(`https://api-pets.onrender.com/employer/${funcionario.id}`, {
                  method: 'DELETE'
                })
                  .then(response => response.json())
                  .then(data => {
                    console.log('Funcionário excluído com sucesso:', data);
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
            console.error('Erro ao obter a lista de funcionários:', error);
          });
      }
      