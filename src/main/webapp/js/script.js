$("#signup").click(function () {
	$(".floatbox").css("transform", "translateX(80%)");
	$(".signin").addClass("nodisplay");
	$(".signup").removeClass("nodisplay");
});

$("#signin").click(function () {
	$(".floatbox").css("transform", "translateX(0%)");
	$(".signup").addClass("nodisplay");
	$(".signin").removeClass("nodisplay");
});
