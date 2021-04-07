var doYouHaveAccount = 'Yes';

if(doYouHaveAccount == 'Yes'){
    var accountType = 'checking';
    if(accountType == 'saving'){
        var doYouWantNewChecking = 'Yes';
        var doHaveChecking = 'No';
        if(doYouWantNewChecking == 'Yes' && doHaveChecking == 'No'){
            console.log('Opening new checking account...');
        }
        else if(doHaveChecking == 'Yes' && doYouWantNewChecking == 'Yes'){
            console.log('Opening New Checking Account....');
        }
        else if(doHaveChecking == 'No' && doYouWantNewChecking == 'No'){
            console.log('Sorry You Dont want a checking ..' );
        }
        else{
            console.log('Please get new checking account');
        }
    }
    else if(accountType == 'checking'){
        var doYouWantNewChecking = 'Yes';
        var doHaveSaving = 'No';
        if(doYouWantNewChecking == 'Yes' && doHaveSaving == 'No'){
            console.log('Opening new Saving account...');
        }
        else if(doHaveChecking == 'Yes' && doYouWantNewChecking == 'Yes'){
            console.log('Opening New Checking Account....');
        }
        else if(doHaveChecking == 'No' && doYouWantNewChecking == 'No'){
            console.log('Sorry You Dont want a checking ..' );
        }
        else{
            console.log('Please get new checking account');
        }
    }
    else{
        console.log('')
    }
    
}
else if(doYouHaveAccount == 'No'){
    var accountType = 'checking';
    if(accountType == 'checking'){
        var doYouWantNewChecking = 'Yes';
        var doHaveSaving = 'No';
    if(doYouWantNewChecking == 'Yes' && doHaveSaving == 'No'){
        console.log('Opening new Saving account...');
    }
    else if(doHaveSaving == 'Yes' && doYouWantNewChecking == 'Yes'){
        console.log('Opening New Checking Account....');
    }
    else if(doHaveSaving == 'No' && doYouWantNewChecking == 'No'){
        console.log('Sorry You Dont want a checking ..' );
    }
    else{
        console.log('Please get new checking account');
    }
}
}
else{
    console.log('Opening A new Account....');
}