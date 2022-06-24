var i = 0;
$('.crotchet1').hide();
$('.crotchet2').hide();
$('.crotchet3').hide();
$('.crotchet4').hide();
$('.crotchet5').hide();
$('.crotchet6').hide();
$('.crotchet7').hide();
$('.crotchet8').hide();

$('.crotchet9').hide();
$('.crotchet10').hide();
$('.crotchet11').hide();
$('.crotchet12').hide();
$('.crotchet13').hide();
$('.crotchet14').hide();
$('.crotchet15').hide();
$('.crotchet16').hide();

console.log(i);




/*
//DATABASE -----------------------------------------------
var apikey = '61a3fa8734abfc7f972efc04';
var url = 'https://enirui-a66e.restdb.io/rest/notes';

var arrNotes = [


];

//database

function getNotes(url,apikey){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": apikey,
          "cache-control": "no-cache"
        }
      }
      
      $.ajax(settings).done(function (response) {
        arrNotes = response;
        console.log(response);
      });
}


$('#btnA').click(function(){
  console.log('Note A');
  $('#noteName').text(arrNotes[0].noteName);
  
});
getNotes(url, apikey);
*/

var score = 0;
var noOfBirds = 8;
var arrBirds = ['c', 'd', 'e', 'f', 'g', 'a', 'b', 'c2'];

function createBirds(arrBirds) {
  //loop to the noToCreate
  for (var i = 0; i < arrBirds.length; i++) {
    if (arrBirds[i] == 'c') {
      $('body').append('<div id="birds' + i + '" class="birds c"></div>');
    }
    if (arrBirds[i] == 'd') {
      $('body').append('<div id="birds' + i + '" class="birds d"></div>');
    }
    if (arrBirds[i] == 'e') {
      $('body').append('<div id="birds' + i + '" class="birds e"></div>');
    }
    if (arrBirds[i] == 'f') {
      $('body').append('<div id="birds' + i + '" class="birds f"></div>');
    }
    if (arrBirds[i] == 'g') {
      $('body').append('<div id="birds' + i + '" class="birds g"></div>');
    }
    if (arrBirds[i] == 'a') {
      $('body').append('<div id="birds' + i + '" class="birds a"></div>');
    }
    if (arrBirds[i] == 'b') {
      $('body').append('<div id="birds' + i + '" class="birds b"></div>');
    }
    if (arrBirds[i] == 'c2') {
      $('body').append('<div id="birds' + i + '" class="birds c2"></div>');
    }
    var idSelector = '#birds' + i;
    /*var xPosition = Math.random() * 1000 + 'px'; //X AND Y POSITIONING OF THE RANDOM ITEMS THAT APPEAR
    var yPosition = Math.random() * 800 + 'px'; // PLEASE USE THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
    $(idSelector).css({left: xPosition, top: yPosition}); */
  }
}
createBirds(arrBirds);

var noteDisplay = [];


//the birbs
//var audio = document.getElementById('aNote'); what does this line even do 

$('#birds0').click(function () {
  cNote.load();
  cNote.play();
  $(this).effect('bounce', { times: 1 }, 300);

  noteDisplay.push("c");
  print();

});

$('#birds1').click(function () {
  dNote.load();
  dNote.play();
  $(this).effect('bounce', { times: 1 }, 300);

  noteDisplay.push("d");
  print();

});

$('#birds2').click(function () {
  eNote.load();
  eNote.play();
  $(this).effect('bounce', { times: 1 }, 300);

  noteDisplay.push("e");
  print();
});

$('#birds3').click(function () {
  fNote.load();
  fNote.play();
  $(this).effect('bounce', { times: 1 }, 300);

  noteDisplay.push("f");
  print();
});

$('#birds4').click(function () {
  gNote.load();
  gNote.play();
  $(this).effect('bounce', { times: 1 }, 300);

  noteDisplay.push("g");
  print();
});

$('#birds5').click(function () {
  aNote.load();
  aNote.play();
  $(this).effect('bounce', { times: 1 }, 300);

  noteDisplay.push("a");
  print();
});

$('#birds6').click(function () {
  bNote.load();
  bNote.play();
  $(this).effect('bounce', { times: 1 }, 300);

  noteDisplay.push("b");
  print();
});

$('#birds7').click(function () {
  c2Note.load();
  c2Note.play();
  $(this).effect('bounce', { times: 1 }, 300);

  noteDisplay.push("c2");
  print();
});

//console.log(response[i].Name);

//reset
$('#btnReset').click(function () {
  reset();
});

function reset() {
  //!!!!!!!!!!! array and position reset
  console.log('reset');
  $('.crotchet1').hide();
  $('.crotchet2').hide();
  $('.crotchet3').hide();
  $('.crotchet4').hide();
  $('.crotchet5').hide();
  $('.crotchet6').hide();
  $('.crotchet7').hide();
  $('.crotchet8').hide();
  $('.crotchet9').hide();
  $('.crotchet10').hide();
  $('.crotchet11').hide();
  $('.crotchet12').hide();
  $('.crotchet13').hide();
  $('.crotchet14').hide();
  $('.crotchet15').hide();
  $('.crotchet16').hide();

  //i = 0;
}

$('#btnPlay').click(function () {
  play();
});


function print() {
  //for(var i = 0; i < noteDisplay.length; i++){
  //  console.log(noteDisplay[i]);
  //if noteDisplay[0] == crotchetC then this.show
  //crotchet C


  //for (var i = 0 ; i < noteDisplay.length; i++) {
  //console.log(6 % 6);
  //console.log(noteDisplay[i]);
  //console.log(i);

  console.log('array ' + i);
  var position = i % 16;
  position = position + 1;
  if (position == 1) {
    reset();
  }
  console.log('position ' + position)
  $("#" + noteDisplay[i] + "Crotchet" + position).show();
  i++;
  // }
}
