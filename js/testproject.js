//test project
$(document).ready(function(){


	function resizeDiv() {
		vpw = $(window).width();
		vph = $(window).height();
		$('#head').css({'height': vph + 'px'});
	}
	resizeDiv();

	$('.imagesGridLink').on('mouseenter', function(e){
	    e.preventDefault();
	    $('.imagesGridCaption').hide();
	    $('.imagesGridLink').removeClass('opaque show');
	    $(this).toggleClass('opaque show');
	    $(this).next('span').show();
	});

	window.onresize = function(event) {
		resizeDiv();

	};

});//end doc.ready


