$( "#botonUp" ).css( "display", "none");

$( window ).scroll(function() {
  if($(window).scrollTop() >= 100)
  {
	$( "#botonUp" ).fadeIn(500);
  }
  else
  {
	$( "#botonUp" ).fadeOut(500);
  }
});

function up()
{
	$('html, body').animate({scrollTop:0}, 'slow');
}