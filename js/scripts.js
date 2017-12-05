$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();

    var num = parseInt($("#number").val());
    var result = sieve(num);


    //$("#output").text(result)
    for (var l = 0; l < result.length; l++){
      if (result[l] !== "-"){
        $("#output").append(result[l] + "</br>");
      }
    }



  });
});

//backend below this line----------------------

function isPrime(num) {
  if (num < 2){
    return false;
  }
  for (var i = 2; i < num; i++){
    if (num % i === 0){
      return false;
    }
  }
  return true;
}

function sieve(num){

  var array = [];
  for (var i = 2; i<=num ; i++){
      array.push(i);
  }//builds our array

  var prime = 2

  for (i = 0; i < array.length; i++){
    for (j=i+1; j<array.length; j++){
      if(array[j] % prime === 0){
        array[j] = "-"
     	};
   	};
    prime++
	};
  return array
};
