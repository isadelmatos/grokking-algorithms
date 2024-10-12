const estacoes = new Map();

estacoes.set("kum", new Set(["id", "nv", "ut"]));
estacoes.set("kdois", new Set(["wa", "id", "mt"]));
estacoes.set("ktres", new Set(["or", "nv", "ca"]));
estacoes.set("kquatro", new Set(["nv", "ut"]));
estacoes.set("kcinco", new Set(["ca", "az"]));

let estadosNecessarios = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);
const estacoesFinal = new Set();

while (estadosNecessarios.size > 0) {
    
    let melhorEstacao = null; 
    let estadosMelhorEstacao = new Set();

    for([estacao, estados] of estacoes.entries()) {
        let cobertura = [...estados].filter((el) => estadosNecessarios.has(el));
        
        if(cobertura.length > estadosMelhorEstacao.size) {
            melhorEstacao = estacao;
            estadosMelhorEstacao = estados;
        }
    }
    
    estacoesFinal.add(melhorEstacao);
    estadosNecessarios = new Set([...estadosNecessarios].filter((el) => !estadosMelhorEstacao.has(el)))
}

console.log(estacoesFinal);