var dayOfWeek;
var monthName;

var day = 1;
var month = 2;

if(month >= 1 && month <= 12){
    if(month == 1){
        monthName = 'January';
    }
    else if(month == 2){
        monthName = 'Febuary';
    }
    else if(month == 3){
        monthName = 'March';
    }
    else if(month == 4){
        monthName = 'April';
    }
    else if(month == 5){
        monthName = 'May';
    }
    else if(month == 6){
        monthName = 'June';
    }
    else if(month == 7){
        monthName = 'July';
    }
    else if(month == 8){
        monthName = 'August';
    }
    else if(month == 9){
        monthName = 'September';
    }
    else if(month == 10){
        monthName = 'Octomber';
    }
    else if(month == 11){
        monthName = 'November';
    }
    else{
        monthName = 'December';
    }
}
else{
    monthName = 'Invalid month';
}

if(dayOfWeek <= 0 || dayOfWeek > 7){
    day = 'Invalid day';
}
else if(dayOfWeek == 1){
    day = 'Sunday';
}
else if(dayOfWeek == 2){
    day = 'Monday';
}
else if(dayOfWeek == 3){
    day = 'Tuesday';
}
else if(dayOfWeek == 4){
    day = 'Wednesday';
}
else if(dayOfWeek == 5){
    day = 'Thursday';
}
else if(dayOfWeek == 6){
    day = 'Friday';
}
else{
    day = 'Saturday';
}

console.log('Today is ' + day + ' And the month is ' + monthName);