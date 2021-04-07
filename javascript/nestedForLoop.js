/* let value = 1;
for(var row = 1; row<= 4; row++){
    for(let col = 1; col <=4; col++){
        // console.log(value++);
        process.stdout.write(value.toString() + ' ');
        value++;
    }
    console.log();
}
 */
//ascending order
/* for(var row = 1; row<= 5; row++){
    for(let col = 1; col <=row; col++){
        process.stdout.write(row.toString());  
    }
    console.log();
} */

console.log();
//console.log();
//descending order
/* for(var row = 5; row >0; row--){
    for(let col = row; col > 0; col--){
        process.stdout.write(row.toString());
    }
    console.log();
}
 */
/* for(var row = 1; row<= 4; row++){
    let keep = row;
    for(let col = 1; col <=row; col++){
        process.stdout.write(col.toString());
        keep++;
    }
    console.log();
} */

for(var row = 5; row>0; row--){
    let keep = row;
    for(let col = row; col>0; col--){
        process.stdout.write(col.toString());
        keep++;
    }
    console.log();
}