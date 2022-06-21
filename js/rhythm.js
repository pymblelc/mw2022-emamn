var stopped = false;

const button = document.querySelector('#btnStart')
button.disabled = false;

$('#btnStart').click(function(){
  console.log('SONG START');
  //let intervalId = setInterval(moveNotes1);
  // const myInterval = setInterval(moveNotes1, 10);
  moveNotes1();
  // getPos(myInterval);
  //clearInterval(intervalId);
  button.disabled = true
  //moveEnemy1();
  //start function
  //$("#note1").animate({top: '860px'}, 7000); 
});


class notes{
  constructor(name,colour,top, left){
    //attribute
      this.name = name;
      this._colour = colour;
      this.top = top;
      this.left = left;
      this.id = '#' + this.name
  }
  create(){ //--------------------------------------------------------------------------------
      this.html = '<div id="' + this.name + '" class="notes">' + this.name + ' </div>';
      $('body').append(this.html);
      var className = '#' + this.name
      $(className).animate({
        top: this.top,
        left: this.left
      }, 1000, function() {
      });
        console.log('note created');
  }

  create(noteType){
    if(noteType == undefined){
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
  return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
}
        
function comparePositions(p1, p2) {
  var x1 = p1[0] < p2[0] ? p1 : p2;
  var x2 = p1[0] < p2[0] ? p2 : p1;
  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}
 
function checkMultipleCollisions(){
  for(var i = 0; i < arrTargets.length; i++){
    checkCollisions(arrTargets[i],'#n1');
  }
}
 
function checkCollisions(arrTargets, theCharacter){

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
    switch (itemName){
      case 'perfect':
          $('#perfect').css("background-color", "red");
          $('#n1').hide();
          console.log('PERFECT')
          //clearInterval(myInterval);

          break;
      case 'pass':
          $('#n1').hide();
          console.log('passed');
          
    }
  }
  }

//instances
var bad = new notes(id="n1");
bad.create();

//create a var that constructs a different variable for the position



// //animation function 
//enemy 1
var noteHit = false;
function moveNotes1(){ //clear interval moveNotes1
  $('#n1').animate({"top": "+=1", }, 0.1, "linear");// checkPass);
  console.log($("#n1")[0].style.top);

  if (parseFloat($("#n1")[0].style.top.slice(0, -2)) > 800) {
    $('#n1').hide();
    return;
  }

  if (noteHit) {
    return;
  }

  requestAnimationFrame(moveNotes1);
}

document.addEventListener("keydown", function(e) {
  if (e.key == " ") {
    noteHit = true;
  }
});

// um ***********************
function checkPass(){
  while(stopped === false){
    if(("y: "+ rect.y) > 500){
      $('#n1').hide();
      stopped = true;
    }
  }
}


$('body').keydown(function(event){
  //space
  if(event.which == 32){ 
      checkMultipleCollisions();
  }
});



//trying to get the coordinate of this y
/*
- determine y values,
constant running function with an if statement declaring if the y value is greater than screen then stop function
or while function **

when player hits the keyboard stop and assess the y value, if it is within y values 100 and 150 (height of allowance space) console.log perfect..
etc for other values
---------------------------------------------------------------------------------------------------------------------------------------------
*/

function getPos(myInterval){
  let elem = document.querySelector('#n1');
  let rect = elem.getBoundingClientRect();
  console.log("y: "+ rect.y);
  
  if (rect.y == window.innerHeight){
    console.log('stop moving')
    console.log(window.innerHeight);
    clearInterval(myInterval);
    $('#n1').hide();

    
  }

  
}

/*
While loop:
while enemy is less than 100 y (eg) and greater == false..
  keep checking the position (function);
  if the enemy position is greater than 100 y
    greater == true;
  }
}
*/