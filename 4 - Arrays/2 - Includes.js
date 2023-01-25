const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 4));

function includes(array, seachElement){
    for (let element of array)
    if (element === seachElement)
        return true;
    return false;
}