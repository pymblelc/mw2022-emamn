
$('#screen').hide();

setTimeout(function() { $('#loadingScreen').hide(); }, 1500); 
setTimeout(function() { $('#screen').show(); }, 1500);



$('#compose').click(function(){
    console.log('COMPOSING TIME');
});