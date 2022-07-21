//array 
var arrNotesSorted = [ 
{name:'Note A',value:'A'}, 
{name:'Note B',value:'B'}, 
{name:'Note C',value:'C'}, 
{name:'Note D',value:'D'}, 
{name:'Note E',value:'E'}, 
{name:'Note F',value:'F'},
{name:'Note G',value:'G'}]; // G not working

//global
var found = false;
let index;


//intrinsic naming
function binarySearch(arrayToSearch, searchTerm){
//Function called at the bottom
    console.log('I just did a binary search on' + ' "' + $('#searchBox').val() + '"');
    //set variables
    var low = 0;
    found = false;
    var high = arrayToSearch.length-1;

//loop
    while(high >= low && found == false){
        //finding the middle (int used to make sure its rounded down)
        var middle = parseInt((low+high)/2);

        //smaller than half
        if(searchTerm < arrayToSearch[middle].name){ //searchTerm.toLowerCase()
        // if ({whatever search term was defined as} < {array/parameter[calling the number in array]})
            //console.log('smaller that half');
            //getting rid of the checked middle
            high = middle-1;
        }
        //half
        else if(searchTerm == arrayToSearch[middle].name){
            index = middle;
            found = true;
        }
        //larger than half
        else{
            //console.log('larger than half');
            low = middle+1;
        }

    }

    if (found == true){
        console.log('found it')
        
    }
    else{
        console.log('not found')
        $('#insertimage').hide();

        $('#notfoundMessage').show();
    }
}



$('#searchButton').click(function(){
    $('.image').hide();

    binarySearch(arrNotesSorted, $('#searchBox').val()); 
    let note = $('#searchBox').val();
    if (found == true){ //found is global
        console.log(`${note} found`); // = note + "found"
        //let path = 'A';
        console.log(`${arrNotesSorted[index].value} found`);
        $('#searchBox').val('');
        //let imgdiv = document.getElementById("insertimage");
        //imgdiv.innerhtml =`<img src = 'images/${arrNotesSorted[index].value}.png'>`;
        $('body').append(`<div id='insertimage' ><img class="image" src = 'images/${arrNotesSorted[index].value}.png'></div>`);

    }
    else{
        console.log('button triggered not found')
        //$('#insertimage').hide();
        
    }
});























































$('.birdGuide').hide();
$('.noteButton').hide();
$('.note').hide();
$('#bass').hide();
$('#TS').hide();
$('.fullScale').hide();
$('#birdHappy').show();
$('#btnSkip').hide();

$('#btnReady').hide();
$('#btnNotready').hide();


var sound = document.getElementById("sound");

let click = 0;
//example

// var spanWidth = $('#birdTalk span').width();
// $('#birdTalk').animate( { width: spanWidth }, 1500 );

$('#next').click(function(){
    
    clickSound();

    click = click + 1;
    console.log(click);
    
    // hard coded for now?

    switch(click){
        case 1:
            $('#birdTalk span').text('Let' + "'" +'s go over the basics shall we?');
            $('#birdHappy').show();
            //set width to 0 once again
            $('#btnReady').hide();
            $('#btnNotready').hide();
            $('#btnSkip').show();
            // $('#btnSkip').hide();
        
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
            // $('#disclaimer').show();

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
            $('.noteButton').show();
        break;

        case 11:
            $('#birdTalk span').text('It is how we remember the notes when sight reading in music.');

        break;

        case 12:
            $('#birdTalk span').text('There are many more complex symbols and notations that are used in Music but we can go over those later.');
            $('#birdComplex').show();
            doBounce($('#birdComplex'), 1, '30px', 300);

            $('#birdExplain1').hide();
        
        break;

        case 13:
            $('#birdTalk span').text('It looks like we' + "'" + 're done with the basics! Ready to test your knowledge?' );
            $('#birdHappy').show();
            $('#birdComplex').hide();
            $('#next').hide();

            $('#btnReady').show();
            $('#btnNotready').show();


            $('.line').show();
            $('#treble').show();
            $('#TS').show();
            $('.staveLines').show();
            $('#acronymScale').hide();


            doBounce($('#birdHappy'), 1, '30px', 300);
    }
}); 

$('#btnSkip').click(function(){
    clickSound();

    $('#birdShock').show();
    $('#birdHappy').hide();
    $('#birdExplain1').hide();
    $('#birdExplain2').hide();
    $('#birdComplex').hide();
    $('.noteButton').hide();



    doBounce($('#birdShock'), 1, '30px', 300);
    $('#birdTalk span').text('Wow! You already know this stuff? Would you like to test your knowledge?');

    $('#btnReady').show();
    $('#btnNotready').show();
    $('#next').hide();
    $('#btnSkip').hide();
});


$('#btnNotready').click(function(){
    clickSound();

    $('#birdTalk span').text('Choose what you would like to revise!');
    $('#birdShock').hide(); //skipped through guide
    $('#birdHappy').hide(); //gone through guide

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! INPUT FOR SEARCH

    $('#birdExplain2').show();
    // $('#btnReady').hide();
    $('#btnNotready').hide();

    $('.noteButton').show();
});









$('#C').click(function(){
    staveDisplay();
    $('#cNote').show();
    $('#birdTalk span').text('This is note C');

});

$('#D').click(function(){
    staveDisplay();
    $('#dNote').show();
    $('#birdTalk span').text('This is note D');

    
});

$('#E').click(function(){
    staveDisplay();
    $('#eNote').show();
    $('#birdTalk span').text('This is note E');
});

$('#F').click(function(){
    staveDisplay();
    $('#fNote').show();
    $('#birdTalk span').text('This is note F');
});

$('#G').click(function(){
    staveDisplay();
    $('#gNote').show();
    $('#birdTalk span').text('This is note G');
});

$('#A').click(function(){
    staveDisplay();
    $('#aNote').show();
    $('#birdTalk span').text('This is note A');
});

$('#B').click(function(){
    staveDisplay();
    $('#bNote').show();
    $('#birdTalk span').text('This is note B');
});

$('#C2').click(function(){
    staveDisplay();
    $('#c2Note').show();
    $('#birdTalk span').text('This is note C');
});

$('#D2').click(function(){
    staveDisplay();
    $('#d2Note').show();
    $('#birdTalk span').text('This is note D');
});

$('#E2').click(function(){
    staveDisplay();
    $('#e2Note').show();
    $('#birdTalk span').text('This is note E');
});

$('#F2').click(function(){
    staveDisplay();
    $('#f2Note').show();
    $('#birdTalk span').text('This is note F');
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


//click sound function
function clickSound(){
    sound.load();
    sound.play();
}


function staveDisplay(){
    sound.load();
    sound.play();

    $('.fullScale').hide();
    $('#bass').hide();
    $('.note').hide();


    $('#treble').show();
    $('.line').show();
    $('.staveLines').show();
    $('#TS').show();
    

}