// animate drop down content
// select elements
var dropDownBtn = $('.dropdown_btn');
var dropDownContent = $('.dropdown_content');
dropDownBtn.on('click',function(){
	dropDownContent.slideToggle(500,'swing');
})











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
console.log($window.scrollTop());
	if((endZone1)<$window.scrollTop() ){  //Conditional statement test how far the user has scrolled
		$paint.animate({'opacity':'1'},5000); //If user has scrolled pass half of the sections height the animation will play
	}else{
		$paint.css({'opacity':'0'});   //If the user hasnt reached the point yet the section will remain invisible.
		
	}
	// Same concept above applies here.
	if((endZone2)<$window.scrollTop() ){
		$pressureWashing.animate({'opacity':'1'},7000);
	}else{
		$pressureWashing.css({'opacity':'0'});
	}
	// Same concept above applies here.
	if((endZone3)<$window.scrollTop() ){
		$landScaping.animate({'opacity':'1'},7000);
	}else{
		$landScaping.css({'opacity':'0'});
	}
	
})
	
}





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
	setTimeout(autoSlide,4000)
}
























