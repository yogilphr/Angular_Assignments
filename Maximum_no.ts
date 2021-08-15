function Maximum(iNo1:number,iNo2:number,iNo3:number):number
{
     var iMax:number=0;
     if((iNo1>iNo2)&&(iNo1>iNo3))
     {
         iMax=iNo1;
         
     }
     else if((iNo2>iNo1)&&(iNo2>iNo3))
     {
         iMax=iNo2;
     }
     else if((iNo3>iNo1)&&(iNo3>iNo2))
     {
         iMax=iNo3;   
     } 

     return iMax;
}

var Maximum_no:number=Maximum(23,89,6);
console.log("Maximum number is ",Maximum_no);
