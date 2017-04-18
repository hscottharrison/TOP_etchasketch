var dimensions = 16;


$(document).ready(function(){
  //build the board
  buildBoard();

  paint();
  //click feature on "about" button
  $('#about').on('click', function(){
    $(this).closest('#navbar').find('.abtTxt').slideToggle().appendTo('#navbar');
  });
  //reset function
  $('#reset').click(function(){
    $('.cell').css('background-color', '#fff');

    dimensions = prompt("Want to change the size of the drawing blocks? Enter a number between 1 and 64. For example, entering 12 will give you a 12X 12 board. (Default is 16)", "");

  	if (isNaN(dimensions))
  	    alert("That is not a number. To continue, please click 'Reset' and enter a number between 1 and 64.");

  	else if (dimensions < 1)
  	    dimensions = 1;
  	else if (dimensions > 64)
  	    dimensions = 64;

  	var size = 512 / dimensions;

  	reset();

  	$('.cell').css({'width':size+'px', 'height':size + 'px'});

  	paint();
  });
});

function buildBoard(size){
  for(var i=0; i < dimensions; i++){
    for(var j=0; j < dimensions; j++){
      $('<div>').addClass('cell').appendTo('.container');
    }
  }
}

function reset(){
  $('.cell').remove();
  buildBoard();
}

function paint(){
  $('.cell').on('mouseenter', function(){
    if ($('#checkboxThreeInput').is(':checked')){
      $(this).each(function(index) {
      var colorR = Math.floor((Math.random() * 256));
      var colorG = Math.floor((Math.random() * 256));
      var colorB = Math.floor((Math.random() * 256));
      $(this).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    });
      }
      else{
        $(this).addClass('highlight').css('background-color', '#FF5F6D');
      }
  });
}
