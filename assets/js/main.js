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



