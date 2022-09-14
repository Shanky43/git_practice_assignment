let num=1221;
let temp=num;
let rev=0;
while(num>0){
  rem=num%10;
  rev=rev*10+rem;
  num=Math.floor(num/10);
}
if(num==temp){
  console.log("The given number is a Palindrome");
}else{
  console.log("The given number is not a Palindrome");
}