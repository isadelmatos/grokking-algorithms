// função que recebe duas palavras como parâmetros e retorna a maior substring em comum entre elas
function findSubstring(word1, word2) {

    const matrix = [];
    const [rows, columns] = [word1.length, word2.length];

    let maxLength = 0;
    let endIndex = 0

    // cria a matriz baseada no tamanho das duas palavras
    // cada linha da matriz corresponderá a uma letra da palavra um
    // cada coluna da matriz corresponderá a uma letra da palavra dois
    for(let i = 0; i < rows; i++) {
        matrix[i] = new Array(columns).fill(0);
    }
 
    // testar se as letras da primeira palavra combinam com as letras da segunda
    for(let i = 0; i < rows; i++) {

        for(let j = 0; j < columns; j++) {

            if(word1[i] == word2[j]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
                
                if(matrix[i][j] > maxLength) {
                    maxLength = matrix[i][j];
                    endIndex = i; 
                };
            }; 
        }
    }

    const commonSubstring = word1.slice((endIndex + 1) - maxLength, (endIndex + 1));

    return {commonSubstring, matrix};
}

console.log(findSubstring('blue', 'clues'));