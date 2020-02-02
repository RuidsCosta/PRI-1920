var http = require('http')
var pug = require('pug')
var fs = require('fs')

var myserver = http.createServer(function(req ,res) {
    console.log(req.method + ' ' + req.url)

    if(req.method == 'GET'){
        var listUrl = req.url.split('/')
        var nMusc = listUrl[listUrl.length - 1] //da a musica pedida
        
        switch(req.url){
        
            case '/musica/arq2html.xsl':
                fs.readFile('arq2html.xsl', (erro, dados) => {
                    if(!erro){
                        res.writeHead(200, {'Content-Type': 'text/xsl'})
                        res.write(dados)
                    }
                    else{
                        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'})
                        res.write('Erro na leitura do ficheiro arq2html.xsl...')
                    }
                    res.end()
                })
                break;
            case '/musica/' + nMusc : 
                fs.readFile('data/doc' + nMusc + '.xml', (erro, dados) => {
                    console.log('data/doc' + nMusc );
                    if(!erro){
                        res.writeHead(200);
                        res.write(dados);
                    }
                    else{
                        console.log("Ficheiro nao existente..." + nMusc)
                        fs.readFile('paginaErro.html',(ehtml,dhtml) => {
                            if(ehtml) throw ehtml;

                                res.writeHead(200, {'Content-Type': 'text/html'});
                                res.write(dhtml);  
                                res.end();
                        })
                        return
                    }
                    res.end()
                })
                break;

            default:

                res.writeHead(404);
                res.write('Erro : metodo na suportado [ ' + req.method + ' ]');
                res.end();

                break;
        }
    }
    else{
        res.writeHead(404);
        res.write('Metodo na suportado!');
        res.end();
    }



    
})

myserver.listen(3000)
console.log("servidor a escuta na porta 3000...")