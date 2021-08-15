function DisplayFactor(iNo:number):number
{
    var iFact=1;
    var iCnt=0;
    for(iCnt=1;iCnt<=iNo;iCnt++)
    {
    iFact=iFact*iCnt;
    }
    return iFact;
}

var Factorial=DisplayFactor(5);

console.log(Factorial);