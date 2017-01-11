var place = ['12px', '77px', '142px'];
$(document).ready(function(){
    var min = 0;
    var max = place.length;
    var rand = min + Math.floor(Math.random() * (max - min));
    var temp =function(){$('#ball').css('left', place[rand])};
    temp();
    $('.button').on('click', function (){$(this).css('opacity', '0.2')});
/*
    $('.n'+0).on(
        'click', function (){
            if (place[rand]==place[0]) { alert ('you win!')} else {alert ('Nope! Try again.');window.location.reload()}
        }
    );
    $('.n'+1).on('click', function (){if (place[rand]==place[1]) { alert ('you win!')} else {alert ('Nope! Try again.'); window.location.reload()}});
    $('.n'+2).on('click', function (){if (place[rand]==place[2]) { alert ('you win!')} else {alert ('Nope! Try again.'); window.location.reload()}});
*/
    for (var i = 0; i < place.length; i++) {
        $('.n'+i).on(
            'click', (
                function(i){
                    return function(event) {
                        if (place[rand]==place[i]) { alert ('you win!')} else {alert ('Nope! Try again.');window.location.reload()}
                    };
                }
            )
            (i)
        )
    }
});