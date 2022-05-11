const buttonConocenos = document.getElementsByClassName('btn-conocenos');
const sectionConocenos = document.getElementsByClassName('sect');


//primer boton
const buttonConocenosZero = buttonConocenos[0]
buttonConocenosZero.onclick = funZero;
function funZero(evento) { 
    sectionConocenos[0].classList.add('active');
    sectionConocenos[1].classList.remove('active');
    sectionConocenos[2].classList.remove('active');

    buttonConocenos[0].classList.add('active');
    buttonConocenos[1].classList.remove('active');
    buttonConocenos[2].classList.remove('active');
    
    


}

const buttonConocenosOne = buttonConocenos[1]
buttonConocenosOne.onclick = funTwo;
function funTwo(evento) { 
    sectionConocenos[0].classList.remove('active');
    sectionConocenos[1].classList.add('active');
    sectionConocenos[2].classList.remove('active'); 
    
    buttonConocenos[0].classList.remove('active');
    buttonConocenos[1].classList.add('active');
    buttonConocenos[2].classList.remove('active');
    
}
const buttonConocenosThree = buttonConocenos[2]
buttonConocenosThree.onclick = funThree;
function funThree(evento) { 
    sectionConocenos[0].classList.remove('active');
    sectionConocenos[1].classList.remove('active');
    sectionConocenos[2].classList.add('active');  
     
    buttonConocenos[0].classList.remove('active');
    buttonConocenos[1].classList.remove('active');
    buttonConocenos[2].classList.add('active');  
}

       
       