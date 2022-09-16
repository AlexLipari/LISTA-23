let nomes = []
let senhas = []
let continuar = true

do {
    let operacao = operacaoSolicitada()
    switch (operacao) {
        case "1":
            dadosUsuario()
            break;
        case "2":

            let nomeLogin = prompt("qual o nome do login?")
            let senhaLogin = prompt("Qual a senha do login?")
            if (validarLogin(nomeLogin, senhaLogin)) {
                console.log("Login feito com sucesso!")
                console.log("Bem vindo", nomeLogin)
            } else {
                console.log("Nome ou senha incorretos")
            }
            break;
        case "3":
            let nomeExcluir = prompt("Qual o nome do cadastro que deseja excluir?")
            ExcluirDoCadastro(nomeExcluir)
            break;
        case "4":
            continuar = false
            break;
        default:
            console.log("Invalido, tente novamente!")
    }
} while (continuar)

function dadosUsuario() {
    nomes.push(prompt("Digite um nome!"))
    senhas.push(prompt("digite uma senha!"))
    console.log(nomes, senhas)
}

function operacaoSolicitada() {
    return prompt("qual operação deseja fazer? (1) Cadastro (2) Login (3) Excluir (4) Encerrar")
}

function validarLogin(nomeParametro, senhaParametro) {
    let login = false
    nomes.forEach((nome, index) => {
        if (nomeParametro == nome && senhaParametro == senhas[index]) {
            login = true

        }

    })

    return login
}

function ExcluirDoCadastro(nomeParametro) {
    let nomesAux = nomes.filter(n => n != nomeParametro)
    let senhasAux = senhas.filter((s, index) => {
        if (nomes[index] != nomeParametro) {
            return s
        }
    })
    nomes = nomesAux
    senhas = senhasAux
}

