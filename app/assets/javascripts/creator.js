$(function() {
	$("#question-input").bind('input propertychange', function() {
		$(".card .question").text($("#question-input").val());
	});
	$("#question-input").val("How much wood could a woodchuck chuck if a woodchuck could chuck wood?").triggerHandler("input");
	
	$("#hint-input").bind('input propertychange', function() {
		if($("#hint-input").val() == "") {
			$(".card .hint").hide();
		} else {
			$(".card .hint").text($("#hint-input").val());
			$(".card .hint").show();
		}
	});
	$("#hint-input").val("10, 20, 30").triggerHandler("input");
	
	$("#answer-input").bind('input propertychange', function() {
		$(".card .answer").text($("#answer-input").val());
	});
	$("#answer-input").val("Twenty").triggerHandler("input");
	
	$("#details-input").bind('input propertychange', function() {		
		if($("#details-input").val() == "") {
			$(".card .details").hide();
		} else {
			$(".card .details").text($("#details-input").val());
			$(".card .details").show();
		}
	});
	$("#details-input").val("This is some kind of credible explanation or something. If you didn't know this you should feel really stupid.").triggerHandler("input");
	
	$("#reference-input").bind('input propertychange', function() {
		$(".card .reference").text($("#reference-input").val());
	});
	$("#reference-input").val("Roth, Thomas. My Life as a Failure. Austin: Texas Northwest Books, 1993. Print.").triggerHandler("input");
	
	$("#primary-category-input").bind('input propertychange', function() {
		$(".card .category").text($("#primary-category-input").val());
	});
	$("#primary-category-input").val("Science").triggerHandler("input");


});

function clear_fields()
{
	$("#question-input").val("").triggerHandler("input");

	$("#hint-input").val("").triggerHandler("input");

	$("#answer-input").val("").triggerHandler("input");

	$("#details-input").val("").triggerHandler("input");

	$("#reference-input").val("").triggerHandler("input");

	$("#primary-category-input").val("").triggerHandler("input");
}
