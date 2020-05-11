$(document).ready(function(){
    //Fonction déclenchée au clic sur le bouton
    $('#button').click(function(){
        //SI la note est inférieure à 0 OU supérieure à 20, c'est faux, SINON, ça récupète la valeur de l'input
        //NOTE 1
        if ((parseInt($('#number1').val(), 10) < 0) || (parseInt($('#number1').val(), 10) > 20)){
            alert('La note 1 est fausse, triple buse');
        }
        else{
            var number1 = $('#number2').val();
        }
        //NOTE 2
        if ((parseInt($('#number2').val(), 10) < 0) || (parseInt($('#number2').val(), 10) > 20)){
            alert('La note 2 est fausse, triple buse');
        }
        else{
            var number2 = $('#number2').val();
        }
        //NOTE 3
        if ((parseInt($('#number3').val(), 10) < 0) || (parseInt($('#number3').val(), 10) > 20)){
            alert('La note 3 est fausse, triple buse');
        }
        else{
            var number3 = $('#number3').val();
        }
        //NOTE 4
        if ((parseInt($('#number4').val(), 10) < 0) || (parseInt($('#number4').val(), 10) > 20)){
            alert('La note 4 est fausse, triple buse');
        }
        else{
            var number4 = $('#number4').val();
        }
        //NOTE 5
        if ((parseInt($('#number5').val(), 10) < 0) || (parseInt($('#number5').val(), 10) > 20)){
            alert('La note 5 est fausse, triple buse');
        }
        else{
            var number5 = $('#number5').val();
        }
        //la moyenne sera tous les nombres additionnés puis divisés par 5
        result = (parseInt(number1, 10) + parseInt(number2, 10) + parseInt(number3, 10) + parseInt(number4, 10) + parseInt(number5, 10))/5;
        /*SI la moyenne est supérieure ou égale à 0 ET inférieure à 10, c'est en dessous de la moyenne
        SINON SI la moyenne est supérieure où égale à 10 ET inférieure à 13, c'est moyen
        SINON SI la moyenne est supérieure où égale à 13 ET inférieure à 16, c'est bien
        SINON SI la moyenne est supérieure où égale à 16 ET inférieure à 20, c'est très bien
        SINON SI la moyenne est égale à 20, c'est excellent
        SINON, RECOMMENCE  */
        if ((result >= 0) && (result < 10)){
            alert('Ta moyenne est de ' + result + ', c\'est en dessous de la moyenne.');
        } 
        else if ((result >= 10) && (result < 13)){
            alert('Ta moyenne est de ' + result + ', c\'est moyen.');
        } 
        else if ((result >= 13) && (result < 16)){
            alert('Ta moyenne est de ' + result + ', c\'est bien.');
        } 
        else if ((result >= 16) && (result < 20)){
            alert('Ta moyenne est de ' + result + ', c\'est très bien.');
        } 
        else if (result == 20){
            alert('Ta moyenne est de ' + result + ', c\'est excellent.');
        }
        else{
            alert('Recommence')
        }
    });
});