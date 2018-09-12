// animate drop down content
// select elements
var dropDownBtn = $('.dropdown_btn');
var dropDownContent = $('.dropdown_content');
dropDownBtn.on('click',function(){
	dropDownContent.slideToggle(500,'swing');
})





// SHOWCASE SLIDER
// Select left and right icon buttons
var $leftBtn = $('.left');
var $rightBtn = $('.right');
var $slideContainer = $('.slider');
var $slides = $slideContainer.find('.slides');
var width = '100vw';
var animationSpeed = 800;
var currentSlide =0;
var totalSlides = 4;
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









// Testimonial Slideshow
var slideIndex =1;
showImage(slideIndex);
function plusIndex(n){
	slideIndex = slideIndex + n;
	showImage(slideIndex);
}
function currentSlide(n){
	showImage(slideIndex = n);
}
function showImage(n){
	var slide = document.getElementsByClassName("testimonial");

	if(n> slide.length){
		slideIndex=1
	}
	if(n<1){
		slideIndex = slide.length
	}

	for(var i= 0; i<slide.length; i++){
		slide[i].style.display = "none";
	};
	slide[slideIndex-1].style.display = "block";
}
autoSlide();
function autoSlide(){

	var slide = document.getElementsByClassName("testimonial");

	for(var i= 0; i<slide.length; i++){
		slide[i].style.display = "none";
	};

	if(slideIndex> slide.length){slideIndex=1};
	slide[slideIndex-1].style.display = "block";
	slideIndex++;
	setTimeout(autoSlide,6000)
}
























