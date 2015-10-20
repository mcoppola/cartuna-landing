$(function(){

	var $video = $('#fish'),
		elm = $video[0]; 
		playing = true;

	$video.on('canplay', playVideo);

	if (elm.readyState > 3) {
	  playVideo();
	}

	function playVideo() {
		$('.ct-video').removeClass('ct-white-out');
	}

	$video.click(function(){
		if (playing) {
	 		$(this).get(0).pause()
		} else {
			$(this).get(0).play()
		}
		playing = !playing;
	});


	var $tab        = $('.ct-signup-tab'),
		$drawerButton = $('.ct-signup-button');

	$drawerButton.click(function(){
		$tab.toggleClass('fly-out');
	});


	var $form = $('.ct-signup-form'),
		$input = $form.find('input[type="text"]');
	$form.on('submit', function(e){
		e.preventDefault();

		$input.val('...');
		setTimeout(function(){
			$input.val('thank you!');
		}, 750);
	});
});