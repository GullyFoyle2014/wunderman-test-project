//test project
$(document).ready(function(){

	function resizeDiv() {
		vpw = $(window).width();
		vph = $(window).height();
		$('#head').css({'height': vph + 'px'});
	}
	
	function ifNoTouch(){
		if( $('html.no-touch') ){
			$('.imagesGridLink').on('mouseenter', function(e){
			    e.preventDefault();
			    $('.imagesGridCaption').hide();
			    $('.imagesGridLink').removeClass('opaque show');
			    $(this).toggleClass('opaque show');
			    $(this).next('div').show();
			});
		}//end if viewportwidth
	}//end ifNoTouch function
	
	function modalImage(){
		$(".media").on("click", function() {
		   $('#imagepreview').attr('src', $(this).find('.imageresource').attr('src'));
		   $('#imagemodal').modal('show');
		});
	}

	//fire these off at doc.ready
	resizeDiv();
	ifNoTouch();
	modalImage();

	window.onresize = function(event) {
		resizeDiv();
	};

});//end doc.ready