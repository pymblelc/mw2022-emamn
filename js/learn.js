
$('.birdGuide').hide();
$('#disclaimer').hide();
$('#bass').hide();
$('#TS').hide();
$('.fullScale').hide();
$('#birdHappy').show();



var sound = document.getElementById("sound");

let click = 0;
//example

// var spanWidth = $('#birdTalk span').width();
// $('#birdTalk').animate( { width: spanWidth }, 1500 );

$('#next').click(function(){
    sound.load();
    sound.play();
    
    click = click + 1;
    console.log(click);
    
    // hard coded for now?

    switch(click){
        case 1:
            $('#birdTalk span').text('Let' + "'" +'s go over the basics shall we?');
            //set width to 0 once again
        
            // $('#birdTalk').animate( { width: spanWidth }, 1000 );
            // ('#birdExplain1').effect( "bounce", {times:1}, 300 );
        break;

        case 2:
            $('#birdTalk span').text('You see this set of 5 horizontal lines?');
            $('#birdHappy').hide();
            $('#birdExplain1').show();
            doBounce($('#birdExplain1'), 1, '30px', 300);
            // $("#birdExplain1").style.left = 200;
        break;

        case 3:
            $('#birdTalk span').text('In musical notation, this is called a stave, or staff! This determines the pitch and rhythm in a sequence of musical notes.');
        break;

        case 4:
            $('#birdTalk span').text('This symbol you see here is called a Trebel Clef which represents notes above middle C, you' + "'" + 'll come across this when playing instruments like piano, violin, or the flute.');
            $('#birdExplain1').hide();
            $('#birdExplain2').show();

            doBounce($('#birdExplain2'), 1, '30px', 300);
        break;

        case 5:
            $('#birdTalk span').text('You may often see a bass clef which instead represents notes up to the highest F key below middle C. Instruments like cello, guitar, bassoon, the tuba, and pianos use this.');
            $('#treble').hide();
            $('#bass').show();
        break;

        case 6:
            $('#birdTalk span').text('These two numbers show the time signature, indicating how many beats there are in a single bar.');
            $('#bass').hide();
            $('#TS').show();
            $('#treble').show();

            $('#birdExplain2').hide();
            $('#birdExplain1').show();
            doBounce($('#birdExplain1'), 1, '30px', 300);
        break;

        case 7:
            $('#birdTalk span').text('The stave is significantly important for the placement of these music notes as each position represents a certain key as you can see here!');
            $('#disclaimer').show();

            $('#birdExplain1').hide();
            $('#birdHappy').show();
            doBounce($('#birdHappy'), 1, '30px', 300);
        break;

        case 8:
            $('#birdTalk span').text('They may look tricky to remember but there'+ "'" + 's a clever acronym used when dividing by the stave lines and empty spaces!');
            $('#disclaimer').hide();

            $('#birdHappy').hide();
            $('#birdExplain2').show();
            doBounce($('#birdExplain2'), 1, '30px', 300);
        break;

        case 9:
            $('#birdTalk span').text(' This is the full look of a C Major scale');
            $('#disclaimer').hide();

            $('.line').hide();
            $('#treble').hide();
            $('#TS').hide();
            $('.staveLines').hide();
            $('#fullScale').show();

            $('#birdExplain2').hide();
            $('#birdExplain1').show();
            doBounce($('#birdExplain1'), 1, '30px', 300);
        break;

        case 10:
            $('#birdTalk span').text('The acronym for space notes shown to the left show "FACE" as for the acronym for line notes on the right is E for "Every", G for "Good", B for "Boy", D for "Deserves", and F for "Fruit."');

            $('#fullScale').hide();
            $('#acronymScale').show();

            $('#birdExplain2').hide();
            $('#birdExplain1').show();
        break;

        case 11:
            $('#birdTalk span').text('I got nothin help');
    }
}); 

//Bouncing function for every animation replacement
function doBounce(element, times, distance, speed) {
    for(var i = 0; i < times; i++) {
        element.animate({marginTop: '-='+distance}, speed)
            .animate({marginTop: '+='+distance}, speed);
    }        
}

// $('#previous').click(function(){
//     sound.load();
//     sound.play();

//     click = click - 1
//     console.log(click);
// });
