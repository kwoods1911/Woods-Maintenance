// Fade in services section on page load
// Each section is selected 
var $paint = $('.painting .box');
var $pressureWashing = $('.pressure_washing .box');
var $landScaping =$('.landscaping .box');
var $window = $(window);
var endZone1 = ($paint.offset().top - ($paint.height()))/2;    
var endZone2 = ($pressureWashing.offset().top - $pressureWashing.height())/2;   //
var endZone3 = ($landScaping.offset().top - $landScaping.height())/2;
console.log(endZone1);
console.log(endZone2);
console.log(endZone3);


// Run animation if laptop or desktop
if($window.width()>1024){
$paint.css({'opacity':'0'});
$pressureWashing.css({'opacity':'0'});
$landScaping.css({'opacity':'0'});


// Animation will only play when page has scrolled.
$window.on('scroll',function(){
	if((endZone1)<$window.scrollTop() ){  //Conditional statement test how far the user has scrolled
		$paint.animate({'opacity':'1'},3000); //If user has scrolled pass half of the sections height the animation will play
	}else{
		$paint.css({'opacity':'0'});   //If the user hasnt reached the point yet the section will remain invisible.
		
	}
	// Same concept above applies here.
	if((endZone2)<$window.scrollTop() ){
		$pressureWashing.animate({'opacity':'1'},4000);
	}else{
		$pressureWashing.css({'opacity':'0'});
	}
	// Same concept above applies here.
	if((endZone3)<$window.scrollTop() ){
		$landScaping.animate({'opacity':'1'},5000);
	}else{
		$landScaping.css({'opacity':'0'});
	}
	
})
	
}




// On hovering image element remove opacity
// var reveal = $('.description');
// reveal.on('mouseover',function(){
// 	var revealContent = $(this).find('p:first');
// 	revealContent.css({
// 		transition:1,
// 		opacity:1
// 	});
// 	$(this).addClass('reveal');
// })
// reveal.on('mouseout',function(){	
// var revealContent = $(this).find('p:first');
// 	revealContent.css({
// 		transition:1,
// 		opacity:0
// 	})
// 	$(this).removeClass('reveal');
// });




// On button click scroll down

var $downbtn = $('#down');
var $body = $('html,body');
var $scrollPosition = $('#scrollPoint');

$downbtn.on('click',function(){
	$body.animate({scrollTop: $(this).offset().top},'slow');
})



// $downbtn.css({backgroundColor: 'red'});