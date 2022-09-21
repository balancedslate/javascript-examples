function LoveButton(){
    var nameOne = prompt("What is your name?");
    var nameTwo = prompt("Wat is their name?");

    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;
    var remark;

    if(loveScore >= 85){
        remark = "Star-Crossed Lovers!";
    }
    else if(loveScore >= 65) {
        remark = "A Powerful Connection!";
    }
    else if(loveScore >= 40) {
        remark = "Hard Work Rewards True Love";
    }
    else{
        remark = "The Heart May Seek Another...";
    }

    alert("Your Lovescore is: " + loveScore + "% Compatable! " + remark + "\nThank you " + nameOne + " and " + nameTwo + "!");

}