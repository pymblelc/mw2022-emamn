
var apikey = '61a3fa8734abfc7f972efc04';
var urlAccounts = 'https://enirui-a66e.restdb.io/rest/accounts';
var login = false;

$('#btnStart').hide();
$('#playButton').hide();

//AUDIO TEST

var sound = document.getElementById("sound");

$('#playButton').click(function () {
    playSound();
});

function playSound() {
    sound.play();
}
/*
function stop (){
    playPause();
    audio.pause();
    audio.currentTime = 0;
    playPauseBTN.innerHTML = "Play &#9658"
}


var x = document.getElementById('audio');

function setHalfVolume() { 
  x.volume = 0.2;
}
   
function setHalfVolume() { 
    x.volume = 0.5;
}

function setFullVolume() { 
  x.volume = 1.0;\
} 
*/

function checkAccounts(url,apikey, username, password, email){
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
        console.log(response);
        $('#user').val('');
        $('#pass').val('');
        $('#email').val('');
        var found = false;
        for(var i=0; i<response.length; i++){
            //console.log(response[i].Name); 
            if(username == response[i].Username && password == response[i].Password && email == response[i].Email)
            {
                found = true;
            }
        }
        if(found === true ){
            //login
            console.log("found it :)")
            login = true;
            checkLoggedin();
            //css display welcome (store input of username)
        }
        else(
            console.log("Account not found, check login details...")
        )
    });  
}

//clear input once checked and account exists *

$('#signup').click(function(){
    //checkAccounts(urlAccounts, apikey, $('#user').val(), $('#pass').val(), $('#email').val());
    console.log('signup');
    var tempItem = {
        Username: $('#user').val(),
        Password: $('#pass').val(),
        Email:$('#email').val()}
    addAccount(tempItem, urlAccounts, apikey,);

    });


function checkLoggedin(){
    if(login === true){
        console.log('user is logged in')
        //HIDE ALL LOGIN/SIGNUP 
        $('#accountInputs').hide();
        //only hides input boxes

        $('#btnStart').show();
        $('#playButton').show();
    }
    else(
        console.log('user is NOT logged in')
    )
};
    


function addAccount(item, url, apikey){
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
            console.log('Item add');
            //clear the input
            $('#user').val('');
            $('#pass').val('');
            $('#email').val('');
            console.log(//parameter response
                response);
        });
    });

    // var settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": url,
    //     "method": "POST",
    //     "headers": {
    //         "content-type": "application/json",
    //         "x-apikey": apikey,
    //         "cache-control": "no-cache"
    //     },
    //     "processData": false,
    //     "data": JSON.stringify(item)
    // }
    
    // $.ajax(settings).done(function (response) {
    //     console.log('Item successfully added');
    //     //clear the input
    //     $('#user').val('');
    //     $('#pass').val('');
    //     $('#email').val('');
    //     console.log(//parameter response
    //         response);
    // });

}



$('#login').click(function(){
    checkAccounts(urlAccounts, apikey, $('#user').val(), $('#pass').val(), $('#email').val());
});


$('#btnStart').click(function(){  
    checkLoggedin();
    if(login === true){
        console.log('redirected');
    }
});

