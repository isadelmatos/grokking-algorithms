function dijkstra(graph, start) {

    // cria a estrutura para controlar os nós que ainda não foram visitados
    const nodes = new Set(Object.keys(graph));
    const distances = {};
    const parents = {};

    for(let node of nodes.values()) {
        distances[node] = Infinity;
        parents[node] = null;
    }

    distances[start] = 0;
    
    while (nodes.size > 0) {

        let minNode = null;
        let minDistance = Infinity;

        // seta o próximo nó com a menor distância definida que será "relaxado"
        for (const node of nodes) {
            if (distances[node] < minDistance) {
                minNode = node;
                minDistance = distances[node];
            }
        }
        
        // deleta o nó atual para que não possa ser visitado novamente
        nodes.delete(minNode);
        
        // faz o "relaxamento" do vértice, descobrindo a distância entre ele e todos os seus vizinhos
        for (const neighbor in graph[minNode]) {
            const newDistance = distances[minNode] + graph[minNode][neighbor];
            // caso a distância para aquele vértice seja menor do que a atual, realiza a troca
            if (newDistance < distances[neighbor]) {
              distances[neighbor] = newDistance;
              parents[neighbor] = minNode;
            }
        }
    }

    return {distances, parents};
}

const graph = {
    "a": {"b": 10, "c": 5},
    "b": {"d": 1},
    "c": {"b": 3, "d": 8, "e": 2},
    "d": {"e": 4, "f": 4},
    "e": {"f": 6},
    "f": {}
};

console.log(dijkstra(graph, "a"));
