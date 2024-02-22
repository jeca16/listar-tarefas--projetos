'use strict'

let filtro = 0;
const idPerfil = localStorage.getItem('idusuario')
if (!idPerfil) {
    window.location.href = '../login.html'
}

const NovaTarefa = document.getElementById('novaTarefa')

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
    const inputs = document.querySelectorAll('#categoriaTarefa input[type="radio"]')

    let categoria = '';
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            categoria = inputs[i].value;
            break;
        }
    }

    let [ano] = data.split("-");


    if (titulo == "" || ano > 9999) {
    } else {
        try {
            const novaTarefa = {
                titulo: titulo,
                descricao: descricao,
                data: data,
                categoria: categoria,
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