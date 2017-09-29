$(document).ready(function(){

    var IA={
        IA_1: "resource/images/IA/IA_home.gif",
        IA_2: "resource/images/IA/IA_profile.gif",
        IA_3: "resource/images/IA/IA_new.gif",
        IA_4: "resource/images/IA/IA_example.gif",
    }

    var IA_static={
        IA_1: "resource/images/IA/IA_home.png",
        IA_2: "resource/images/IA/IA_profile.png",
        IA_3: "resource/images/IA/IA_new.png",
        IA_4: "resource/images/IA/IA_example.png",
    }

    var MM={
        MM_1: "resource/images/MM/MM_homepage.gif",
        MM_2: "resource/images/MM/MM_services.gif",
        MM_3: "resource/images/MM/MM_clients.gif",
        MM_4: "resource/images/MM/MM_about.gif",
        MM_5: "resource/images/MM/MM_blog.gif",
    }

    var MM_static={
        MM_1: "resource/images/MM/MM_homepage.png",
        MM_2: "resource/images/MM/MM_services.png",
        MM_3: "resource/images/MM/MM_clients.png",
        MM_4: "resource/images/MM/MM_about.png",
        MM_5: "resource/images/MM/MM_blog.png",
    }

    var IA_mainID = "IA_1";
    var MM_mainID = "MM_1";


    $(".image-container").click(function(){
        //Don't swap if in mobile or in no wrap view.
        if($( document ).width()>=900){
           var mediaItem = $(this).find('.project-media-item');
           var currentOverlay = $(this).find('.overlay');
           if(mediaItem.hasClass("IA")) {
               if($(this).attr('id')!=IA_mainID){
                   //Get Id of what was clicked
                   var currentID = $(this).attr('id');

                   //Swap text between main and current
                   var currentOverlayText = currentOverlay.text();
                   var mainOverlayText =  $("#"+IA_mainID).find('.overlay').text();

                   currentOverlay.text(mainOverlayText);
                   $("#"+IA_mainID).find('.overlay').text(currentOverlayText);

                   //Swap picture and ID of the main picture with what was clicked
                   $("#"+IA_mainID).find(".project-media-item").attr("src", IA_static[currentID]);
                   $("#"+IA_mainID).attr("id", currentID);

                   //Move main picture and ID to what was clicked
                   $(this).attr('id', IA_mainID);
                   mediaItem.attr("src", IA_static[IA_mainID]);
                   
                   //Make new main ID
                   IA_mainID = currentID;
               }
           }
           else if(mediaItem.hasClass("MM")){
               if($(this).attr('id')!=MM_mainID){
                   //Get Id of what was clicked
                   var currentID = $(this).attr('id');

                   //Swap text between main and current
                   var currentOverlayText = currentOverlay.text();
                   var mainOverlayText =  $("#"+MM_mainID).find('.overlay').text();

                   currentOverlay.text(mainOverlayText);
                   $("#"+MM_mainID).find('.overlay').text(currentOverlayText);

                   //Swap picture and ID of the main picture with what was clicked
                   $("#"+MM_mainID).find(".project-media-item").attr("src", MM_static[currentID]);
                   $("#"+MM_mainID).attr("id", currentID);

                   //Move main picture and ID to what was clicked
                   $(this).attr('id', MM_mainID);
                   mediaItem.attr("src", MM_static[MM_mainID]);
                   
                   //Make new main ID
                   MM_mainID = currentID;
               }
           }
        }
    });

    //Load a gif respective to its id when being hovered
    $(".image-container").hover(function(){
        var mediaItem = $(this).find('.project-media-item');
    	if(mediaItem.hasClass("IA")) {
            mediaItem.attr("src", IA[$(this).attr('id')]);
        }
        else if(mediaItem.hasClass("MM")){
            mediaItem.attr("src",MM[$(this).attr('id')]);
        }
        $(this).find('.ripple').css("display","none");
    });

    //Restore static image for media respective to its id.
    $(".image-container").mouseleave(function(){
        var mediaItem = $(this).find('.project-media-item');
        if(mediaItem.hasClass("IA")) {
            mediaItem.attr("src", IA_static[$(this).attr('id')]);
        }
        else if(mediaItem.hasClass("MM")){
            mediaItem.attr("src",MM_static[$(this).attr('id')]);
        }
        if($( document ).width()<900){
            $(this).find('.ripple').css("display","inherit");
        }
    });
});