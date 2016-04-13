$(function(){

    // var $video = $('#fish'),
    //     elm = $video[0];
    //     playing = true;
    //
    // $video.on('canplay', playVideo);
    //
    // if (elm.readyState > 3) {
    //   playVideo();
    // }
    //
    // function playVideo() {
    //     $('.ct-video').removeClass('ct-white-out');
    // }
    //
    // $video.click(function(){
    //     if (playing) {
    //         $(this).get(0).pause()
    //     } else {
    //         $(this).get(0).play()
    //     }
    //     playing = !playing;
    // });


    var $tab        = $('.ct-signup-tab'),
        $drawerButton = $('.ct-signup-button');

    $drawerButton.click(function(){
        $tab.toggleClass('fly-out');
    });


    var $form = $('.ct-signup-form'),
        $input = $form.find('input[type="text"]');



    // Email Submit ====================================== //

    $form.on('submit', function(e){
        e.preventDefault();

        var email = $input.val();

        $input.val('...');
        $.ajax({
          type: "POST",
          url: '/email',
          data: { email: email },
          success: function(){
            $input.val('thank you!');
          },
          error: function(e) {
            if (e.status == 200) {
             } else {
                $input.val('error');
             }
          },
          dataType: 'JSON'
        });

        // email server can take a sec, fake imediate feedback
        setTimeout(function(){
            if ($input.val() !== 'error') {
                $input.val('thank you!');
            }
        }, 250);

    });
});
