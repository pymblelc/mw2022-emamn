//score DB

var apikey = '61a3fa8734abfc7f972efc04';
var urlScores = 'https://enirui-a66e.restdb.io/rest/scores';

function getScore(){
    var tempItem = {correctAnswer}

    addScore(tempItem, urlScores, apikey, );
}

function addScore(item, url, apikey){
    var settings = { // Get existing users reqeust for
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-apikey": apikey,
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(item)
    }
    
    $.ajax(settings).done(function (response) {
        // if response didn't find exisitng user, then create
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": url,
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "x-apikey": apikey,
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(item)
        }
        
        $.ajax(settings).done(function (response) {
            console.log('score added');
            console.log(response)
        });
    });

}

















































$('#screen').hide();

setTimeout(function() { $('#loadingScreen').hide(); }, 3000); //3 seconds to admire
setTimeout(function() { $('#screen').show(); }, 3000);


$('.options').hide();
$('#btnNext').hide();
$('#gameover').hide();
$('#tryagain').hide();

// $('#totalScore').hide();

$('.stats').hide();
$('h2').hide();
$('.tempiIcon').hide();
$('#talkBubble').hide();
$('#finish').hide();
$('#name').hide();

// $('#gameDisplay').hide();

var correctAnswer = 0;
var attempts = 3;
var arrNoteq = [
    'images/C.png',
    'images/D.png',
    'images/E.png',
    'images/F.png',
    'images/G.png',
    'images/A.png',
    'images/B.png',
    'images/C2.png',
    'images/D2.png',
    'images/E2.png',
    'images/F2.png'
    ];
//disable button on attempt click?

//random variable to detect
var random = Math.floor(Math.random() * arrNoteq.length);
    
$('#btnStart').click(function(){
    clickSound();

    jQuery(function ($) {
        var oneMinute = 1 //60
            display = $('#time span');
        startTimer(oneMinute, display);
    });

    for(var i = 0; i < arrNoteq.length; i++){
        // var random = Math.floor(Math.random() * arrNoteq.length);   brought up 
            document.getElementById('display').src = arrNoteq[random];
    };
    console.log(random, arrNoteq[random]);
    // console.log(document.getElementById('display').src = arrNoteq[i]);
    $('#btnStart').hide();
    $('.options').show();
    $('.stats').show();
    $('h2').show();
    $('#finalScore').hide(); //however hide final

    $('#btnStart span').text('Next')
});

  $('#answerC').click(function(){
    clickSound();
    if (random === 0) {
        correct();
        random = Math.floor(Math.random() * arrNoteq.length);
      }
    else{
        incorrect();
    }
    // statDisplay(); //displaying the score for every attempt
});
$('#answerD').click(function(){
    clickSound();
    if (random === 1) {
        correct();
        random = Math.floor(Math.random() * arrNoteq.length);
      }
    else{
        incorrect();
    }
    // statDisplay();
});

$('#answerE').click(function(){
    clickSound();
    if (random === 2) {
        correct();
        random = Math.floor(Math.random() * arrNoteq.length);
      }
    else{
        incorrect();
    }
    // statDisplay();
});

$('#answerF').click(function(){
    clickSound();
    if (random === 3) {
        correct();
        random = Math.floor(Math.random() * arrNoteq.length);
      }
    else{
        incorrect();
    }
    // statDisplay();
});

$('#answerG').click(function(){
    clickSound();
    
    if (random === 4) {
        correct();
        random = Math.floor(Math.random() * arrNoteq.length);
      }
    else{
        incorrect();
    }
    // statDisplay();
});

$('#answerA').click(function(){
    clickSound();
    if (random === 5) {
        correct();
        random = Math.floor(Math.random() * arrNoteq.length);
      }
    else{
        incorrect();
    }
    // statDisplay();
});

$('#answerB').click(function(){
    clickSound();
    if (random === 6) {
        correct();
        random = Math.floor(Math.random() * arrNoteq.length);
      }
    else{
        incorrect();
    }
    // statDisplay();
});
$('#answerC2').click(function(){
    clickSound();
    statDisplay();
    if (random === 7) {
        correct();
        random = Math.floor(Math.random() * arrNoteq.length);
      }
    else{
        incorrect();
    }
    // statDisplay();
});

$('#answerD2').click(function(){
    clickSound();
    if (random === 8) {
        correct();
        random = Math.floor(Math.random() * arrNoteq.length);
      }
    else{
        incorrect();
    }
    // statDisplay();
});

$('#answerE2').click(function(){
    clickSound();
    
    if (random === 9) {
        correct();
        random = Math.floor(Math.random() * arrNoteq.length);
      }
    else{
        incorrect();
    }
    // statDisplay();
});

$('#answerF2').click(function(){
    clickSound();
    if (random === 10) {
        correct();
        random = Math.floor(Math.random() * arrNoteq.length);
      }
    else{
        incorrect();
    }
    // statDisplay();
});


function correct(){
    $('#btnStart').show();
    $('#talkBubble span').text('That' + "'" + 's correct! Well done!');

    //tempi guide
    $('#talkBubble').show();
    $('#tempiCorrect').show();
    $('#name').show();
    setTimeout(function() { $('#talkBubble').hide(); }, 1500);
    setTimeout(function() { $('#tempiCorrect').hide(); }, 1500);
    setTimeout(function() { $('#name').hide(); }, 1500);

    correctAnswer = correctAnswer + 1
    console.log('correct' + ' ' + correctAnswer);
    statDisplay();

    //ending
    // if(correctAnswer === 10){

    //     // $('#gameDisplay').hide();
    //     // $('#finish').show();

    // }
}


function incorrect(){
    attempts = attempts - 1;
    console.log(attempts);
    $('#talkBubble span').text('Sorry that' + "'" + 's incorrect.. try again!');

    //tempi guide
    $('#talkBubble').show();
    $('#tempiIncorrect').show();
    $('#name').show();
    setTimeout(function() { $('#talkBubble').hide(); }, 1500);
    setTimeout(function() { $('#tempiIncorrect').hide(); }, 1500);
    setTimeout(function() { $('#name').hide(); }, 1500);

    statDisplay();


    //ending
    if(attempts === 1){
        $('#statAttempts').css("color", "red"); //uh oh only 1 left
    }
    if(attempts === 0){
        console.log('FAIL');
        gameover();
    }
}

function statDisplay(){
    $("#statCorrect span").text(correctAnswer);
    $("#statAttempts span").text(attempts);

}
function clickSound(){
    sound.load();
    sound.play();
}

function gameover(){
    $('#gameover').show();
    $('#tryagain').show();
    $('#gameDisplay').hide();

    $("#finalScore span").text(correctAnswer);
    $('#finalScore').show();
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer == 0) {
            //final finish screen (track score)
            $('#gameDisplay').hide();
            $('#finish').show();
            $("#totalScore").show();
            $("#totalScore span").text(correctAnswer);

            getScore();
        }
        // if (--timer < 10) {
        //     $('#time').css("color", "red"); //uh oh only 1 left
        // }
    }, 1000);
}




