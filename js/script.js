$(document).ready(function(){
	
	//Type.js 
	$(function(){
		$(".open").typed({
			strings: ["Hey, it's ye boi Andy"],
			typeSpeed: 20,
			showCursor: false,
		});
		$(".prob").typed({
			strings: ["Im Probably,"],
			typeSpeed: 10,
			showCursor:false,
		})
		$(".about").typed({
			strings: ["Practicing my kickflip","Video Editing","Studying Computer Science @Carleton","Running up and down the wall","Listening to alvvays",
			"Playing the ukelele","Trying to become cryto rich","Hanging out with the homies","Creating a Django application","Thinking of the next million dollar idea",
			"Trying to do a full send","Watching Videos on Youtube","Drinking Coffee","Making a goof","Playing on my Switch","Waiting for the bus"
			,"Making Memes","Listening to Porter Robinson"
			,"Watching Anime","Running","Travelling","Making a Goof"],
			typeSpeed: 10,
            backDelay: 1250,
            showCursor: false,
            loop: true
		});

	});
});