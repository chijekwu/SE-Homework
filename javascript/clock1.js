let date = new Date();
 
for(var counter = 1; counter<1000000;counter++){
    let hour = date.getHours();
    let mintues = date.getMinutes();
    let seconds = date.getSeconds();
    let today = date.getDate();

    console.log(today);
}
