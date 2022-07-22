var apikey = '61a3fa8734abfc7f972efc04';
var urlScores = 'https://enirui-a66e.restdb.io/rest/scores';
var arrScores = [];

function submitScore() {
  var Item = {
    //add initials input for leaderboard 
    Name: $('#nameInput').val(),
    score: score
  }
  addScore(Item, urlScores, apikey,);
}

function addScore(item, url, apikey) {
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
    console.log(response);
  });
}

function getScore() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": urlScores,
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": apikey,
      "cache-control": "no-cache"
    }
  }

  $.ajax(settings).done(function (response) {
    function SelectionSort(arrayToSort) {

      var pass = 0;

      while (pass < arrayToSort.length) {
        let count = pass + 1;
        let min = pass;

        while (count < arrayToSort.length) {
          if (arrayToSort[count].score > arrayToSort[min].score) {
            min = count;
          }
          count++;
        }

        var store = arrayToSort[min];
        arrayToSort[min] = arrayToSort[pass];
        arrayToSort[pass] = store;
        pass++;

      }
    }
    SelectionSort(response);

    console.log(response); 

    // for(){

    // }

//response[i].score
    $("#leaderBoard span").text(response);
    
    //display the sorted array onto leaderboard
    //display only top 10 scores
  });
}

var sound = document.getElementById("sound");

function playSound() {
    sound.play();
}

$('#time').hide();
$('#combo').hide();
$('#score').hide();
$('#reset').hide();
$('#leaderBoard').hide();

$("#finalScore").hide();

$('.messages').hide();

$('.tempi').hide();

var stopped = false;
let notePerfect = false;

var perfect;

//score and tracking progress
var combo = 0;
var score = 0;


$('#loadingScreen').hide();

const button = document.querySelector('#btnStart')
button.disabled = false;

$('#btnStart').click(function () { //-------------------------------------------------------------------------------------
  // startTimer(oneMinute, display);
  playSound();
  setTimeout(function () {moveNotes1();}, 800);

  var oneMinute = 2 //9
  display = $('#time span');
  startTimer(oneMinute, display);

  $('#input').hide();
  $('#time').show();
  $('#tempiNeutral').show();
  $('#score').show();
  $('#btnStart').hide();
  console.log('SONG START'); // ---------------------------------------------- play audio and pray it doesn't lag

  // var oneMinute = 10 //9
  // display = $('#time span');
  // startTimer(oneMinute, display);

  // moveNotes1();
  button.disabled = true


});

function moveNotes1() { //clear interval moveNotes1

  //retail 8 and 0
  //
  $('#n1').animate({ "top": "+=8", }, 0, "linear");// checkPass);
  //console.log($("#n1")[0].style.top); ----------------------------------- coords

  if (parseFloat($("#n1")[0].style.top.slice(0, -2)) > 500) {
    $("#n1")[0].style.top = 0
    // console.log('miss');
    $('#combo').hide();

    $('#tempiHit').hide();
    $('#tempiNeutral').show();

    $('#miss').show();
    setTimeout(function () { $('#miss').hide(); }, 800);

    //if there is a combo to begin with
    if (combo > 0) {
      $('#reset').show();
      $('#combo').css("color", "black");
      setTimeout(function () { $('#reset').hide(); }, 800);
    }
    combo = 0;
    statDisplay();
  }
  requestAnimationFrame(moveNotes1);
}

class notes {
  constructor(name, colour, top, left) {
    //attribute
    this.name = name;
    this._colour = colour;
    this.top = top;
    this.left = left;
    this.id = '#' + this.name
  }
  create() { //--------------------------------------------------------------------------------
    this.html = '<div id="' + this.name + '" class="notes">' + this.name + ' </div>';
    $('body').append(this.html);
    var className = '#' + this.name
    $(className).animate({
      top: this.top,
      left: this.left
    }, 1000, function () {
    });
    console.log('note created');
  }

  create(noteType) {
    if (noteType == undefined) {
      noteType = '';
    }
    var html = '<div id="' + this.name + '" class="notes ' + noteType + '">' + this.name + ' </div>';
    $('body').append(html);
    var className = '#' + this.name
  }
}


//Multiple collisions 

var arrTargets = ["#pass", "#perfect"];
var itemHit = "";

function getPositions(box) {
  var $box = $(box);
  var pos = $box.position();
  var width = $box.width();
  var height = $box.height();
  return [[pos.left, pos.left + width], [pos.top, pos.top + height]];
}

function comparePositions(p1, p2) {
  var x1 = p1[0] < p2[0] ? p1 : p2;
  var x2 = p1[0] < p2[0] ? p2 : p1;
  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}

function checkMultipleCollisions() {
  for (var i = 0; i < arrTargets.length; i++) {
    checkCollisions(arrTargets[i], '#n1');
  }
}

function checkCollisions(arrTargets, theCharacter) {

  var box = $(arrTargets)[0];
  var pos = getPositions(box);
  var chr = $(theCharacter);
  var pos2 = getPositions(chr);
  var horizontalMatch = comparePositions(pos[0], pos2[0]);
  var verticalMatch = comparePositions(pos[1], pos2[1]);
  var match = horizontalMatch && verticalMatch;
  if (match) {
    var itemName = $(box).attr('id');
    itemHit = "#" + itemName;
    switch (itemName) {
      case 'perfect':


        $('#perfect').css("background-color", "rgb(119, 255, 187)");
        setTimeout(function () { $('#perfect').css("background-color", "rgb(70, 85, 225)"); }, 40);

        $('#perfectmsg').show();
        setTimeout(function () { $('#perfectmsg').hide(); }, 800);

        $('#tempiHit').show();
        $('#tempiNeutral').hide();

        setTimeout(function () { $('#tempiNeutral').show(); }, 100);
        setTimeout(function () { $('#tempiHit').hide(); }, 100);

        // doBounce($('#tempiHit'), 1, '30px', 300);

        if (combo === 4) { //1 less - Middle streak
          $('#combo').css("color", "rgb(92, 86, 255)");
        }


        if (combo === 9) { //1 less - Superb streak
          $('#combo').css("color", "rgb(225, 11, 233)");
        }

        // console.log('PERFECT')

        $('#talkBubble span').text('PERFECT!');




        combo = combo + 1
        // console.log(combo);
        $('#combo').show();



        score = score + 10
        statDisplay();

        if (score === 100 /*can change*/) {
          console.log('song complete!')
        }

        $("#n1")[0].style.top = 0
      //so this doesn't interrupt the movement and allows the note to account 'perfect' but not 'miss'


      //WHEN MISS COMBO = 0 -----------

      //clearInterval(myInterval);

      //     break;
      // case 'pass':
      //     $('#n1').hide();
      //     console.log('passed');

    }
  }
}

//instances
var note = new notes(id = "n1");
note.create();


//create a var that constructs a different variable for the position



// //animation function 

if (!miss) {
  console.log('hit');
}

// if(notePerfect){
//   console.log('dont hide');

// } else if (noteHit) {
//   $('#n1').hide();
//   //console.log('miss');
//   return;
// //else if notehit then miss
// }

document.addEventListener("keydown", function (e) {
  if (e.key == " ") {
    noteHit = true;
  }
});

// um 
function checkPass() {
  while (stopped === false) {
    if (("y: " + rect.y) > 500) {
      $('#n1').hide();
      stopped = true;
    }
  }
}

$('body').keydown(function (event) {
  //space
  if (event.which == 32) {
    checkMultipleCollisions();
  }
});

//miss function
function miss() {
  //GET A SCORE OF 200 TO COMPLETE

  //RESET THE COMBO
  combo == 0;

  // statDisplay();


  console.log('COMBO RESET');

  $('#talkBubble span').text('MISS');
}

//all stat updates
function statDisplay() {
  $("#combo span").text(combo);
  $("#score span").text(score);
}



//animation function
function doBounce(element, times, distance, speed) {
  for (var i = 0; i < times; i++) {
    element.animate({ marginTop: '-=' + distance }, speed)
      .animate({ marginTop: '+=' + distance }, speed);
  }
}

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.text(minutes + ":" + seconds);

    if (--timer == -1) {
      $("#finalScore").show();
      $("#game").hide();
      $("#n1").hide();
      $("#finalScore span").text(score);

      $('#leaderBoard').show();

      submitScore();
      getScore(); //sort the stuff??
    }
  }, 1000);
}

