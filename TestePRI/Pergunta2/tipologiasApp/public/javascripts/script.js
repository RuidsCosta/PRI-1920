
const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ'


function verTipologias(sigla){
    axios.get('http://clav-api.dglab.gov.pt/api/tipologias/tip_'+sigla+'?apikey='+ apikey)
        .then(response => window.location.assign('/lista-tipologias/'+ sigla))
        .catch(error => console.log(error))
}


function verEntidades(sigla){
    axios.get('http://clav-api.dglab.gov.pt/api/tipologias/tip_'+sigla+'/elementos?apikey='+ apikey)
        .then(response => window.location.assign('/lista-tipologias/'+ sigla))
        .catch(error => console.log(error))
}

function verProcsDona(sigla){
    axios.get('http://clav-api.dglab.gov.pt/api/tipologias/tip_'+sigla+'/intervencao/dono?apikey='+ apikey)
        .then(response => window.location.assign('/lista-tipologias/'+ sigla))
        .catch(error => console.log(error))
}

function verProcsPar(sigla){
    axios.get('http://clav-api.dglab.gov.pt/api/tipologias/tip_'+sigla+'/intervencao/participante?apikey='+ apikey)
        .then(response => window.location.assign('/lista-tipologias/'+ sigla))
        .catch(error => console.log(error))
}