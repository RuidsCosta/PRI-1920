function apagaItem(ident){
    console.log('Vou apagar o aluno: ' + ident)
    axios.delete('/alunos/' + ident)
        .then(response => window.location.assign('/alunos'))
        .catch(error => console.log(error))
}

function apagaNota(args){
    var array = args.split(',')
    var numero = array[0]
    var nome = array[1]
        console.log('apagarNota(' + nome + ')')
        axios.delete ('/alunos/' + numero + '/notas/' + nome)
        .then(response => window.location.assign('/alunos/' + numero + '/notas'))
        .catch(error => console.log(error)) 
}
