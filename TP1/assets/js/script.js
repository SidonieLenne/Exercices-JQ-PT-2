$(document).ready(function(){
    var countClicks = 0;
    $('#button').click(function(){
        if(($('#number').val() < 0) || ($('#number').val() > 100)){
            alert('On avait dit entre 0 et 100!');
            countClicks++;
        } else if ($('#number').val() > 38){
            alert('C\'est moins...');
            countClicks++;
        } else if ($('#number').val() < 38) {
            alert('C\'est plus...');
            countClicks++;
        }
        else if ($('#number').val() == 38){
            countClicks++;
            alert('Après '+ countClicks +' essais,\nTu as trouvé!!');
        }
        else{
            alert('Erreur');
        }
    }); 
});