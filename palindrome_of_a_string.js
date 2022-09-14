let str = "madam" ;
let x=false;
let len = str.length;
for(i=0;i<=str.length-1;i++)
if(str[i]==(str.length-1-i)){
x=true;
}
if(x=true){
console.log("The String is a Palindrome");
}else{
console.log("The String is not a Palindrome");
}
