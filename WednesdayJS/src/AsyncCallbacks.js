//Asynhronous Callbacks
//1

//Expected output: 
//aaaaaaaaaa
//dddddddddd
//ffffffffff
//eeeeeeeeee
//bbbbbbbbbb

//2
var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");
