let numOfRow = 5;
let numOfCol = 10;

// for(var row = 1; row<= numOfRow; row++){
//     for(let col = 1; col <= numOfCol; col++){
//         // console.log(value++);
//         process.stdout.write(row.toString() + ' ');
//     }
//     console.log();
// }


for(var row = 1; row<= numOfRow; row++){
    for(let col = 1; col <= numOfCol; col++){
        // console.log(value++);
        process.stdout.write('(' + row.toString()+','+col.toString() + ')' + ' ');
    }
    console.log();
}