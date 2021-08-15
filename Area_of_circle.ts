function Area(iRadius:number):number
{
    var area_of_Circle=0;
    const pi=3.14;
    area_of_Circle=pi*iRadius*iRadius;
    return area_of_Circle;
}

var circleArea=Area(20);
console.log("Area of circle is",circleArea);