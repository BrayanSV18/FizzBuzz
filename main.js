var numeros = 100;
var msg;
for(var i = 1 ; i<=100 ; i++){
  if( i % 3 == 0 && i % 5 == 0){
    msg = "FIZZBUZZ";
  }else if(i % 3 == 0){
    msg = "FIZZ";
  }else if(i % 5 == 0){
    msg = "BUZZ";
  }else{
    msg = i;
  }
document.write(msg + "<br>");
}