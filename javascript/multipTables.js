console.log('Multiplication by '+ 1);
var num = 2;
/* for(index = 1; index<= 12; index++){
     
    for(counter = 1; counter<=12; counter++){
        console.log(counter + ' * ' + index + ' = ' + counter * index); 

        if(counter >= 12){
            if(num <=12){
                console.log();
                console.log('Multiplication by '+ num);
                num++;
            }
        }
    }
} */

let index = 1;
while(index<= 12){
     let counter = 1; 
    while(counter<=12){
        console.log(counter + ' * ' + index + ' = ' + counter * index); 

        if(counter >= 12){
            if(num <=12){
                console.log();
                console.log('Multiplication by '+ num);
                num++;
            }
        }
        counter++;
    }
    index++;
}