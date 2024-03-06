'use strict'

async function cadastrarUsuario() {
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document . getElementById ('senha').value
    const confirmarSenha = document.getElementById('confirmarSenha').value

    if (nome == '' || email == '' || senha == '' || confirmarSenha == '') {
        alert('preencha os campos devidamente!')

    }else{
        if (confirmarSenha != senha) {
            alert('As senhas informadas não são iguais')
        }else{
            try {
                const novoUsuario = {
                    nome: nome,
                    email: email,
                    senha: senha
                }
                await fetch('http://localhost:5080/usuario', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(novoUsuario)
                })
                window.location.href = '../login.html'
            } catch (error) {
                console.log(error)
            }
        }
    }
}