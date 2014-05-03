$(document).ready(function () {

	popup();
	nav();
	$(".enter-box > button").on("click", function(event){
		event.preventDefault();
		event.stopPropagation();
		if ($(this).hasClass("enter-button")) {
			if ($(".enter-form.enter").is(":visible")) {
				$(".enter-form").hide();
			}
			else {
				$(".enter-form.enter").show();
				$(".enter-form.registration").hide();
			}

		}
		else if($(this).hasClass("registration-button")) {
			if ($(".enter-form.registration").is(":visible")) {
				$(".enter-form").hide();
			}
			else {
				$(".enter-form.enter").hide();
				$(".enter-form.registration").show();
			}

		}
	});
	$(document).on("click", function(event){
		if ($(event.target).closest(".enter-form").length) {
			return ;
		}
		else {
			$(".enter-form").hide();
		}

/*		if ($(event.target).closest(".user-info-popover").length) {
			return false;
		}
		else if ($(event.target).closest(".user-info-js").length) {
			return false;
		}
		else {
			$(".user-info-popover").fadeOut();
		}*/
	});

	/*$(".user-info-js").on("click", function(event){
		event.preventDefault();
		$(this).parents(".user-section").find(".user-info-popover").fadeToggle();
	});*/

});

$(window).resize(function(){

});

$(window).load(function () {

});


var nav = function(){
	$(".second-sub-menu").find("> a").on("click", function(event) {
		event.preventDefault();
		$(this).parent().toggleClass("opened");
	});
}

var popup = function() {
	$(".overlay").on("click", function(){
		$(this).fadeOut();
		$('.popup').fadeOut();
	})
	$(".popup").find(".close").on("click", function(){
		$(".overlay").fadeOut();
		$('.popup').fadeOut();
	});

}