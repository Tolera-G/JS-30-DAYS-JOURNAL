//Exercise A: Grade classifier.
let grade=prompt("Enter your score (0-100):");
let score =Number(grade);
let result;
 
if (score>=90) {
    result="A";
}
else if (score>=80) {
    result="B";
}
else if (score>=70) {
    result="C";
}
else if (score>=60) {
    result="D";
}
else {
    result="F";
}
console.log(result);
//Exercise-B: Positive, zero or negative
let num=prompt("Enter the number you want: ");
let n=Number(num);
let output;
if(n==0){
    output="this number is Zero";
}
else if(n>0){
    output="this number is is positive";
}
else{
    output="this number is negative"
}
console.log(output);
//Exercise-C: Falsy prediction
Boolean(0);//false
Boolean("0");//true
Boolean("");//false
Boolean(" ");//true
Boolean(NaN);//false
Boolean([]);//true
//Exercise D: Logical operators.
5>3 && 2>1;//true
5>3 && 2>10;//false
5>3 || 2>1;//true
!(5>3);//false