
$('#notFound').hide();
$('#displayUser').hide();

var apikey = '61a3fa8734abfc7f972efc04';
var urlAccounts = 'https://enirui-a66e.restdb.io/rest/accounts';
var login = false;
var user;

$('#btnStart').hide();
$('#playButton').hide();
// $('.menuButton').show();
//AUDIO TEST

var sound = document.getElementById("sound");

$('#playButton').click(function () {
    playSound();
});

function playSound() {
    sound.play();
}

function checkAccounts(url,apikey, username, password){
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
        // console.log(response);
        $('#user').val('');
        $('#pass').val('');
        $('#email').val('');
        var found = false;
        for(var i=0; i<response.length; i++){
            if(username == response[i].Username && password == response[i].Password)
            {
                console.log(response[i].Username);
                user = response[i]
                found = true;
            }
        }
        if(found === true ){
            //login
            console.log("found it :)")
            login = true;
            checkLoggedin();
            $('#notFound').hide();
        }
        if(found === false){
            console.log("Account not found, check login details...")
            $('#notFound').show();
        }
    });  
}

//clear input once checked and account exists *


function checkLoggedin(){
    if(login === true){
        console.log('user is logged in')
        //HIDE ALL LOGIN/SIGNUP 
        $('#accountInputs').hide();
        $('#displayUser').show();
        //only hides input boxes

        $('#btnStart').show();
        $('#playButton').show();

    }
    else(
        console.log('user is NOT logged in')
    )
};
    

$('#login').click(function(){
    $('#displayUser span').text($('#user').val());
    checkAccounts(urlAccounts, apikey, $('#user').val(), $('#pass').val());
});


$('#btnStart').click(function(){  
    checkLoggedin();
    if(login === true){
        console.log('redirected');
    }
});