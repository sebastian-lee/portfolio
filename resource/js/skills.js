$(document).ready(function(){
	var bulletPoints = 13;
	var message = "<p class='point'>+10</p>";

    //Animation for pacman eating the bullet "points"
    //Once done eating all 13 points, play Winner message.
    $(".row--skills > ul > li").hover(function(){
    	var thisElem = $(this);
    	if(!thisElem.hasClass("done")) {
    		thisElem.css("list-style","none");
    		thisElem.addClass("done");
    		
    		bulletPoints--;
    		if(bulletPoints<=0){
    			message = "<p class='point'>Winner!</p>";
    		}
    		thisElem.prepend(message);

    	}
        thisElem.css("list-style-image","url('resource/images/Pacman.gif')");
    });

    $(".row--skills > ul > li").mouseleave(function(){
        $(this).css("list-style","none");
    });
});