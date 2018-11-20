// JavaScript Document
//changer l'affichage d'un texte
document.getElementById('modificar').onclick = function(){
	if(document.getElementById('jour').innerHTML == 'Bonjour')
    {
        document.getElementById('sec1').className = 'col-sm-4';
        document.getElementById('sec2').className = 'col-sm-8';
        document.getElementById('body').style.backgroundColor = '#636365';
        document.getElementById('jour').innerHTML = 'Bonsoir';
        ChangerCouleursRect();
    }
	else
        {
	       document.getElementById('jour').innerHTML = 'Bonjour';
           document.getElementById('sec1').className = 'col-sm-3';
           document.getElementById('sec2').className = 'col-sm-9';
           document.getElementById('body').style.backgroundColor = '#fff';
           ChangerCouleursRect2();
        }
}

function ChangerCouleursRect()
{
	var coulours = ['colC','colC1','colC2','colC3','colC4','colC5','colC6'
                    ,'colC7','colC8','colC9','colC10','colC11','colC12','colC13'
                    ,'colC14','colC15'];
    const changer = function (item){
        document.getElementById(item).style.backgroundColor = '#36322a';
    }
    coulours.forEach(changer);
    
}
function ChangerCouleursRect2()
{
	var coulours = ['colC','colC1','colC2','colC3','colC4','colC5','colC6'
                    ,'colC7','colC8','colC9','colC10','colC11','colC12','colC13'
                    ,'colC14','colC15'];
    const changer = function (item){
        document.getElementById(item).style.backgroundColor = 'blue';
    }
    coulours.forEach(changer);
    
}
