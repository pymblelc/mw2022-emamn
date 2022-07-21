//adding function

$('#notFound').hide();
$('#found').hide();
$('#wait').hide();

$("#displayUser").hide();

var apikey = '61a3fa8734abfc7f972efc04';
var urlAccounts = 'https://enirui-a66e.restdb.io/rest/accounts';
createAccount = false;

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
        // console.log(response);
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
            //login -------
            console.log("this account already exists");

            $('#found').show();
            $('#notFound').hide();

            //css display welcome (store input of username)
        }
        if(found === false){
            console.log("this account is free!");

            $('#found').hide();
            $('#wait').show();

            signup();

            createAccount = true;
        }
    });  
}








//add thing
function signup(){
    var tempItem = {
        Username: $('#user').val(),
        Password: $('#pass').val(),
        Email:$('#email').val()}
    addAccount(tempItem, urlAccounts, apikey, );
}

$('#signup').click(function(){
    checkAccounts(urlAccounts, apikey, $('#user').val(), $('#pass').val(), $('#email').val());
});
    

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
            console.log('Item added');
            $('#notFound').show();

            $('#wait').hide();

            //clear the input
            $('#user').val('');
            $('#pass').val('');
            $('#email').val('');
            // console.log(//parameter response
            //     response);                              protect the accounts :(
        });
    });

}

