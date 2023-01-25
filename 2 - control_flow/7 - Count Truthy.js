function countTruthy(array) {
    
    let truthyCount = 0;

    for (let conteudo of array){
        if(conteudo)
            truthyCount++
    }

    return truthyCount;
}

const array = [0, null, undefined, '', 2, 3];

console.log(countTruthy(array));