// função que recebe duas palavras como parâmetros e retorna a maior substring em comum entre elas
function findSubstring(word1, word2) {

    const matrix = [];
    const [rows, columns] = [word1.length, word2.length];

    let maxLength = 0;
    let endIndex = 0

    // cria a matriz baseada no tamanho das duas palavras
    // adiciona um índice adicional para permitir o cálculo sem erros de fora dos limites
    for(let i = 0; i <= rows; i++) {
        matrix[i] = new Array(columns + 1).fill(0);
    }
 
    // testar se as letras da primeira palavra combinam com as letras da segunda
    for(let i = 1; i <= rows; i++) {

        for(let j = 1; j <= columns; j++) {

            if(word1[i - 1] === word2[j - 1]) {

                matrix[i][j] = matrix[i - 1][j - 1] + 1;
                
                // Verifica se a sequência encontrada é maior que a anterior
                if(matrix[i][j] > maxLength) {
                    maxLength = matrix[i][j];
                    endIndex = i; 
                };
            }; 
        }
    }

    const commonSubstring = word1.slice(endIndex - maxLength, endIndex);

    return {commonSubstring, matrix};
}

console.log(findSubstring('sun', 'sunflower'));