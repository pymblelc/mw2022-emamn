var i = 0;

// $('#allnotes').hide();
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

//console.log(i);

/*
$('#btnA').click(function(){
  console.log('Note A');
  $('#noteName').text(arrNotes[0].noteName);
  
});
getNotes(url, apikey);
*/

var score = 0;
var noOfBirds = 8;
var arrBirds = [
{name:'c',value:'0'},

{name:'d',value:'1'}, 

{name:'e',value:'2'}, 
{name:'f',value:'3'},

{name:'g',value:'4'}, 

{name:'a',value:'5'}, 
{name:'b',value:'6'}, 
{name:'c2',value:'7'}

];

// assign a to c if i wanna be lazy

function bubbleSort(arrayToSort){
    var swapped = true;
    var pass = 0;

    while(swapped == true){
        swapped = false;
        let comparison = 0;
        let length = arrayToSort.length;
        
        while(comparison<length - pass){
          console.log()
            if(arrayToSort[comparison] > arrayToSort[comparison+1]){
                
                var store = arrayToSort[comparison+1];
                arrayToSort[comparison+1] = arrayToSort[comparison];
                arrayToSort[comparison] = store;
                swapped = true;
            }
            comparison++;
        }
        pass++;

}
console.log(arrayToSort);
}
bubbleSort(arrBirds);

// function insertionSort(arrayToSort){
//   console.log('I just did a insertion sort');
//   console.log(arrayToSort);
//   //items is the length of array
//   let items = arrayToSort.length;
//   //current items sorts from 1 because first item is already sorted
//   let currentItem = 1;


//   //1 while loop to see if the current item is less than the total length of array
//   while(currentItem < items){

//       //which point in the array is the current item to be sorted up to 
//       let currentDataItem = arrayToSort[currentItem].value;
//       //comparison variable
//       let comparison = 0;
//       //finish variable
//       let finish = false;
//       //2 while loop for comparing if the comparison is less that what the current item is on (0 based counting)


//       while(comparison < currentItem && finish == false){
//           //if the current data item (which point in the array is the current item to be sorted up to ) is less that the array comparison
//           if(currentDataItem < arrayToSort[comparison]){
//               let shuffleitem = currentItem;

//               while(shuffleitem > comparison){
//                   arrayToSort[shuffleitem] = arrayToSort[shuffleitem - 1];
//                   shuffleitem--;
//               }
              
//               arrayToSort[comparison] = currentDataItem;
//               finish = true;
             
//           }
//           comparison++;
          
//       }
//       currentItem++;
    
//   }

// }
// //calling 
// insertionSort(arrBirds);







function createBirds(arrBirds) {
  //loop to the noToCreate
  for (var i = 0; i < arrBirds.length; i++) {
    if (arrBirds[i].name == 'c') {
      $('body').append('<div id="birds' + i + '" class="birds c"></div>');
    }
    if (arrBirds[i].name == 'd') {
      $('body').append('<div id="birds' + i + '" class="birds d"></div>');
    }
    if (arrBirds[i].name == 'e') {
      $('body').append('<div id="birds' + i + '" class="birds e"></div>');
    }
    if (arrBirds[i].name == 'f') {
      $('body').append('<div id="birds' + i + '" class="birds f"></div>');
    }
    if (arrBirds[i].name == 'g') {
      $('body').append('<div id="birds' + i + '" class="birds g"></div>');
    }
    if (arrBirds[i].name == 'a') {
      $('body').append('<div id="birds' + i + '" class="birds a"></div>');
    }
    if (arrBirds[i].name == 'b') {
      $('body').append('<div id="birds' + i + '" class="birds b"></div>');
    }
    if (arrBirds[i].name == 'c2') {
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

  //modulus
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
