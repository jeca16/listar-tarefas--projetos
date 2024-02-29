'use strict'

let filtro = 0;
const idPerfil = localStorage.getItem('idusuario')
if (!idPerfil) {
    window.location.href = '../login.html'
}

const novaTarefa = document.getElementById('novaTarefa')
const botaoAbrirNovaTarefa = document.getElementById('botaoAbrirNovaTarefa')
const editarTarefa = document.getElementById('editarTarefa')
const filtroButton = document.getElementById('filtroButton')
const fecharNovaTarefa = document.getElementById('botaoFecharNovaTarefa')
const fecharedicao = document.getElementById('botaoFecharEdicao')
const message = document.getElementById('menssage')
const listarTarefas = document. getElementById('tarefa')


filtroButton.addEventListener('click',filtrar) 
function filtrar(){
    filtro++
    if(filtro==5){
        filtro=0
    }
    atualizarPagina()
    console.log(filtro)
}


async function cadastroTarefa(){

    const titulo = document.getElementById('tituloNovaTarefa').value
    const descricao = document.getElementById('descricaoDaTarefa').value
    const data = document.querySelector('#dataTarefa').value


    let [ano] = data.split("-");


    if (titulo == "" || ano > 9999) {
    } else {
        try {
            const novaTarefa = {
                titulo: titulo,
                descricao: descricao,
                data: data,
                idUsuario: idPerfil
            }


            await fetch('http://localhost:5080/tarefas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novaTarefa)
            })
            fecharPainel()
        } catch (error) {
            console.log(error)
        }
    }
}

fecharNovaTarefa.addEventListener('click',   fecharPainelNovaTarefa)
function fecharPainelNovaTarefa() {
    novaTarefa.style.visibility = "hidden"
}


botaoAbrirNovaTarefa.addEventListener('click', () => {
    const novaTarefa = document.getElementById('novaTarefa');
    novaTarefa.style.visibility = "visible";
})
