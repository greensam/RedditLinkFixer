$(function(){
	console.log("injected");
	$("a.title").each(function(){
		this.target = "_blank";
		console.log("changed");
	});
})