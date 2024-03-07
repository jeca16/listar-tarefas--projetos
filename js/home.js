'use strict'

let filtro = 0;
const idPerfil = localStorage.getItem('idusuario')
if (!idPerfil) {
    window.location.href = '../login.html'
}

const novaTarefa = document.getElementById('novaTarefa')
const botaoAbrirNovaTarefa = document.getElementById('botaoAbrirNovaTarefa')
const editarTarefa = document.getElementById('editarTarefa')
const botaoAbrirEdicao = document.getElementById('botaoAbrirEdicao')
const fecharNovaTarefa = document.getElementById('botaoFecharNovaTarefa')
const fecharedicao = document.getElementById('botaoFecharEdicao')
const message = document.getElementById('menssage')
const listarTarefas = document. getElementById('tarefa')




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

async function edicao (idTarefa){
    const titulo = document.getElementById('tituloEditTarefa')
    const descricao = document.getElementById('descricaoEditDaTarefa')
    const data = document.getElementById('dataEditTarefa')

    const tarefas = await validarTarefas()
    for(let cont = 0;cont<tarefas.length;cont++){
        if(idTarefa===tarefas[cont].id){
            titulo.value = tarefas[cont].titulo
            descricao.value = tarefas[cont].descricao
            let dataAtual = tarefas[cont].data
            data.value = dataAtual
            console.log(dataAtual)
        }
    }

    editarTarefa.style.visibility = 'visible'

    const editButton = document.getElementById('finalizar')
    editButton.addEventListener('click', () => editarTarefa(idTarefa))

}

fecharNovaTarefa.addEventListener('click',   fecharPainelNovaTarefa)
function fecharPainelNovaTarefa() {
    novaTarefa.style.visibility = "hidden"
}

fecharedicao.addEventListener('click',   fecharPainelEdicao)
function fecharPainelEdicao() {
    editarTarefa.style.visibility = "hidden"
}


botaoAbrirNovaTarefa.addEventListener('click', () => {
    const novaTarefa = document.getElementById('novaTarefa');
    novaTarefa.style.visibility = "visible";
})

botaoAbrirEdicao.addEventListener('click', () => {
    const editarTarefa = document.getElementById('editarTarefa');
    editarTarefa.style.visibility = "visible";
})
