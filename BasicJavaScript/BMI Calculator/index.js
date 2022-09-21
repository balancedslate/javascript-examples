var remark;

function bmiCalc(weight, height) {
    var bmi = weight / (height * 2);
    return bmi;
}

function genRemark(bmi) {
    if(bmi < 18.5){
        remark = "You are underweight."
    }
    else if(bmi > 18.5 && bmi < 24.9){
        remark = "You are a normal weight."
    }
    else{
        remark = "You are overweight."
    }
}

function Calculator(){
    var weight = prompt("Please Enter Your Weight");
    var height = prompt("Please Enter Your Height");

    var calculation = bmiCalc(weight, height);
    genRemark(calculation);

    alert("Your BMI is: " + calculation + ". " + remark);
}
