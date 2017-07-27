$(document).ready(function(){
	
	//Type.js 
	$(function(){
		$(".open").typed({
			strings: ["Hey, its Andy"],
			typeSpeed: 20,
			showCursor: false,
		});
		$(".prob").typed({
			strings: ["Im Probably,"],
			typeSpeed: 10,
			showCursor:false,
		})
		$(".about").typed({
			strings: ["Studying Computer Science @Carleton","Learning Ruby on Rails","Trying to make the next million dollar idea","Skateboarding",
			"Watching Videos on Youtube","Drinking Coffee","Programming","Waiting for the bus","Making Memes","Listening to Porter Robinson"
			,"Watching Anime","Running","Travelling","Making a Goof"],
			typeSpeed: 10,
            backDelay: 1250,
            showCursor: false,
            loop: true
		});

	});
});