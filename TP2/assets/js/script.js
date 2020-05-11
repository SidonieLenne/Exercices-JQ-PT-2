$(document).ready(function(){
    //Fonction déclenchée au clic sur le bouton
    $('#button').click(function(){
        //Déclaration de mes variables de nombre
        var number1 = $('#number1').val();
        var number2 = $('#number2').val();
        var number3 = $('#number3').val();
        var number4 = $('#number4').val();
        var number5 = $('#number5').val();
        //la moyenne sera tous les nombres additionnés puis divisés par 5
        somme = (parseInt(number1) + parseInt(number2) + parseInt(number3) + parseInt(number4) + parseInt(number5))/5;
        /*SI la moyenne est supérieure ou égale à 0 ET inférieure à 10, c'est en dessous de la moyenne
        SINON SI la moyenne est supérieure où égale à 10 ET inférieure à 13, c'est moyen
        SINON SI la moyenne est supérieure où égale à 13 ET inférieure à 16, c'est bien
        SINON SI la moyenne est supérieure où égale à 16 ET inférieure à 20, c'est très bien
        SINON SI la moyenne est égale à 20, c'est excellent
        SINON, erreur  */
        if ((somme >= 0) && (somme < 10)){
            alert('Votre moyenne est de ' + somme + ', c\'est en dessous de la moyenne.');
        } 
        else if ((somme >= 10) && (somme < 13)){
            alert('Votre moyenne est de ' + somme + ', c\'est moyen.');
        } 
        else if ((somme >= 13) && (somme < 16)){
            alert('Votre moyenne est de ' + somme + ', c\'est bien.');
        } 
        else if ((somme >= 16) && (somme < 20)){
            alert('Votre moyenne est de ' + somme + ', c\'est très bien.');
        } 
        else if (somme == 20){
            alert('Votre moyenne est de ' + somme + ', c\'est excellent.');
        }
        else{
            alert('Erreur')
        }
    });
});