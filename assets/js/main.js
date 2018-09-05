// Hover over the box element and change the color



// #00C7C8;

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
var width = 1519;
var animationSpeed = 800;
var currentSlide =1;

$leftBtn.on('click',function(){
	$slideContainer.animate({'margin-left': '+='+width},animationSpeed,function(){
		
	})

})

$rightBtn.on('click',function(){
	currentSlide++;
	if(currentSlide > $slides.length){
		currentSlide=1;
		$slideContainer.css({'margin-left': 0});
	}
	$slideContainer.animate({'margin-left': '-='+width},animationSpeed)
})
// Store in individual variables
// On left click animate - 1519px on the left margin of the ul element
// On right click vice versa
// Also on right click test if we are on the first slide



