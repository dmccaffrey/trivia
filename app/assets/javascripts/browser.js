$(function() {
	$("#question-input").bind('input propertychange', function() {
		$(".card .question").text($("#question-input").val());
	});
	$("#question-input").val("How much wood could a woodchuck chuck if a woodchuck could chuck wood?").triggerHandler("input");
	
	$("#answer-input").bind('input propertychange', function() {
		$(".card .answer").text($("#answer-input").val());
	});
	$("#answer-input").val("Twenty").triggerHandler("input");
	
	$("#explanation-input").bind('input propertychange', function() {
		$(".card .explanation").text($("#explanation-input").val());
	});
	$("#explanation-input").val("This is some kind of credible explanation or something. If you didn't know this you should feel really stupid.").triggerHandler("input");
	
	$("#reference-input").bind('input propertychange', function() {
		$(".card .reference").text($("#reference-input").val());
	});
	$("#reference-input").val("Roth, Thomas. My Life as a Failure. Austin: Texas Northwest Books, 1993. Print.").triggerHandler("input");
	
	$("#primary-category-input").bind('input propertychange', function() {
		$(".card .category").text($("#primary-category-input").val());
	});
	$("#primary-category-input").val("Science").triggerHandler("input");


});
