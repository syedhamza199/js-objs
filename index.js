// function maxNumber(x,y){
//     if (x>y)
//     return x
//     else
//     return y

//     // or //

//     function maxNumber(x,y){
//         return (x>y) ? x : y;
//     }
//     console.log(maxNumber(150,15));

// }
// console.log(maxNumber(15,15));


// function islandscape (width, height){
//     return (width>height);
// }

// console.log(islandscape(10, 99));


// function fizzBuzz(number){
//     if (typeof number !== 'number') return NaN;         // not a number
//     if (number % 3 === 0 && number % 5 === 0 ) {
//         return 'Fizzbuzz';        
//     }
//     else if (number % 3 === 0) {
//         return 'Fizz';
//     }
//     else if (number %  5 === 0){
//         return 'Buzz';
//     }
//     return number;
// }
// console.log(fizzBuzz('15'));



// function checkSpeed(speed){
//     const speedLimit = 70, kmp = 5;
//     if (speed <=speedLimit ) {
//         return 'OK';
//     }
//     else{
//         let points = Math.floor((speed - speedLimit)/ kmp);
//         if (points >= 12)
//             return 'Liscense Suspended';
//         if (points < 1) {
//             return 'OK';
//         }
//     return 'points ' +  points;
//     }
// }
    
// console.log(checkSpeed(75));\


// function sum(limit){
//     let s = 0;
//     for (let i = 0; i <= limit; i++) {
//         if (i%3 === 0 || i%5 === 0) {
//             s += i;
//         }    
//     }
//     return s;
// }

// console.log(sum(10));


    
            // OBJECTS

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible : true,
//     draw(){                             // method
//         console.log("drawing O");
//     }
// };

// circle.draw();                  // access throgh dot notation



// function createCircle(radius){
//     return{
//         radius,
//         draw(){
//             console.log("Draw circle");
//         }
//     };
// }

// const circle1 = createCircle(12);
// console.log(circle1);
// const circle2 = createCircle(21);
// console.log(circle2);



// const circle = {                     // if it's const then we cant re assign circle variable..
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible : true,
//     draw(){                             // method
//         console.log("drawing O");
//     }
// };
// console.log(circle);

// circle.length = 2;                  // add new value / method using dot.
// delete circle.isVisible;            // delete value/ method








