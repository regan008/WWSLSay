// $.get( "WWSLSay.csv", function( data ) {
//   $( ".result" ).html( data );
//   alert( "Load was performed." );
// });





function appendquotes(lines) {
  $(".wwsld-response").append(lines);
}

// console.log(random_item(lines));
$( "#wwsld-textbox" ).submit(function( event ) {
  console.log( "Handler for .submit() called." );

  $.get('http://localhost:8000/WWSLSay.csv',function(data){
      var dataStr = new String(data);
      console.log(dataStr);
      var lines = dataStr.split('\n');
      console.log(lines);
      var randomItem = lines[Math.floor(Math.random()*lines.length)];
      console.log(randomItem);
      $(".wwsld-response").append(randomItem);
  },dataType='text');
  event.preventDefault();
  $( "form" ).remove( "#wwsld-textbox" );
  console.log("removed form");
  $(".wwsld-response").removeClass('hidden');
});

$( ".reloadbtn" ).click(function() {
    location.reload(true);
});
