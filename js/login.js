const button = document.getElementById('login');

async function validarLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    let logado = false

    try {
        const users = await fetch('http://localhost:5080/usuario')
        const listUsers = await users.json()
        listUsers.forEach((user) => {
            if (email === user.email && senha === user.senha) {
                logado = true
                localStorage.setItem("idusuario", user.id)
                window.location.href = '../pages/home.html'
            }
            console.log(user.email)
            console.log(user.senha)
            console.log(user.id)
        })

        if (!logado) {
            alert('login inválido')
        }
    } catch (error) {
        console.log(error)
    }

}

