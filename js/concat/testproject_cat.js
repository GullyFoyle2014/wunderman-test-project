//test project
$(document).ready(function(){


function resizeDiv() {
	vpw = $(window).width();
	vph = $(window).height();
	$('#head').css({'height': vph + 'px'});
}

// jQuery.fn.center = function () {
//     this.css("position","absolute");
//     this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
//                                                 $(window).scrollTop()) + "px");
//     this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
//                                                 $(window).scrollLeft()) + "px");
//     return this;
// };




resizeDiv();
//$('#mainLogo').center();



});//end doc.ready

window.onresize = function(event) {
	resizeDiv();
//	$('#mainLogo').center();
};

