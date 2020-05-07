$(document).ready(function(){
    //Déclaration de ma variable countClicks qui est égale à 0
    var countClicks = 0;
    //Déclaration de ma variable answer qui est un nombre random entre 1 et 100
    var answer = Math.floor((Math.random() * 100) + 1);
    /*Fonction qui s'éxécute au clic sur le bouton:
    SI la valeur de l'input est inférieure à 0 OU SI elle est supérieure à 100: afficher 'On avait dit entre 0 et 100!' et ajouter 1 à la variable countClicks
    SINON SI la valeur de l'input est supérieure à la réponse: afficher 'C'est moins' et ajouter 1 à la variable countClicks
    SINON SI la valeur de l'input est inférieure à la réponse: afficher 'C'est plus' et ajouter 1 à la variable countClicks 
    SINON SI la valeur de l'input est égale à la réponse: ajouter 1 à la variable countClicks et afficher 'Bravo' + la valeur de countClicks et un background-image et une bordure rose à container
    SINON afficher une boîte de dialogue 'erreur'*/
    $('#button').click(function(){
        if(($('#number').val() < 0) || ($('#number').val() > 100)){
            $('#moreLess').text('On avait dit entre 0 et 100!');
            countClicks++;
        } else if ($('#number').val() > answer){
            $('#moreLess').text('C\'est moins...');
            countClicks++;
        } else if ($('#number').val() < answer) {
            $('#moreLess').text('C\'est plus...');
            countClicks++;
        }
        else if ($('#number').val() == answer){
            countClicks++;
            $('#moreLess').text('Bravo!\nAprès '+ countClicks +' essais,\nTu as trouvé!!');
            $('#container').css('background-image', 'url(assets/images/youpi.gif)');
            $('#container').css('border', '2px solid #FD8FD8');
        }
        else{
            alert('Erreur');
        }
    }); 
});