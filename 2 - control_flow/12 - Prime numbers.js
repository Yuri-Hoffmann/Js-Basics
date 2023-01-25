showPrimes(20);

// function showPrimes(limit){
//     divider = 0;
//     for(i=1; i<=limit; i++){
//         for(j=1; j<=i; j++)
//             if(i%j===0)
//                 divider++;

//         if(divider===2)
//             console.log(i)

//         divider = 0;
//     }
// }

function showPrimes(limit) {
    for(let number = 2; number <= limit; number++)
        if(isPrime(number)) console.log(number);
}

function isPrime(number){
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;
    
    return true;
}