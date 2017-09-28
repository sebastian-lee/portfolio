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


    $(".project-media-item").click(function(){
        var thisElem = $(this);
        if(thisElem.hasClass("IA")) {
            if(thisElem.attr('id')!=IA_mainID){
                //Get Id of what was clicked
                var currentID = thisElem.attr('id');

                //Swap picture and ID of the main picture with what was clicked
                $("#"+IA_mainID).attr("src", IA_static[currentID]);
                $("#"+IA_mainID).attr("id", currentID);

                //Move main picture and ID to what was clicked
                thisElem.attr('id', IA_mainID);
                thisElem.attr("src", IA_static[IA_mainID]);
                
                //Make new main ID
                IA_mainID = currentID;
            }
        }
        else if(thisElem.hasClass("MM")){
            if(thisElem.attr('id')!=MM_mainID){
                //Similar to the IA section
                var currentID = thisElem.attr('id');
                
                $("#"+MM_mainID).attr("src", MM_static[currentID]);
                $("#"+MM_mainID).attr("id", currentID);
                
                thisElem.attr('id', MM_mainID);
                thisElem.attr("src", MM_static[MM_mainID]);
               
                MM_mainID = currentID;
            }
        }
    });

    //Load a gif respective to its id when being hovered
    $(".project-media-item").hover(function(){
        var thisElem = $(this);
    	if(thisElem.hasClass("IA")) {
            thisElem.attr("src", IA[thisElem.attr('id')]);
        }
        else if(thisElem.hasClass("MM")){
            thisElem.attr("src",MM[thisElem.attr('id')]);
        }
    });

    //Restore static image for media respective to its id.
    $(".project-media-item").mouseleave(function(){
        var thisElem = $(this);
        if(thisElem.hasClass("IA")) {
            thisElem.attr("src", IA_static[thisElem.attr('id')]);
        }
        else if(thisElem.hasClass("MM")){
            thisElem.attr("src",MM_static[thisElem.attr('id')]);
        }
    });
});