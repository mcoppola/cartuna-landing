$(function(){

	var $video = $('#fish'),
		elm = $video[0]; 

	$video.on('canplay', playVideo);

	if (elm.readyState > 3) {
	  playVideo();
	}

	function playVideo() {
		$('.ct-video').removeClass('ct-white-out');
	}


});