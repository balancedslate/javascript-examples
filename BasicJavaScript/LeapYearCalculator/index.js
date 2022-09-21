function isLeapYear(year){
    var isYear;
    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year % 400 == 0){
                isYear = true;
            }
            else{
                isYear = false;
            }
        }
        else{
            isYear = true;
        }
    }
    else{
        isYear = false;
    }
    return isYear;
}

function leapButton(){
    var year = prompt("Please Enter a Year: ");
    var yearCheck = isLeapYear(year);
    var remark;
    
    if(yearCheck){
        remark = "This is a leap year!";
    }
    else{
        remark = "This is not a leap year.";
    }

    alert(remark);
}