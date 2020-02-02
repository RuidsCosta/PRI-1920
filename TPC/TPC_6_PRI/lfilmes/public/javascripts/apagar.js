function apagarFilme(id){
    console.log("filme a apagar: "+id)
    axios.delete('/filmes/'+id)
        .then(response => window.location.assign('/filmes'))
        .catch(error => console.log(error))
}

function apagarAtor(args){
    var array = args.split('-')
    var id = array[0]
    var ator = array[1]
    console.log("apagar ator: " + ator + "do filme "+ id)
    axios.delete(`/filmes/ator/${id}`,{data:{"cast": ator}})
        .then(response => window.location.assign(`/filmes/${id}`))
        .catch(error => console.log(error))
}

function apagarGenero(args){
    var array = args.split('-')
    var id = array[0]
    var genero = array[1]
    console.log("apagar genero: " + genero + "do filme "+ id)
    axios.delete(`/filmes/genero/${id}`,{data:{"genres": genero}})
        .then(response => window.location.assign(`/filmes/${id}`))
        .catch(error => console.log(error))
}