let network = new Map();

network.set("me", ["bob", "claire", "alice"]);
network.set("bob", ["anuj", "peggy"]);
network.set("claire", ["tom", "jonnhy"]);
network.set("alice", ["peggy"]);

const ehVendedor = (nome) => nome.charAt(nome.length - 1) == 'm';

function procuraVendedor(pessoa) {

    let fila = network.get(pessoa) || [];
    let listaVerificados = new Set();
    
    while(fila.length) {

        const contato = fila.shift();
        
        if(listaVerificados.has(contato)) continue;
        listaVerificados.add(contato);

        if(ehVendedor(contato)) {
            console.log(`A pessoa ${contato} é um vendedor`);
            return true;
        }

        const vizinhos = network.get(contato) || [];
        fila.push(...vizinhos);
    }

    console.log(`Nenhum contato da rede é de um vendedor`);
    return false;
}

procuraVendedor("me");