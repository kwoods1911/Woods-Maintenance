// Hover over the box element and change the color
// animate drop down content
// select elements
var dropDownBtn = $('.dropdown_btn');
var dropDownContent = $('.dropdown_content');
dropDownBtn.on('click',function(){
	dropDownContent.slideToggle(500,'swing');
})
var testimonial = document.getElementsByClassName('testimonial');
for(i=0; i<testimonial.length; i++){
	testimonial[i].style.display ="none";
};
testimonial[0].style.display="block";
// On hovering image element remove opacity
var reveal = $('.description');
reveal.on('mouseover',function(){
	var revealContent = $(this).find('p:first');
	revealContent.css({
		transition:1,
		opacity:1
	});
	$(this).addClass('reveal');
})
reveal.on('mouseout',function(){	
var revealContent = $(this).find('p:first');
	revealContent.css({
		transition:1,
		opacity:0
	})
	$(this).removeClass('reveal');
});




















































// Slide show animation
// Select left and right icon buttons
var $leftBtn = $('.left');
var $rightBtn = $('.right');
var $slideContainer = $('.slider');
var $slides = $slideContainer.find('.slides');
var width = '100vw';
var animationSpeed = 800;
var currentSlide =0;
var totalSlides = 4;
// var clickTotal =0;
var startImg;
var startPos = '-400vw';

// Starting point of first image
// First image positioned in the middle of the browser
$slides.filter(':first').addClass('start');

startImg = $('.start').outerWidth();
$slideContainer.css('margin-left', startPos);

$slides.filter(':first').before($slides.clone());
$slides.filter(':first').before($slides.clone());
$slides.filter(':last').after($slides.clone());



// Slider Buttons - on click margin animates
$leftBtn.on('click',function(){
	$slideContainer.animate({'margin-left': '+='+width},animationSpeed,function(){
	currentSlide--;
	if(currentSlide=== -$slides.length){
		currentSlide=0;
		$slideContainer.css({'margin-left': startPos});
	}
	})
})
$rightBtn.on('click',function(){
	$slideContainer.animate({'margin-left': '-='+width},animationSpeed, function(){
	currentSlide++;
	if(currentSlide === $slides.length){
		currentSlide=0;
		$slideContainer.css({'margin-left': startPos});
	}
	})
})
































// Store in individual variables
// On left click animate - 100% on the left margin of the ul element
// On right click vice versa
// Also on right click test if we are on the firts slide




// // 1ST TRIAL-Log attempts in journey let it be a learning lesson
// // On window resize we get the current value of the window width.
// // Use the current size of the window width to 
// var browser = $(window);
// 	browser.on('resize',function(){
// 	var $this =$(this).width();
// 	var width = $this;
// 	console.log(updatedWidth);
// 	return width;
// });
// // SECOND TRIALS
// // SELECT THE IMAGE WIDTH FROM THE IMAGE TAG
// // SET VALUE FROM IMAGE TAG TO WIDTH VARIABLE

// var imageWidth = $('.slides img');
// console.log(imageWidth)










