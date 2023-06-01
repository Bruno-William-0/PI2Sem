

function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  fetch('https://api-pets.onrender.com/client')
    .then(response => response.json())
    .then(data => {
      const clientes = data;

      let loginSucesso = false;

      clientes.forEach(cliente => {
        if (cliente.email === email) {
          if (cliente.senha === senha) {
            // Login bem-sucedido
            const nome = cliente.nome;

            const paragrafo = document.createElement('p');
            paragrafo.innerText = `Nome: ${nome}`;

            document.body.appendChild(paragrafo);

            // Redirecionar para a página de agendamentos
            window.location.href = 'pagina_agendamentos.html';

            loginSucesso = true;

            // Interrompe a iteração do loop
            return;
          } else {
            // Senha incorreta
            console.log('Senha incorreta!');
            return;
          }
        }
      });

      if (!loginSucesso) {
        // Email não encontrado
        console.log('Email não encontrado!');
      }
    })
    .catch(error => {
      console.error('Erro ao realizar o login:', error);
    });
}

function cadastrarUsuario() {
  const usuario = {
    name: document.getElementsByName('nome')[0].value,
    email: document.getElementsByName('cemail')[0].value,
    phone: document.getElementsByName('telefone')[0].value,
    address: document.getElementsByName('endereco')[0].value,
    password: document.getElementsByName('csenha')[0].value
  };

  const paragrafo = document.createElement('p');
  paragrafo.innerText = JSON.stringify(usuario);

  document.body.appendChild(paragrafo);

  fetch('https://api-pets.onrender.com/client', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Cadastro realizado com sucesso:', data);
    })
    .catch(error => {
      console.error('Erro ao cadastrar usuário:', error);
    });
}  