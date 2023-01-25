// function checkSpeed(speed){

//     let points = 0;

//     if (speed <= 70)
//         return 'Ok';

//     speed -= 70;

//     while (speed > 0){
//         speed -= 5;
//         points++;
//     }

//     if(points>12)
//         return 'License suspended';
//     else
//         return points;
// }

// teste = checkSpeed(180);
// console.log(teste);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    const pointLimit = 12;

    if (speed < speedLimit + kmPerPoint){
        console.log('Ok');
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= pointLimit)
        console.log('License suspended');
    else
        console.log(points + ' points')
    
}

checkSpeed(130);